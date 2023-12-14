function numberToWords(number) {
  const units = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "",
  ];
  const teens = [
    "",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tens = [
    "",
    "Ten",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];
  const thousands = ["", "Thousand", "Million", "Billion", "Trillion"];

  function convertThreeDigit(number) {
    let word = "";

    const hundredsDigit = Math.floor(number / 100);
    const remainingTwoDigits = number % 100;

    if (hundredsDigit > 0) {
      word += units[hundredsDigit] + " Hundred ";
    }

    if (remainingTwoDigits > 0) {
      if (remainingTwoDigits < 10) {
        word += units[remainingTwoDigits];
      } else if (remainingTwoDigits < 20) {
        word += teens[remainingTwoDigits - 10];
      } else {
        const tensDigit = Math.floor(remainingTwoDigits / 10);
        const onesDigit = remainingTwoDigits % 10;
        if (onesDigit > 0) {
          word +=
            tens[tensDigit] + (onesDigit > 0 ? " " + units[onesDigit] : "");
        } else {
          word += tens[tensDigit];
        }
      }
    }

    return word;
  }

  if (number === 0) {
    return "Zero";
  }

  if (number === 10) {
    return "Ten";
  }

  let word = "";
  let index = 0;

  while (number > 0) {
    const threeDigitChunk = number % 1000;
    if (threeDigitChunk > 0) {
      word =
        convertThreeDigit(threeDigitChunk) +
        " " +
        thousands[index] +
        " " +
        word;
    }
    number = Math.floor(number / 1000);
    index++;
  }

  return word.trim();
}

export default numberToWords;
