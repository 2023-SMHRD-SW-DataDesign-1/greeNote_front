import React from 'react'
import { Link } from 'react-router-dom'

const GreenDiary_photo = (props) => {
    return (
        <div className='diaryFile2'>
            <Link to="/diarydetail" className='button_links'>
                <img className='diaryFile2' onClick={props.onClick} src={props.data.url}></img>
            </Link>
            <div className='diary_info'>
                <div className='diary_title'>{props.data.title}</div>
                <div className='diary_'>{props.data.date}</div>
            </div>
        </div>

    )
}

export default GreenDiary_photo