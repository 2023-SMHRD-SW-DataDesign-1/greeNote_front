import React, { useState } from 'react'
import ItemPhoto from './ItemPhoto'
import axios from 'axios';
import { Link } from 'react-router-dom';

const AiPhoto = () => {

    const arr = [
        {
            url: '001',
            name: '1',
        },
        {
            url: '002',
            name: '2',
        },
        {
            url: '003',
            name: '3',
        },
        {
            url: '004',
            name: '4',
        },
        {
            url: '005',
            name: '5',
        },
        {
            url: '006',
            name: '6',
        },
        {
            url: '007',
            name: '7',
        },
        {
            url: '008',
            name: '8',
        },
        {
            url: '009',
            name: '9',
        },
        {
            url: '010',
            name: '10',
        },
        {
            url: '011',
            name: '11',
        }

    ]
    const [selectedImage, setSelectedImage] = useState(0);



    const handleImageClick = (image) => {
        if (selectedImage.url === image.url) {
            setSelectedImage(0); // 이미 선택된 이미지를 다시 클릭하면 선택 해제
        } else {
            setSelectedImage(image); // 새 이미지를 선택
        }
        console.log('selectedImage:', selectedImage);
    };

    const handleUpload = () => {
        if (selectedImage) {
            // 선택된 이미지를 업로드
            console.log("url",selectedImage.url);
            axios
                .post('/your-upload-api-endpoint', { url: selectedImage.url })
                .then((response) => {
                    console.log('Image uploaded successfully:', response.data);
                    // 업로드가 성공하면 이동하거나 다른 작업을 수행
                })
                .catch((error) => {
                    console.error('Image upload failed:', error);
                    // 업로드 실패 시 오류 처리
                });
        } else {
            // 이미지를 선택하지 않았을 때 처리
            console.log('Please select an image to upload.');
        }
    };

    return (
        <div className='photo_top_container'>
            <div className='web_pageInfo'>
                <img src='/Image/book_logo.png' className='web_pageInfo_img'></img>
                <div className='web_infoText'>생성 AI로 나만의 이미지 만들기</div>
            </div>
            <div className="photo_second_container">
                <div className='photo_container'>
                    {arr.map((img, idx) => (
                        <ItemPhoto key={idx} data={img} selected={selectedImage.url === img.url}
                            onClick={() => handleImageClick(img)} />
                    ))}
                </div>
            </div>

            <div className='photo_btn_div'>
                <Link to='/aiReturn'>
                    <button className="uploadBtn" onClick={handleUpload}>
                        AI 이미지 생성
                    </button>
                </Link>
            </div>

        </div >
    )
}

export default AiPhoto