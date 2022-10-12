console.log("1) " + this);	// window

function f() {
	console.log("2) " + this);	// window
}
f();

var person = {
	name:"홍길동",
	age:25,
	getName: function() {
		console.log("3) " + this);	// object
		return this.name;
	}
};
person.getName();
// person은 생성자 아니고 객체임
// 생성자는 function을 사용하여 만들어야 됨

console.log("4) " + typeof this);
console.log("5) " + person instanceof Object);
console.log("6) " + this instanceof Window);