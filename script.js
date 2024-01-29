function setTip(tip) {
  const inputBill = parseFloat(document.getElementById("bill-input").value);
  const tipPerPerson = document.getElementById("tipPerPerson");
  const totalPerPerson = document.getElementById("totalPerPerson");
  const peopleInput = document.getElementById("people-input");
  const people = parseFloat(peopleInput.value);

  if (isNaN(people) || people <= 0) {
    peopleInput.style.border = "2px solid orange";
    return;
  } else {
    peopleInput.style.border = "1px solid #ced4da";
  }

  let customTipInput = document.getElementById("custom-tip-input");
  let tipPercentage;

  if (customTipInput.value.trim() !== "") {
    tipPercentage = parseFloat(customTipInput.value);
  } else {
    tipPercentage = tip;
  }

  const tipValue = (inputBill * tipPercentage) / 100;
  const totalValue = inputBill * (1 + tipPercentage / 100);
  const tipPerPersonValue = tipValue / people;
  const totalPerPersonValue = totalValue / people;

  tipPerPerson.innerHTML = "$" + tipPerPersonValue.toFixed(2);
  totalPerPerson.innerHTML = "$" + totalPerPersonValue.toFixed(2);
}

function resetValues() {
  const billInput = document.getElementById("bill-input");
  const peopleInput = document.getElementById("people-input");
  const tipPerPerson = document.getElementById("tipPerPerson");
  const totalPerPerson = document.getElementById("totalPerPerson");
  const customTipInput = document.getElementById("custom-tip-input");

  billInput.value = "";
  customTipInput.value = "";
  peopleInput.value = "";
  peopleInput.style.border = "1px solid #ced4da";
  tipPerPerson.innerHTML = "$0.00";
  totalPerPerson.innerHTML = "$0.00";
}
