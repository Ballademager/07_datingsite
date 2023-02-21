console.log("does it work?");
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://datingsite-5862.restdb.io/rest/datingsites/" + id, {
  method: "get",
  headers: {
    "x-apikey": "63eb7fb5478852088da68254",
  },
})
  .then((res) => res.json())
  .then((data) => showApp(data));

function showApp(app) {
  console.log("app data: " + app);
  document.querySelector("h1").textContent = app.name;
  // ret celebsOnsite
  if (app.celebritiesOnSite) {
    document.querySelector(".celebritiesOnSite").textContent = app.celebritiesOnSite;
  } else {
    document.querySelector(".celebritiesOnSite").classList.add("hidden");
  }
  // ---
  document.querySelector("h3").textContent = `"${app.slogan}"`;
  document.querySelector("img").src = app.image;
  document.querySelector(".right p span").textContent = app.users;
  console.log("founded: " + app.founded);
  document.querySelector(".founded").textContent = app.founded;
  document.querySelector(".description").textContent = `${app.name} ${app.description}`;
  console.log("app.link: " + app.link);
  //   document.querySelector("website_button a").setAttribute("href", app.link);
}
