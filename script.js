var numbers = Array.from({length: 10}, (_, i) => i);
numbers.sort(() => Math.random() - 0.5);

var answer = numbers.slice(0, 3);
console.log(answer); 
var tries = 0;

// 게임 시작
while (true) {
  var input = prompt('숫자를 입력하세요. (세 자리 숫자, 중복 없이)');
  if (input === null) {
    alert('게임을 종료합니다.');
    break;
  } else if (!/^[0-9]{3}$/.test(input)) {
    alert('세 자리 숫자를 입력해야 합니다.');
    continue;
  } else if (input[0] === input[1] || input[0] === input[2] || input[1] === input[2]) {
    alert('숫자는 중복되지 않게 입력해야 합니다.');
    continue;
  }

  tries++;

  var strike = 0;
  var ball = 0;
  for (var i = 0; i < 3; i++) {
    if (input[i] === String(answer[i])) {
      strike++;
    } else if (answer.indexOf(Number(input[i])) !== -1) {
      ball++;
    }
  }

  // 결과 출력
  if (strike === 3) {
    alert('축하합니다! ' + tries + '번째 시도에서 맞췄습니다.');
    break;
  } else {
    alert(input + ': ' + strike + 'S ' + ball + 'B');
  }
}

