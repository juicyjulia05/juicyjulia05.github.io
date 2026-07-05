const WEBSITE =
"https://www.stacked.com/@juicyjulia05/membership";

const modal =
document.getElementById("modal");

document
.getElementById("openModal")
.onclick=()=>{

modal.style.display="flex";

}

document
.getElementById("yes")
.onclick=()=>{

window.location.href=WEBSITE;

}

document
.getElementById("no")
.onclick=()=>{

window.location.href="https://www.google.com";

}

window.onclick=(e)=>{

if(e.target===modal){

modal.style.display="none";

}

}
