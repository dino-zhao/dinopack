function sort(arr) {
 if(arr.length<2) return arr
 let mid=Math.floor((arr.length-1)/2)
 
  return merge(sort(arr.slice(0,mid+1)),sort(arr.slice(mid+1,arr.length)))
}
function merge(arr1,arr2){
  let arr=[]
  while(arr1.length&&arr2.length){
    arr.push(arr1[0]>arr2[0]?arr2.shift():arr1.shift())
  }
  arr.push(...(arr1.length?arr1:arr2))
  return arr
}

console.log(
  sort([
    1,
    4,
    52,
    32,
    434,
    4566,
    0,
    7,
    8,
    54,
    2,
    7,
    1,
    2,
    1,
    1,
    1,
    8,
    23,
    5,
    6,
    5343,
  ])
)
