var user = null;

user = {};

user.name = "John";
user.surname = "Mike";
user.name = "Peter";
delete user.name;

console.log(user)



var fruit = {
apple: 20,
pear: 20,
peach: 10
};

count = 0;

for (c in fruit) {
  count += fruit[c]
  
}
console.log(count);
