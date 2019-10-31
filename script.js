// This is to display the current time, date, month
$("#currentDay").text(moment().format("dddd, MMMM Do, h:mm:ss a"));

// this is to add a on click event listener to the save buttons
$(document).ready(function(){
    $(".saveBtn").on("click", function() {
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem (value, time);
    })
});

// this function is to change the colours of the blocks based on the current time
function changeColours() {
    var currentHour = moment().hours();

    $(".time-block").each(function(){
        var blockHour = parseInt($(this).attr("id").split("-")[1]);

        if (currentHour > blockHour) {
            $(this).addClass("past");
        }
        else if (currentHour === blockHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    });
}    

changeColours();