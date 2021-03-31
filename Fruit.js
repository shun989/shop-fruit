class Fruit {
    constructor(name, image, mass, price) {
        this.name = name;
        this.image = image;
        this.mass = mass;
        this.price = price;
        this.index = null;
    }

    display(){
        let str =`<tr>
                       <td style="background-color: greenyellow; color: blue">${this.name}</td>
                       <td style="background-color: skyblue"><img src="${this.image}" </td>
                       <td style="background-color: aqua">${this.mass}</td>
                       <td style="background-color: red; color: yellow">${this.price}</td>
                       <td style="background-color: darkgray"><button onclick="deleteFruit(${this.index})">Delete</button></td>
                       <td style="background-color: darkgray"><button onclick="selectFruit(${this.index})" style="background-color: gold">Select</button></td>
                       <td style="background-color: darkgray"><button onclick="editFruit(${this.index})">Edit</button></td>
                       
                </tr>`
        return str;
    }

    display2(){
        let str =`<tr>
                       <td style="background-color: greenyellow; color: blue">${this.name}</td>
                       <td style="background-color: skyblue"><img src="${this.image}" </td>
                       <td style="background-color: aqua">${this.mass}</td>
                       <td style="background-color: red; color: yellow">${this.price}</td>
                       <td style="background-color: darkgray"><button onclick="deleteOrderedFruit(${this.index})">Delete</button></td>                 
                       
                </tr>`
        return str;
    }

}