'use strict'
/**Некая сеть фастфуда предлагает несколько видов гамбургеров:
### Маленький (50 рублей, 20 калорий).
### Большой (100 рублей, 40 калорий). 
### Гамбургер может быть с одним из нескольких видов начинок (обязательно):
### С сыром (+10 рублей, +20 калорий).
### С салатом (+20 рублей, +5 калорий).
### С картофелем (+15 рублей, +10 калорий). ### Дополнительно гамбургер можно 
посыпать приправой (+15 рублей, +0 калорий) и полить майонезом 
(+20 рублей, +5 калорий). ### 3Напишите программу, рассчитывающую стоимость и 
калорийность гамбургера. Можно использовать примерную архитектуру класса из 
методички, но можно использовать и свою.*/

document.getElementById('order').addEventListener('click', event =>{
    console.log(event.target);
    let hamburger = new Hamburger('size', 'filling', 'topping')
})

class Hamburger {
    constructor(size, filling, toppings) {
        this.size =  this.getElement(size);
        this.filling =  this.getElement(filling);
        this.toppings =  this.getElements(toppings);
        this._total();
        //console.log(Hamburger);
    }



    getElement(name) {
        let element = document.querySelector(`input[name = "${name}"]:checked`);
        //console.log(element);
        return  {
            name: '${name}',
            price: +element.dataset['price'],
            calories: +element.dataset['calories']
        };
    }

    getElements(name) {
        let  elements= [...document.querySelectorAll(`input[name = "${name}"]:checked`)];
        let list = [];
        elements.forEach(element => {
            list.push({
                name: `${name}`,
                price: +element.dataset['price'],
                calories: +element.dataset['calories']
            })
        });
        //console.log(list.push);
        return  list;
    }

    countPrise(){
        let count = this.size.price + this.filling.price;
        this.toppings.forEach(element =>{
            count +=element.price
        })
        console.log(`Итоговая стоимость: ${count} рублей.`);
        return count;
    }

    countCalories(){
        let count = this.size.calories + this.filling.calories;
        this.toppings.forEach(element =>{
            count +=element.calories
        })
        console.log(`Калорийность: ${count} калорий.`);
        return count;
    }

    _total() {
        let elem = document.getElementById('total');
        if (elem){
            elem.remove();
        }
        document.body.insertAdjacentHTML('beforeend',
            `<div id="total">
                <p>Итоговая стоимость: ${this.countPrise()} рублей.<p>
                <p>Калорийность: ${this.countCalories()} калорий.<p>
            </div>`);

    }
}