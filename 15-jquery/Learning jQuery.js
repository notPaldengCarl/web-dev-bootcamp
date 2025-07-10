$(document).ready(function() {
    $("h1").css("color", "red");
});

document.querySelector("h1");
$("h1");

document.querySelectorAll("button");
$("button");

$("h1").css("color", "green");
$("h1").css("font-size, 5rem");

var colorOfH1 = $("h1").css("color");
var fontSizeOfH1 = $("h1").css("font-size");

$("h1").addClass("big-title");
$("h1").removeClass("big-title");
$("h1").addClass("big-title margin-50");
$("h1").hasClass("margin-50");

$("h1").text("bye");
$("button").text("Don't click me");

$("h1").html("<em>Bold</em> Text");

$("img").attr("src");
$("img").attr("src", "https://picsum.photos/200/300");
$("img").attr("class");

$("button").click(function() {
    $("button").css("color", "red");
});

for (var i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        this.style.color = "red";
    });
}

$("button").click(function() {
    $(this).css("color", "red");
});

$("input").keypress(function(event) {
    console.log(event.key);
});

$("html").keypress(function(event) {
    console.log(event.key);
});

$("html").keypress(function(event) {
    console.log(event.key);
    $("h1").text($("h1").text() + event.key);
});

$("button").on("click", function() {
    $(this).css("color", "purple")
});

$("button").on("mouseover", function() {
    $(this).css("color", "purple")
});

$("h1").before("<button>on top</button>");
$("h1").after("<button>below</button>");
$("h1").prepend("<button>left</button>");
$("h1").append("<button>right</button>");
$("button").remove();

$("button").on("click", function() {
    $("h1").show();
});
$("button").on("click", function() {
    $("h1").hide();
});
$("button").on("click", function() {
    $("h1").toggle();
});

$("button").on("click", function() {
    $("h1").fadeIn();
});
$("button").on("click", function() {
    $("h1").fadeOut();
});
$("button").on("click", function() {
    $("h1").fadeToggle();
});

$("button").on("click", function() {
    $("h1").slideUp();
});
$("button").on("click", function() {
    $("h1").slideDown();
});
$("button").on("click", function() {
    $("h1").slideToggle();
});

$("button").on("click", function() {
    $("h1").animate({
        opacity: 0.5,
    });
});
$("button").on("click", function() {
    $("h1").animate({
        opacity: 0.5,
        margin: "20px",
    });
});
$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({
        opacity: 0.5,
        margin: "20px",
    });
});
