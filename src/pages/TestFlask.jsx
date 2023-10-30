import React, { useState } from 'react'
import axios from 'axios'
import firebaseApp from "../Firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const TestFlask = () => {

    const [contentImageFile, setContentImageFile] = useState(null);
    const [styleImageFile, setStyleImageFile] = useState(null);

    // 결과 이미지
    const [imageData, setImageData] = useState('');

    const handleContentImageChange = (e) => {
        const file = e.target.files[0];
        setContentImageFile(file);
    };

    const handleStyleImageChange = (e) => {
        const file = e.target.files[0];
        setStyleImageFile(file);
    };

    const test = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('content_image', contentImageFile);
        formData.append('style_image', styleImageFile);
        await axios.post(`http://127.0.0.1:5000/perform_nst`, formData)
            .then((res) => {
                console.log(res);
                setImageData(res.data.imageData);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const [imageTest, setImageTest] = useState();
    const storage = getStorage(firebaseApp);

    const imageChange = (e) => {
        const file = e.target.files[0];
        console.log(file);
        setImageTest(file);
    };

    const test2 = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('testImage', imageTest)

        try {
            const imageRef = ref(storage, `images/${Date.now()}`);
            // `images === 참조값이름(폴더이름), / 뒤에는 파일이름 어떻게 지을지
            await uploadBytes(imageRef, imageTest).then((snapshot) => {
                // 파일 경로 저장
                getDownloadURL(snapshot.ref).then((url) => {

                    axios.post(`http://127.0.0.1:5000/plant_disease`, {
                        imageUrl: url
                    })
                        .then((res) => {
                            console.log(res);
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                });
            });

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <form onSubmit={test} enctype="multipart/form-data">
                <input type="file" name="content_image" accept="image/*" onChange={handleContentImageChange} />
                <input type="file" name="style_image" accept="image/*" onChange={handleStyleImageChange} />
                <button type='submit'>클릭</button>
            </form>
            <form onSubmit={test2}>
                <input type="file" name="image" accept='image/*' onChange={imageChange} />
                <button type='submit'> 분류기 테스트 </button>
            </form>

            {imageData && <img src={`data:image/*;base64,${imageData}`} alt="NST Image" />}
        </div>
    )
}

export default TestFlask