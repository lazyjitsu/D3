function donutChart()
{
    d3.json("suide-squad-updatedData.json").then(function(data) {
        var radius  =   110;
        var color   =   d3.scaleOrdinal()
            .range(["red","orange","yellow","green","blue","indigo","violet"]);

        var canvas  =   d3.select(".dontChartContainer")
            .append("svg")
            .attr("width",1000)
            .attr("height", 1000);
        // add a group to canvas
        var group   =   canvas.append("g")
            .attr("transform","translate(500,350)");

        var arc     =   d3.arc()
                        .innerRadius(175)
                        .outerRadius(radius);
        var pie     =   d3.pie()
            .value(function (d) {
                return d.rank;
            });
        var theArc  =   group.selectAll(".arc") // css arc/class definition
            .data(pie(data))
            .enter()
                .append("g")
                .attr("class","arc");

        theArc.append("path")
            .attr("d", arc)
            .attr("fill", function(d) {
                return color(d.data.rank);
            });
        theArc.append("text")
            .attr("transform", function (d) {
                return "translate(" + arc.centroid(d) + ")";
            })
            .attr("dy", "0.10em")
            .text(function (d) {
                return d.data.actor;
            })

    })
}
