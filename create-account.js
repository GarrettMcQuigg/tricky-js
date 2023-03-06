function createAccount(pin, balance) {
  return {
    checkBalance(userPin) {
      if (userPin !== pin) {
        return "Incorrect pin number";
      } else if (userPin === pin) {
        return `Your balance is $${balance}`;
      }
    },
    deposit(userPin, amount) {
      if (userPin !== pin) {
        return "Incorrect pin number";
      } else if (userPin === pin) {
        balance += amount;
        return `Your balance is $${balance}`;
      }
    },
    withdraw(userPin, amount) {
      if (userPin !== pin) {
        return "Incorrect pin number";
      } else if (amount > balance) {
        return `Insufficient funds. You have $${balance} in your account.`;
      } else if (userPin === pin) {
        balance -= amount;
        return `Your balance is $${balance}`;
      }
    },
    changePin(userPin, newPin) {
      if (userPin !== pin) {
        return "Incorrect pin number";
      } else if (userPin === pin) {
        pin = newPin;
        return `PIN change successful. Your new PIN number is ${pin}`;
      }
    },
  };
}

module.exports = { createAccount };
