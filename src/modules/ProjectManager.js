import Project from "./Project"

export default class ProjectManager{
    constructor(){
        this.projects=[]
        this.defaultProject= new Project("Default")
        this.projects.push(this.defaultProject)
    }

    addProject(project){
        this.projects.push(project)
    }

    findProject(projectName){
        return this.projects.find(proj=> proj.name === projectName)
    }

    addTodoToProject(todo,projectName){
        //take todo instance
        //take projectName
        //find projectName in projects
        //if projectName doesnt exist throw a warning or error
        //if project exists, add todo instance to that project
        //confirm the project it was added to 
        const project = this.findProject(projectName)
        if(project){
            project.addTodo(todo)
            console.log(`Todo added to project: ${project.name}`);
            return //stop
        } else{
            this.defaultProject.addTodo(todo)
            console.log("this project doesn't exist, added to Default Project")
        }

    }

    removeTodoFromProj(todo,projectName){
        const project = this.findProject(projectName)
        if(!project){
            console.log("this project dont exist")
            return //stop
        } else{
            project.removeTodo(todo)
            console.log(`Todo removed from project: ${project.name}`)
        }
    }
}