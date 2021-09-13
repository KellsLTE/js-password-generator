//Select elements on the page
const display = document.querySelector('#passwordDisplay')
const form = document.querySelector('#inputForm')
const copyBtnImage = document.querySelector('#copyBtnImg')


//functions

//password function
const generatePassword = (length, chars) => {
    var mask = "";
    if (chars.indexOf("a") > -1) mask += "abcdefghijklmnopqrstuvwxyz";
    if (chars.indexOf("A") > -1) mask += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (chars.indexOf("#") > -1) mask += "0123456789";
    if (chars.indexOf("!") > -1) mask += "~`!@#$%^&*()_+-={}[]:\";'<>?,./|\\";
    var result = "";
    for (var i = length; i > 0; --i)
      result += mask[Math.floor(Math.random() * mask.length)];
    return result;
}

//function to change the image src
const changeImage = () => {
    copyBtnImage.src = `completed-task.png`;
    setTimeout(() => {
        copyBtnImage.src = `notepad.png`;
    }, 3000);
}


//clipboard function
var clipboard = new ClipboardJS("#copyBtn");


// add event listeners
form.addEventListener('submit', e => {
    //prevent default form reponse
    e.preventDefault()

    //clear output
    display.value = '';

    //call password generator function and display results
    display.value = generatePassword(16, '#aA')
    clipboard.on("success", () => {
        //revert image after 5 seconds
      changeImage()
    });

})
