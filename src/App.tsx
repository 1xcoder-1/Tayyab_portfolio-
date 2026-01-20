import { useState, useEffect } from 'react';

import { Routes, Route, useLocation } from 'react-router-dom';
import Loader from './components/Loader';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []); // Run only once on mount

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait" onExitComplete={() => document.body.style.overflow = ''}>
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      <Routes>
        <Route path="/" element={<HomePage loading={loading} />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}

export default App;
