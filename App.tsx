import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './FirstPage'; // Your existing first page component
import SecondPage from './SecondPage'; // New second page component
import PaymentPage from './PaymentPage'; // New payment gateway page component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/second-page" element={<SecondPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
