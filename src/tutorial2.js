export const person = {
  name: "shah2",
  email: "norulshahlam2@gmail.com",
};

export function sayHello() {
  return `hello ${person.name}, your email is: ${person.email}`;
}

//if u 1 2 call from this file without having the curly braces,
const greeting = "hello from export default";
export default greeting;
