import React from 'react'

const date = () => {
  
  const today = new Date();

  /* 오늘 날짜 출력하기 */
  console.log(today);
  const Today = today.toLocaleDateString();

  /* 오늘 요일 출력하기 */
  const options = { weekday: 'long' }; 
  // 'long' 옵션은 요일을 긴 형태(예: "Monday")로 출력합니다.
  const dayOfWeek = today.toLocaleDateString('ko-KR', options);

  return (
    <div className='date_container'>
      <div className='date'>
        {Today}
      </div>
      <div className='week'>
        {dayOfWeek}
      </div>
    </div>
  )
}

export default date