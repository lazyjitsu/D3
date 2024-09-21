function show() {

    'use strict';

    var margin = {top: 20, bottom: 20, right: 120, left: 100},
        width = 1200 - margin.left - margin.right,
        height = 800 - margin.top - margin.bottom;

    var chart = d3.select(".chart")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + ","
            + margin.top + ")");

    var zoom = d3.zoom()
        .scaleExtent([0.1, 10])
        .on("zoom", zoomed);

    d3.select(".chart").call(zoom);

    d3.csv('./data/cats.csv', function(data) {

        var stratify = d3.stratify();
        var root = stratify(data);

        var tree = d3.tree()
            .size([height*3, width*2])
            .separation(function(a, b) { return (a.parent === b.parent ? 5 : 13)});

        tree(root);

        var link = chart.selectAll(".link")
            .data(root.descendants().slice(1))
            .enter().append("path")
            .attr("class", "link")
            .attr("d", diagonal);

        var node = chart.selectAll(".node")
            .data(root.descendants())
            .enter().append("g")
            .attr("class", function(d) { return "node" + (d.children ? " node--internal" : " node--leaf"); })
            .attr("transform", function(d) {
                return "translate(" + d.y + "," + d.x + ")"; });

        node.append("circle").attr("r", 2.5);

        node.append("text")
            .attr("dy", ".35em")
            .attr("x", function(d) { return d.children ? -4 :  4 })
            .style("text-anchor", function(d) { return d.children ? "end" : "start"; })
            .text(function(d) { return d.data.name; });

    });

    function zoomed() {
        chart.attr("transform", d3.event.transform);
    }

    function diagonal(d) {
        return "M" + d.y + "," + d.x
            + "C" + ((d.y + d.parent.y) / 2) + "," + d.x
            + " " + ((d.y + d.parent.y) / 2) + "," + d.parent.x
            + " " + d.parent.y + "," + d.parent.x;
    }
}
