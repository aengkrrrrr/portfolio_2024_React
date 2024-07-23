import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ListImg from './images/board_list_img.png';
// import Button from 'react-bootstrap/Button';

function BoardList({ showView, isComplete, data }) {
  const [boardList, setBoardList] = useState([]);
  const [checkList, setCheckList] = useState([]);
  const [boardId, setBoardId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageGroup, setPageGroup] = useState(0);

  const itemsPerPage = 3; // 한 페이지당 표시할 게시글 수
  const pagesPerGroup = 3; // 한 그룹당 표시할 페이지 버튼 수

  const ClickPd = (e) => {
    e.preventDefault();
  };

  let date = data && data.update_date !== '0000-00-00' ? data.update_date : data?.date || '';

  const getList = () => {
    Axios.get('http://34.64.203.251:8000/list')
      .then((res) => {
        const data = res.data;
        setBoardList(data);
        setCheckList([]);
        setBoardId(0);
        // props.renderComplete(); // 목록 출력 완료 함수가 정의되지 않아 주석 처리
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getList();
  }, []); // 최초 한 번 실행, 결과가 나오면 실행

  const onCheckboxChange = (checked, id) => {
    let list = [...checkList];
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

  const deleteBoards = () => {
    Axios.post('http://34.64.203.251:8000/delete', {
      boardIdList: checkList.join(',')
    })
      .then((res) => {
        getList();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!isComplete) {
      getList();
    }
  }, [isComplete]);

  const totalPages = Math.max(1, Math.ceil(boardList.length / itemsPerPage)); // 최소 1페이지 보장
  const totalGroups = Math.ceil(totalPages / pagesPerGroup);
  const currentGroup = Math.floor((currentPage - 1) / pagesPerGroup);

  const handleNextGroup = () => {
    if (currentGroup < totalGroups - 1) {
      setPageGroup(currentGroup + 1);
      setCurrentPage((currentGroup + 1) * pagesPerGroup + 1);
    }
  };

  const handlePrevGroup = () => {
    if (currentGroup > 0) {
      setPageGroup(currentGroup - 1);
      setCurrentPage(currentGroup * pagesPerGroup - (pagesPerGroup - 1));
    }
  };

  return (
    <>
      <ul className="board_list df fdc aic">
        {boardList
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((board, index) => (
            <li key={index} className="list df aic">
              <img src={ListImg} alt="게시판 이미지" />
              <div className="list_ct df fdc">
                <a href="" onClick={ClickPd}>
                  <strong onClick={() => showView(board.id)}>{board.title}</strong>
                </a>
                <p>{board.content}</p>
              </div>
              <em>{date}</em>
            </li>
          ))}
      </ul>
      <div className="btn-group me-2" role="group" aria-label="Pagination">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={handlePrevGroup}
          disabled={currentGroup === 0}
        >
          Prev
        </button>
        {[...Array(pagesPerGroup)].map((_, index) => {
          const pageIndex = pageGroup * pagesPerGroup + index + 1;
          if (pageIndex > totalPages) return null;
          return (
            <button
              key={pageIndex}
              type="button"
              className={`btn btn-outline-secondary ${pageIndex === currentPage ? 'active' : ''}`}
              onClick={() => setCurrentPage(pageIndex)}
            >
              {pageIndex}
            </button>
          );
        })}
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={handleNextGroup}
          disabled={currentGroup >= totalGroups - 1}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default BoardList;
