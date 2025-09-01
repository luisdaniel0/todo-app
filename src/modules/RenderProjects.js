import ProjectManager from "./ProjectManager";


const RenderProject =(projects)=>{
    const container = document.querySelector('.projects-container')
    container.textContent="";

    projects.forEach(project=>{
        const btn = document.createElement('button')
        btn.textContent=project.name
        btn.classList.add('project-btn')
    })

    container.appendChild(btn)


}
const projects = [
  { name: "Work" },
  { name: "Personal" },
  { name: "Shopping" }
];
RenderProject(projects);



export default RenderProject