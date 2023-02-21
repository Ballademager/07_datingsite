const urlParams = new URLSearchParams(window.location.search);
const myCategory = urlParams.get("category");
console.log("noget: " + myCategory);

console.log("does it work?");
fetch(`https://datingsite-5862.restdb.io/rest/datingsites?q={"category":"${myCategory}"}`, {
  method: "get",
  headers: {
    "x-apikey": "63eb7fb5478852088da68254",
  },
})
  .then((res) => res.json())
  .then((data) => showApps(data));
//   .then(showApps);

function showApps(apps) {
  apps.forEach(showApp);
}

function showApp(app) {
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  copy.querySelector("img").src = app.image;
  copy.querySelector("h2").textContent = app.name;
  copy.querySelector("h3").textContent = `"${app.slogan}"`;
  copy.querySelector("a").setAttribute("href", `product.html?id=${app._id}`);

  if (app.paymentreq) {
    copy.querySelector(".free").classList.add("hidden");
  }
  if (app.celebritiesOnSite == "") {
    copy.querySelector(".anbefalet").classList.add("hidden");
    copy.querySelector(".anbefalet").textContent = app.celebritiesOnSite;
  }
  document.querySelector("main").appendChild(copy);
}
