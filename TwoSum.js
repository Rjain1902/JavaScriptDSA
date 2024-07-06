// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//Approach1
// function twoSum(num, target) {
//   let index1, index2;
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] <= target) {
//       let arr = num.slice(i + 1);
//       if (arr.includes(Math.abs(target - num[i]))) {
//         let k = i + 1;
//         console.log(arr)
//         index1 = i;
//         index2 = arr.indexOf(target - num[i]) + k;
//         return [index1, index2];
//       }
//     }
//   }
// }

//Approach2

function twosum(nums,target){
    let obj1={}
    for(let i=0;i<nums.length;i++){
        if(nums.includes(target-nums[i])){
            if(obj1.hasOwnProperty(target-nums[i])){
                return [obj1[target-nums[i]],i]
            }
            else{
                obj1[nums[i]]=i
            }
        }
       
    }
   

}

console.log(twosum([5,5], 10));
