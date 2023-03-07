/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    s=s.trim();
    var result=0;
    var Roman_values={
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000,
    }
    for(let num=0;num<s.length;num++){
        if(!((Roman_values[s[num]])<(Roman_values[s[num+1]]))){
            result +=Roman_values[s[num]];
        }
        else{
          result -=Roman_values[s[num]];  
        }
    }

    return result;
};
