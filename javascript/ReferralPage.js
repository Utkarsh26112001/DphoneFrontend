function myFunction() {

  var checkBox = document.getElementById("myCheck");
  var textEdit = document.getElementById("textEdit");
  var textDelete = document.getElementById("textDelete");
  if (checkBox.checked == true){
    textEdit.style.visibility = "visible";
    textDelete.style.visibility = "visible";
  } else if(checkBox.checked == false){
     textEdit.style.visibility = "hidden";
     textDelete.style.visibility = "hidden";
  }
}
function myFunction2() {
  var checkBox = document.getElementById("myCheck2");
  var textEdit = document.getElementById("textEdit");
  var textDelete = document.getElementById("textDelete");
  if (checkBox.checked == true){
    textEdit.style.visibility = "visible";
    textDelete.style.visibility = "visible";
  } else if(checkBox.checked == false) {
     textEdit.style.visibility = "hidden";
     textDelete.style.visibility = "hidden";
  }
}
