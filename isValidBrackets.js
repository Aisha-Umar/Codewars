function isValid(bracketStr){
    let stack = []
    let map = {
      ")": "(",
      "]": "[",
      "}": "{",
    }
    const openBrackets = new Set(['(', '{', '['])

    for(let i of bracketStr){
        if(openBrackets.has(i)){
            stack.push(i)
        }
        else if(map[i]){
            let top = stack[stack.length-1]
            if(map[i]===top){
                stack.pop()
            }
            else{
                return false
            }
        }
    }
    return stack.length === 0
}