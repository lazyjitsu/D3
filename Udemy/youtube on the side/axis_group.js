/* almost exactly like scaling.js but it includes groups and axis. Consider the excerpt below and notice we have two triangles created/defined
a lot of times u will want to group things together (i.e. bar charts with diff colors & group by color or multiple layers group by layers) I will tag the comments with 'added for groups'
<svg width="500" height="800">
    <rect fill="pink" width="4.166666666666667" height="20" y="0"></rect>
    <rect fill="pink" width="500" height="20" y="50"></rect>
</svg>
*/
function axisGroups()
{
//    var graphData    = [10,800],
    var graphData    = [10,1200], // this will be slammed by border but if u inspect, u will see it exceeds width value!!

        w            = 500;
        h            = 800;

// now to be able to continue to use the 1200 pixel width as defined above in graphData, we can use scaling
    var scaling = d3.scaleLinear()
        .domain([0,1200]) // the minimum and maxium of our data set, graphData !
        .range([0,w])  // what will display constricted by the canvas size IOW range will help things fit insside canvase size. hence 'w' is max width of canvas!
    var axis = d3.axisBottom()
            .ticks(5)
            .scale(scaling);

    var canvas = d3.select(".graphContainer")
        .append("svg")
        .attr("width",w)
        .attr("height", h)
        .append("g") // added for gorups
        .attr("transform","translate(100,35)"); //added for groups  100 horizontal pixes, 35 pixes vertically (down)

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
                // now to actually add the axis
                canvas.append("g")
                    .attr("transform","translate(0,200)")
                    .call(axis);

}
