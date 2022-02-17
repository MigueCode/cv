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

})(document);

// CONTACT FORM PROGRAMMING

(d => {

    const contactForm = d.querySelector(".contact-form"),
        loader = d.querySelector(".contact-form-loader"),
        response = d.querySelector(".contact-form-response")

    contactForm.addEventListener("submit", e => {
        e.preventDefault()
        loader.classList.remove("display-none")

        fetch("https://formsubmit.co/ajax/miguemania988@gmail.com", {
            method: "POST",
            body: new FormData(e.target)
        })
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(json => {
                console.log(json)
                location.hash = "#gracias"
                contactForm.reset()
            })
            .catch(err => {

                response.querySelector("h3").textContent = err.statusText
                console.log(err)
            })
            .finally(() => {
                loader.classList.add("display-none")
                setTimeout(() => {
                    location.hash = "#close"
                }, 3000);
            })
    })



})(document)