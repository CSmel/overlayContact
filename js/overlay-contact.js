// This is a simple function, it would better by using animate method.
$(document).ready(function () {
    $("button").click(function () {
        $("#overlay").css("display", "flex"); // change from display none to flex
        $("#closeCard").click(function () {
            $("#overlay").hide(); // close the popup
        });
    });
});