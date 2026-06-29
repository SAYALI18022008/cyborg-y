const exploreBtn = document.querySelector(".explore-btn");
exploreBtn.addEventListener("click", function()
{ 
    document.getElementById("human-ai")
    .scrollIntoView({behavior: "smooth"});

});

const navItems = document.querySelectorAll("li");
 navItems.forEach(item =>
    {
        item.addEventListener("click" , ()=>
        {
            alert(`You clicked ${item.innerText}`);
        });

});
const text = "Technology doesn't replace humanity. It empowers it.";
let i = 0;
function typeWriter() {
    if(i<text.length){
        document.getElementById("type").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}
typeWriter();
const cards = document.querySelectorAll(".card");
cards.forEach(card =>
{
    card.addEventListener("click", () =>
    {
        card.style.boxShadow = "0 0 25px #00eaff";
    }
    );
}
);
console.log("Javascript connected!");
exploreBtn.addEventListener("click", function()
{
    console.log("Explore button clicked!");
    document.getElementById("human-ai")
    .scrollIntoView({
        behavior: "smooth"
    });
});
document.addEventListener("DOMContentLoaded", ()=>{
const joinBtn = document.querySelector(".join-btn");
joinBtn.addEventListener("click", ( )=>
{
    window.location.href = "join.html";
}
);
});
