const { parse } = require("node-html-parser")

async function decodeMessage(url) {
  const res = await fetch(url)
  const html = await res.text()

  // Parse HTML 
  const parsedHTML = parse(html)

  let data = []
  let maxX = 0
  let maxY = 0

  // Get table rows
  const rows = parsedHTML.querySelectorAll("tr")

  for (let row of rows) {
    const cells = row.querySelectorAll("td")

    if (cells.length < 3) continue

    const x = Number(cells[0].text.trim())
    const char = cells[1].text.trim()
    const y = Number(cells[2].text.trim())

    if (isNaN(x) || isNaN(y)) continue

    data.push({ x, y, char })

    maxX = Math.max(maxX, x)
    maxY = Math.max(maxY, y)
  }

  // Create a grid
  const width = maxX + 1
  const height = maxY + 1

  const grid = Array.from({ length: height }, () =>
    Array(width).fill(" ")
  )

  // place the characters in the grid
  for (let { x, y, char } of data) {
    grid[height - 1 - y][x] = char
   }

 
 console.log(grid.map(row => row.join("")).join("\n"))
}

// run the function
const url =
  "https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub"

decodeMessage(url)