const person = {
    name: '윤아준',
    age: 19,
    introduce(name) {
        return `안녕하세요, 제 이름은 ${this.name}이고 ${name}입니다.`;
    },
    getOlder() {
        this.age++;
    }
};

person.name = "박서준";
var hello = person.introduce('이동규');
console.log(hello);