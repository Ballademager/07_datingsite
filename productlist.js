const urlParams = new URLSearchParams(window.location.search);
const myCategory = urlParams.get("category");
console.log("noget: " + myCategory);

console.log("does it work?");
fetch(`https://datingsite-5862.restdb.io/rest/datingsites?q={"category":"${myCategory}"}`, {
  method: "get",
  headers: {
    "x-apikey": "63f4d5f5478852088da68529",
  },
})
  .then((res) => res.json())
  .then((data) => showApps(data));
//   .then(showApps);

function showApps(apps) {
  apps.forEach(showApp);
  console.log(myCategory);
  if (myCategory == "Standard") {
    document.querySelector("h1").textContent = "Conventional";
  } else {
    document.querySelector("h1").textContent = `${myCategory}`;
  }
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

  if (app.celebritiesOnSite.length) {
    copy.querySelector(".anbefalet span").textContent = app.celebritiesOnSite[Math.floor(Math.random() * app.celebritiesOnSite.length)];
  } else {
    console.log(".anbefalet");
    copy.querySelector(".anbefalet").classList.add("hidden");
  }
  // if (app.celebritiesOnSite == "") {
  //   copy.querySelector(".anbefalet").classList.add("hidden");
  //   copy.querySelector(".anbefalet").textContent = app.celebritiesOnSite;
  // }
  document.querySelector("main").appendChild(copy);
}
