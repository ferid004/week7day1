let buton = document.getElementById("but");
let ad = document.getElementById("ad");
let body = document.querySelector(".container");
let arr = [];




buton.addEventListener("click", () => {
        let ul = document.createElement("ul");
        let li = document.createElement("li");
    li.textContent = ad.value;
    body.append(ul);
    ul.append(li);

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
        const editedName = prompt("Yeni adı girin:", li.textContent);
        if (editedName !== null) {
            li.textContent = editedName;
            updateLocalStorage();
        }
    });

    ul.appendChild(editButton);



    arr.push(ad.value);

    localStorage.setItem("data", JSON.stringify(arr));


    

    ad.value = "";

    
});

let clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", () => {
    localStorage.removeItem("data");

    let ulElements = document.querySelectorAll(".container ul");


    
    ulElements.forEach((ul) => {
        ul.remove();
    });
    arr=[]
});










