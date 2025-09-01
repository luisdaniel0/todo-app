export default class Project{
    constructor(name, todos=[]){
        this.name=name
        this.todos=todos

    }

    addTodo(todo){
        this.todos.push(todo)
    }

    removeTodo(todo) {
    const index = this.todos.indexOf(todo);
    if (index === -1) {
        console.log("Todo not found in this project");
        return;
    }
    this.todos.splice(index, 1);
    console.log(`Todo removed: ${todo.title}`);
    }

    listAllTodos() {
    for (let i = 0; i < this.todos.length; i++) {
        const todo = this.todos[i];
        console.log(`Title: ${todo.title}, Due: ${todo.dueDate}`);
        
    }
}
}