function svgSample()
{
    var canvas = d3.select("body")
            .append("svg")
            .attr("width",700)
            .attr("height",700);

    var circle = canvas.append("circle")
                .attr("cx",10)
                .attr("cy",10)
                .attr("r",50)
                .attr("fill","blue");

    var rectangle = canvas.append("rect")
                .attr("width",100)
                .attr("height",100); // make a square not a rectangle! its also covering the circle fix when u care
    var line = canvas.append("line")
                .attr("x1",0)
                .attr("x2",400)
                .attr("y1",200)
                .attr("y2",200)
                .attr("stroke","blue") // if u want to see it!
                .attr("stroke-width",3);
}
