import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ViewImg from './images/view_img.png';

function View({ id }) {
  const [board, setBoard] = useState(null);

  useEffect(() => {
    if (id) {
      Axios.get(`http://127.0.0.1:9000/view/${id}`)
        .then((res) => {
          setBoard(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  if (!board) return <div>Loading...</div>;

  return (
    <>
      <div className="view_wrap df aic">
        <div className="img_wrap">
          <img src={ViewImg} alt='게시판 작성 이미지' />
        </div>
        <form className="view_ct_wrap">
          <div className="view_ct df aic">
            <strong>{board.name}</strong>
            <em>{board.update_date}</em>
          </div>
          <p>{board.content}</p>
          <div className="view_btn_wrap df aic">
            <button type="button" className="btn btn-secondary">수정</button>
            <button type="button" className="btn btn-danger">삭제</button>
            <a href=""><span className="material-symbols-outlined">reply</span></a>
          </div>
        </form>
      </div>
    </>
  );
}

export default View;
