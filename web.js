var menulist = document.getElementById("menulist");
menulist.style.maxHeight = "0px";
var logo = document.getElementById("logo");
logo.addEventListener("click", function() {
    if (menulist.style.maxHeight == "0px") {
        menulist.style.maxHeight = "130px";
    } else {
        menulist.style.maxHeight = "0px";

    }
})