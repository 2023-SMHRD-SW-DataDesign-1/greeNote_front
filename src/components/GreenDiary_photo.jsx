import React from 'react'
import { Link } from 'react-router-dom'

const GreenDiary_photo = (props) => {
    return (
        <div className='diaryFile2'>
            <Link to="/diarydetail" className='button_links'>
                <img className='diaryFile2' onClick={props.onClick} src={props.data.url}></img>
            </Link>
        </div>

    )
}

export default GreenDiary_photo