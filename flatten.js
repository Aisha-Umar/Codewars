function flatten(arr){
    let flattenArr=[]
    for(let e of arr){
        if(Array.isArray(e)){
            flattenArr.push(...e)
        }
        else{
            flattenArr.push(e)
        }
    }
    return flattenArr
}
// [1, 2, 3, 4, 5]
console.log(flatten([1, 2, [3, 4], 5]))