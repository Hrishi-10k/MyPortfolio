function Projects() {
  return (
    <div className="container mt-5" id="projects">
      <h2 className="mb-4">Projects</h2>

      <div className="row">
        {/* Project 1 */}
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img src="/project1.png" className="card-img-top" alt="Weather App" />
            <div className="card-body">
              <h5 className="card-title">Weather App</h5>
              <p className="card-text">HTML5 + CSS + JavaScript</p>
              <a href="https://github.com/Hrishi-10k/WEB-DEVLOPMENT-mini-/tree/main/01_Weather_App" className="btn btn-primary" target="_blank" rel="noreferrer">View Project</a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img src="/project2.png" className="card-img-top" alt="To-Do App" />
            <div className="card-body">
              <h5 className="card-title">To-Do App</h5>
              <p className="card-text">React.js + Node.js + MongoDB</p>
              <a href="https://github.com/yourusername/todo-app" className="btn btn-primary" target="_blank" rel="noreferrer">View Project</a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img src="/project3.png" className="card-img-top" alt="Portfolio Website" />
            <div className="card-body">
              <h5 className="card-title">Movie Recommandation System</h5>
              <p className="card-text">Python + HTML5 + CSS</p>
              <a href="https://github.com/Hrishi-10k/WEB-DEVLOPMENT-mini-/tree/main/09_MOVIE" className="btn btn-primary" target="_blank" rel="noreferrer">View Project</a>
            </div>
          </div>
        </div>

        {/* Add more as needed */}
      </div>
    </div>
  );
}

export default Projects;
