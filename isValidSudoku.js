class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        //i=9 is the number of rows
        //j is each number or . in an array
        //so one i=0 has j=9 elements
        //if a row has a duplicate return false
        //check each row for duplicates meaning each i array
        //if rows are good check each column for duplicates meaning each j column
        //if columns are good now check all 3 * 3 sub-boxes

        //check each row
        //loop over the board

        for(let i=0; i<=board.length; i++){
            let noneEmptyCellArray = board[i].filter(e=>e!=".")
             return noneEmptyCellArray.length !== new Set(noneEmptyCellArray).size ? false:true
        }

        //now check for each column
        for(let j=0; j<=9; j++){
            for(let i=0; i<=board.length; i++){
                let noneEmptyCellArray = board[i][j].filter(e=>e!=".")
                 return noneEmptyCellArray.length !== new Set(noneEmptyCellArray).size ? false:true
            }
        }

    }
}

let solution = new Solution
console.log(solution.isValidSudoku([["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 ["7",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]))