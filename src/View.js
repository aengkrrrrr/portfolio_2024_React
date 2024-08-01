import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ViewImg from './images/view_img.png';

function View({ id }) {
  const [form, setForm] = useState({ name: '', content: '' });

  useEffect(() => {
    if (id) {
      Axios.get(`http://127.0.0.1:9000/view?id=${id}`)
        .then(res => {
          if (res.data.length > 0) {
            setForm({
              name: res.data[0].name,
              content: res.data[0].content,
            });
          }
        })
        .catch(error => {
          console.error('API call error:', error);
        });
    }
  }, [id]);

  return (
    <div className="view_wrap df aic">
      <div className="img_wrap">
        <img src={ViewImg} alt='게시판 작성 이미지' />
      </div>
      <form className="view_ct_wrap" data-id={id}>
        <div className="view_ct df aic">
          <strong>{form.name}</strong>
        </div>
        <p>{form.content}</p>
        <div className="view_btn_wrap df aic">
          <button type="button" className="btn btn-secondary">수정</button>
          <button type="button" className="btn btn-danger">삭제</button>
          <a href="#"><span className="material-symbols-outlined">reply</span></a>
        </div>
      </form>
    </div>
  );
}

export default View;
