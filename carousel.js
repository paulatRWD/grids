<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>


<script>
  //jquery always starts with this line
  $(document).ready(function(){

    $(".imgbkgrnd").click(function(){ //when you click a slide

      $(this).removeClass("show"); // 'this' slide is no longer 'current' from the teamtxt

                $(this).addClass("moveleft");

      $(this).next().addClass('show'); //the slide after 'this' becomes current

                $(this).delay(400).queue(function(next){

                    $("#slider").append(this);

                    $(this).removeClass("moveleft");

                    next(); });

       }); //end click
            });
</script>
</head>
<body>
<div id="slider">

    <div class="imgbkgrnd eva show"></div>
    <div class="imgbkgrnd ana hide"></div>
    <div class="imgbkgrnd paul hide"></div>
    <div class="imgbkgrnd bec hide"></div>
</div>
</body>
</html>

//var team = array("eva","john","fred","julie","ana","bec","paul")

/*
onclick="viewTeam("eva")"

function viewTeam() {
    document.getElementById("teamwrap").innerHTML = "";
}

on click - if current - do nothing

else

remove show from current

add show to clicked

remove hide from clicked

*/
