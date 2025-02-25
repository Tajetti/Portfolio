function abrirSideBar() {
    document.getElementById("sidebar").style.width = "100%";
    document.querySelector(".open-btn").style.display = "none"; 
}

function fecharSidebar() {
    document.getElementById("sidebar").style.width = "0"; 
    document.querySelector(".open-btn").style.display = "block"; 
}

const sidebarLinks = document.querySelectorAll(".sidebar a");
sidebarLinks.forEach(link => {
    link.addEventListener("click", function() {
        if (link.href !== "index.html") {
            closeSidebar(); 
            document.querySelector(".open-btn").style.display = "block";
        }
    });
});
