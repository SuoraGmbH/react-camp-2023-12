export function HelloWorld() {
  console.log(this);
}

class User {
  constructor(firstName) {
    this.firstName = firstName;
  }
  printName = () => {
    console.log(this.firstName);
  };
  printNameFunction() {
    console.log(this.firstName);
  }
}

const user1 = new User("Alex");
const user2 = new User("Michael");
user1.printName();
