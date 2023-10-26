import React from 'react'

const ItemPhoto = (props) => {

  const selectedStyle = {
    border: props.selected ? '6px solid #5192B3' : 'none', // 선택된 이미지에 테두리 스타일 추가

};

return (
    <div>
        <img className="item_photo" style={selectedStyle} onClick={props.onClick} src={props.data.url}></img>
    </div>
);
}

export default ItemPhoto