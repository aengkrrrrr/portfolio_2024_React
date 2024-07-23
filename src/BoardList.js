import React, { Component } from 'react'
import ListImg from './images/board_list_img.png';
// import Button from 'react-bootstrap/Button';

function BoardList({showView}) {

  const [boardList, setBoardList] = useState([]);
  const [boardId, setBoardId] = useState(0);

  const ClickPd = (e) => {
    e.preventDefault();
    };

  let date = this.props.data.update_date !== '0000-00-00' ? this.props.data.update_date : this.props.data.date;

  let getList = () => {
    Axios.get('http://34.64.203.251:8000/list')
    .then(res => {
      const data = res.data;
      setBoardList(data);
      setCheckList([]);
      setBoardId(0);
      props.renderComplete(); // 목록 출력 완료
    })
    .catch(function (error) {
      console.log(error);
    });
  };
  useEffect(()=>{
    getList(); 
  },[]) // 최초 한번 실행, 결과가 나오면 실행

  let onCheckboxChange = (checked, id) => {
    let list = checkList;
    if (checked) {
      if (list.indexOf(id) === -1) {
        list.push(id);
      }
    } else {
      let idx = list.indexOf(id);
      list.splice(idx, 1);
    }
    setCheckList(list);
  };

  Axios.post('http://34.64.203.251:8000/delete',{
    boardIdList : boardIdList.substring(0, boardIdList.length -1)
   })
  .then( res => {     
    getList();
  })
  .catch(function (error) {     
    console.log(error);
  });
};
useEffect(()=>{
  if(!props.isComplete){
    getList();
  }
},[props.isComplete])

    return (
    <>
      <ul className="board_list df fdc aic">
          {[1, 2, 3,4].map(index => (
            <li key={index} className="list df aic">
              <img src={ListImg} alt="게시판 이미지" />
              <div className="list_ct df fdc">
               <a href="" onClick={ClickPd}>
                <strong onClick={() => showView(this.props.data.id)}>{this.props.data.title}</strong>
                </a> 
                <p><td>{this.props.data.content}</td></p>
              </div>
              <em>{date}</em>
            </li>
          ))}
        </ul>
        <div className="btn-group me-2" role="group" aria-label="First group">
          <button type="button" className="btn btn-outline-secondary">1</button>
          <button type="button" className="btn btn-outline-secondary">2</button>
          <button type="button" className="btn btn-outline-secondary">3</button>
        </div>
    </>
    )

export default BoardList;