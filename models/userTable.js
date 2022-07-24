const sql = require("mssql");
const constant = require("../config/constant");

const userTable = {};

userTable.get = async (params) => {
  try {
    var pool = await sql.connect(constant.configServer);

    let query = ` select UserLineTable.* 
		from UserLineTable 
		where UserLineTable.UserId = '${params.UserId}'`;

    var rs = await pool.request().query(query);

    return [query, rs.recordset];
  } catch (e) {
    console.log(e);
  }
};

userTable.create = async (params) => {
  try {
    var pool = await sql.connect(constant.configServer);

    let q_insert = ` insert into UserLineTable ( UserId, DisplayName, DisplayImage ) 
		values ( '${params.UserId}', '${params.DisplayName}', '${params.DisplayImage}' )`;

    await pool.request().query(q_insert);

    let query = ` select UserLineTable.*
    from UserLineTable with (nolock) 
    where UserId = '${params.UserId}' `;
    var rs = await pool.request().query(query);

    return [q_insert, rs.recordset];
  } catch (e) {
    console.log(e);
  }
};

module.exports = userTable;
