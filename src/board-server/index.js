const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const port = 9000;

app.use(cors());
app.use(express.json());

// MySQL 연결 설정
const db = mysql.createConnection({
  host: 'localhost',
  user: 'srimm3399',
  password: 'thdfla1365!', // 본인 비밀번호
  database: 'srimm3399', // 실제 데이터베이스명으로 변경
});

// 연결 확인
db.connect(err => {
  if (err) {
    console.error('MySQL 연결 실패:', err);
    return;
  }
  console.log('MySQL 연결 성공!');
});

// 게시글 목록
app.get('/list', (req, res) => {
  const sql = 'SELECT * FROM chu_board ORDER BY id DESC';
  db.query(sql, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
});

// 게시글 상세 보기 (View)
app.get('/view', (req, res) => {
  const sql = 'SELECT * FROM chu_board WHERE id = ?';
  db.query(sql, [req.query.id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
});

// 게시글 등록
app.post('/insert', (req, res) => {
  const { name, content } = req.body;
  const sql = 'INSERT INTO chu_board (name, content, update_date) VALUES (?, ?, NOW())';
  db.query(sql, [name, content], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: '등록 완료' });
  });
});


// 수정용 상세 데이터 (Write > useEffect에서 사용)
app.get('/detail', (req, res) => {
  const sql = 'SELECT * FROM chu_board WHERE id = ?';
  db.query(sql, [req.query.id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`서버 실행됨: http://127.0.0.1:${port}`);
});
