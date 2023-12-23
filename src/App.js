import logo from './logo.svg';
import './App.css';
import ProjectShow from './Component/Projects/ProjectShow';
import Reactprojectshow from './Component/Projects/Reactprojectshow';
import Header from './Component/Header/Header';
import Bioinfo from './Component/BioInfo/Bioinfo';
import Skill from './Component/Skill/Skill';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Preloader from './Component/Preloader/Preloader';
import { useEffect, useState } from 'react';
import Cvviewer from './Component/Cv/Cvviewer';



function App() {
  const [isLoading,setisloading]=useState(true);
  useEffect(()=>
  {
      setTimeout(()=>
      {
          setisloading(false)
      },3000)
  }
  )
  return (
   <div>
    <Preloader></Preloader>
    {
      !isLoading&&<>
      <Header></Header>
    
    <div >
    <Reactprojectshow></Reactprojectshow>
    <ProjectShow></ProjectShow>
   
    </div>
    <Skill></Skill>
    <Bioinfo></Bioinfo>
    <Contact></Contact>
    <Footer></Footer>
      </>
    }
    
   </div>
  );
}

export default App;
