// Função para exibir tarefas na página de edição
function displayTasksOnEditPage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const hojeContainer = document.querySelector('#colunas-hoje .task-container');
    const aFazerContainer = document.querySelector('#colunas-fazer .task-container');
    const feitoContainer = document.querySelector('#colunas-feito .task-container');

    hojeContainer.innerHTML = '';
    aFazerContainer.innerHTML = '';
    feitoContainer.innerHTML = '';

    tasks.forEach(task => {
        const taskCard = document.createElement('div');
        taskCard.className = 'task-card draggable';
        taskCard.id = task.id;

        // Adicionando classes de borda com base na área da tarefa
        switch (task.area.toLowerCase()) {
            case 'pessoal':
                taskCard.classList.add('task-border-pessoal');
                break;
            case 'profissional':
                taskCard.classList.add('task-border-profissional');
                break;
            case 'treinos':
                taskCard.classList.add('task-border-treinos');
                break;
            case 'academica':
                taskCard.classList.add('task-border-academica');
                break;
                case 'esporte':
                taskCard.classList.add('task-border-esporte');
                break;
            default:
                break;
        }

        // Obtendo a cor de fundo e a cor do texto com base na prioridade
        const priorityColor = getPriorityColor(task.priority);
        const textColor = getPriorityTextColor(task.priority);

        taskCard.innerHTML = `
            <div class="task-level" style="background-color: ${priorityColor}; color: ${textColor};">${task.priority}</div>
            <div class="task-header">${task.title}</div>
            <div class="task-body"><p>${task.description}</p></div>
            <div class="task-date"><i class="bi bi-calendar"></i>${task.dueDate}</div>
        `;

        if (task.dueDate === today) {
            hojeContainer.appendChild(taskCard);
        } else if (new Date(task.dueDate) > new Date(today)) {
            aFazerContainer.appendChild(taskCard);
        } else {
            feitoContainer.appendChild(taskCard);
        }
    });

    setupTaskSelection(); // Reaplicando os event listeners de seleção de tarefas ao exibir tarefas
}

// Exibe as tarefas ao carregar a página de edição
document.addEventListener('DOMContentLoaded', displayTasksOnEditPage);



// Variável global para armazenar o ID da tarefa selecionada
let selectedTaskId = null;

// Função para definir a tarefa selecionada
function setSelectedTask(taskId) {
    selectedTaskId = taskId;
}

// Função para editar a tarefa selecionada
function editSelectedTask() {
    if (selectedTaskId) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const taskToEdit = tasks.find(task => task.id === selectedTaskId);
        if (taskToEdit) {
            const newTitle = prompt('Novo título:', taskToEdit.title);
            if (newTitle !== null) {
                taskToEdit.title = newTitle;
                // Atualiza a tarefa no localStorage
                localStorage.setItem('tasks', JSON.stringify(tasks));
                // Reexibe as tarefas na página de edição
                displayTasks();
            }
        }
    } else {
        alert('Por favor, selecione uma tarefa para editar.');
    }
}

// Configurar evento de clique para o botão de editar na sidebar
document.getElementById('btn-editar').addEventListener('click', editSelectedTask);

// Função para exibir tarefas
function displayTasks() {
    // Código para exibir as tarefas...
    
    tasks.forEach(task => {
        const taskCard = document.createElement('div');
        taskCard.className = 'task-card draggable';
        taskCard.id = task.id;

        // Adicionando conteúdo da tarefa...

        // Adiciona evento de clique para cada tarefa
        taskCard.addEventListener('click', () => {
            setSelectedTask(task.id); // Define a tarefa clicada como selecionada
        });

        // Adiciona o card da tarefa à lista de tarefas correspondente...
    });

    // Código para exibir as tarefas...
}
