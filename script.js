
$("#joke").append("<p>Q. What do you call a fake noodle? <br /> A. An impasta</p>");


$("#noShow+").hide();

$("h1").html("The Best Jokes Ever!");

$("#toggleJokes").css({
    "background-color": "orange",
    "color": "white",
    "font-size": "20px",
    "padding": "10px",
    "border-radius": "5px",
    "border": "2px solid black",
    "margin": "10px"
});

$("#toggleJokes").click(function() {
  $("#joke").toggle();
  
  });

$("#changeback").css({
  "background-color": "grey",
  "color": "white",
  "font-size": "20px",
  "padding": "10px",
  "border-radius": "5px",
  "border": "2px solid black",
  "margin": "10px"
})

$("#changeback").click(function() {

  document.body.style.background = "teal";
});
  
   
let opinion = prompt("Are these the funniest jokes ever? Please answer yes or no.");
switch(opinion) {
  case "yes":
    text = "Agreed.";
    break;
  case "no":
    text = "Sorry";
    break;
  default:
    text = "I don't understand";
}
 





// alert('My project is going to be awesome!');