import React from 'react'

const ItemPhoto = (props) => {

  return (
    <div className='item_photo'>
        <img src=''></img>
        <span>{props.data.name}</span>
    </div>
  )
}

export default ItemPhoto