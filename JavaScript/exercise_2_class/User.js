class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compare(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.name} is older than ${otherUser.name}`;
    } else if (this.age < otherUser.age) {
      return `${otherUser.name} is older than ${this.name}`;
    } else {
      return `${this.name} and ${otherUser.name} are of the same age`;
    }
  }
}

// Example
const user1 = new User("John", 30);
const user2 = new User("Mary", 25);

console.log(user1.compare(user2));