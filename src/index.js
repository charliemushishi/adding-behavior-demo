// Big thing: Race condition... what loads faster: JavaScript or HTML/CSS?

// 3 things
// Define Event Handler
// How to make it work
// 1. Make a function to register all event handlers
// 2. Make sure the DOM registers event handlers once it loads

const state = {
    kudosCount: 0,
}

// Function (event handler) to describe what happens when a certain event fires

const addComment = () => {
    const newComment = document.createElement("p");
    const randomComments = [
        "I luv yuor blog ^___^ TYSM!!",
        "cool site..... watch out..... Y2K is coming up.......",
        "Thx for kudos, kudos back~",
        "Always good to meet another fan! Cheers from another fan in Kentucky ^o^",
        "~*~* WELCOME TO THE SHADOW WEBRING *~*~ sned this to 10 other blogs",
        "The Internet is Amazing o.O This is a great website!",
    ];
    newComment.textContent = randomComments[Math.floor(Math.random()*randomComments.length)];
    const commentsSection = document.getElementById("guestbook-comments__section");
    commentsSection.appendChild(newComment);
};

const addKudos = () => {
    state.kudosCount += 1;
    const kudosContainer = document.getElementById("kudos-counter__span");
    kudosContainer.textContent = `${state.kudosCount}`;
};

const changeTheme = () => {

};

const setGreenTheme = () => {
    const body = document.getElementsByTagName("body")[0];
    body.className = "green"
}
const setBlueTheme = () => {
    const body = document.getElementsByTagName("body")[0];
    body.className = "blue";
};

const setRedTheme = () => {
    const body = document.getElementsByTagName("body")[0];
    body.className = "red";
};

// Function to register all event handlers (This is necessary because of how browsers work (aka DOMContentLoaded event))
const registerEventHandlers = () => {
    const addCommentButton = document.getElementById("guestbook__button");
    addCommentButton.addEventListener("click", addComment);

    document.getElementById("kudos__button").addEventListener("click", addKudos);

    document.getElementById("blue__button").addEventListener("click", setBlueTheme);

    document.getElementById("red__button").addEventListener("click", setRedTheme);

    document.getElementById("green__button").addEventListener("click", setGreenTheme);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);