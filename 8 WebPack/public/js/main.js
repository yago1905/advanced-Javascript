// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

import cart from './CartComponent'
import products from './ProductComponent'
import search from './SearchComponent'
import error from './ErrorComponent'

const app = new Vue({
    el: "#app",
    data: {
        userSearch: '', //строка поиска
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => {
                    return result.json()})
                .catch(error => {
                    this.$refs.error.text = error;
                })
        },

        postJson(url, data){
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.$refs.error.text = error;
                })
        },
        putJson(url, data){
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.$refs.error.text = error;
                })
        },
        deleteJson(url){
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.text = error;
                })
        }

    },
    mounted(){
        }
});

