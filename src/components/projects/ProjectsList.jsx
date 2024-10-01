import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-multi-carousel';
import ProjectsItem from './ProjectsItem';
import { getProjects } from '../../redux/projects/ProjectsSlice';
import 'react-multi-carousel/lib/styles.css';
import '../../assets/styles/projects.css';

const ProjectsList = () => {
  const dispatch = useDispatch();
  const { projectItems } = useSelector((store) => store.projects);
  const [selectedFilter, setSelectedFilter] = useState('All');
  useEffect(() => {
    if (projectItems.length === 0) {
      dispatch(getProjects());  
    }
  });
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 992, min: 765 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 765, min: 0 },
      items: 1,
    },
  };

  const filteredProjects = projectItems.filter((project) => {
    if (selectedFilter === 'All') {
      return true;
    }
    return project.filter.includes(selectedFilter);
  });
  return (
    <div className="projects-main" id="projects">
      <h2>Latest Projects</h2>
      <div className="projects-filter">
        <button
          type="button" 
          onClick={() => setSelectedFilter('All')}
          style={{
            backgroundColor: selectedFilter === 'All' ? '#5a79f3' : '#fff',
            color: selectedFilter === 'All' ? '#fff' : '#181d2b',
        }}>All</button>
        <button
          type="button"
          onClick={() => setSelectedFilter('React.js')}
          style={{
            backgroundColor: selectedFilter === 'React.js' ? '#5a79f3' : '#fff',
            color: selectedFilter === 'React.js' ? '#fff' : '#181d2b',
          }}
        >React.js</button>
        <button
          type="button"
          onClick={() => setSelectedFilter('React Native')}
          style={{
            backgroundColor: selectedFilter === 'React Native' ? '#5a79f3' : '#fff',
            color: selectedFilter === 'React Native' ? '#fff' : '#181d2b',
          }}
        >
          React Native
        </button>
        <button
          type="button"
          onClick={() => setSelectedFilter('Ruby on Rails')}
          style={{
            backgroundColor: selectedFilter === 'Ruby on Rails' ? '#5a79f3' : '#fff',
            color: selectedFilter === 'Ruby on Rails' ? '#fff' : '#181d2b',
          }}
        >Ruby on Rails</button>
      </div>
      <div className="projects-list">
         
        <Carousel responsive={responsive}>
          {filteredProjects.map((project) => (
              <ProjectsItem
                key={project.id}
                projectId={project.id}
                projectName={project.name}
                projectImage={project.image}
                projectDemo={project.demo}
                projectSource={project.source}
                projectLive={project.live}
                projectGithub={project.github}
                backImg={project.backimg}
                projectDescription={project.description}
                tech1={project.tech1}
                tech2={project.tech2}
                tech3={project.tech3}
              />
             
          ))}
        </Carousel>
      </div> 
    </div>
  );
};

export default ProjectsList;