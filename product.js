console.log("does it work?");
fetch("https://datingsite-5862.restdb.io/rest/datingsites", {
  method: "get",
  headers: {
    "x-apikey": "63eb7fb5478852088da68254",
  },
})
  .then((res) => res.json())
  .then((data) => showApp(data));

function showApp(app) {
  document.querySelector("h1").textContent = app.name;
  // ret celebsOnsite
  document.querySelector("p .celebritiesOnSite").textContent = app.celebritiesOnSite;
  // ---
  document.querySelector("img").src = app.image;
  document.querySelector(".right p span").textContent = app.users;
  document.querySelector(".founded").textContent = app.founded;
  document.querySelector(".description").textContent = app.description;

  document.querySelector("website_button a").setAttribute("href", app.link);
}
