
const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/take-the-hope.webp") {
        myImage.setAttribute("src", "images/firefox2.png");
    } else {
        myImage.setAttribute("src", "images/take-the-hope.webp");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


// setUserName() function
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName(); 
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool,
    ${myName}`;
}

if (!localstorage.getItem("name")) { 
    setUserName();

} else {
    const storedName = localstorage.getItem("name");
    myHeading.textContent = `Mozilla is cool,
    ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};