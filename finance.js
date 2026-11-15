let transactions = [];

function addTransaction() {
  const desc = document.getElementById('desc').value;
  const amount = parseFloat(document.getElementById('amount').value);

  if (desc.trim() === '' || isNaN(amount)) {
    alert('Mohon isi keterangan dan jumlah dengan benar!');
    return;
  }

  const transaction = { id: Date.now(), desc, amount };
  transactions.push(transaction);

  updateUI();
  document.getElementById('desc').value = '';
  document.getElementById('amount').value = '';
}

function updateUI() {
  const list = document.getElementById('list');
  const balanceEl = document.getElementById('balance');
  list.innerHTML = '';

  let total = 0;
  transactions.forEach(t => {
    total += t.amount;
    const li = document.createElement('li');
    li.innerHTML = `<span>${t.desc}</span> <span>Rp ${t.amount.toLocaleString()}</span>`;
    list.appendChild(li);
  });

  balanceEl.innerText = total.toLocaleString();
}
