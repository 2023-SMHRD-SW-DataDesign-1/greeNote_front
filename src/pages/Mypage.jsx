import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import firebaseApp from "../Firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Mypage = () => {

    // URL 통합 관리
    const masterURL = process.env.REACT_APP_MASTER_URL;

    // 이미지 핸들러
    const [imageFile, setImageFile] = useState(null);
    const [previewURL, setPreviewURL] = useState(null);
    const [imageUpload, setImageUpload] = useState(null); // 새로운 상태 추가
    const [imageUrl, setImageUrl] = useState(null);
    const storage = getStorage(firebaseApp);

    const thumbnail = async (e) => {
        const file = e.target.files[0];
        setImageUpload(file)
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setImageFile(file);
            setPreviewURL(imageURL);
        }
        if (file === null) return;
        const imageRef = ref(storage, `images/${Date.now()}`);
        // `images === 참조값이름(폴더이름), / 뒤에는 파일이름 어떻게 지을지
        await uploadBytes(imageRef, file).then((snapshot) => {
            // 파일 경로 저장
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrl(url);
                console.log(url);
            });
        });
    };

    return (
        <div className='mypage_container'>
            <div className="input_logo"> {/* 우리 로고 */}
                <img src="/Image/intro_logo.png" alt="logo" />
            </div>
            <div className='mypage_box'>
                <div className='main_title'>
                    회원정보수정
                </div>

                <form>
                    <div className='mypage_form'>
                        <div className='mypage_photo'>{/* 사진과 입력 */}
                            {previewURL ? (
                                <img src={previewURL} alt="green" />
                            ) : (
                                <p>No Image</p>
                            )}
                        </div>
                        <input
                            type='file'
                            accept="image/jpg,image/png,image/jpeg,image/gif"
                            onChange={thumbnail}
                            name='image'
                            className='inputMypage'
                        />
                        <div className='mypage_form2'>
                            <div className='text2'>
                                이름
                            </div>
                            <div className='session_info'>
                                session이름
                            </div>
                            <div className='text2'>
                                아이디
                            </div>
                            <div className='session_info'>
                                session아이디
                            </div>
                            <div className='text2'>
                                비밀번호
                            </div>
                            <input
                                className='mypage_pw'
                                placeholder='비밀번호'
                            />
                            <div className='text2'>
                                별칭
                            </div>
                            <input
                                className='mypage_nickname'
                                placeholder='별칭'
                            />
                            <br /><br />

                            <button type='submit' className='complete_button2'>
                                <Link to="/main" className='button_links'>수정완료</Link>
                            </button>

                        </div>

                    </div>
                </form>


            </div>

        </div>
    )
}

export default Mypage