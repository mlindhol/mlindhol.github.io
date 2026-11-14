const greeting = document.getElementById("greeting");
greeting.style.textAlign = "center";
// We use the variable name greeting to refer to our HTML div.
greeting.style.marginTop = "50px";
// We use .style to access the div's styling, then set a target CSS property to some value.
// We use a different case in JavaScript (camelCase) and CSS (kebab-case).
const username = window.prompt("What's your name?", "Jane");
// "What's your name?" is what the dialogue box will say. "Jane" is the placeholder text--a suggestion to help the user.
// window.prompt opens a dialogue box where the user can type input.
// Whatever the user types gets stored in the variable username.
// In the real world, this is not how we typically collect user input--you will see why when you test it. But it is a quick and easy way to interact.
greeting.innerHTML = "Welcome to my website, " + username + "!";
// Here we change our HTML document, setting the div's contents to that phrase.
