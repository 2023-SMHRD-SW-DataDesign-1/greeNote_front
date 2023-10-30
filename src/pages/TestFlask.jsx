import React, { useState } from 'react'
import axios from 'axios'

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

    return (
        <div>
            <form onSubmit={test} enctype="multipart/form-data">
                <input type="file" name="content_image" accept="image/*" onChange={handleContentImageChange} />
                <input type="file" name="style_image" accept="image/*" onChange={handleStyleImageChange} />
                <button type='submit'>클릭</button>
            </form>

            {imageData && <img src={`data:image/*;base64,${imageData}`} alt="NST Image" />}
        </div>
    )
}

export default TestFlask