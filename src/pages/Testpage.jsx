
import React, { useState } from 'react';

const Testpage = () => {

    const [imageFile, setImageFile] = useState(null);
    const [previewURL, setPreviewURL] = useState(null);

    const onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setImageFile(file);
            setPreviewURL(imageURL);
        }
    };

    const onclick = () => {
        if (imageFile) {
            // 이미지 데이터를 서버로 전송하는 로직을 작성합니다.
            const formData = new FormData();
            formData.append('image', imageFile);

            // Axios 또는 fetch API를 사용하여 서버로 데이터를 전송합니다.
            // 예: Axios 사용

            // axios.post('/upload', formData)
            //   .then(response => {
            //     console.log('업로드 성공');
            //   })
            //   .catch(error => {
            //     console.error('업로드 실패', error);
            //   });
        }
    };



    return (
        <div className='testpage'>
            <form>
                <div className='profile_container2'>
                    <div className='profile_green'>
                        {previewURL ? (
                            <img src={previewURL} alt="green" />
                        ) : (
                            <p>No Image</p>
                        )}
                    </div>
                </div>

                <button onClick={onclick}>
                    <div className="footer_pic">
                        <input
                            type='file'
                            accept="image/jpg,image/png,image/jpeg,image/gif"
                            onChange={onchange}
                        />
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                            </svg>
                        </a>
                    </div>
                </button>
            </form>
        </div>
    );
};

export default Testpage;