document.addEventListener("DOMContentLoaded", function() {
  const myImage = document.querySelector("img");
  myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc.includes("firefox-icon.png")) {
      myImage.setAttribute("src", "images/火狐.jpg");
    } else {
      myImage.setAttribute("src", "images/firefox-icon.png");
    }
  };

  const myButton = document.querySelector("#changeUser");
  const myHeading = document.querySelector("#greeting");
  
  function setUserName() {
    const myName = prompt("Please enter your name.");
    if (myName) {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

  myButton.onclick = setUserName;
});