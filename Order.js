class Order {
    constructor(name) {
        this.name = name;
        this.fruits = [];

    }

    addFruit(fruit){
        this.fruits.push(fruit);
    }
    showOrderedFruit(){
        let str = '';
        for (let i = 0; i < this.fruits.length; i++) {
            this.fruits[i].index = i;
            str += this.fruits[i].display2();

        }
        str += '<tr style="background-color: red; color: yellow">' +
            '<td>Tổng tiền</td>' +
            '<td>'+this.totalAmount()+'</td>' +
            '</tr>'
        return  str;

    }

    deleteFruit(index){
        this.fruits.splice(index,1);
    }

    totalAmount() {
        let total = 0;
        for (let i = 0; i < this.fruits.length; i++) {
            total += parseInt(this.fruits[i].price);
        }
        return total;
    }

    payOrder() {
        if(order.fruits <= 0){
            alert("Trong gio hang khong co hang");
            return; // sẽ nhảy ra khỏi hàm, ko chay phan phia sau.
        }
        let money = +loadMoney(MONEY);
        money += this.totalAmount();
        saveMoney(MONEY,money);
        alert("Bạn đã thanh toán thành công!");
        this.fruits = [];
    }
}