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

pm.removeTodoFromProj(todo1, "Work")

console.log(workProject)
