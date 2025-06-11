function Projects() {
  return (
    <div className="container mt-5" id="projects">
      <h2 className="mb-4">Projects</h2>

      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="/project1.png" className="card-img-top" alt="Project 1" />
            <div className="card-body">
              <h5 className="card-title">To-Do App</h5>
              <p className="card-text">A React + Node.js based productivity app.</p>
              <a href="https://github.com/yourusername/todo-app" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>

        {/* Add more projects here in similar cards */}
      </div>
    </div>
  );
}
export default Projects;
