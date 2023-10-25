import React from 'react'

const ItemPhoto = (props) => {

  const selectedStyle = {
    border: props.selected ? '5px solid gray' : 'none', // 선택된 이미지에 테두리 스타일 추가

};

return (
    <div className="item_photo" style={selectedStyle} onClick={props.onClick}>
        <img src=''></img>
        <span>{props.data.name}</span>
    </div>
);
}

export default ItemPhoto