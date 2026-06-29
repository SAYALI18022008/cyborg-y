const memberBtn = document.querySelector(".member-btn");
const form = document.querySelector("form");
memberBtn.addEventListener("click", () => {
    document.getElementById("register-form")
        .scrollIntoView({
            behavior: "smooth"
        });
});
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const college = document.getElementById("collegename").value.trim();

    if (name === "" || email === "" || college === "") {
        alert("Please fill all required fields.");
        return;
    }

    document.querySelector(".form-section").style.display = "none";

    const thanks = document.querySelector(".thanks");
    thanks.style.display = "flex";

    thanks.scrollIntoView({
        behavior: "smooth"
    });
});
