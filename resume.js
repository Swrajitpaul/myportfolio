
setTimeout(
  function(){
    alert("NOTE: THE CURRENT RESUME MIGHT NOT BE DISPLAYED \n \nPLEASE CONTACT ME FOR THE UPDATED RESUME\n \nTHANK YOU!");
  },
  1000);

function download(){
  var answer = confirm("Do you want to download?");
  if(answer == true){
    window.open("resume.docx","_self")
  }
  else {

  }
}
