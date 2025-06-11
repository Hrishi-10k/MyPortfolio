function Home() {
  return (
    <div className="container text-center mt-5" id="home">
      <img
        src="/profile.jpg"
        alt="My Photo"
        className="img-thumbnail rounded-circle mb-4"
        style={{ width: "200px", height: "200px", objectFit: "cover" }}
      />
      <h1 className="display-4">Hi, I'm Hrishi 👋</h1>
      <p className="lead">A passionate Computer Science student and developer.</p>
    </div>
  );
}
export default Home;
