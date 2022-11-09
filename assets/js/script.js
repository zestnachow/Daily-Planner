// storing a reference to save buttons for all time blocks
const saveButton = $(".saveBtn");
// storing a reference to the current date/time/day of the week/year and dynamically updating the text content of #currentDay
let currentDateAndTime = dayjs().format("ddd, MMM D, YYYY h:mm A");
$("#currentDay").text(currentDateAndTime);

$(function () {
    // grabs the current time in hours, rounded to an integer and in military time
    let currentHour = dayjs().hour();
    // executes function for each HTML element with a class of time-block
    $(".time-block").each(function() {
        // stores a reference to each time block id in numerical form
        let timeBlock = parseInt($(this).attr("id"));
        // applies past class to time block if its ID is less than the current time in hours
        if (timeBlock < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        // applies present class to time block if its ID is strictly equal to the current time in hours
        } else if (timeBlock === currentHour) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        // applies future class to time block if its ID is greater than the current time in hours
        } else {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
    })
    // event listener for all save buttons, stores references to the relevant time block's ID (aka the hour it represents) and the user input in the time block's text area, sets these values in local storage
    saveButton.on("click", function() {
        const notes = $(this).siblings(".description").val();
        const time = $(this).parent().attr("id");
        localStorage.setItem(time, notes);
    })
})

// updates content of time block textareas with their corresponding values saved in local storage
$("#9 textarea").val(localStorage.getItem("9"));
$("#10 textarea").val(localStorage.getItem("10"));
$("#11 textarea").val(localStorage.getItem("11"));
$("#12 textarea").val(localStorage.getItem("12"));
$("#13 textarea").val(localStorage.getItem("13"));
$("#14 textarea").val(localStorage.getItem("14"));
$("#15 textarea").val(localStorage.getItem("15"));
$("#16 textarea").val(localStorage.getItem("16"));
$("#17 textarea").val(localStorage.getItem("17"));