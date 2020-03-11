// ---------- JS for Index Page ---------- //
function changeProfile() {
  var x = document.getElementById("pfp");
  if (x.getAttribute("src") == "pics/pfp.jpg") {
    x.setAttribute("src", "pics/pfp1.jpg");
    x.style.width = "1500px";
  }
  else if (x.getAttribute("src") == "pics/pfp1.jpg") {
    x.setAttribute("src", "pics/pfp2.jpg");
    x.style.width = "1300px";
  }
  else if (x.getAttribute("src") == "pics/pfp2.jpg") {
    x.setAttribute("src", "pics/pfp.jpg");
    x.style.width = "1200px";
  }
}

function changePlug() {
  var x = document.getElementById("thePlug");
  x.innerHTML = "Have you tried clicking on the picture? :)";
}

function removePlug() {
  var x = document.getElementById("thePlug");
  x.innerHTML = 'Check out my Instagram on the "About" page!';
}

// ---------- JS for Projects Page ---------- //
// ----- Mocking SpongeBob ----- //
function openSpongeBob() {
  var x = document.getElementById("showSpongeBob");
  var y = document.getElementById("styleOpenSpongeBob");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.innerHTML = "Hide Screenshots";
  }
  else {
    x.style.display = "none";
    y.innerHTML = "Show Screenshots"
  }
}

function prevSpongeBob() {
  var x = document.getElementById("spongePic");
  if (x.getAttribute("src") == "../pics/MockingSpongebob/mockingSpongeBob1.JPG") {
    x.setAttribute("src", "../pics/MockingSpongebob/mockingSpongeBob2.jpg");
    x.style.width = "600px";
  }
  else {
    x.setAttribute("src", "../pics/MockingSpongebob/mockingSpongeBob1.JPG");
    x.style.width = "505px";
  }
}

function nextSpongeBob() {
  var x = document.getElementById("spongePic");
  if (x.getAttribute("src") == "../pics/MockingSpongebob/mockingSpongeBob1.JPG") {
    x.setAttribute("src", "../pics/MockingSpongebob/mockingSpongeBob2.jpg");
    x.style.width = "600px";
  }
  else {
    x.setAttribute("src", "../pics/MockingSpongebob/mockingSpongeBob1.JPG");
    x.style.width = "505px";
  }
}


// ---------- JS for About Page ---------- //
function openResume() {
  var x = document.getElementById("showResume");
  var y = document.getElementById("styleOpenResume");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.innerHTML = "Hide Resume";
  }
  else {
    x.style.display = "none";
    y.innerHTML = "Show Resume";
  }
}
