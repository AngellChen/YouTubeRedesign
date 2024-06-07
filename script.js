let 
caption = document.getElementsByClassName("caption"),
captionBox = document.getElementById("box"),
captionContent = document.getElementById("captionContent"),
newSize = 14,
fontColor = document.getElementById("colorpicker"),
backColor = document.getElementById("backgroundcolor"),
custombtn = document.getElementById("customOff"),
dots = document.getElementById("check"),
ccoff = document.getElementById("ccOff"),
ccon = document.getElementById("ccOn"),
fixoff = document.getElementById("fixOff"),
fixon = document.getElementById("fixOn"),
likeoff = document.getElementById("likeOff"),
likeon = document.getElementById("likeOn");

//Press the button next to the caption to open the caption, and click again to close it
function captionOnOff(){
    if (captionBox.style.display === "block"){
        captionBox.style.display = "none";
    } else if (captionBox.style.display = "none"){
        captionBox.style.display = "block";
    } else{
        return;
    }
}
//Press T+ to enlarge the caption text size by one
function sizeIncrease(){
newSize++;
captionContent.style.fontSize = newSize + 'px';
}
//Press T- to reduce the size of the caption text by one
function sizeDecrease(){
    newSize--;
    captionContent.style.fontSize = newSize + 'px';
    }
//After selecting the font's colour(chooose the colour from colour picker), the caption text changes to the corresponding colour
function textColor(){
    captionBox.style.color = fontColor.value;
}
//After selecting the background colour(chooose the colour from colour picker), the caption background changes to the corresponding colour
function backgroundColor(){
    captionBox.style.backgroundColor = backColor.value;
}
//After selecting the font's type(press the font selection), the caption text changes to the corresponding font family
 //start of the code from https://stackoverflow.com/questions/197748/how-do-i-change-the-background-color-with-javascript
function updateFont() {
    var selector = document.getElementById('selectFont');
    var family = selector.options[selector.selectedIndex].value;
    captionContent.style.fontFamily = family;        
  }
  //end of the code from https://stackoverflow.com/questions/197748/how-do-i-change-the-background-color-with-javascript
//Press the icon cc to turn on the caption
function captionOnOff(){
    if (captionBox.style.display === "block"){
        captionBox.style.display = "none";
        ccon.style.display = "none";
        ccoff.style.display = "block";

    } else if (captionBox.style.display = "none"){
        captionBox.style.display = "block";
ccon.style.display = "block";
ccoff.style.display = "none";
    } else{
        return;
    }
}
//press fix/like buttons change the colour of the buttons
function fixOnOff(){
    if (fixon.style.display === "block"){
        fixon.style.display = "none";
        fixoff.style.display = "block";

    } else if (fixon.style.display = "none"){
fixon.style.display = "block";
fixoff.style.display = "none";
    } else{
        return;
    }
}
function likeOnOff(){
    if (likeon.style.display === "block"){
        likeon.style.display = "none";
        likeoff.style.display = "block";

    } else if (likeon.style.display = "none"){
likeon.style.display = "block";
likeoff.style.display = "none";
    } else{
        return;
    }
}
//Press the control icon to open the custom caption bar 
function sidemenu(){
    dots.checked = true;
}

