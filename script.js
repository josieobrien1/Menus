var contentEle = document.body.querySelector(".content");
function makeHome(){
  contentEle.innerHTML="";
  contentEle.innerHTML="Home Page"
}

function makeAbout(){
  contentEle.innerHTML="";
  var headEle = document.createElement("h1");
  headEle.innerHTML="About Page"
  contentEle.appendChild(headEle);
  var nameEle = document.createElement("h3");
  nameEle.innerHTML="Josie"
  contentEle.appendChild(nameEle);
}

function makeInteract(){
  contentEle.innerHTML="";
  contentEle.innerHTML="Interact Page"

}

document.body.querySelector(".homeButt").addEventListener("click", function(){
  makeHome();
})

document.body.querySelector(".aboutButt").addEventListener("click", function(){
  makeAbout();
})

document.body.querySelector(".interactButt").addEventListener("click", function(){
  makeInteract();
})
  
makeHome();