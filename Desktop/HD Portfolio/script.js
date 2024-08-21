const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.forEach((navLink) => {
            navLink.classList.remove("active");
        });
        link.classList.add("active");
    });
});

const btnsGroup = document.querySelectorAll(".btns-group .btn");
btnsGroup.forEach((btn) => {
    btn.addEventListener("click", () => {
        btnsGroup.forEach((btn) => {
            btn.classList.remove("active");
        });
        btn.classList.add("active");
    });
});

function filterSelection(category) {
    const projects = document.querySelectorAll(".project");
    projects.forEach((project) => {
        if(category === "all") {
            project.style.display = "block";
            } else {
                if (project.classList.contains(category)){
                    project.style.display = "block";
                }
                else {
                    project.style.display = "none";
                }
        }
    });


}