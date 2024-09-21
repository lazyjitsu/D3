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
    var group = canvas.append('g')
        .attr("transform","translate(100,100)");
    group.selectAll("path")
        .data(data)
        .enter()
        .append("path")
        .attr("d", line)
        .atttr("fille","none")
        .attr("stroke","red")
        .attr("stroke-width",5);

}
