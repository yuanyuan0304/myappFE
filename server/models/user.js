const pool = require('../db');

module.exports = {
  async getAllUsers() {
    const [rows] = await pool.query('SELECT * FROM users');
    return rows;
  },
  
  async getUserById(id) {
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  },
  
  async createUser(userData) {
    const { name, email } = userData;
    const [result] = await pool.query(
      'INSERT INTO users (name, email) VALUES (?, ?)',
      [name, email]
    );
    return { id: result.insertId, ...userData };
  },
  
  async updateUser(id, userData) {
    const { name, email } = userData;
    await pool.query(
      'UPDATE users SET name = ?, email = ? WHERE id = ?',
      [name, email, id]
    );
    return { id, ...userData };
  },
  
  async deleteUser(id) {
    await pool.query('DELETE FROM users WHERE id = ?', [id]);
    return true;
  }
};