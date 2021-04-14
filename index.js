function takeANumber(curLine, name) {
  let newArray = []
  let i = 0
  for (i=0; i<curLine.length; i++) {
    newArray.push(`Welcome, ${name}. You are number ${(curLine.length)+1} in line.`)
  }
  return newArray
}

console.log(takeANumber([],'Matthew'))