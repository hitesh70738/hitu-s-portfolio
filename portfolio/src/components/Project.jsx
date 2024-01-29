import './Project.css'

function Projects (props) {
    return (
        <div className="text-center my-4">
            <h2 className='text-warning'>{props.title}</h2>
            <img className="my-4 box" src={props.image} alt="image" />
            <br />
            <div>
            <button type="button" className="btn btn-primary mx-5" onClick={() => window.open(props.githubLink, "_blank")}>
                Github
            </button>
            <button type="button" className="btn btn-primary mx-5" onClick={() => window.open(props.deployedLink, "_blank")}>
                View
            </button>
            </div>
        </div>
    )
}

export default Projects;