import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../contexts/DataContext';

const ItemAiReturn = () => {

  // URL 통합 관리
  const flaskURL = process.env.REACT_APP_FLASK_URL;

  const { contentImg, styleImg, imageData, setImageData } = useContext(DataContext);

  console.log(contentImg);
  console.log(styleImg);

  const styleTransfer = async () => {
    await axios.post(`${flaskURL}/styleTransfer`, {
      content_image: contentImg,
      style_image: styleImg
    })
      .then((res) => {
        console.log(res);
        setImageData(res.data.imageData)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    styleTransfer();
  }, [])

  useEffect(()=>{
    return(
      setImageData(null)
    )
  },[])

  return (
    <div className='item_ai_return'>
      {imageData ? <img src={`data:image/*;base64,${imageData}`} alt="NST Image" /> : <img width='250px' height='250px' src='https://firebasestorage.googleapis.com/v0/b/greenote-d2774.appspot.com/o/KakaoTalk_20231106_172717154.gif?alt=media&token=61de47d6-dec9-4e98-ab2e-bd5fd2f00c5b' alt='대기중'></img>}
    </div>
  )
}

export default ItemAiReturn