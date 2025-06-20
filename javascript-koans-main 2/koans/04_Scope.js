describe('scope 대해서 학습합니다.', function () {
  //  scope는 변수의 값(변수에 담긴 값)을 찾을 때 확인하는 곳을 말합니다. 반드시 기억하시기 바랍니다.
  it('함수 선언식(declaration)과 함수 표현식(expression)의 차이를 확인합니다.', function () {
    function funcDeclared() {
      return 'this is a function declaration';
    }

    let funcExpressed = function () {
      return 'this is a function expression';
    };

    expect(typeof funcDeclared).to.equal('function');
    expect(typeof funcExpressed).to.equal('function');

    

    // 자바스크립트 함수 호이스팅(hoisting)에 대해서 검색해 봅니다.

    const funcContainer = { func: funcExpressed };
    expect(funcContainer.func()).to.equal('this is a function expression');

    funcContainer.func = funcDeclared;
    expect(funcContainer.func()).to.equal('this is a function declaration');
  });

  it('lexical scope에 대해서 확인합니다.', function () {
    let message = 'Outer';

    function getMessage() {
      return message;
    }

    function shadowGlobal() {
      let message = 'Inner';
      return message;
    }

    function shadowGlobal2(message) {
      return message;
    }

    function shadowParameter(message) {
      message = 'Do not use parameters like this!';
      return message;
    }

    expect(getMessage()).to.equal('Outer');
    expect(shadowGlobal()).to.equal('Inner');
    expect(shadowGlobal2('Parameter')).to.equal('Parameter');
    expect(shadowParameter('Parameter')).to.equal('Do not use parameters like this!');
    expect(message).to.equal('Outer');
  });

  it('클로저(closure)에 대해 확인합니다.', function () {
    function increaseBy(increaseByAmount) {
      return function (numberToIncrease) {
        return numberToIncrease + increaseByAmount;
      };
    }

    const increaseBy3 = increaseBy(3);
    const increaseBy5 = increaseBy(5);

    expect(increaseBy3(10)).to.equal(13);
    expect(increaseBy5(10)).to.equal(15);
    expect(increaseBy(8)(6) + increaseBy(5)(9)).to.equal(28);

    /*
    mdn에 따르면 클로저의 정의는 다음과 같습니다. 반드시 기억하시기 바랍니다.
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

      A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created.

      클로저는 함수와 함수가 선언된 어휘적 환경의 조합을 말한다.
      이 환경은 클로저가 생성된 시점의 유효 범위 내에 있는 모든 지역 변수로 구성된다.

    여기서의 키워드는 "함수가 선언"된 "어휘적(lexical) 환경"입니다. 
    특이하게도 자바스크립트는 함수가 호출되는 환경와 별개로, 기존에 선언되어 있던 환경 - 어휘적 환경 - 을 기준으로 변수를 조회하려고 합니다.

    클로저는 내부(inner) 함수가 외부(outer) 함수의 지역 변수에 접근할 수 있습니다.
    이를 유념하시고 클로저의 유즈 케이스를 검색해 보시기 바랍니다. 아래 검색 키워드를 활용합니다.
      function factories
      namespacing private variables/functions
    */
  });

  it('lexical scope와 closure에 대해 다시 확인합니다.', function () {
    let age = 27;
    let name = 'jin';
    let height = 179;

    function outerFn() {
      let age = 24;
      name = 'jimin';
      let height = 178;

      function innerFn() {
        age = 26;
        let name = 'suga';
        return height;
      }

      innerFn();

      expect(age).to.equal(26);
      expect(name).to.equal('jimin');

      return innerFn;
    }

    const innerFn = outerFn();

    expect(age).to.equal(27);
    expect(name).to.equal('jimin');
    expect(innerFn()).to.equal(178);
  });
});
