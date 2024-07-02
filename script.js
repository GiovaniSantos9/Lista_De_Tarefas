document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.querySelector(".adicionar button");
    const inputField = document.querySelector(".input");
    const taskContainer = document.querySelector(".lista-container");

    // Função para adicionar uma nova tarefa
    function addTask() {
        const taskText = inputField.value.trim();
        if (taskText !== "") {
            const task = document.createElement("div");
            task.className = "lista";

            const checkbutton = document.createElement("div");
            checkbutton.innerHTML = `<i class="fa-regular fa-square"></i>`;
            checkbutton.addEventListener("click", function () {
                taskContent.classList.toggle("checked");
                if (taskContent.classList.contains("checked")) {
                    checkbutton.innerHTML = `<i class="fa-regular fa-square-check"></i>`;
                } else {
                    checkbutton.innerHTML = `<i class="fa-regular fa-square"></i>`;
                }
            });
            task.appendChild(checkbutton);


            const taskContent = document.createElement("p");
            taskContent.textContent = taskText;
            task.appendChild(taskContent);

            const deleteButton = document.createElement("button");
            deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
            deleteButton.addEventListener("click", function () {
                taskContainer.removeChild(task);
            });
            task.appendChild(deleteButton);

            taskContainer.appendChild(task);
            inputField.value = "";
        }
    }


    // Adicionar tarefa ao clicar no botão
    addButton.addEventListener("click", addTask);

    // Adicionar tarefa ao pressionar a tecla "Enter"
    inputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });


});
