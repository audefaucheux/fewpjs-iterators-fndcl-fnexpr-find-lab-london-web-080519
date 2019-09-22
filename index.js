const testVar = {};

function testFunc() {
  return "hi";
}

function superbowlWin(array) {
  const findWin = array.find(function(element) {
    if (element.result === "W") {
      return element;
    }
  });

  if (findWin) {
    return findWin.year;
  }
}
