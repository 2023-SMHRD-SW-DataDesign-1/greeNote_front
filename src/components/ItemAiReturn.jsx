import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../contexts/DataContext';

const ItemAiReturn = () => {

  // URL 통합 관리
  const flaskURL = process.env.REACT_APP_FLASK_URL;

  const { contentImg, styleImg } = useContext(DataContext);

  const [imageData, setImageData] = useState();

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

  return (
    <div className='item_ai_return'>
      {imageData ? <img src={`data:image/*;base64,${imageData}`} alt="NST Image" /> : <img width='250px' height='250px' src='https://i.gifer.com/74H8.gif' alt='대기중'></img>}
    </div>
  )
}

export default ItemAiReturn