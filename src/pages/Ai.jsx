import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AiHeader from '../components/AiHeader'
import AiPhotoBox from '../components/AiPhotoBox';
import SlideBox from '../components/SlideBox';
import GreenDiary from './GreenDiary';

const Ai = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleSelectComponent = (componentName) => {
    setSelectedComponent(componentName);
  };

  return (
    <div className='web_top_container'>
    <div className='web_container'>
      <div>
      <div>
      <AiHeader onSelectComponent={handleSelectComponent} />
      {selectedComponent === "diary" && <GreenDiary />}
      {selectedComponent === "ai" && <AiPhotoBox />}
      {selectedComponent === "slide" && <SlideBox />}
    </div>
      
      </div>
    </div>
    </div>
  )
}

export default Ai