const list = document.querySelectorAll("span.gay");

for (let i = 0; i < list.length; i++) {
    const item = list[i];

    item.addEventListener("click", (ev) => {
        if (ev.target.getAttribute("ungay") !== null) {
            ev.target.removeAttribute("ungay");
        } else {
            ev.target.setAttribute("ungay", "");
        }
    });
}
