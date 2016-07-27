// $.fn.play=function(){
//    var audio = document.getElementById("audio");
//    audio.play();
// };
// function too_much(){
// 	var budy = document.getElementsByTagName("body")budy.style.width; 
// 	var list = document.getElementsByTagName("ul");
// 	var nui = document.getElementById("cool");
// 	if(budy <= "1582px"){
// 		list.style.display = "none";
// 		nui.style.display = "none";
// 	};
// };
$(document).ready(function(){
    $("#cool").click(function(){
        $("#say").fadeToggle(270);
        $("#rep2").fadeToggle(270);
        var mo = new Audio("audio/giggle.mp3");
        mo.play();
        // $("#audio").html("<audio autoplay><source src="audio/moan.mp3" type="audio/mpeg"></audio>");
    });
    $("#say").mouseenter(function(){
        $("#rep2").hide(5);
        $("#rep1").show(5);
    });
    $("#say").mouseleave(function(){
        $("#rep1").hide(5);
        $("#rep2").show(5);
    });
    // $("#cool").click(function(){
        // $("#audio").html("<audio autoplay><source src="audio/moan.mp3" type="audio/mpeg"></audio>");
    // });
});
