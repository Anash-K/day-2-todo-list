const inputtxt = document.querySelector('input');
const listcotainer = document.querySelector('.list_container');
const button = document.querySelector('button');


function addtask() {
    if (inputtxt.value === '') {
        alert('add some task');
    } else {

        let li = document.createElement("li");
        li.innerHTML = inputtxt.value;
        listcotainer.appendChild(li);
        inputtxt.value = '';

        let span = document.createElement("span");
        span.textContent = "x";
        li.appendChild(span);
        savedata();
    }
}


listcotainer.addEventListener('click', (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        savedata();
    } else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        savedata();
    }
}, false);

button.addEventListener('click', () => {
    addtask();
});


function savedata() {
    localStorage.setItem("data", listcotainer.innerHTML);
}

function showdata() {
    listcotainer.innerHTML = localStorage.getItem("data");
}
showdata();