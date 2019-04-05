
  var number = 29;
  console.log(number.toString().split('').reduce(function(r, n) {
    return r + parseInt(n)
  }, 0))
