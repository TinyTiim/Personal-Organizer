//This wraps all my code using jquery.
$(document).ready(function () {
  $("button").on("click", function () {
    var textToSave = $("textarea").val();
    //everytime you click the button it will relay what time you save and what you have scheduled for that day.
    console.log(
      "You saved," +
        textToSave +
        " at this time, " +
        dayjsObject.format("h:mm.ss")
    );

      localStorage.setItem(dayjsObject.format("dddd, MMMM DD YYYY, h:mm.ss"),textToSave);


    //I wanted to include a if statement to track how many times you click throughtout the page.
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
      localStorage.clickcount = 1;
    }
  });

  //These are to track the time for the function to below so they can correlate to the correct hour.
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

  //This shows the time everytime you refresh the page.
  const dayjsObject = dayjs();
  $("#currentDay").text(dayjsObject.format("dddd, MMMM DD YYYY, h:mm.ss"));

  //This function allows the color of the save boxes to change to the current hour.
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
      } else if (parseInt(currentHour) === blockHour) {
        scheduleElArray[i].removeClass("past");
        scheduleElArray[i].addClass("present");
      } else {
        scheduleElArray[i].removeClass("past");
        scheduleElArray[i].removeClass("present");
        scheduleElArray[i].addClass("future");
      }
    }
  }
  //This displays current hour in the console, to make sure its running properly.
  updateTime();
});
