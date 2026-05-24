import { Link } from "react-router-dom";

function ComingSoon() {
  return (
    <section className="container py-5 text-center">
      <h1>Coming Soon</h1>

      <p className="lead">This project will be added later in the semester.</p>

      <Link to="/" className="btn btn-primary mt-3">
        Back to Portfolio
      </Link>
    </section>
  );
}

export default ComingSoon;
