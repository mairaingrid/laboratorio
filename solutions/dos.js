
function sum (n,m){
	var c = 0;
  c = m/n;
  c= parseInt(c) * n;
  return c;
}
console.log(sum(3,10));
module.exports=sum;
