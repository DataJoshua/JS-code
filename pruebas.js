function digitalRoot(value){
    let numArray = value.toString().split("")
    let result = 0
    if(numArray.length > 1){
        numArray.forEach(element => {
            result += parseInt(element)
        })
        return digitalRoot(result)
    }
    return numArray[0]
}


//console.log(digitalRoot(456)); // 6 expected

let g = 12

//console.log(typeof g);



const searchInsert = function(nums, target) {
    let result = nums.indexOf(target)

    if(result == -1){
       if(target > nums.length -1){
            let last = nums[nums.length - 1]
            while(last != target){
                nums.push(last + 1)
                last++
            }
            return nums.indexOf(target)
       }
       else if(target < nums.length){
          let probe = nums.indexOf(target - 1)
          let probe2 = nums.indexOf(target + 1)
          if(probe != -1){
            return probe + 1
          }
          else if(probe2 != -1){
            return probe2 + 1
          }
       }else if(target == 0 && nums.indexOf(0) == -1 ){
            return 0
       }
    }

    return result

}

console.log(searchInsert([1,3], 2))

