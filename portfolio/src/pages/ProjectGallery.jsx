import Project from '../components/Project';
import ProjectList from '../data/project.json';
import './ProjectGallery.css'


function ProjectsGallery() {
    // Body
    return <div>
        <h1 className='text-center'>Welcome to my projects below</h1>
        <div>
            { ProjectList.map((project) => {
                return <Project title={project.title} githubLink={project.githubLink} deployedLink={project.deployedLink} image={project.image} />;
            })}
        </div>
    </div>
}

export default ProjectsGallery;