function countWords(str) {
    let words = str.split(' ')
        let obj={}
        let count=1
        for(let word of words){
            if(obj[word]){
                //add one else 
                    obj[word] = count + 1 
            }
            else{
                obj[word]= 1
            }
        }
        return Object.keys(obj)
 }

 console.log(countWords("the cat and the hat"))