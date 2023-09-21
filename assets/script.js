//This wraps all my code using jquery.
$(document).ready(function () {
  $("button").on("click", function () {
    var textToSave = $(this).siblings("textarea").val();
    var blockId = $(this).parent().attr("id");
    localStorage.setItem(blockId, textToSave);
    //everytime you click the button it will relay what time you save and what you have scheduled for that day.
    console.log(
      "You saved, " +
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

  let scheduleElArray = [
    $("#hour-8"),
    $("#hour-9"),
    $("#hour-10"),
    $("#hour-11"),
    $("#hour-12"),
    $("#hour-1"),
    $("#hour-2"),
    $("#hour-3"),
    $("#hour-4"),
    $("#hour-5"),
    $("#hour-6"),
  ];

  //This shows the time everytime you refresh the page.
  const dayjsObject = dayjs();
  $("#currentDay").text(dayjsObject.format("dddd, MMMM DD YYYY, h:mm.ss"));

  //This function allows the color of the save boxes to change to the current hour.
  function updateTime() {
    let currentHour = new Date().getHours(); // Get the current hour

    scheduleElArray.each(function () {
      let blockHour = parseInt($(this).attr("data-hour")); // Get the block hour

      $(this).removeClass("past present future");

      if (currentHour > blockHour) {
        $(this).addClass("past");
      } else if (currentHour === blockHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  // This displays the current hour and updates the time blocks on page load
  updateTime();
});
