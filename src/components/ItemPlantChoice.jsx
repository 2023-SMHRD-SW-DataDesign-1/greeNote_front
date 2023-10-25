import React from 'react'

const ItemPlantChoice = ({data, onItemClick, closeModal}) => {


  const bgStyle = {
    backgroundColor: data.color,
    width: '80px',
    height: '80px'
  }

  const imgStyle = {
    width: '67px',
    height: '67px'
  }

  const handleItemClick = () => {
    // 데이터 로그
    console.log('선택한 식물 데이터:', data);

    // 데이터를 부모 컴포넌트로 전달
    onItemClick(data);

    // 클릭시 모달창 닫힘
    closeModal();
  };

  return (
    <div className='item_plant_choice_container' onClick={handleItemClick}  >
      <div className='circle plant_bg_color' style={bgStyle}>
        <div className='circle' >
          <img className="circle plant_choice_image" style={imgStyle} src={data.image_url} alt="Plant" />
        </div>
        </div>
      <div className='plant_choice_nickname'>
        {data.nickname}
      </div>
    </div>
  )
}

export default ItemPlantChoice