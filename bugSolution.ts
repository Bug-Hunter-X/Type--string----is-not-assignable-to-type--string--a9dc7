function greeter(person: string[]): string {
  return person.map(name => "Hello, " + name).join('\n');
}

let user = ["Jane", "Doe"];
console.log(greeter(user)); //This will not cause an error