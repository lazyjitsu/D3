/*d3.select('div')
    .selectAll('p') //select all p's even though they don't exist
    .data([1,2,3])  //associate/bind data
    .enter()        // enter calculates the difference in tags found in selectAll which is ZERO since have no 'p' tags AND data points, which is  3!!
    .append('p')    // 3 (data points) MINUS P-tags found which is ZERO equals 3. So append says append 3 paragraphs to the DOM!!
    .text(data => data); // Use the data points (lambda function) to place into the p-tags!! */
DUMMY_DATA = [
    {id: 'd1', value:10, region: 'USA' },
    {id: 'd2', value:12, region: 'Mexico' },
    {id: 'd3', value:4, region: 'China' },
    {id: 'd4', value:19, region: 'India' },
]

/*d3.select('#fsb')
    .selectAll('p') //select all p's even though they don't exist
    .data(DUMMY_DATA)  //associate/bind data
    .enter()        // enter calculates the difference in tags found in selectAll which is ZERO since have no 'p' tags AND data points, which is  3!!
    .append('p')    // 3 (data points) MINUS P-tags found which is ZERO equals 3. So append says append 3 paragraphs to the DOM!!
    .text(data => data); // Use the data points (lambda function) to place into the p-tags!! */


const container = d3.select('div')
    .classed('container',true)
    .style('border','1px solid red');

const bars = container
    .selectAll('.bar')
    .data(DUMMY_DATA)
    .enter() // find out which data wasn't rendered yet
    .append('div') // add missing divs
    .classed('bar',true) // add a 'bar' class for every div
    .style('width', '50px')
    //.style('height','150px')
    .style('height',data =>  (data.value * 15) + 'px');

