import React, { useContext, useEffect } from 'react'
import AiPlant from '../components/AiPlant'
import AiPhoto from '../components/AiPhoto'
import { DataContext } from '../contexts/DataContext';
import { useLocation } from 'react-router-dom';

const AiPhotoBox = () => {

    // // 식물 리스트
    // const { plantList, setSelectedPlantData } = useContext(DataContext);

    // // 식물 목록별 조회하기 위한 id값 가져오기
    // const location = useLocation();
    // const queryParams = new URLSearchParams(location.search);
    // const plant_id = queryParams.get('plant_id');

    // // 선택된 plant 감지하는 함수
    // const nowSelected = () => {
    //     const selectedData = plantList.find(data => data.plantId == parseInt(plant_id));

    //     if (selectedData) {
    //         setSelectedPlantData(selectedData);
    //     } else {
    //         console.log('바뀜');
    //         setSelectedPlantData(plantList[0]);
    //     }
    // }

    // useEffect(() => {
    //     nowSelected();
    // }, []);

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