import {useEffect, useState} from "react";
import instance from "../../axios";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    instance
      .get("projects")
      .then((res) => {
        console.log(res.data);
        setProjects(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="flex justify-center mt-12 font-semibold text-5xl">
        Projects
      </div>
      <div className="mt-6">
        <p className="text-center">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia
        </p>
        <p className="text-center">
          consequat duis enim velit mollit. lorem ipsum
        </p>
      </div>

      <div className="mt-8 mx-6 sm:mx-48">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {projects.map((each, index) => (
            <div key={index}>
              <ProjectCard {...each} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
