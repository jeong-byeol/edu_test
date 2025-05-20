// 1. arguments 
function pipe() {
  const funcs = arguments; // arguments 객체 사용 (유사 배열)

  return function(input) {
    let result = input;
    for (let i = 0; i < funcs.length; i++) {
      result = funcs[i](result); // 각 함수 적용
    }
    return result;
  };
}

function square(num) {
  return num * num;
}

function add5(num) {
  return num + 5;
}


let output = pipe(add5, square);  //output(4) = pipe(add5, square)(4)
console.log(output(4)); // --> 81 

// 1. map
function getLengthOfElements(arr) {
  return arr.map(function (str) {
      return str.length
  })
}

let output = getLengthOfElements(['', 'a', 'ab', 'abc']);
console.log(output); // --> [0, 1, 2, 3]

getLengthOfElements(['hello', 'rocket', 'boost']);
console.log(output); // --> [5, 6, 5]
// 2. reduce

function computeProductOfAllElements(arr) {
  return arr.reduce(function(acc, cur) {
      return acc*cur;
  })
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60