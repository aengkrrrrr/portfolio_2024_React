import React, { useState, useEffect } from 'react';
import Axios from 'axios';
// import Button from 'react-bootstrap/Button';
import WriteImg from './images/view_img.png';

function Write({boardId, handleCancle, isModifyMode}){
  const[form, setForm] = useState( {
    name: '',
    content:''
  })

  let write = () =>{
    Axios.post('http://34.64.203.251:8000/insert',{
      name: form.name,
      content: form.content
    })
    .then( res => {
     alert('등록 완료');
    })
    .catch(function (error) {     
      console.log(error);
    });
  }

  let update = () =>{
    Axios.post('http://34.64.203.251:8000/update',{
      id:boardId,
      title: form.title,
      content: form.content
    })
    .then( res => {
     alert('수정 완료');
      
     setForm({
      title:'',
      content:''
     });

     handleCancle();

    })
    .catch(function (error) {     
      console.log(error);
    });
  }


  let detail = () =>{
    Axios.get(`http://34.64.203.251:8000/detail?id=${boardId}`)
    .then( res => {
      if(res.data.length > 0){
        setForm({
          name:res.data[0].name,
          content:res.data[0].content,
        })
      }
    })
    .catch(function (error) {     
      console.log(error);
    });
  }
  useEffect(()=>{
    if(isModifyMode && boardId){
      detail();
    }
  },[isModifyMode, boardId])

  let  inputHandler =(e)=> {
    if(e.target.name === 'name'){
      setForm({...form, name:e.target.value})
    }else {
      setForm({...form, content:e.target.value})
    }
  }

  return (
    <>
      <div className="write_wrap df aic">
          <div className="img_wrap">
            <img src={WriteImg} alt='게시판 작성 이미지' />
          </div>
          <form className="write_ct_wrap">
            <div className="mb-3" controlId="name">
              <label for="name" className="form-label">이름</label>
              <input type="email" className="form-control" name="name" id="name" placeholder="이름을 입력하세요"
               onChange={inputHandler}
               value={form.name}/>
            </div>
            <div className="mb-4" controlId="content">
              <label for="content" className="form-label">댓글</label>
              <textarea className="form-control" name="content" id="content" rows="5" placeholder="이름을 입력하세요"
               onChange={inputHandler}
               value={form.content}
               ></textarea>
            </div>
            <div className="write_btn_wrap df aic">
              <button type="button" className="btn btn-primary"
              onClick={
                isModifyMode ? update : write
              }>등록</button>
              <a href=""><span className="material-symbols-outlined">reply</span></a>
            </div>
          </form>
        </div>
  
    </>
  )  
}

export default Write;