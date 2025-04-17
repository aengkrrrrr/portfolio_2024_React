// db.js (MySQL 연결 설정)
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'srimm3399', // MySQL 사용자명
  password: 'thdfla1365!', // MySQL 비밀번호
  database: 'srimm3399'
});

module.exports = pool;
