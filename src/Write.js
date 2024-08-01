import React, { useState, useEffect } from 'react';
import Axios from 'axios';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import WriteImg from './images/view_img.png';

function Write({boardId, handleCancle, isModifyMode}){
  const[form, setForm] = useState( {
    name: '',
    content:''
  })

  let write = () =>{
    Axios.post('http://127.0.0.1:9000/insert',{
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
    Axios.post('http://127.0.0.1:9000/update',{
      id:boardId,
      name: form.name,
      content: form.content
    })
    .then( res => {
     alert('수정 완료');
      
     setForm({
      name:'',
      content:''
     });

     handleCancle();

    })
    .catch(function (error) {     
      console.log(error);
    });
  }


  let detail = () =>{
    Axios.get(`http://127.0.0.1:9000/detail?id=${boardId}`)
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
          <Form>
          <Form.Group className="write_ct_wrap mb-4">
              <Form.Label>이름</Form.Label>
              <Form.Control
              type="text" 
              name="name"
              placeholder="이름을 입력하세요" 
              onChange={inputHandler}
              value={form.name}
              />
              </Form.Group> 
            
            <Form.Group className="mb-4" controlId="content">
            <Form.Label>댓글</Form.Label>
            <Form.Control
              type="text" 
              name="content"
              placeholder="댓글을 입력하세요" 
              as="textarea"
              rows="5"
              onChange={inputHandler}
              value={form.content}
              />
            </Form.Group>
      
            <div className="write_btn_wrap df aic">
              <button type="button" className="btn btn-primary"
              onClick={
                isModifyMode ? update : write
              }>등록</button>
              <a href=""><span className="material-symbols-outlined">reply</span></a>
            </div>
            </Form>
        </div>
  
    </>
  )  
}

export default Write;