/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
    el: '#myburgers',
    data: {
        burgers: burgersList,
        chosenBurger: [],
        fullname: "",
        email: "",
        payment: "",
        person: "",
        orderlist: "",
        display: {},

        orders: {},
    },
    created: function () {
        socket.on('initialize', function (data) {
            this.orders = data.orders;
        }.bind(this));

        socket.on('currentQueue', function (data) {
            this.orders = data.orders;
        }.bind(this));
    },
    methods: {
        getNext: function () {
            var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
                return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
        },

        // markDone: function () {
        //     this.orderlist = "Your order: " + this.chosenBurger + "; " + this.fullname + " " + this.street + " " + this.house + " " + this.email + " " + this.payment + " " + this.person
        //     this.addOrder();
        // },

        displayOrder: function (event){
                var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
                    this.display = { x: event.clientX - 10 - offset.x,
                        y: event.clientY - 10 - offset.y }
                        },

        addOrder: function (event) {
            document.getElementById("pressedbuttonID").style.display = "block";
            socket.emit("addOrder", {orderId: this.getNext(),
                details: this.display,
                orderItems: this.chosenBurger,
                orderName: this.fullname,
                orderEmail: this.email,
                orderPayment: this.payment,
                orderPerson: this.person
            });
        }
        }
    }
);



