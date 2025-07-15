const values = [1000, 500, 100, 50, 10, 5, 1];

const symbolsByValueIndexArray = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];

const getSubstractiveForm = (valueIndex: number) => {
  return `${symbolsByValueIndexArray[valueIndex]}${symbolsByValueIndexArray[valueIndex - 1]}`;
};

function intToRoman(num: number): string {
  let currentNumber = num;
  let result = '';
  let valueIndex = 0;

  while (currentNumber > 0 && valueIndex < values.length) {
    const currentValue = values[valueIndex];

    if (currentNumber >= currentValue) {
      if (String(currentNumber)[0] === '9') {
        result += `${symbolsByValueIndexArray[valueIndex + 1]}${symbolsByValueIndexArray[valueIndex - 1]}`;
        currentNumber = Number(String(currentNumber).slice(1));
      } else {
        if (String(currentNumber)[0] === '4') {
          result += getSubstractiveForm(valueIndex);
        } else {
          const amount = Math.floor(currentNumber / currentValue);

          result += symbolsByValueIndexArray[valueIndex].repeat(amount);
        }

        currentNumber = currentNumber % currentValue;
        valueIndex += 1;
      }
    } else {
      valueIndex += 1;
    }
  }

  return result;
}
