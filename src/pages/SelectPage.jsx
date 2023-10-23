import React, { useState } from 'react'
import AiPhotoBox from '../components/AiPhotoBox'
import SlideBox from '../components/SlideBox';
import AiHeader from '../components/AiHeader';

const SelectPage = () => {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleSelectComponent = (componentName) => {
      setSelectedComponent(componentName);
    };

    return (
        <div>
        <AiHeader onSelectComponent={handleSelectComponent} />
        {selectedComponent === "다이어리" && <AiPhotoBox />}
        {selectedComponent === "AiPhotoBox" && <AiPhotoBox />}
        {selectedComponent === "SlideBox" && <SlideBox />}
        
        </div>
    )
}

export default SelectPage