import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();
const list1 = new LinkedList();

console.log(list.size());

list.append("dog");
list1.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.prepend("giraffe");

console.log(list.toString());
console.log(list.toString());
console.log(list.size());

console.log(list.head());
console.log(list.tail());

console.log(list.at(0));
console.log(list.at(-1));
console.log(list.at(1));
console.log(list.at(2));
console.log(list.at(10));

list.pop();
console.log(list.toString());
console.log(list1.toString());
list1.pop();
console.log(list1.toString());

console.log(list.contains("dog"));
console.log(list.contains("lion"));
console.log(list.contains("snake"));

console.log(list.find("dog"));
console.log(list.find("lion"));
console.log(list.find("snake"));
