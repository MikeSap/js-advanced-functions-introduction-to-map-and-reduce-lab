// Your code here
function mapToNegativize(src) {
  return src.map(x => x * -1)
}

function mapToNoChange(src) {
  return src.map(x => x)
}

function mapToDouble(src) {
  return src.map(x => x * 2)
}

function mapToSquare(src) {
  return src.map(x => x ** 2)
}

function reduceToTotal(src, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < src.length; i++ ) {
      total = total + src[i]
    }
    return total
  }
  
  function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }