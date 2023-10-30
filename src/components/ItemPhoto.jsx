import React from 'react'

const ItemPhoto = (props) => {

    const imageUrl = JSON.parse(props.data.image_url);

    console.log(props.selected);
    const selectedStyle = {
        border: props.selected ? '6px solid #5192B3' : 'none', // 선택된 이미지에 테두리 스타일 추가
    };

    const selected = () => {}

    return (
        <div>
            {imageUrl.map((url, index) => (
                <img
                    key={index} // 고유한 키 prop을 제공해야 합니다.
                    className="item_photo"
                    style={selectedStyle}
                    onClick={(e) => props.onClick(e)}
                    src={url.image_url}
                />
            ))}
        </div>
    );
}

export default ItemPhoto