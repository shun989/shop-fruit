class Shop {
    constructor(name) {
        this.name = name;
        this.fruits = [];
        //this.totalMoney = 0;
    }

    addFruit(fruit){
        this.fruits.push(fruit);
    }

    showAllFruit(){
        let str = '';
        for (let i = 0; i < this.fruits.length; i++) {
            this.fruits[i].index = i;
            str += this.fruits[i].display();

        }
        return  str;
    }
    deleteFruit(index){
        this.fruits.splice(index,1);
    }

}