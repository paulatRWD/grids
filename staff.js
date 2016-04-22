

var staff; // let js know that we are creating containers for information
var teamwrap; // let js know that we are creating containers for information

window.onload = function(){
  staff=document.getElementById('staff').children; //populate the array with the list of images
  teamwrap=document.getElementsByClassName('teamwrap'); // populate the array with the team texts

  for(var i = 0 ; i < staff.length ; i++) { // let's create a loop so that we can attach an event to each
                                            //image, so that when one is clicked, something happens

    var staff_member = staff[i];   // grab the current element that we are going to iterate through

      staff_member.addEventListener("click", displayText); // letting js/browser know to listen out for a click on an image in the staff div

  }
};

var previous;

function displayText(event) {
  var staff_clicked = event.target; //grab the elment that was just clicked
  var indexstring = staff_clicked.getAttribute("data-index");
  var index = parseFloat(indexstring); //convert data index value to a number (its a string) and grab data index and storing it for use in the function

  if (previous === undefined)
   {
      previous = index;

      console.log("previous is now : "+ previous);
    }


    for(i=0; i<teamwrap.length;i++) {
      if(i===index) {
        teamwrap[i].classList.add("show");
        teamwrap[i].classList.remove("hide");
      } else {
        teamwrap[i].classList.remove("show");
        teamwrap[i].classList.add("hide");

      }
    }

}




//add class "hide" to the current teamwrap, then
//add class "show" to the teamwrap where data-index of the image clicked = data-index of the text

//,if click current do nothing,
//document.getElementById("demo").innerHTML = "Triggered by a " + x.tagName + " element";

//document.getElementById("demo").addEventListener("click", myFunction);


//var team = array("eva","john","fred","julie","ana","bec","paul")

/*
onclick="viewTeam("eva")"

function viewTeam() {
    document.getElementById("teamwrap").innerHTML = "";
}

on click - if current - do nothing

else

remove show from current

add show to clicked and hide current

remove hide from clicked

*/
