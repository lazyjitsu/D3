const d3 = require('d3');
const fs = require('fs');

fs.readFile('marcoTest.csv', function (err, fileContents) {
    var rows = d3.csvParse(fileContents.toString());

    var allSectors = rows.filter(function (row) {
        // this will remove only those styles that have bjj!!!
        return row['style'] === 'bjj'
    });
    for (key in allSectors) {
        //console.log("Name: " + allSectors[key]['name'] + " Stylez--> "+ allSectors[key]['style'])
    }
    var bjjMetricsOfInterest = allSectors.map( function(el) {
        return {
            expertise: el['submission specialty'],
            name: el['name'],
            age: el['age']
            }
    });
    // now i have an array from the filtered array creating an array of objectts with  things i care about &
    // key names i choose
    console.log(typeof(bjjMetricsOfInterest));
    console.log(bjjMetricsOfInterest[0]['expertise']);
    fs.writeFile('./zukoFighting.csv',d3.csvFormat(bjjMetricsOfInterest));
    // console.log(allSectors);
    //for ( i in rows)
    //{
//
    //    if ( rows[i]['YEAR.id'] === '2021')
    //        console.log(rows[i]['YIBSZFI.display-label']);
    //}
})
