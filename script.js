import ActionManager from "./classes/ActionsManager.js";
import Action from "./classes/Action.js";

let manager = new ActionManager();
let shopping = new Action("outcome", "Shopping", 1000);
let salary = new Action("income", "Salary", 10000);

manager.addAction(shopping);
manager.addAction(salary);

manager.updateAction(shopping.get("id"), 3000);

console.log(manager.balance);
