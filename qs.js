const queryString = "?product=shirt&color=blue&size=m";

console.log(queryString);

const urlParams = new URLSearchParams(queryString);

console.log(urlParams);

const prod = urlParams.get("product");
console.log(prod);

const color = urlParams.get("color");
console.log(color);

const discount = urlParams.get("disc");
console.log(discount);

urlParams.set("discount", "10%");

console.log(urlParams);

// .delete(keyname)
