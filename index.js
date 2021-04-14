function takeANumber(curLine, name) {
  let newArray = []
  let i = 0
  newArray = curLine.push(name)
  return newArray
  return `Welcome, ${name}. You are number ${(curLine.length)+1} in line.`
}

console.log(takeANumber([],'Matthew'))