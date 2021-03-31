const SHOP = 'shop';
const MONEY = 'money';
function saveData(data, key) {
    let newData = JSON.stringify(data);//dua mang ve chuoi.
    localStorage.setItem(key, newData);
}

function loadData(key) {
    if (localStorage.hasOwnProperty(key)){
        let data = localStorage.getItem(key); // lay du lieu tu key.
        let dataArr = JSON.parse(data); // dua chuoi ve mang.
        console.log(dataArr);
        let dataObjs = [];
        for (let i = 0; i < dataArr.length; i++) {
            let item = new Fruit(dataArr[i].name, dataArr[i].image, dataArr[i].mass,dataArr[i].price);
            dataObjs.push(item);
        }
        console.log(dataObjs);
        return dataObjs;
    }else {
        return [];
    }

}

function saveMoney(key,value) {
    localStorage.setItem(key,value);
}

function loadMoney(key) {
    if (localStorage.hasOwnProperty(key)){
        return localStorage.getItem(key);
    }else {
        return 0;
    }
}