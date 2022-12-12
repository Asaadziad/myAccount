export default class Action {
  //two types action, "outcome"/"income"
  constructor(type, desc, amount) {
    this.type = type;
    this.desc = desc;
    this.amount = this.type == "income" ? amount : -amount;
    this.id = Math.floor(Math.random() * 1001);
  }
  get(propName) {
    return this[propName];
  }
  set(propName, value) {
    this[propName] = value;
  }
}
