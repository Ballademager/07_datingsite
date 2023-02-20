// 63eb7fb5478852088da68254/categories
// https://datingsite-5862.restdb.io/rest/datingsites/categories
fetch("https://datingsite-5862.restdb.io/rest/datingsites/categories")
  .then((res) => res.json())
  .then((data) => showCats(data));

function showCats(ca) {}
