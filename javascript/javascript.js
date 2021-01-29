function randomColor(){
  let thisOutput = Math.random() * 360 + 1 ;
  console.log('I output: ' + thisOutput);
  return thisOutput ;
}

function randomPer(){
  let thisOutput = Math.random() * 100 + 1 ;
  return thisOutput ;
}

$(document).ready(function() {

  let first = randomPer() + "%";
  let second = "95" + "%";
  second = randomPer() ;
  if (second < 50){
    second = second + 5 ;
  }else{
    second = second - 5 ;
  }

  second = second + "%" ;

  var new_bgcolor = "hsl("+ randomColor() +", "+ first +", "+ second +")";
  var new_textcolor = "hsl("+ randomColor() +", "+ first +", "+ second +")";
  var new_bordercolor = "hsl("+ randomColor() +", "+ first +", "+ second +")";

  $('body').css({
    'background-color': new_bgcolor,
  });

  $('#midground').css({
    'background-color': new_textcolor,
  });

  $('#foreground').css({
    'background-color': new_bordercolor,
  });
});
