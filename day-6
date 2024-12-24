# JavaScript Date-Time / async - await:  

---

### ** `setInterval` and `setTimeout`**  
These are two fundamental JavaScript methods for scheduling code execution.  

#### **`setTimeout`**  
- Executes a function **once** after a specified delay.  
- Syntax:  
  ```javascript
  setTimeout(function, delay, param1, param2, ...);
  ```
- Example:  
  ```javascript
  setTimeout(() => {
    console.log('This runs after 2 seconds.');
  }, 2000);
  ```

#### **`setInterval`**  
- Executes a function **repeatedly** at a specified interval.  
- Syntax:  
  ```javascript
  setInterval(function, interval, param1, param2, ...);
  ```
- Example:  
  ```javascript
  setInterval(() => {
    console.log('This runs every 1 second.');
  }, 1000);
  ```

#### **Clearing Timers**  
- `clearTimeout` stops a `setTimeout` from executing.  
- `clearInterval` stops a `setInterval`.  
- Example:  
  ```javascript
  let timer = setTimeout(() => console.log('Never runs'), 5000);
  clearTimeout(timer);
  ```

#### Common Use Cases:  
- `setTimeout` for delaying code or creating debouncing functions.  
- `setInterval` for periodic tasks like updating a clock or polling a server.  

---

### **1. Callback**
### **Callback in JavaScript**

A **callback** is a function passed as an argument to another function, which is executed after the completion of the parent function’s operation. This is a fundamental concept in JavaScript, especially when dealing with asynchronous programming.

---

### **Why Use Callbacks?**
1. **Asynchronous Operations**: JavaScript is single-threaded, and callbacks enable the execution of code after a time-consuming operation like fetching data or reading files.
2. **Reusability**: Functions can be written once and passed as callbacks to perform specific tasks in different contexts.

---

### **Basic Syntax**
```javascript
function parentFunction(callback) {
  console.log('Parent function is executing...');
  callback(); // Calling the callback
}
function childFunction() {
  console.log('Callback function is executed.');
}

parentFunction(childFunction);
```

**Output:**
```
Parent function is executing...
Callback function is executed.
```

---

### **Callback in Synchronous Code**
Callbacks aren’t limited to asynchronous operations; they can also be used in synchronous functions.

Example:
```javascript
function fetchData(callback) {
  console.log('Fetching data, please wait...');

  // Simulating an asynchronous operation with setTimeout
  setTimeout(() => {
    const data = { id: 1, name: 'John Doe', age: 30 }; // Sample data
    callback(data); // Pass the data to the callback function
  }, 2000);
}

function processData(data) {
  console.log('Data received:', data);
  console.log(`Name: ${data.name}, Age: ${data.age}`);
}

fetchData(processData);

```

---

### **Nested Callbacks (Callback Hell)**

When multiple asynchronous operations depend on one another, callbacks can get deeply nested, making the code hard to read and maintain.

Example:
```javascript
setTimeout(() => {
  console.log('First step');
  setTimeout(() => {
    console.log('Second step');
    setTimeout(() => {
      console.log('Third step');
    }, 1000);
  }, 1000);
}, 1000);
```

This is often called **"Callback Hell"**.

---

### **Avoiding Callback Hell**
To handle deeply nested callbacks, use one of these strategies:
1. **Named Functions**  
   Replace inline callbacks with named functions to improve readability.
   ```javascript
   function step1() {
     console.log('Step 1');
     setTimeout(step2, 1000);
   }
   function step2() {
     console.log('Step 2');
     setTimeout(step3, 1000);
   }
   function step3() {
     console.log('Step 3');
   }

   setTimeout(step1, 1000);
   ```

2. **Promises**  
   Promises flatten the nested structure:
   ```javascript
   new Promise(resolve => {
     setTimeout(() => {
       console.log('First step');
       resolve();
     }, 1000);
   })
   .then(() => {
     return new Promise(resolve => {
       setTimeout(() => {
         console.log('Second step');
         resolve();
       }, 1000);
     });
   })
   .then(() => {
     setTimeout(() => console.log('Third step'), 1000);
   });
   ```
---

### **Common Use Cases for Callbacks**
1. **Event Handling**:  
   ```javascript
   document.getElementById('myButton').addEventListener('click', () => {
     console.log('Button clicked!');
   });
   ```

2. **Array Operations**:  
   Built-in methods like `forEach`, `map`, `filter` take callback functions:
   ```javascript
   const numbers = [1, 2, 3, 4];
   const doubled = numbers.map(num => num * 2);
   console.log(doubled); // [2, 4, 6, 8]
   ```

3. **Asynchronous API Calls**:  
   ```javascript
   function fetchUserData(callback) {
     setTimeout(() => {
       const user = { name: 'Alice', age: 25 };
       callback(user);
     }, 2000);
   }

   fetchUserData(user => {
     console.log(`Name: ${user.name}, Age: ${user.age}`);
   });
   ```

---
### **2. Promises**  
A **Promise** is an object representing the eventual completion (or failure) of an asynchronous operation.  

#### **Basic Syntax**  
```javascript
let promise = new Promise((resolve, reject) => {
  // Async operation
  if (success) {
    resolve(result);
  } else {
    reject(error);
  }
});
```

#### **Using Promises**  
- `.then()` handles successful resolution.  
- `.catch()` handles rejection.  
- `.finally()` executes cleanup actions.  

Example:  
```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data loaded'), 2000);
  });
};

fetchData()
  .then(data => console.log(data)) // Logs: 'Data loaded'
  .catch(err => console.error(err));
```

#### Advanced Promise Features:  
- `Promise.all`: Waits for all promises to resolve or rejects on the first failure.  
- `Promise.any`: Resolves as soon as any promise succeeds.  
- `Promise.race`: Resolves or rejects with the first promise to settle.  

---

### **3. JavaScript Date Type**  
The `Date` object is used to handle dates and times in JavaScript.  

#### **Creating a Date**  
- Current Date:  
  ```javascript
  const now = new Date();
  console.log(now); // Current date and time
  ```

- Specific Date:  
  ```javascript
  const specificDate = new Date('2024-12-25T10:00:00');
  console.log(specificDate); // Wed Dec 25 2024 10:00:00 GMT...
  ```

#### **Common Methods**  
1. **Getting Components**:  
   - `getFullYear()`: Returns the year.  
   - `getMonth()`: Returns the month (0-indexed).  
   - `getDate()`: Returns the day of the month.  
   - `getDay()`: Returns the day of the week (0 = Sunday).  
   - `getHours()`, `getMinutes()`, `getSeconds()`, etc.  

2. **Setting Components**:  
   - `setFullYear(year)`, `setMonth(month)`, `setDate(day)`, etc.

3. **Formatting**:  
   - Use `toLocaleString`, `toISOString`, `toDateString`, etc.  
   ```javascript
   console.log(new Date().toLocaleDateString()); // e.g., '12/18/2024'
   ```

#### **Date Calculations**  
- Dates can be subtracted to get the difference in milliseconds:  
  ```javascript
  const start = new Date('2024-12-01');
  const end = new Date('2024-12-18');
  console.log((end - start) / (1000 * 60 * 60 * 24)); // Days difference
  ```

#### Libraries for Advanced Date Handling:  
- **Moment.js**: For parsing, validating, and manipulating dates.  
- **Day.js**: A lightweight alternative to Moment.js.  

---


Using `async` and `await` with `fetch` makes handling asynchronous operations cleaner and more readable compared to using `.then()` chains. Here's an in-depth explanation:

---

### Basic Structure Async Await 

The `async` keyword marks a function as asynchronous, allowing the use of `await` inside it. The `await` keyword pauses the execution of the function until the promise resolves.

#### **Syntax**:
```javascript
async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json(); // Parse JSON
    console.log(data); // Use the fetched data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
```

---

### **Example: Fetching Data from an API**

Suppose you want to fetch a list of posts from a placeholder API.

```javascript
async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    // Check if the response is OK (status code 200–299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const posts = await response.json(); // Convert the response to JSON
    console.log(posts); // Log the array of posts
  } catch (error) {
    console.error('Failed to fetch posts:', error); // Handle errors
  }
}

fetchPosts();
```

---

### ** Async - Await **

1. **`fetch()`**:
   - Initiates a request to the specified URL.
   - Returns a `Promise` that resolves to the `Response` object.

2. **`await fetch()`**:
   - Waits for the `fetch` promise to resolve before continuing.
   - The function doesn't block the main thread.

3. **Error Handling**:
   - The `try...catch` block captures any network errors or issues like invalid URLs or server errors.
   - `response.ok` checks if the server returned a successful status.

---

### **Fetching Data with Parameters**

You can use `fetch` with query parameters or POST requests.

#### **GET Request with Query Parameters**:
```javascript
async function fetchUserById(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await response.json();
    console.log(user);
  } catch (error) {
    console.error('Error fetching user:', error);
  }
}

fetchUserById(1);
```

#### **POST Request with `fetch`**:
```javascript
async function createPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST', // HTTP method
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'My New Post',
        body: 'This is the content of the post.',
        userId: 1,
      }),
    });

    const newPost = await response.json();
    console.log('Post created:', newPost);
  } catch (error) {
    console.error('Error creating post:', error);
  }
}

createPost();
```

---

### **Using Multiple `await` Calls**

If you need to fetch multiple resources sequentially:

```javascript
async function fetchMultipleResources() {
  try {
    const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await userResponse.json();
    
    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
    const posts = await postsResponse.json();
    
    console.log('User:', user);
    console.log('Posts:', posts);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchMultipleResources();
```

---

### **Parallel Fetching with `Promise.all`**

To fetch multiple resources simultaneously for better performance:

```javascript
async function fetchInParallel() {
  try {
    const [userResponse, postsResponse] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users/1'),
      fetch('https://jsonplaceholder.typicode.com/posts?userId=1'),
    ]);

    const user = await userResponse.json();
    const posts = await postsResponse.json();

    console.log('User:', user);
    console.log('Posts:', posts);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchInParallel();
```

---

### **Advantages of Using `async/await` with `fetch`**

1. **Improved Readability**:  
   Code flows more naturally compared to nested `.then()` chains.
   
2. **Error Handling**:  
   Easier to manage errors using `try...catch`.

3. **Sequential and Parallel Execution**:  
   You can mix sequential `await` calls and parallel execution using `Promise.all`.

---
