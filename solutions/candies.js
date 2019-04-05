
function candies(n,m){
	var c = 0;
  c = m/n;
  c= parseInt(c) * n;
  return c;
}
console.log(candies(3,10));
module.exports=candies;
