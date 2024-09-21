function virtualizeOranges()
{
    var orangeData = [10,30,50,100];

    var canvas = d3.select(".orangeContainer")
            .append("svg")
            .attr("height",1024)  // ole skewl monitor ;-)
            .attr("width",768);

    // the variable, oranges, will be all circles within this svg canvas
    var oranges = canvas.selectAll("circle")
                .data(orangeData)
                .enter() // use this data to append circles
                    .append("circle")
                    .attr("fill","orange")
                    .attr("cx", function (d,i) {
                        return d + ( i * 100);
                    })
                    .attr("cy", function (d) {
                        return d; // put them all at same level
                    })
                    .attr("r", function (d) {
                        return d;
                    });
                    
}
