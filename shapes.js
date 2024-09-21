var dataArray = [2,13,15,20,24,12,17];
var svg = d3.select("body").append("svg").attr('height','100%').attr('width','100%');
svg.selectAll('rect')
  .data(dataArray)
  .enter().append('rect')
    .attr('height',function(d,i){return d*10;})
    .attr('width','70')
    .attr('fill','darkred')
    .attr('x',function(d,i) { return 80*i;})
    .attr('y',function(d,i) { return 350-(d*10)})
  //  .attr('y','120');
  var fixedX=600;
  svg.selectAll('circle.groupA')
    .data(dataArray)
    .enter().append('circle')
        .attr('class','groupA')
        .attr('cx',function(d,i) {fixedX+=(d*4)+(30); return fixedX;})
        .attr('cy','150')
        .attr('r',function(d) {return d*2;});
 var fixedX=1200;
 svg.selectAll('ellipse')
  .data(dataArray)
  .enter().append('ellipse')
      .attr('cx',function(d,i) {fixedX+=(d*4)+(30); return fixedX;})
      .attr('cy','150')
      .attr('rx',function(d) {return d*2;})
      .attr('ry',70);
  /* svg.selectAll('circle.groupB')
    .data(dataArray)
    .enter().append('circle')
    .attr('class','groupB')
        .attr('cx',function(d,i) {fixedX+=(d*4)+(30); return fixedX;})
        //  .attr('cx','600')
        .attr('cy','150')
        //.attr('r','10');
        .attr('r',function(d,i) {return d*2;}); */
