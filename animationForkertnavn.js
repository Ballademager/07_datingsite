window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  document.querySelector(".heart1-container").classList.add("float1");
  document.querySelector(".heart2-container").classList.add("float2");
  document.querySelector(".heart3-container").classList.add("float3");
}
