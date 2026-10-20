const pool=require('../db');
exports.getAllItems=async()=> (await pool.query('SELECT * FROM menu_items ORDER BY item_id')).rows;
exports.getItemByName=async name=> (await pool.query('SELECT * FROM menu_items WHERE item_name=$1 ORDER BY item_id LIMIT 1',[name])).rows[0];
exports.createItem=async(name,price)=>(await pool.query('INSERT INTO menu_items(item_name,item_price) VALUES($1,$2) RETURNING *',[name,price])).rows[0];
exports.updateItem=async(id,name,price)=>(await pool.query('UPDATE menu_items SET item_name=$2,item_price=$3 WHERE item_id=$1 RETURNING *',[id,name,price])).rows[0];
exports.deleteItem=async id=>(await pool.query('DELETE FROM menu_items WHERE item_id=$1 RETURNING *',[id])).rows[0];
