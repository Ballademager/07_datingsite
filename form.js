// 63eb7fb5478852088da68254
const form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  console.log("submitted");
  event.preventDefault();
  console.log(form.elements.name.value, form.elements.slogan.value);
  const obj = {
    name: form.elements.name.value,
    slogan: form.elements.slogan.value,
    category: form.elements.category.value,
    description: form.elements.description.value,
    users: form.elements.users.value,
    founded: form.elements.founded.value,
    paymentreq: form.elements.paymentreq.value,
  };
  fetch("https://datingsite-5862.restdb.io/rest/datingsites", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "x-apikey": "63eb7fb5478852088da68254",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function getData() {
  fetch("https://datingsite-5862.restdb.io/rest/datingsites", {
    headers: {
      "x-apikey": "63eb7fb5478852088da68254",
    },
  })
    .then((res) => res.json())
    .then(showSubmittedApps);
}

function showSubmittedApps(list) {
  list.forEach(showApp);
}

function showApp(app) {
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  copy.querySelector("li").textContent = app.name;
  document.querySelector("main ul").appendChild(copy);
}
