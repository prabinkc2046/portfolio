import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContainer } from './App.styled';

import Navbar from './components/Layout/Navbar/Navbar';
import Footer from './components/Layout/Footer/Footer';
import { sectionList } from './CONSTANT/CONSTANT';
import { PageSection } from './components/PageSection/PageSection';

function App() {
  const [activeLink, setActiveLink] = useState<string>(
    localStorage.getItem('activeLink') || '#personal-info'
  );

  return (
    <>
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
      <AppContainer>
        {sectionList.map(({ id, component }) => (
          <PageSection key={id} id={id} Component={component} />
        ))}
        <ToastContainer />
      </AppContainer>
      <Footer />
    </>
  );
}

export default App;
