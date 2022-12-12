export default class ActionManager {
  constructor() {
    this.actionArray = [];
    this.balance = 0;
  }
  addAction(Action) {
    this.actionArray.push(Action);
    this.calcBalance();
  }
  deleteAction(actionId) {
    this.actionArray = this.actionArray.filter((item) => {
      return item.get("id") != actionId;
    });
    this.calcBalance();
  }
  updateAction(actionId, amount) {
    /* for (let i = 0; i < this.actionArray.length; i++) {
      if (this.actionArray[i].get("id") == actionId) {
        this.actionArray[i].set("amount", amount);
      }
    }*/
    this.actionArray = this.actionArray.map((item) => {
      if (item.get("id") == actionId) {
        item.set("amount", amount);
        return item;
      }
      return item;
    });
    this.calcBalance();
  }
  calcBalance() {
    this.balance = 0;
    for (let i = 0; i < this.actionArray.length; i++) {
      this.balance += this.actionArray[i].get("amount");
    }
  }
}
