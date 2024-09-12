document.addEventListener("DOMContentLoaded", () => {
    console.log('hireloded')
    const storedData = JSON.parse(localStorage.getItem('tasks'))
    if (storedData) {
        console.log('there is data');
        storedData.forEach((storedTask) => tasks.push(storedTask))
        update();
    }
}

)
const input = document.getElementById("input");
const taskList = document.getElementById("taskList");
let tasks = [];
const save = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(tasks);
}

const create = () => {
    console.log("create work")
    if (input.value === '') {
        alert('please write task!!!')
    }
    else {
        tasks.push(input.value);
        update();
        save();
        alert('task added successfully')


    }
    input.value = '';

}


const update = () => {
    taskList.innerHTML = '';
    tasks.forEach((element, index) => {
        let li = document.createElement("li");
        li.setAttribute('class', ' d-flex justify-content-between');

        let task = document.createElement("div");
        let img = document.createElement("div");
        let p = document.createElement("h4")
        p.innerHTML = element;
        task.setAttribute('id', 'task');

        task.addEventListener("click", function (e) {
            task.classList.toggle("checked");
        })
        li.appendChild(task);
        task.appendChild(img);
        task.appendChild(p);



        let deleteButton = document.createElement("button");
        deleteButton.setAttribute('id', 'del');
        deleteButton.addEventListener("click", function (e) {
            Delete(index);
        })

        li.appendChild(deleteButton);
        let editButton = document.createElement("button");

        editButton.setAttribute('id', 'edit');
        editButton.addEventListener("click", function (e) {
            edit(index);
        })
        li.appendChild(editButton);
        taskList.appendChild(li);

    });

}








const Delete = (index) => {
    tasks.splice(index, 1);
    update();
    save();
    alert('task removed successfully')

}


const edit = (index) => {
    const btn = document.getElementById("addBtn");
    btn.innerHTML = "Done";
    input.value = tasks[index];
    tasks.splice(index, 1);
    update();
    save();
    alert('task edited successfully')


}
