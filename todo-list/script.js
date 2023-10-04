const currentTask = document.querySelector('#texto-tarefa');
const addTaskButton = document.querySelector('#criar-tarefa');
const olList = document.querySelector('#lista-tarefas');

// Retorna o texto do input
const getTaskText = () => document.querySelector('#texto-tarefa').value;

// Limpa o campo do input
const clearInputText = () => {
  currentTask.value = '';
};

// Retorna a lista atualizada ol pai
const getListElements = () => document.querySelectorAll('.task');

// Remove a class selected do elemento
const removeClassSelected = () => {
  const list = getListElements();
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].classList.contains('selected')) {
      list[i].classList.remove('selected');
      list[i].style.background = '#FFF';
    }
  }
};

// Muda o background color do elemento selecionado, se possuir a classe selected.
const changeBackgroundColor = (event) => {
  const elemento = event;
  removeClassSelected();
  elemento.target.classList.add('selected');
  elemento.target.style.background = 'gray';
};

// Adiciona Listener aos elementos criados
const addListenerTask = (task) => {
  task.addEventListener('click', changeBackgroundColor);
};

// Adiciona a tarefa criada na lista
const addTaskToList = () => {
  const taskItem = document.createElement('li');
  taskItem.innerText = getTaskText();
  taskItem.classList.add('task');
  addListenerTask(taskItem);
  olList.appendChild(taskItem);
  clearInputText();
};

addTaskButton.addEventListener('click', addTaskToList);
currentTask.addEventListener('change', getTaskText);
