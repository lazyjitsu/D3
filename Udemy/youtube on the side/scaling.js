function scaling()
{
//    var graphData    = [10,800],
    var graphData    = [10,1200], // this will be slammed by border but if u inspect, u will see it exceeds width value!!

        w            = 500;
        h            = 800;

// now to be able to continue to use the 1200 pixel width as defined above in graphData, we can use scaling
    var scaling = d3.scaleLinear()
        .domain([0,1200]) // the minimum and maxium of our data set, graphData !
        .range([0,w])  // what will display constricted by the canvas size IOW range will help things fit insside canvase size. hence 'w' is max width of canvas!

    var canvas = d3.select(".graphContainer")
        .append("svg")
        .attr("width",w)
        .attr("height", h);

    var graphBars = canvas.selectAll("rect")
            .data(graphData)
            .enter()
                .append("rect")
                .attr("fill","pink")
                .attr("width", function (d) {
                    // lets use the scaling version instead of return d;
                    return scaling(d);
                })
                .attr("height",20)
                .attr("y",function(d,i) {
                    return i * 50;
                });

}
