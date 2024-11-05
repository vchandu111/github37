class BankAccount {
  #balance = 0;

  deposit(amt) {
    if (amt > 0) this.#balance += amt;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();

acc.deposit(100);

console.log(acc.getBalance());
