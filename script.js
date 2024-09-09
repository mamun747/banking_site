const deposit = document.getElementById('deposit');
const depositInput = document.getElementById('depositInput');
const depositButton = document.getElementById('depositButton');

// withdraw
const withdraw = document.getElementById('withdraw');
const withdrawInput = document.getElementById('withdrawInput');
const withdrawButton = document.getElementById('withdrawButton');

// total
const totalAmount = document.getElementById('totalAmount');

// transaction
const transaction = document.getElementById('history').getElementsByTagName('tbody')[0];

// Initialize total balance
let currentBalance = 0;

depositButton.addEventListener('click', () => {
    let value = depositInput.value;
    let mainValue = Number(value);

    if (!isNaN(mainValue) && mainValue < 99999999999999999999 && mainValue > 0) {
        let currentDeposit = Number(deposit.innerText); // Get current deposit value
        currentDeposit += mainValue; // Add new value to current deposit
        deposit.innerText = currentDeposit; // Update displayed deposit
        currentBalance += mainValue; // Update the total balance
        totalAmount.innerText = currentBalance;

        // Add transaction to the history table
        let date = new Date();
        let formatted = date.toLocaleString();
        let newRow = transaction.insertRow();
        newRow.insertCell(0).textContent = formatted;
        newRow.insertCell(1).textContent = "Deposit";
        newRow.insertCell(2).textContent = mainValue;
        newRow.insertCell(3).textContent = currentBalance;
    } else {
        alert("That is not a valid amount.");
    }

    if (value === "") {
        alert('Please enter your amount and try again.');
    }
    depositInput.value = ""; // Clear input field
});

withdrawButton.addEventListener('click', () => {
    let amount = withdrawInput.value;
    let mainAmount = Number(amount);

    if (!isNaN(mainAmount) && mainAmount > 0) {
        if (mainAmount <= currentBalance) { // Check against current balance
            currentBalance -= mainAmount; // Update the total balance
            withdraw.innerText = mainAmount; // Update the withdrawal display
            totalAmount.innerText = currentBalance;

            // Add transaction to the history table
            let newDate = new Date();
            let newFormatted = newDate.toLocaleString();
            let newRow = transaction.insertRow();
            newRow.insertCell(0).textContent = newFormatted;
            newRow.insertCell(1).textContent = "Withdrawal";
            newRow.insertCell(2).textContent = mainAmount;
            newRow.insertCell(3).textContent = currentBalance;
        } else {
            alert('Insufficient balance!');
        }
        withdrawInput.value = "";
    } else {
        alert('Please enter a valid amount and try again.');
    }
});
