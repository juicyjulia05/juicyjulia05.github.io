const WEBSITE =
"https://juicyjulia05";

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

modal.style.display="none";

}

window.onclick=(e)=>{

if(e.target===modal){

modal.style.display="none";

}

}