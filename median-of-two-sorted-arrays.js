/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
 var result=0;
 var nums=nums1.concat(nums2);
 nums.sort(function(a,b){
     return a-b;
 });
 if((nums.length)%2==0){
   result=(nums[(nums.length/2)-1]+ nums[nums.length/2])/2
 }
 else{
     result=nums[Math.ceil((nums.length/2)-1)];
 }
return result;
}
