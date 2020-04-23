// typeName();
// writeName();
$(".photo").mouseover(function() {
      $(this).attr("src", $(this).attr("data-animate"));
  });
$(".photo").mouseout(function() {
      $(this).attr("src", $(this).attr("data-still"));

  });

 var nameText = "Dan Weikart";
//  var nameLet = nameText.split("");
 var currentIndex = 0;
 
  function writeName() {
    var nameEl = document.getElementById("danFont");
    currentIndex = 0;
    console.log(nameText[currentIndex]);

    // nameEl.textContent = nameText[currentIndex];
    // var wordTimer = setInterval(function() {
    //   currentIndex++;
    //   if (currentIndex === nameText.length) {
    //     clearInterval(wordTimer);
    //   } else{
    //     nameEl.textContent += nameText[currentIndex];
    //   }
    // }, 1000);
  }
  // var nameText = "Dan Weikart";
  // var nameArr = nameText.split("");
  // console.log(nameArr);
  // console.log(nameArr.length);
  // var timer;
  // function typeName() {
  //   var nameText = "Dan Weikart";
  //   var nameArr = nameText.split("");
  //   console.log(nameArr);
  //   console.log(nameArr.length);
  //   var nameTimer;




  //   console.log(nameArr.length);
  //   if(nameArr.length > 0) {
  //     document.getElementsByClassName("danFont").innerHTML += nameArr.shift();
  //   } else  {
  //     clearTimeout(nameTimer);
  //     return false;
  //   }
  //   nameTimer = setTimeout("typeName()", 70);
  // }
