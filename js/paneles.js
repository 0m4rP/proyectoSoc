const paneles = document.querySelectorAll(".panel")

paneles.forEach(panel => {
    panel.addEventListener("click", () => {
        removeActive()
        panel.classList.add("active")
    })
})

function removeActive() {
    paneles.forEach(panel => {
        panel.classList.remove("active")
    })
}