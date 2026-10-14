const Inputtext = document.getElementById("inputtext");
const Add = document.getElementById("add");
const List = document.getElementById("list");

const TDvalue = document.getElementById("tdvalue");
const CDvalue = document.getElementById("cdvalue");
const PDvalue = document.getElementById("pdvalue");

const Bgcolor = document.getElementById("bgchange");
const Ftstyle = document.getElementById("ftchange");

function update() {
    const total = List.children.length;
    const completed = List.getElementsByClassName("done").length;
    const pending = total - completed;

    TDvalue.textContent = total;
    CDvalue.textContent = completed;
    PDvalue.textContent = pending;
}
Ftstyle.onclick = function() {
    const fonts = ["Arial, sans-serif", 
        "Georgia, serif", 
        "Verdana, sans-serif", 
        "Times New Roman, serif"];
    const ranfont = fonts[Math.floor(Math.random() * fonts.length)];
    document.body.style.fontFamily = ranfont;
}
Bgcolor.onclick = function() {
    const color = ["#e8f5e9", "#e3f2fd", "#f3e5f5", "#fff3e0", "#fce4ec", "#fffde7", "#e0f2f1"]
    const rancolor = color[Math.floor(Math.random() * color.length)];
    document.body.style.backgroundColor = rancolor;
}
function addTask() {
    const text = Inputtext.value.trim();
    if (text === "") {
        alert("Give some valid input or task!!!");
        return;
    }
    const item = document.createElement("li");
    item.style.listStyle = "none";
    const textspan = document.createElement("span");
    textspan.textContent = text;
    textspan.onclick = function() {
        textspan.classList.toggle("done");
        update();
    }
    const Deltext = document.createElement("button");
    Deltext.textContent = "Delete";
    Deltext.onclick = function() {
        item.remove();
        update();
    }
    item.appendChild(textspan);
    item.appendChild(Deltext);
    List.appendChild(item);
    Inputtext.value = "";
    update();
}
Add.onclick = addTask;