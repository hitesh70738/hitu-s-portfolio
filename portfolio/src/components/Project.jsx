function Projects (props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <a href={props.githubLink} target="_blank">Github</a>
            <br />
            <a href={props.deployedLink} target="_blank">View Project</a>
            
        </div>
    )
}

export default Projects;