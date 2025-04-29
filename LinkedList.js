export class LinkedList {
	constructor() {
		this.list = null;
	}
}

class Node {
	constructor(value = null, nextNode = null) {
		this.value = value;
		this.nextNode = nextNode;
	}
}

LinkedList.prototype.prepend = function(value) {
	const newNode = new Node(value);

	if (this.list === null) {
		this.list = newNode;
		return;
	}
	const temp = this.list;
	this.list = newNode;
	newNode.nextNode = temp;
}

LinkedList.prototype.append = function(value) {
	const newNode = new Node(value);
	let ptr = this.list;

	if (this.list === null) {
		this.list = newNode;
		return;
	}
	while (ptr.nextNode !== null) {
		ptr = ptr.nextNode;
	}
	ptr.nextNode = newNode;
};

LinkedList.prototype.toString = function() {
	let str = "";
	let ptr = this.list;

	if (this.list === null)
		return ("null");
	while (ptr !== null) {
		str += `( ${ptr.value} ) -> `;
		ptr = ptr.nextNode;
		if (ptr === null)
			str += `null`;
	}
	return (str);
};

LinkedList.prototype.head = function() {
	return (this.list);
};

LinkedList.prototype.tail = function() {
	if (this.list === null)
		return (null);
	let ptr = this.list;
	while (ptr.nextNode !== null) {
		ptr = ptr.nextNode;
	}
	return (ptr);
};

LinkedList.prototype.size = function() {
	let size = 0;
	let ptr = this.list;
	while (ptr !== null) {
		ptr = ptr.nextNode;
		size++;
	}
	return (size);
}

LinkedList.prototype.at = function(index) {
	let ptr = this.list;
	for (let i = 0; i < index && ptr.nextNode; i++) {
		ptr = ptr.nextNode;
	}
	return (ptr);
}

LinkedList.prototype.pop = function() {
	if (this.list === null)
		return;
	if (this.list.nextNode === null) {
		this.list = null;
		return;
	}
	let ptr = this.list;
	while (ptr.nextNode.nextNode !== null) {
		ptr = ptr.nextNode;
	}
	ptr.nextNode = null;
}

LinkedList.prototype.contains = function(value) {
	let ptr = this.list;
	while (ptr !== null) {
		if (ptr.value === value)
			return (true);
		ptr = ptr.nextNode;
	}
	return (false);
}

LinkedList.prototype.find = function(value) {
	let ptr = this.list;
	while (ptr !== null) {
		if (ptr.value === value)
			return (ptr);
		ptr = ptr.nextNode;
	}
	return (null);
}
