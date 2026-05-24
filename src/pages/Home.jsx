import ProjectCard from "../components/ProjectCard";
import heroImage from "../assets/hero.png";
import myPhoto from "../assets/selfport.jpg";

function Home() {
  const projects = [
    {
      id: 1,
      title: "Hairdresser Website",
      description: "Website created for a Hairdresser shop.",
      image:
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/coming-soon",
    },
    {
      id: 2,
      title: "Memory Game",
      description: "Built this very fun memory game.",
      image:
        "https://images.unsplash.com/photo-1654398957927-16cb1ee524fd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/coming-soon",
    },
    {
      id: 3,
      title: "E-Commerce Website",
      description: "Created this E-Commmerce website.",
      image:
        "https://plus.unsplash.com/premium_photo-1664908307814-9b5b104d5738?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/coming-soon",
    },
    {
      id: 4,
      title: "Analytics Website",
      description: "Developed this soccer expected goals analytics website.",
      image:
        "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/coming-soon",
    },
  ];

  return (
    <div className="home">
      <section id="home" className="container py-5 text-center">
        <h1>Omar Touijer</h1>
        <p className="lead">Software Engineering Student</p>
      </section>

      <section id="about" className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <h2>About Me</h2>
            <p>
              I am a software engineering student at the University of Ottawa
              with an interest in web development, UI/UX design, and building
              digital experiences that are clear, functional, and enjoyable.
            </p>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <img
              src={myPhoto}
              alt="Omar Touijer"
              className="img-fluid"
              style={{
                height: "240px",
                width: "240px",
                objectFit: "cover",
                borderRadius: "45%",
                marginLeft: "160px",
              }}
            />
          </div>
        </div>
      </section>

      <section id="process" className="container py-5">
        <h2>How I Work</h2>
        <p>
          When I work on a project, I like to start by understanding what the
          users need and what the interface is supposed to help them do. From
          there, I plan the layout, build a first version, test how it feels to
          use, and make improvements based on feedback. My goal is to create
          designs that are simple, useful, and easy to navigate.
        </p>
      </section>

      <section id="projects" className="container py-5">
        <h2 className="mb-4">My Projects</h2>

        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
