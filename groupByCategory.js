function groupByCategory(transactions) {
  let categories = {}

  for(let transaction of transactions){

    if(!categories[transaction.category]){
        categories[transaction.category] = [] 
    }
    else{
        categories[transaction.category].push(transaction)
    }
  }
  return categories
}

console.log(groupByCategory([
  { id: 1, amount: 20, category: "food" },
  { id: 2, amount: 15, category: "transport" },
  { id: 3, amount: 30, category: "food" }
]))
