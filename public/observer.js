var elts = document.querySelector('div.gif');
let options = {threshold: 0.1};

let callback = (entries, observer) => {
  entries.forEach(entry => {
    let visible = entry.intersectionRatio < 0.1;
    let firstChild = entry.target.firstChild;
    const newDiv = document.createElement("div"); 
    newDiv.classList.add('gif');
    const uri = entry.target.src;
    console.log(uri);
    if(uri != undefined && visible) {
     const newPic = document.createElement("picture");
     const newImg = document.createElement("img");    
     newImg.src=uri;
     newPic.appendChild(newImg);
     entry.target.replaceChild(newPic, firstChild);
    } else {
     entry.target.replaceChild(newDiv, firstChild);
    }
  });
};

var observer = new IntersectionObserver(callback,options)
Array.from(elts).forEach(element => {
    observer.observe(element);
});

console.log(elts);