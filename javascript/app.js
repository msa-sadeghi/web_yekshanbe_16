let tasks = JSON.parse(localStorage.getItem('modern-tasks')) || [];
let currentFilter = 'all';

// Helper Functions با Arrow Functions و Default Parameters
const saveToStorage = () => {
    localStorage.setItem('modern-tasks', JSON.stringify(tasks));
};

const generateId = () => Date.now() + Math.random();

const getCurrentDate = () => new Date().toLocaleDateString('fa-IR');

// Task Class با Enhanced Object Literals
class Task {
    constructor(title, priority = 'متوسط') {
        this.id = generateId();
        this.title = title;
        this.priority = priority;
        this.completed = false;
        this.createdAt = getCurrentDate();
    }
    
    toggle() {
        this.completed = !this.completed;
    }
}

// Add Task با Destructuring
window.addTask = () => {
    const title = document.getElementById('taskInput').value.trim();
    const priority = document.getElementById('prioritySelect').value;
    
    if (!title) {
        alert('لطفا عنوان وظیفه را وارد کنید');
        return;
    }
    
    const task = new Task(title, priority);
    tasks = [...tasks, task];  // Spread Operator
    
    document.getElementById('taskInput').value = '';
    
    saveToStorage();
    renderTasks();
};

// Toggle Task
window.toggleTask = (id) => {
    tasks = tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
    );
    
    saveToStorage();
    renderTasks();
};

// Delete Task
window.deleteTask = (id) => {
    if (confirm('آیا مطمئن هستید؟')) {
        tasks = tasks.filter(task => task.id !== id);
        saveToStorage();
        renderTasks();
    }
};

// Filter Tasks
window.filterTasks = (filter) => {
    currentFilter = filter;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    renderTasks();
};

// Get Filtered Tasks با Chaining
const getFilteredTasks = () => {
    switch(currentFilter) {
        case 'active':
            return tasks.filter(task => !task.completed);
        case 'completed':
            return tasks.filter(task => task.completed);
        case 'بالا':
        case 'متوسط':
        case 'پایین':
            return tasks.filter(task => task.priority === currentFilter);
        default:
            return tasks;
    }
};

// Render Tasks با Template Literals
const renderTasks = () => {
    const container = document.getElementById('tasksContainer');
    const filtered = getFilteredTasks();
    
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📋</div>
                <p>موردی یافت نشد</p>
            </div>
        `;
    } else {
        container.innerHTML = filtered.map(({ id, title, priority, completed, createdAt }) => `
            <div class="task ${completed ? 'completed' : ''}">
                <div class="task-info">
                    <div class="task-title">${title}</div>
                    <div class="task-meta">
                        <span class="priority priority-${priority}">${priority}</span>
                        <span>📅 ${createdAt}</span>
                    </div>
                </div>
                <div class="task-actions">
                    <button class="btn-complete" onclick="toggleTask(${id})">
                        ${completed ? '↩️ بازگردانی' : '✓ انجام شد'}
                    </button>
                    <button class="btn-delete" onclick="deleteTask(${id})">
                        🗑️ حذف
                    </button>
                </div>
            </div>
        `).join('');
    }
    
    updateStats();
};

// Update Statistics با Destructuring و Computed Properties
const updateStats = () => {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const active = total - completed;
    const rate = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    // Destructuring با ترکیب Object
    const stats = { total, active, completed, rate };
    
    document.getElementById('totalTasks').textContent = stats.total;
    document.getElementById('activeTasks').textContent = stats.active;
    document.getElementById('completedTasks').textContent = stats.completed;
    document.getElementById('completionRate').textContent = `${stats.rate}%`;
};

// Enter برای افزودن
document.getElementById('taskInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

// Initial Render
renderTasks();

console.log('✅ برنامه با Modern JavaScript Features آماده است!');
console.log('استفاده از: Destructuring, Spread, Template Literals, Arrow Functions, Classes');