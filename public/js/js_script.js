function MenuItem(bn, kc, ing1, ing2) {
    this.burgerName = bn;
    this.kCal = kc;
    this.lactose = ing1;
    this.gluten = ing2;
    this.namecalories = function() {
        return this.burgerName + ' ' + this.kCal;
    };
}

var burgers = [];

burgers.push(new MenuItem('Classic cheese burger', '500', true, true));
burgers.push(new MenuItem('Bacon cheese burger', '580', true, false));
burgers.push(new MenuItem('Double cheese burger', '650', false, false));

var mb = document.getElementById("myburgers");

for (let i = 0; i<burgers.length; i++){

    var listItem = document.createElement("li");
    var listValue1 = document.createTextNode(burgers[i].burgerName + " ");
    var listValue2 = document.createTextNode(burgers[i].kCal + "kCal");

    mb.appendChild(listItem);

    listItem.appendChild(listValue1);
    listItem.appendChild(listValue2);

    if (burgers[i].lactose){
        var lactose = document.createTextNode(" Lactosefree")
        listItem.appendChild(lactose);
    }

    if (burgers[i].gluten){
        var gluten = document.createTextNode(" Glutenfree")
        listItem.appendChild(gluten);
    }
}



// <script src="https://vuejs.org/js/vue.js"></script>
   // <div id="myID">
  //  <h1>
   // Välj en burgare
// </h1>
// </div>
// <div id = "myburgers">
   // <div>




