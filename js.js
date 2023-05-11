function openForm1() {
    document.getElementById("form1").style.display = "block";
    document.getElementById("form2").style.display = "none";
    document.getElementById("form3").style.display = "none";
  }
  
  function openForm2() {
    document.getElementById("form1").style.display = "none";
    document.getElementById("form2").style.display = "block";
    document.getElementById("form3").style.display = "none";
  }

  function openForm3() {
    document.getElementById("form1").style.display = "none";
    document.getElementById("form2").style.display = "none";
    document.getElementById("form3").style.display = "block";

    var formElements = document.getElementById("form3").elements;
    for (let i = 0; i < formElements.length; i++) {
    formElements[i].value="";
  }

  }

  console.log("Work")