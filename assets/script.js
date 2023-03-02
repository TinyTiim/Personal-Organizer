// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(document).ready(function () {
  $("button").on("click", function () {
    var textToSave = $("textarea").val();
    console.log(
      "You saved," +
        textToSave +
        " at this time, " +
        dayjsObject.format("h:mm.ss")
    );

    if(localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) +1;

    } else {
      localStorage.clickcount = 1;
    }
    
  });



const dayjsObject = dayjs();

let schedule8am = $("#hour-8");
let schedule9am = $("#hour-9");
let schedule10am = $("#hour-10");
let schedule11am = $("#hour-11");
let schedule12am = $("#hour-12");
let schedule1pm = $("#hour-1");
let schedule2pm = $("#hour-2");
let schedule3pm = $("#hour-3");
let schedule4pm = $("#hour-4");
let schedule5pm = $("#hour-5");
let schedule6pm = $("#hour-6");

let scheduleElArray = [
  schedule8am,
  schedule9am,
  schedule10am,
  schedule11am,
  schedule12am,
  schedule1pm,
  schedule2pm,
  schedule3pm,
  schedule4pm,
  schedule5pm,
  schedule6pm,
];



$("#currentDay").text(dayjsObject.format("dddd, MMMM DD YYYY, h:mm.ss"));

function updateTime() {
  
  let currentHour = dayjs().format("hh");
  console.log(currentHour);
  for (let i = 0; i < scheduleElArray.length; i++) {
    var blockHour = parseInt(scheduleElArray[i].data("hour"));
    scheduleElArray[i]
      .removeClass("future")
      .removeClass("past")
      .removeClass("present");

    if (parseInt(currentHour) > blockHour) {
      scheduleElArray[i].addClass("past");
    } else if (
      parseInt(currentHour) === blockHour
    ) {
      scheduleElArray[i].removeClass("past");
      scheduleElArray[i].addClass("present");

    } else {
      scheduleElArray[i].removeClass("past");
      scheduleElArray[i].removeClass("present");
      scheduleElArray[i].addClass("future");
    }
  }
}

updateTime();





});
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
