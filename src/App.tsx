import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AppContainer } from "./App.styled";

import Navbar from "./components/Layout/Navbar/Navbar";
import Footer from "./components/Layout/Footer/Footer";
import { sectionList } from "./CONSTANT/CONSTANT";
import { PageSection } from "./components/PageSection/PageSection";

function App() {
  return (
      <>
      <Navbar />
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
