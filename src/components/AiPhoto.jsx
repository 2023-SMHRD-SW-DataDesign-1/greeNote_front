import React, { useState } from 'react'
import ItemPhoto from './ItemPhoto'
import axios from 'axios';
import { Link } from 'react-router-dom';

const AiPhoto = () => {

    const arr = [
        {
            url: 'https://bloomingnme.com/web/product/big/202202/8db17f5a11ddc87b3333d5506156ec17.jpg',
            name: '1',
        },
        {
            url: 'https://image.babosarang.co.kr/product/detail/EKE/7610691492/_401.jpg',
            name: '2',
        },
        {
            url: 'https://m.bfagarden.com/web/upload/NNEditor/20190711/copy-1562832260-IMG_4821.JPG',
            name: '3',
        },
        {
            url: 'https://cdn.imweb.me/upload/S201905295cee7c0f94cee/f08cf31ba5aa2.jpeg',
            name: '4',
        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7QQ2n-KWzAP84wnEwfQTF6JIUub2E0Ua31w&usqp=CAU',
            name: '5',
        },
        {
            url: 'https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/2843513800/B.jpg?391000000',
            name: '6',
        },
        {
            url: 'https://www.dailimseed.co.kr/modules/shop/files/2021/04/27/8351_1.jpg?v=20221021225123',
            name: '7',
        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFzf2g1NXpXDIGmko4N-PPz0sGdHEMlgIaqA&usqp=CAU',
            name: '8',
        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8EZuv9gNTL1gWht2nKZkm2eI5b7mzRPcJA&usqp=CAU',
            name: '9',
        },
        {
            url: 'https://blog.kakaocdn.net/dn/cVOH8a/btqDRMK9kRl/EHXKPRgcrQbNIsOc8k8ycK/img.jpg',
            name: '10',
        },
        {
            url: 'https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/cDjc/image/iW__wJmW9VmK_7af57pqEulPAF0.jpg',
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