import Todo from "./modules/Todo"
import Project from "./modules/Project";
import ProjectManager from "./modules/ProjectManager";


//new project manager
const pm = new ProjectManager()



const workProject = new Project("Work")

pm.addProject(workProject)
console.log(pm)

const todo1 = new Todo("Math","math homework","2924-4-4", "high", )

pm.addTodoToProject(todo1, "Work")

// 5. Inspect the state
console.log("Todos in Work project:", workProject.todos); // Should include todo1
console.log("Todos in Default project:", pm.defaultProject.todos); // Should be empty
console.log("All projects:", pm.projects); // Check projects array to see nothing else was affected
