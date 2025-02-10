// document.addEventListener("DOMContentLoaded", function () {
//     const menuToggle = document.querySelector(".menu-toggle");
//     const navLinks = document.querySelector(".nav-links");

//     menuToggle.addEventListener("click", function () {
//         navLinks.classList.toggle("active");
//     });
// });

// var std = document.getElementById("std");
// var val = std.value;
// var option = std.options;
// option.addEventListener("click", (e)=>{
//     console.log(e.target.innerHTML);
// })
// console.log(val, option);
// nav = document.querySelector("nav");
// navLinks = document.querySelector(".nav-links");
// window.addEventListener("scroll", function () {
//     console.log("Scrolling detected!");
    
//     // Example: Change background color when scrolling
//     if (window.scrollY > 75) {
//         nav.style.position = "fixed";
//         nav.style.top = "5px";
//         // navLinks.style.backgroundColor = "yellow";
//         console.log("hii gaurav karale");
        
//     } else {
//         // nav.style.position = "";
//         nav.style.position = "absolute";

//         nav.style.top = "70px";
//         console.log("hii gaurav karale");
//     }
// });

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".row img");
    images.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = "1";
            img.style.transform = "translateY(0)";
        }, index * 200);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const members = document.querySelectorAll(".member");
    const options = { threshold: 0.3 };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, options);

    members.forEach(member => observer.observe(member));
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".sponsor-title, .sponsor-card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "all 0.6s ease-out";
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.3 });

    galleryItems.forEach(item => observer.observe(item));
});

document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.querySelector(".dropdown-btn");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    // Toggle dropdown when button is clicked
    dropdownBtn.addEventListener("click", function (event) {
        dropdownMenu.classList.toggle("show");
        event.stopPropagation(); // Prevent closing when clicking button
    });

    contactbtn = document.querySelector(".join-btn");
    contactbtn.addEventListener("click", ()=>{
        dropdownMenu.classList.remove("show");
        
    })
    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("show");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    contactBtn = document.querySelector(".contact-btn");
    const contactMenu = document.querySelector(".contact-menu");

    // Toggle dropdown when button is clicked
    contactBtn.addEventListener("click", function (event) {
        contactMenu.classList.toggle("show-menu");
        event.stopPropagation(); // Prevent closing when clicking button
    });

    dropdownBtn = document.querySelector(".dropdown-btn");
    dropdownBtn.addEventListener("click", ()=>{
        contactMenu.classList.remove("show-menu");
    })
    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!contactBtn.contains(event.target) && !contactMenu.contains(event.target)) {
            contactMenu.classList.remove("show-menu");
        }
    });
});

// about page
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".slide-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
});


// ham
ham = document.querySelector(".toggle-btn");
ham.addEventListener("click", function () {
    var dropdown = document.querySelector(".menu-dropdown");
    if(dropdown.style.display == "block"){
        dropdown.style.display = "none";
        ham.src = "hamburger.png"
    }
    else{
        dropdown.style.display = "block";
         ham.src = "close.png";
    }
    
});

// Close dropdown when clicking outside
window.addEventListener("click", function (event) {
    var dropdown = document.querySelector(".menu-dropdown");
    var button = document.querySelector(".toggle-btn");

    if (!button.contains(event.target) && !dropdown.contains(event.target)) {
        ham.src = "hamburger.png"
        dropdown.style.display = "none";
    }
});
