const products = [
    {id: 1, title: 'Notebook', price: 2000, imageUrl: src = 'img/noutbuk.jpg'},
    {id: 2, title: 'Mouse', price: 20, imageUrl: src = 'img/mouse.jpg'},
    {id: 3, title: 'Keyboard', price: 200, imageUrl: src = 'img/keyboard.jpg'},
    {id: 4, title: 'Gamepad', price: 50, imageUrl: src = 'img/gamepad.jpg'},
];

//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (title, price, imageUrl) => {
    return `<div class="product-item">
                <img class = "img" src="${imageUrl}" alt="${title}"/>            
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};

// const renderPage = list => {
//     const productsList = list.map(item => 
//         renderProduct(item.title, item.price, item.imageUrl));
//     console.log(productsList);
//     document.querySelector('.products').innerHTML = productsList.join("");
// };

// renderPage(products);

const renderPage = document.querySelector('.products').innerHTML = products
    .map(item => renderProduct(item.title, item.price, item.imageUrl)).join("");
console.log(renderPage);
//join меняет разделитель"," на пустой ""


