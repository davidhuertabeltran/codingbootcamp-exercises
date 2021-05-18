import { items } from "./navmenu";
console.log(items);

export default class Navigation {

    constructor(nav) {
        this.nav = nav;
        let hello = document.querySelector('.navigation');

        for (let i = 0; i < items.length; i++) {
            let newDiv = document.createElement("div");
            let newLink = document.createElement("a");
            newLink.setAttribute("href", items[i].url);
            newLink.innerHTML = items[i].name;
            newDiv.appendChild(newLink);

            if(items[i].hasOwnProperty("items")) {
                for(let j = 0; j < items[i].items.length; j++) {
                    let newSubDiv = document.createElement("div");
                    let newSubLink = document.createElement("a");
                    newSubLink.setAttribute("href", items[i].items[j].url);
                    newSubLink.innerHTML = items[i].items[j].name;
                    newSubDiv.appendChild(newSubLink);
                    newDiv.appendChild(newSubDiv);
                }  
            }
            
            hello.appendChild(newDiv);
        }
    }

}