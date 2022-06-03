// Biến
// function
// tên biến ->
// - danh từ, isStatus

// tên hàm nó phải hành động
// sum, showProducts, removeProduct

// 1 tên biến- Danh từ
const a = 10;
const b = 20;

//3
//tên hàm - động từ: showProduct,...
function sum(a,b){
    //kiểm tra
    if(typeof a!== "number" || typeof b !== "number")
    return -1;
    // xử lý
    const result = a + b;
    // return
    return result;
}
console.log(sum(10,20));

// ví dụ 2:
const productList = [
    { id: 1, name: "product A", price: 2000 },
    { id: 2, name: "product B", price: 3000 },
];

function showProducts(products){
    // kiểm tra
    if (!Array.isArray(productList) || productList.length == 0) return "";

    //xử lý
    let result = "";
    for(let i = 0; i< products.length; i++){
        result += `<h2><a href="./detail.html?id=${products[i].id}">${products[i].name}</a></h2>`;
    }
    // trả về
    return result;
}
function render(element){
    if(element){
        document.querySelector("#app").innerHTML = element;
    }
}
render(showProducts(productList));