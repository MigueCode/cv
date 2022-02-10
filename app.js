// MENU BTN PROGRAMMING

(d => {

    const menuBtn = d.querySelector(".menu-btn"),
        navigation = d.querySelector(".navigation")

    d.addEventListener("click", e => {

        // console.log(e.target)
        if (e.target.matches(".menu-btn") || e.target.matches(".menu-btn *")) {
            navigation.classList.toggle("navigation-displayed")
            menuBtn.firstElementChild.classList.toggle("display-none")
            menuBtn.lastElementChild.classList.toggle("display-none")
        }

        if (e.target.matches(".navigation a")) {
            navigation.classList.remove("navigation-displayed")
            menuBtn.firstElementChild.classList.remove("display-none")
            menuBtn.lastElementChild.classList.add("display-none")
        }
    })

})(document)