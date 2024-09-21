function enterExamples()
{
    var data = [200, 100],
        w   =  800,
        h = 600;

    var canvas  = d3.select(".graphContainer")
            .append("svg")
            .attr("width",w)
            .attr("height",h);

// Inspect the element in red to see how it OVERWRITES the first element of the array!!
// instead of a width and height of 200 ( the first element in the array's value), u see the manual box & its size of 333 for height/width
    var manuallyAddedBox = canvas.append("rect")
            .attr("width",333)
            .attr("height",333)
            .attr("fill","red");

    var boxes = canvas.selectAll("rect")
            .data(data)
            .enter()
                .append("rect")
                .attr("width",function(d) { return d; } )
                .attr("height",function(d) { return d; } )
                .attr("fill","grey")
                .attr("stroke","black");
}
