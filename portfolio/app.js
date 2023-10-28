const sr = ScrollReveal({
  distance: "70px",
  duration: 1000,
  reset: false,
});

const sr2 = ScrollReveal({
  distance: "500px",
  duration: 1400,
  reset: false,
});
sr.reveal(".logo", { delay: 200, origin: "left" });
sr.reveal(".ul", { delay: 400, origin: "top" });
sr.reveal(".menu-btn", { delay: 400, origin: "top" });
sr.reveal(".intro-text span", { delay: 600, origin: "left" });
sr.reveal(".intro-text h1", { delay: 620, origin: "left" });
sr.reveal(".intro-text p", { delay: 700, origin: "right" });
sr.reveal(".intro-text .main-btn", { delay: 750, origin: "left" });
sr.reveal(".img", { delay: 750, origin: "right" });

sr2.reveal(".my-skills", { delay: 400, origin: "right" });
sr2.reveal(".project-1", { delay: 400, origin: "left" });
sr2.reveal('#two',{delay:400,origin:"right" })






function navopen() {
  document.getElementById("nav").style.display = "grid"
}
function navclose() {
  document.getElementById("nav").style.display = "none";
}




