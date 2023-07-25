// This is the advanced JS challenges from FES. Uncomment the console.log
// to verify the results for the functions.

// Q1. Given a number, convert it to star rating.
// If the rating is 4, give it 4 "*"s.
// If it has a .5 rating, add a "." to indicate it.

function showRating(num) {
  newStr = "";
  for (i = 0; i < num; i++) {
    newStr += "*";
    if (i < Math.floor(num) - 1) {
      newStr += " ";
    } else break;
  }
  if (num % 1 !== 0) {
    newStr += " .";
  }
  return newStr;
}

// The function has the following steps.
// 1. Initalize the string for the rating.
// 2. For Loop: If i is smaller than the number given, add a "*"
// 3. If the i we are on is not the same as the rounded down number, add
// " "
// 4. After the for loop ends we need to check if we need to add
// a "." for half rating.

// console.log(showRating(4))
// console.log(showRating(.5))
// console.log(showRating(2.5))

// Q2. Given an array of numbers, return the prices sorted by low to high.

function sortLowToHigh(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let inserted = false;

    for (let j = 0; j < newArr.length; j++) {
      if (arr[i] <= newArr[j]) {
        newArr.splice(j, 0, arr[i]); // Insert the element at the correct position
        inserted = true;
        break;
      }
    }

    if (!inserted) {
      newArr.push(arr[i]); // If the element is greater than all existing elements, add it at the end
    }
  }

  return newArr;
}

function sortLowToHighSort(arr) {
  // Use the sort method to sort the array in ascending order
  return arr.sort((a, b) => a - b);
}

//   If you change a - b to b - a, it will sort in descending order.

// console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]))
// console.log(sortLowToHigh([5, 10, 0 ,-5]));

// console.log(sortLowToHighSort([5, 10, 0 ,-5]));

// Q3. Given an array of objects (with id and price), sort the array by price
// from low to high.

function sortLowToHighObjects(arr) {
  const newArr = [];
  newArr.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    let inserted = false;

    for (let j = 0; j < newArr.length; j++) {
      if (arr[i].price <= newArr[j].price) {
        newArr.splice(j, 0, arr[i]); // Insert the element at the correct position based on price.
        inserted = true;
        break;
      }
    }

    if (!inserted) {
      newArr.push(arr[i]); // If the element.price is greater than all existing elements, add it at the end
    }
  }

  return newArr;
}

function sortLowToHighSortObjects(arr) {
  // Use the sort method to sort the array in ascending order based on the 2nd element of each object, titled price.
  return arr.sort((a, b) => a.price - b.price);
}

// console.log(sortLowToHighObjects([{id: 1, price: 50},{id: 2, price: 30},{id: 3, price: 60},{id: 4, price: 10}]))

// console.log(sortLowToHighSortObjects([{id: 1, price: 50},{id: 2, price: 30},{id: 3, price: 60},{id: 4, price: 10}]))

//   Q4. Promises
// Watch FES Promises crashcourse.

// Q5. Find all the posts by a single user
// Call this API "https://jsonplaceholder.typicode.com/posts" and return
// all the posts by any given user Id.

async function postsByUser(userId) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
  
  const data = await promise.json();

  const posts = data.filter(element => element.userId === userId)

  console.log(posts)
}

postsByUser(5);

// Q6. First 6 Incomplete Todos

async function sixIncompleteToDos(completion) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
  
  const data = await promise.json();

  const posts = data.filter(element => element.completed === completion).slice(0 , 6);

  console.log(posts)
}

// If you need the first x amount of objects in an array, you slice it after you filter.

sixIncompleteToDos(false);
