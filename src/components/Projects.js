import timeTracking from "../img/tracking.png";
import threeColumn from "../img/threeColumn.png";
import navigation from "../img/navigation.png";
import generator from "../img/generator.png";
import cardComponent from "../img/cardComponent.png";
import rating from "../img/rating.png";
import interactiveSlider from "../img/interactiveSlider.png";
import { useEffect } from "react";

const Projects = () => {
  // useEffect(() => {
  //   const callbackFunc = (entries, observer) => {
  //     entries.forEach((entry) => {
  //       if (!entry.isIntersecting) {
  //         entry.target.classList.add("project-display");
  //       } else {
  //         entry.target.classList.remove("project-display");
  //       }
  //     });
  //   };

  //   const options = {
  //     root: null,
  //     threshold: 0.1,
  //   };

  //   const observer = new IntersectionObserver(callbackFunc, options);

  //   const content = document.querySelectorAll(".project");
  //   content.forEach((c) => {
  //     observer.observe(c);
  //   });
  // }, []);

  // useEffect(() => {
  //   const callbackFunc = (entries, observer) => {
  //     const [entry] = entries;
  //   };

  //   const options = {
  //     root: null,
  //     threshold: 0.1,
  //   };
  //   const observer = new IntersectionObserver(callbackFunc, options);
  //   const projects = document.querySelector(".projects");

  //   observer.observe(projects);
  // }, []);

  return <div className='projects' id='projects'></div>;
};

export default Projects;
