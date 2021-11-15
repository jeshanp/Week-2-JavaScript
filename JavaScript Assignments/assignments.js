/*
Jeshan Peryagh
Assignments 1 - 12
*/

//Assignment 1: Completed online

//Assignment 2: Write a JavaScript program to compute the sum and product of an array of integers.
var numArray = [1, 2, 3, 4];
console.log(`Assignment 1: Array of numbers = ${numArray}`);
//Sum
var sumTotal = 0;
numArray.forEach((element) => (sumTotal += element));
console.log(`Sum of array = ${sumTotal}`);
//Product
var productTotal = 1;
numArray.forEach((element) => (productTotal *= element));
console.log(`Product of array = ${productTotal}`);

//Assignment 3: Write a JavaScript function to merge two arrays and removes all duplicates elements.
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];

var merge_array = (a1, a2) => {
  let mergedArray = a1.concat(array2);
  for (let i = 0; i < mergedArray.length; ++i) {
    for (let j = i + 1; j < mergedArray.length; ++j) {
      if (mergedArray[i] == mergedArray[j]) mergedArray.splice(j--, 1);
    }
  }

  console.log(mergedArray);
};

merge_array(array1, array2);

//Assignment 4: Write a pattern that matches e-mail addresses.
var email = "test123@example.com";

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var validateEmail = (email) => emailRegex.test(String(email).toLowerCase());

if (validateEmail(email) == true) {
  console.log(`"${email}" is a valid email.`);
} else console.log(`${email} is not a valid email.`);

//Assignment 5: Write a JavaScript function to get the values of First and Last name of the following form:
var form = new FormData(document.getElementById("form1"));
var fname = form.get("fname");
var lname = form.get("lname");
console.log(`First name is: ${fname}`);
console.log(`Last name is: ${lname}`);

//Assignment 6: Write a JavaScript program to remove items from a dropdown list.
var removecolor = () => {
  let dropDown = document.getElementById("colorSelect");
  for (var i = 0; i <= dropDown.options.length; i++) {
    if (dropDown.options[i].selected) {
      dropDown.removeChild(dropDown.options[i]);
      break;
    }
  }
};

//Assignment 7: Write a JavaScript program to highlight the bold words of the paragraph, on mouse over a certain link.
var highlightBold = () => {
  for (element of document.getElementsByClassName("boldtext")) {
    element.style.color = "red";
    element.style.textDecoration = "underline";
  }
};
var unhighlightBold = () => {
  for (element of document.getElementsByClassName("boldtext")) {
    element.style.color = "black";
    element.style.textDecoration = "none";
  }
};

//Assignment 8: Write a JavaScript function to get the month name from a particular date.
var month_name = (date) => monthNames[date.getMonth()];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));

//Dynamically update HTML to display selected month
var getCurrMonth = () => {
  let dateArr = document.getElementById("datefield").value.split("-");
  dateArr[1] = dateArr[1] - 1;
  document.getElementById("monthText").textContent = monthNames[dateArr[1]];
};

//Assignment 9: Write a JavaScript function to test whether a date is a weekend.
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

var is_weekend = (dateinput) => {
  if (dateinput.length == 1) {
    var nDate = new Date(document.getElementById("datefieldweekend").value);
  } else {
    let nDate = new Date(Date.parse(dateinput));
    if (
      dayNames[nDate.getDay()] == "Saturday" ||
      dayNames[nDate.getDay()] == "Sunday"
    ) {
      return `${dateinput} is a weekend`;
    } else return `${dateinput} is not a weekend`;
  }
};

console.log(is_weekend("Nov 15, 2014"));
console.log(is_weekend("Nov 16, 2014"));
console.log(is_weekend("Nov 17, 2014"));

var getWeekend = () =>
  (document.getElementById("dateweekendText").textContent = is_weekend(
    document.getElementById("datefieldweekend").value
  ));

//Assignment 10: Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
    libraryID: 1254,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
    libraryID: 4264,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
    libraryID: 3245,
  },
];

var readBooks = (book) =>
  `\nBook title: ${book.title}` +
  `\nAuthor: ${book.author}` +
  `\nReading status: ${book.readingStatus}` +
  `\nLibrary ID: ${book.libraryID}`;

library.forEach((entry) => console.log(readBooks(entry)));

//Assignment 11: Write a JavaScript program to create a Clock.
var displayTime = () => clearInterval(startTime);

var startTime = setInterval(function () {
  var d = new Date();
  var t = d.toLocaleTimeString();
  console.log(t);
}, 1000);

//Optional: Stop time display in console after 10 seconds (10000ms)
var timeoutTime = setTimeout(function () {
  clearInterval(startTime);
}, 10000);

//Assignment 12: Write a JavaScript program to sort an array of JavaScript objects.
//Using library variable from Assignment 10 sorted by title name
console.log(library); //Original

var sortedTitle = JSON.parse(JSON.stringify(library)); //Create copy instead of reference

sortedTitle.sort((a, b) => {
  var nameA = a.title.toUpperCase(); // ignore upper and lowercase
  var nameB = b.title.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0; //Names equal
});

console.log(sortedTitle); //Sorted by title
