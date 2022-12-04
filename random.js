btn = document.querySelector(".button-click");
btn.addEventListener("click", random);

function random() {
  let nums = [];
  function randomInt(min, max) {
    for (let randomNum = 1; randomNum <= 10; randomNum++) {
      let result = Math.trunc(Math.random() * (max - min) + 1) + min;
      nums.push(result);
    }
  }
  randomInt(-10, 10);
  console.log(nums);
  const minNum = Math.min(...nums);
  console.log(minNum);
  const maxNum = Math.max(...nums);
  console.log(maxNum);

  const getAverage = (numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum / numbers.length;
  };
  console.log(getAverage(nums));

  const getSum = (el) => {
    let sum = 0;
    for (let i = 0; i < el.length; i++) {
      sum += el[i];
    }
    return sum;
  };
  console.log(getSum(nums));

  const getMultiple = nums.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );
  console.log(getMultiple);

  document.querySelector(".result").innerHTML = "Случайные числа: " + nums;
  document.querySelector(".min").innerHTML = "Минимальное: " + minNum;
  document.querySelector(".max").innerHTML = "Максимальное: " + maxNum;
  document.querySelector(".average").innerHTML =
    "Среднее арифметическое: " + getAverage(nums);
  document.querySelector(".sum").innerHTML = "Сумма чисел:" + getSum(nums);
  document.querySelector(".multiple").innerHTML =
    "Произведение чисел: " + getMultiple;
}
