var greet_1 = require("./greet");
var Student = (function () {
    function Student(name, middleName, lastNames, age) {
        this.name = name;
        this.middleName = middleName;
        this.lastNames = lastNames;
        this.age = age;
        this.fullName = name + ' ' + middleName + ' ' + lastNames + ', has the age of:' + age;
    }
    return Student;
})();
function hi(person) {
    return 'hello ' + person.name + ' ' + person.lastNames + ', your age is:' + person.age;
}
var student = new Student('romel', 'j.', 'gomez herrera', 31);
function showHello(divName, name) {
    var elt = document.getElementById(divName);
    elt.innerText = greet_1.sayHello(name);
}
console.log(hi(student));
console.log(greet_1.sayHello("TypeScript"));
showHello("greeting", "TypeScript");
console.log('ok this is new');
