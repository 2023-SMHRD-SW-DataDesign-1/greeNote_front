import React from 'react'
import { Link } from 'react-router-dom'

const GreenDiary_photo = ({ data }) => {

    return (
        <div className='diaryFile2'>
            <Link to={`/diarydetail/${data.diary.diaryId}`} className='button_links'>
                <img className='diaryFile2'
                src={JSON.parse(data.imgUrl.image_url)[0].image_url}
                />
            </Link>
        </div>

    )
}

export default GreenDiary_photo