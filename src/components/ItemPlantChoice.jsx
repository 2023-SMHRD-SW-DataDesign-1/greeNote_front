import React from 'react'

const ItemPlantChoice = (props) => {

  const bgStyle = {
    backgroundColor: props.data.color,
    width: '80px',
    height: '80px'
  }

  const imgStyle = {
    width: '67px',
    height: '67px'
  }


  return (
    <div className='item_plant_choice_container'>
      <div className='circle plant_bg_color' style={bgStyle}>
        <div className='circle' >
          <img className="circle plant_choice_image" style={imgStyle} src={props.data.image_url} alt="Plant" />
        </div>
        </div>
      <div className='plant_choice_nickname'>
        {props.data.nickname}
      </div>
    </div>
  )
}

export default ItemPlantChoice