
var fs = require('fs');

var args = process.argv.slice(2);
console.log('Function arguments: ', args);

var maxSyllables = args[0]
var minSyllables = args[1]
var numNames = args[2]
var sourceFile = args[3]

var names = new Array()

fs.readFile(sourceFile, function(err, data) {
    var sourceSyllables = data.toString().split("\r\n")
    console.log(`Number of syllable choices is ${sourceSyllables.length}`)
    for (j=0; j<numNames; j++) {
        var name = ""
        var numSyllables = getRandomIntInRange(minSyllables, maxSyllables)
        for (i=0; i<numSyllables;i++) {
            var sy = sourceSyllables[getRandomInt(sourceSyllables.length)].toString()
            name = name.concat("",sy.toString())
        }
        names.push(name)
    }
    console.log("Generated names:")
    names.forEach(n => {
        console.log(n)
    });
});


// var contents = fs.readFileSync(sourceFile, 'utf8');

// var sourceSyllables = contents.toString().split("\r\n")
// console.log(`Number of syllable choices is ${sourceSyllables.length}`)
// for (j=0; j<numNames; j++) {
//     var name = ""
//     var numSyllables = getRandomIntInRange(minSyllables, maxSyllables)
//     for (i=0; i<numSyllables;i++) {
//         var sy = sourceSyllables[getRandomInt(sourceSyllables.length)].toString()
//         name = name.concat("",sy.toString())
//     }
//     names.push(name)
// }
// console.log("Generated names:")
// names.forEach(n => {
//     console.log(n)
// });

function getRandomInt(max) {
    var rand = Math.floor(Math.random() * Math.floor(max));
    return rand
}

function getRandomIntInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var rand = Math.floor(Math.random() * (max - min) + min);
    return rand
}