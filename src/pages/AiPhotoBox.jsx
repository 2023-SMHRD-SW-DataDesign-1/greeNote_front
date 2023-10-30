import React, { useContext, useEffect } from 'react'
import AiPlant from '../components/AiPlant'
import AiPhoto from '../components/AiPhoto'
import { DataContext } from '../contexts/DataContext';

const AiPhotoBox = () => {

    // 식물 리스트
    const { plantList, setSelectedPlantData } = useContext(DataContext);

    useEffect(() => {
        setSelectedPlantData(plantList[0]);
    }, []);

    return (
        <div className='web_top_container'>
            <div className='web_container'>
                <div className='web_box'>
                    <AiPlant />
                    <AiPhoto />
                </div>
            </div>
        </div>
    )
}

export default AiPhotoBox