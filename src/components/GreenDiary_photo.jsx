import React from 'react'
import { Link } from 'react-router-dom'

const GreenDiary_photo = ({ data }) => {
    console.log('다이어리 모아보기', data);
    return (
        <div className='diaryFile2'>
            <Link to={`/diarydetail?diaryId=${data.diary.diaryId}`} className='button_links'>
                <img className='diaryFile2'
                src={JSON.parse(data.imgUrl.image_url)[0].image_url}
                />
            </Link>
            <div className='diary_info'>
                <div className='diary_title'>{data.diary.title}</div>
                <div className='diary_date'>{data.diary.registrationDate}</div>
            </div>
        </div>

    )
}

export default GreenDiary_photo