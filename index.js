function takeANumber(curLine, name) {
  const newArray = []
  let i = 0
  for (i=0; i<curLine.length;) {
    curLine.push(`Welcome, ${name}. You are number ${(curLine.length)+1} in line.`)
  }
  return curLine
}

console.log(takeANumber([],[`Matthew`]))