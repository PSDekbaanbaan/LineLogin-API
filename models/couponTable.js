const sql = require("mssql");
const constant = require("../config/constant");

const couponTable = {};

couponTable.get = async (params) => {
  try {
    var pool = await sql.connect(constant.configServer);

    let query = ` select top 2 MenuTable.* 
		from MenuTable 
		where MenuTable.Photo <> '' `;

    var rs = await pool.request().query(query);

    return [query, rs.recordset];
  } catch (e) {
    console.log(e);
  }
};

module.exports = couponTable;
