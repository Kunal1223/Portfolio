import { NavLink } from "react-router-dom";

const ProjectsBtn = () => {
    return (
        <div class="mx-auto xl:mx-0">
            <NavLink to={'/project'}>
                <a href="/" class="project-link">
                    <img src="./images/rounded-text.png" alt="project" class="project-image" />
                    <span class="arrow-icon">&#10132;</span>
                </a>
            </NavLink>
        </div>

    );
};

export default ProjectsBtn;
