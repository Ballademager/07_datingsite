console.log("does it work?");
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://datingsite-5862.restdb.io/rest/datingsites/" + id, {
  method: "get",
  headers: {
    "x-apikey": "63f4d5f5478852088da68529",
  },
})
  .then((res) => res.json())
  .then((data) => showApp(data));

function showApp(app) {
  console.log("app data: " + app);
  document.querySelector("h1").textContent = app.name;
  // ret celebsOnsite
  if (app.celebritiesOnSite.length) {
    document.querySelector(".celebritiesOnSite").textContent = `${app.celebritiesOnSite[Math.floor(Math.random() * app.celebritiesOnSite.length)]} uses this site`;
  } else {
    document.querySelector(".celebritiesOnSite").classList.add("hidden");
  }
  // ---
  document.querySelector("h3").textContent = `"${app.slogan}"`;
  document.querySelector("img").src = app.image;
  document.querySelector("img").alt = app.name + " logo";
  document.querySelector(".right p span").textContent = app.users;
  console.log("founded: " + app.founded);
  document.querySelector(".founded").textContent = app.founded;
  document.querySelector(".description").textContent = `${app.name} ${app.description}`;
  document.querySelector(".website_button a").setAttribute("href", app.link);
  console.log("app.link: " + app.link);
  //   document.querySelector("website_button a").setAttribute("href", app.link);
}
