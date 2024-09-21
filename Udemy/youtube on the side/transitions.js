function transitions()
{
    var w = 800,
        h = 600;

    var canvas = d3.select(".transitionsContainer")
                    .append("svg")
                    .attr("width",w)
                    .attr("height", h);
    var rect = canvas.append("rect")
                .attr("width", 10)
                .attr("height", 10)
                .attr("x",10)
                .attr("y",189)
                .attr("fill","red");

    var blueCircle = canvas.append("circle")
                .attr("cx", 50)
                .attr("cy", 200)
                .attr("r", 50)
                .attr("fill", "blue");
    var purpleRect = canvas.append("rect")
                .attr("width", 100)
                .attr("height", 100)
                .attr("fill", "purple");

        purpleRect.transition()
            .delay(2000) // This is optional.  2 second delay
            .duration(3000) // This is optional. 3 seconds
            .attr("width",400) // instead of 100 lets grow it to 200
            .attr("transform","translate(200,0)")
            .on("start",function() {
                d3.select(this)
                    .attr("fill","brown");  // once the purple has moved to the right, 200 pixels, changes its colow to brown
            })
            .transition() // U can daisy chain!!! See the purple rectangle move right & back down !!!
                .attr("transform","translate(200,200)")
            .on("end", function() {
                d3.select(this)
                    .attr("fill","orange");
            });


        rect.transition()
                .delay(3000) // This is optional.  3 second delay
                .duration(3000) // This is optional. 3 seconds
                .attr("width",400)
                .on("end", function() // each is an even listener that waits for transition to complete the triggers
                {
                    d3.select(this) // this is the thing to the left of the period, the object, and thus 'rect'
                        .attr("fill","green");
                } );
                //.attr("x",500); // instructor said this is common mistake of using x. use  .attr("transform","translate(x,y)") instead!
            //    .attr("transform","translate(200,0)");


}
