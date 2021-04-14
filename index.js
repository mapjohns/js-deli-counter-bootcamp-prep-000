function takeANumber(curLine, name) {
  let newArray = []
  let i = 0
  //newArray.push(`Welcome, ${name}. You are number ${(curLine.length)+1} in line.`)
  newArray = curLine.push(name)
  return newArray
}

console.log(takeANumber([],'Matthew'))