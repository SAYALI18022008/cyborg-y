const memberBtn = document.querySelector(".member-btn");
memberBtn.addEventListener("click", () => 
{
    document.getElementById("register-form")
    .scrollIntoView(
        {
            behaviour : "smooth"
        }
    );
});
const form = document.querySelector("form");
form.addEventListener("submit" , (e) =>
{
    e.preventDefault();
    document.querySelector(".thanks").style.display = "none";
    document.querySelector(".thanks").style.display = "flex";
    document.querySelector(".thanks")
    .scrollIntoView({behavior : "smooth"});
});