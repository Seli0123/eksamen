window.addEventListener("load", SidenVises);

function SidenVises() {
    console.log("SidenVises");
    document.querySelector("#menuknap").addEventListener("click", KlikMenu);

}

function KlikMenu() {
    console.log("KlikMenu");
    document.querySelector("#menu").classList.remove("hidden");
}
