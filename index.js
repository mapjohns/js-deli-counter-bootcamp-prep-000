function takeANumber(curLine, name) {
  let newArray = []
  let i = 0
  curLine = curLine.push(name)
  return `Welcome, ${name}. You are number ${parseInt(curLine.length)+1} in line.`
  return newArray
}

console.log(takeANumber([],'Matthew'))