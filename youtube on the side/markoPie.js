// First thing is to setup margin padding height & width and radius
var margin = { top: 20, right: 20, bottom: 20, left: 20 },
    width = 500 - margin.right - margin.left,
    height = 500 - margin.top - margin.bottom,
    radius = width/2;

// arc generator
var arc = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

var labelArc = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(radius - 50);

var pie = d3.pie()
            .sort(null)
            .value(function(d) { return d.count; });

// define SVG
var canvas = d3.select("body").append("svg")
                .attr("width", width)
                .attr("height",height)
                .append("g")
                .attr("transform", "translate(" + width/2 + "," + height/2 + ")");

// now import data

d3.csv("markoData.csv",function (error,data) {
    // parse
    data.forEach(function(d) {
        d.count = +d.count; //e.g. "23" to 23 an actual integer..a type conversion if u will
        d.fruit = d.fruit;
    })

    // select the arc element that does not exist in the DOM currently
    var g = canvas.selectAll(".arc")
            .data(pie(data))
            .enter().append("g")
            .attr("class", "arc");
    // append th path to the arc
    g.append("path")
        .attr("d",arc)
        .style("fill","blue");
    // append text
    g.append("text")
        .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
        .attr("dy", ".35em")
        .text(function(d) { return d.data.fruit;} );
});
