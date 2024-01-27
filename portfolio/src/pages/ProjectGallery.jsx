import Project from '../components/Project';
import ProjectList from '../data/project.json';

function ProjectsGallery() {
    // Body
    return <div>
        This is list of my past projects
        <div>
            { ProjectList.map((project) => {
                return <Project title={project.title} githubLink={project.githubLink} deployedLink={project.deployedLink} />;
            })}
        </div>
    </div>
}

export default ProjectsGallery;