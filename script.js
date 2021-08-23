var displayNumber = document.getElementById("result-number");

function handleOdd() {
  var number = document.getElementById("input-number").value;

  var result = "";

  for (let i = 1; i < number; i++) {
    if (i % 2 == 1) {
      result += `<p class="display-number">${i}</p>`;
    }
    console.log(i);
  }

  displayNumber.innerHTML = result;
}

function handleEven() {
  var number = document.getElementById("input-number").value;

  var result = "";

  for (let i = 1; i < number; i++) {
    if (i % 2 == 0) {
      result += `<p class="display-number">${i}</p>`;
    }
    console.log(i);
  }

  displayNumber.innerHTML = result;
}

function handlePrima() {
  var number = document.getElementById("input-number").value;

  var result = "";

  for (var i = 1; i <= number; i++) {
    let num = 0;
    for (var j = 1; j <= i; j++) {
      if (i % j == 0) {
        num = num + 1;
      }
    }

    if (num == 2) {
      console.log(i);
      result += `<p class="display-number">${i}</p>`;
    }
  }
  displayNumber.innerHTML = result;
  //   console.log(number);
}
