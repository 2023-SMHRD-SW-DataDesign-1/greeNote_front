import React, { useContext } from 'react'
import ItemAiReturn from './ItemAiReturn'
import { Link } from 'react-router-dom'
import { DataContext } from '../contexts/DataContext'

const AiReturnPhoto = () => {

    const { imageData } = useContext(DataContext);

    const base64toBlob = (base64Data, contentType) => {
        const byteCharacters = atob(base64Data);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        return new Blob([byteArray], { type: contentType });
    };

    const Download = () => {
        const blob = base64toBlob(imageData, 'image/jpeg'); // 이미지 형식에 맞게 content type을 설정
        const url = window.URL.createObjectURL(blob);
    
        const link = document.createElement('a');
        link.href = url;
        link.download = '다운로드.jpg'; // 고정된 파일명 사용
        link.click();
    
        window.URL.revokeObjectURL(url);
      };


    return (
        <div className='ai_return_top_container'>
            <div className='web_pageInfo'>
                <img src='/Image/book_logo.png' className='web_pageInfo_img'></img>
                <div className='web_infoText'>생성 AI로 만든 이미지</div>
            </div>
            <div className='photo_top_container'>
                <div className='return_container'>
                    <ItemAiReturn />
                    <div className='return_btn_box'>
                        <button className='retry_btn'><Link to="/ai" className='button_link'>다시 선택하기</Link></button>
                        <br></br>

                        <button className='download_btn' onClick={Download}>다운로드</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AiReturnPhoto