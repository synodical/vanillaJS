const title = document.querySelector("#title");
function handleTitleClick() {
    title.style.color = "blue";
}

function handleMouseEnter() {
    title.innerText = "Mouse is here";
} 
function handleMouseLeave() {
    title.innerText = "Mouse is gone";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",handleMouseLeavegit);

//JS로 html element 가져옴
//가져온 element에 event listener 추가