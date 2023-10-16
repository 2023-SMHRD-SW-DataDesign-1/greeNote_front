import React from 'react'
import axios from 'axios';

const Item = () => {

    const testConnect = async () => {
        let obj = {
            test: '테스트통신'
        };
        await axios.post(`http://localhost:8088/MainProject/test.do`, obj)
        .then((res)=>{
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

  return (
    <div>
        <h3>Item</h3>
        <button onClick={testConnect}>테스트 클릭</button>
    </div>
  )
}

export default Item