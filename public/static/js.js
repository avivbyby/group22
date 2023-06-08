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

  const aboutUsButton = document.querySelector('.about-us-button');
  const aboutUsText = "Welcome to our dog sitter website! We are a team of experienced dog sitters who love caring for dogs of all shapes and sizes. Our mission is to provide a safe, comfortable, and fun environment for your furry friends while you're away. Please don't hesitate to contact us if you have any questions or would like to schedule a dog sitting appointment.";

  aboutUsButton.addEventListener('click', function() {
    alert(aboutUsText);
  });


  function showTextbox() {
    var textbox = document.getElementById("myTextbox");
    textbox.style.display = "block";
  }


  function addDog() {
    var table = document.getElementById("dogs").getElementsByTagName('tbody')[0];
    var row = table.insertRow(-1);
    var nameCell = row.insertCell(0);
    var ageCell = row.insertCell(1);
    var sizeCell = row.insertCell(2);
    var notesCell = row.insertCell(3);
    var picCell = row.insertCell(4);
    nameCell.innerHTML = '<input type="text" name="dog_name" required pattern="^[a-zA-Z\-]{2,}$">';
    ageCell.innerHTML = '<input type="text" name="dog_age" required min="1" max="20" pattern="^[1-9][0-9]?$|^20$">';
    sizeCell.innerHTML = '<input type="text" name="dog_size" required>';
    notesCell.innerHTML = '<input type="text" name="dog_notes" maxlength="200" pattern="^[a-zA-Z0-9\s]{1,200}$">';
    picCell.innerHTML = '<input type="file" name="dog_pic">';
  }
  

  var form = document.getElementById("searchForm");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    performSearch();
  });

  function performSearch() {
    // Implement search logic here
    // Retrieve form data using document.getElementById("elementId").value
    // Perform search using AJAX or fetch
    // Display search results in the searchResults div using document.getElementById("searchResults").innerHTML
  }

  console.log("Work")