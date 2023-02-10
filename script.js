
//unchanging const and keep varible 
const balance=document.getElementById('balance');
const money_plus=document.getElementById('money_plus');
const money_minus=document.getElementById('money_minus');
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");


const dummyTransactions = [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ];

  let transactions = dummyTransactions;

  function showNotification() {
    notification.classList.add("show");
    setTimeout(() => {
      notification.classList.remove("show");
    }, 2000);
  }

  function generateID() {
    return Math.floor(Math.random() * 100000000);
  }

  function addTransaction(e) {
    e.preventDefault();
    if (text.value.trim() === "" || amount.value.trim() === "") {
      showNotification();
    } else {
      const transaction = {
        id: generateID(),
        text: text.value,
        amount: +amount.value,
      };
      transactions.push(transaction);
      addTransactionDOM(transaction);
      updateValues();
      // updateLocaleStorage();
      text.value = "";
      amount.value = "";
    }
  }