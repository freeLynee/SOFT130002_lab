const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];

let divItems = [];
let h4Topics = [];
let divAuthors = [];
let divBox = [];
let h3Authors = [];
let h5Lives = [];
let h3popular = [];
let photos = [];
let button = [];
let scriptdiv = document.getElementsByClassName("flex-container justify");
let script = document.getElementsByTagName("script");


for(let i = 0;i < 4;i++){
    divItems[i] = document.createElement("div");
    divItems[i].className = "item";
    h4Topics[i] = document.createElement("h4");
    divAuthors[i] =  document.createElement("div");
    divBox[i] =  document.createElement("div");
    divAuthors[i].className = "inner-box";
    divBox[i].className = "inner-box";
    h3Authors[i] = document.createElement("h3");
    h5Lives[i] = document.createElement("h5");
    h3popular[i] = document.createElement("h3");
    button[i] = document.createElement("button");

    h4Topics[i].innerText = "Genre : "+ works[i].tips;
    h3Authors[i].innerText = works[i].author;
    h3Authors[i].style.display = "inline";
    h5Lives[i].innerText = "lifetime:"+works[i].lifetime;
    h5Lives[i].style.display = "inline";
    h5Lives[i].style.marginLeft = "1em";
    h3popular[i].innerText = "Popular Photos";
    button[i].innerText = "Visit";
    divBox[i].append(h3popular[i]);

    for(let j = 0;j<works[i].photos.length;j++){
        photos[j] = document.createElement("img");
        photos[j].className = "photo";
        photos[j].src = works[i].photos[j];
        divBox[i].append(photos[j]);
    }

    divAuthors[i].append(h3Authors[i]);
    divAuthors[i].append(h5Lives[i]);
    divItems[i].append(h4Topics[i]);
    divItems[i].append(divAuthors[i]);
    divItems[i].append(divBox[i]);
    divItems[i].append(button[i]);
    scriptdiv[0].insertBefore(divItems[i], script[0]);
}