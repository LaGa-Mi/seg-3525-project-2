const scrollObs = () => {
    const mainImg = document.getElementById("main-img");
    const mainNavbar = document.getElementById("main-navbar");
    const observedElems = {
        rootMargin: "-50px 0px 0px 0px"
    };

    if (mainImg === null) {console.log("null");}

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                mainNavbar.classList.add("sticking");
            } else {
                mainNavbar.classList.remove("sticking");
            }
        });
    }, observedElems);
    
    navObserver.observe(mainImg);
};

if (document.readyState === 'complete') {
    scrollObs();
} else {
    document.onreadystatechange = function () {
        if (document.readyState === "complete") {
            scrollObs();
        }
    }
}