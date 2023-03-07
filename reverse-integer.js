/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    x < 0
   odd= x < 0 ? true : false;
   var result = parseInt(String(x).split('').reverse().join(''));
   odd==true ? result=-result:result=result;
   if(result >( Math.pow(2, 31)-1) || result <( Math.pow(-2, 31)-1)){
       return 0;
   }
   return result;
    
};
