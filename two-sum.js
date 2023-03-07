/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
var not_sorted=[];
var number=[];
nums.forEach(function (e){
    not_sorted.push(e);
});
nums.sort((a,b)=>{
    return a-b;
});

for(i in nums){
    for(j=i;j<nums.length;++j){
        if(nums[i]+nums[j]==target){
            if(i!=j){
                number.push(not_sorted.indexOf(nums[i]));
                 number.push(not_sorted.lastIndexOf(nums[j]));
            }
        }
        if(nums[i]+nums[j]>target){
            break;
        }
    }
}
number.sort((a,b)=>{
    return a-b;
});
return number;
    
};
