document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");

    // Efek perubahan background navbar saat digulir (scroll)
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("bg-black/90", "shadow-lg");
            navbar.classList.remove("bg-black/60");
        } else {
            navbar.classList.add("bg-black/60");
            navbar.classList.remove("bg-black/90", "shadow-lg");
        }
    });

    // Log konfirmasi untuk memastikan script terhubung
    console.log("Portofolio 3D Muhammad Virly siap!");
});