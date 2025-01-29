import { Link } from 'react-router-dom';

const FirstPage = () => {
  return (
    <div className="first-page">
      {/* Navigation Menu */}
      <nav>
        <Link to="/second-page">Pricing</Link>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <h1>Welcome to XenoWebApp</h1>
        <Link to="/second-page">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default FirstPage;
