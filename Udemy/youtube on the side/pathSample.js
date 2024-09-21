// a sample path

function paths()
{
    var canvas = d3.select(".paths").append("svg")
        .attr("width",500)
        .attr("height",500);

    var data = [
        {x:10, y:20},
        {x:100,y:100},
        {x:10, y:200}  //
    ];
    var stick = [
        {x:10,y:150},
        {x:100,y:150}
    ];

    var group = canvas.append('g')
        .attr("transform","translate(300,100)");
    var line = d3.line()
        .x(function(d) { return d.x; })
        .y(function(d) { return d.y; });
    var horizontalline = d3.line()
        .x(function(d) { return d.x; })
        .y(function(d) { return d.y; });

    group.selectAll("path")
        .data([data])
        .enter()
        .append("path")
        .attr("d", line)
        .attr("fill","green") // use "none" to have a straight arrow head!!
        .attr("stroke","red")
        .attr("stroke-width",5);
}
