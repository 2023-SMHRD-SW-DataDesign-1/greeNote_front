import React from 'react'

const Item = () => {

    const testConnect = () => {
        let obj = {
            test: '테스트통신'
        };

        axios.get('http://localhost:8088/')
    }
  return (
    <div>
        <h3>Item</h3>
        <button>테스트 클릭</button>
    </div>
  )
}

export default Item