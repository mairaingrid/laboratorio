const { exec } = require('child_process');
var fs         = require('fs');
const clc      = require('cli-color');
fs.readdir("./solutions", (err, files) => {
  files.forEach(file => {
    if (file === "sum.js") {
      var f = require("./solutions/" + file);
      var fs = require('fs');
      fs.readFile('./inputs/sum.txt', function (err, data) {
        if (err) {
          throw err;
        }
        checkSolution(f, data.toString().split(/\n/), "sum.txt");
      });
    }
    if (file === "checkPalindrome.js") {
      var f = require("./solutions/" + file);
      var fs = require('fs');
      fs.readFile('./inputs/checkPalindrome.txt', function (err, data) {
        if (err) {
          throw err;
        }
        checkSolution(f, data.toString().split(/\n/), "checkPalindrome.txt");
      });
    }
    if (file === "addTwoDigits.js") {
      var f = require("./solutions/" + file);
      var fs = require('fs');
      fs.readFile('./inputs/addTwoDigits.txt', function (err, data) {
        if (err) {
          throw err;
        }
        var numbers = [];
        data.toString().split(/\n/).map((e) => {
          if (e != "") {
            numbers.push(parseInt(e));
          }
        });

        checkSolution(f, numbers, "addTwoDigits.txt");
      });
    }
    if (file === "candies.js") {
      var f = require("./solutions/" + file);
      var fs = require('fs');
      fs.readFile('./inputs/candies.txt', function (err, data) {
        if (err) {
          throw err;
        }

        checkSolution(f, data.toString().split(/\n/), "candies.txt");
      });
    }
    if (file === "adjacentElementsProduct.js") {
      var f = require("./solutions/" + file);
      var fs = require('fs');
      fs.readFile('./inputs/adjacentElementsProduct.txt', function (err, data) {
        if (err) {
          throw err;
        }
        var inputdata = [];
        data =  data.toString().replace(/\[/g,"");
        data =  data.toString().replace(/\]/g,"");
        data.toString().split(/\n/).map((e) => {
          if (e == "") {
            return;
          }
          var aux = []
          e.split(",").map((e1) => {
            aux.push(parseInt(e1));
          })
          inputdata.push(aux);
        })
        checkSolution(f, inputdata, "adjacentElementsProduct.txt");
      });
    }

  });
});
function checkSolution (fn, inputs, fileouput) {
  var posiblesolutions = [];
  for (var i = 0; i < inputs.length; i++) {
    if (Array.isArray(inputs[i])) {
      posiblesolutions.push(fn(inputs[i]));
    } else if (Number.isInteger(inputs[i])) {
      posiblesolutions.push(fn(inputs[i]));
    } else if (inputs[i] != "") {
      if (inputs[i].match(/,/g)) {
        var params = inputs[i].split(/,/);
        posiblesolutions.push(fn(parseInt(params[0]), parseInt(params[1])));
      } else {
        posiblesolutions.push(fn(inputs[i]));
      }

    }
  }

  fs.readFile("./output/" + fileouput, function (err, data) {
    console.log(clc.yellow("Review") + " " + clc.cyan(fileouput));
    if (data != undefined) {
      var outdata = data.toString().split(/\n/);
      var sol = 0;
      for (var i = 0; i < posiblesolutions.length; i ++) {
        var num = i + 1;
        if (outdata[i].toString() != "" && outdata[i].toString() == posiblesolutions[i].toString()) {
          sol++;
          console.log("Test " +  num + " " + clc.green("   pass \u2713"));
        } else {
          console.log("Test " +  num + " " + clc.red("no pass \u2718"));
        }
      }
      if (sol == posiblesolutions.length) {
        console.log(clc.green(fileouput + " " + "Correcto"))
      } else {
        console.log(clc.red(fileouput + " " + "Incorrecto"))
      }
    }
  });
}
