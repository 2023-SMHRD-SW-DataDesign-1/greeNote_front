import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import firebaseApp from "../Firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { DataContext } from '../contexts/DataContext';
import axios from 'axios';

const Mypage = () => {

    // URL 통합 관리
    const masterURL = process.env.REACT_APP_MASTER_URL;

    // 멤버 정보
    const { memberInfo } = useContext(DataContext);

    // navigate 선언
    const nav = useNavigate();

    // 이미지 핸들러
    const [previewURL, setPreviewURL] = useState(memberInfo.profileImg);
    const [imageUrl, setImageUrl] = useState(memberInfo.profileImg);
    const storage = getStorage(firebaseApp);

    const thumbnail = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
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

    // 회원정보 수정 요청 전송
    const updateMember = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const obj = {};

        formData.forEach((value, key) => {
            obj[key] = value;
        });
        obj['memberid'] = memberInfo.memberid;
        obj['membername'] = memberInfo.membername;
        obj['profileImg'] = imageUrl;

        await axios.post(`${masterURL}/auth/update`, obj)
            .then((res) => {
                console.log(res);
                nav('/main');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className='bodyController'>
            <div className='mypage_container'>
                <div className="input_logo"> {/* 우리 로고 */}
                    <img src="/Image/intro_logo.png" alt="logo" />
                </div>
                <div className='mypage_box'>
                    <div className='main_title'>
                        회원정보수정
                    </div>

                    <form onSubmit={updateMember}>
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
                                    {memberInfo.membername}
                                </div>
                                <div className='text2'>
                                    아이디
                                </div>
                                <div className='session_info'>
                                    {memberInfo.memberid}
                                </div>
                                <div className='text2'>
                                    비밀번호
                                </div>
                                <input
                                    className='mypage_pw'
                                    placeholder='수정 할 비밀번호를 입력 후 완료버튼 클릭'
                                    name='password'
                                />
                                <div className='text2'>
                                    별칭
                                </div>
                                <input
                                    className='mypage_nickname'
                                    placeholder='별칭'
                                    defaultValue={memberInfo.nickname}
                                    name='nickname'
                                />
                                <br /><br />

                                <button type='submit' className='complete_button2'>
                                    수정완료
                                </button>

                            </div>

                        </div>
                    </form>


                </div>

            </div>
        </div>
    )
}

export default Mypage