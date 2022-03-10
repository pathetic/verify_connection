$(document).ready(function() {
    window.addEventListener("offline", function() {
        $("#displayNui").css("display", "flex")
        $.post("http://verify_connection/lock")
    });

    window.addEventListener("online", function() {
        setTimeout(function() {
            $("#displayNui").css("display", "none")
            $.post("http://verify_connection/unlock")
        }, 5000)
    });
});