    function addTask() {
      const taskInput = document.getElementById('task-input');
      const taskText = taskInput.value.trim();

      if (taskText === '') {
        alert("Please enter a task.");
        return;
      }

      const taskList = document.getElementById('task-list');
      const listItem = document.createElement('li');
      listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

      const taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
      listItem.appendChild(taskSpan);

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
      deleteButton.onclick = function () {
        taskList.removeChild(listItem);
      };
      listItem.appendChild(deleteButton);

      listItem.onclick = function () {
        listItem.classList.toggle('completed');
      };

      taskList.appendChild(listItem);

      taskInput.value = '';
    }

