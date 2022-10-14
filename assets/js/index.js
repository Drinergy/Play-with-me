// change text and gif when yes button has been clicked
function change(){
    document.getElementById('gif')
    .src="assets/images/yes.gif";
    document.getElementById('message')
    .innerHTML="LESGOOO!!!! MWAAAAA!!";

    const no = document.getElementById('naur');
    no.style.display = 'none';

    const yes = document.getElementById('g');
    yes.style.display = 'none';
}

// move the no button randomly
$('#naur').on('mouseover', function() {
    $(this).animate({
      'top': Math.random() * 300 + "px",
      'left': Math.random() * 300 + "px"
    }, "medium");
  })
