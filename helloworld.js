const button = document.getElementById('addItem');
const task = document.getElementById('item');
const toDoList = document.getElementById("list");


button.addEventListener('click', function (){
    let item = document.createElement('li');
    item.innerText = task.value;
    toDoList.appendChild(item);
    task.value = " ";

    item.addEventListener('click', function (){
        item.style.textDecoration = 'line-through'
    })

    item.addEventListener('dblclick', function (){
        toDoList.removeChild(item)
    })
});

