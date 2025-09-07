# HashMap
This project is a simple implementation of a HashMap (key-value store) in JavaScript. It demonstrates how hashing, collision handling, and resizing work under the hood. All common HashMap operations such as adding, retrieving, deleting, and resizing are supported.

## Features
- Store and retrieve values by key (`set`, `get`)
- Update values if a key already exists
- Check if a key exists (`has`)
- Remove key-value pairs (`remove`)
- Track the number of stored keys (`length`)
- Clear all entries (`clear`)
- Get all keys (`keys`)
- Get all values (`values`)
- Get all entries (`entries`)
- Automatic resizing when the load factor is exceeded

## Project Structure
```bash
HashMap/
│── main.js      # HashMap class implementation
│── index.js     # Example usage / testing
│── README.md    # Project documentation
```

## Usage
**1. Clone or download the project**
```bash
 git clone <your-repo-url>
cd HashMap
```
**2. Run the project with Node.js**
```bash
node index.js
```
**3. Example Output**
```bash
import { HashMap } from "./main.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("elephant", "gray");

console.log(test.get("elephant"));   // gray
console.log(test.has("banana"));     // true
console.log(test.length());          // 3
console.log(test.keys());            // [ 'apple', 'banana', 'elephant' ]
console.log(test.values());          // [ 'red', 'yellow', 'gray' ]
console.log(test.entries());         // [ [ 'apple', 'red' ], [ 'banana', 'yellow' ], [ 'elephant', 'gray' ] ]
```
## Learning Objectives
- Understand how hashing works with prime multipliers.
- Handle collisions using separate chaining.
- Resize dynamically when the load factor is exceeded.
- Practice implementing core data structures from scratch.