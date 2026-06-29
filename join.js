const memberBtn = document.querySelector(".member-btn");

memberBtn.addEventListener("click", () => {
    document.getElementById("register-form")
    .scrollIntoView({
        behavior: "smooth"
    });
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    form.style.display = "none";

    
    const thanks = document.querySelector(".thanks");
    thanks.style.display = "flex";


    thanks.scrollIntoView({
        behavior: "smooth"
    });
});