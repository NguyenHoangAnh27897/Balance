using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.OleDb;
using System.Data;

namespace Balance.Controllers
{
    public class HomeController : Controller
    {
        protected OleDbDataAdapter da;
        protected OleDbConnection cn;
        protected DataTable dt;
        protected string _meuLeft = "";
        protected string _cntTOW = "";
        protected string _cntBL = "";

        public ActionResult Index()
        {
            _meuLeft = loadCbo();
            //_cntTOW = loadCnt();
            //_cntBL = loadBl();
            ViewBag.MenuLeft = _meuLeft;
            return View();
        }

        protected void Connection()
        {
            string strCn = "Provider=Microsoft.Jet.OLEDB.4.0;";
            strCn += "Data Source=" + Server.MapPath("~/App_Data/Balance.mdb");
            cn = new OleDbConnection(strCn);
            if (cn.State != ConnectionState.Open)
                cn.Open();
        }

        protected string loadCbo()
        {
            string data = "";
            Connection();
            string sql = "select * from loai";
            da = new OleDbDataAdapter(sql, cn);
            dt = new DataTable();
            da.Fill(dt);
            if (dt.Rows.Count > 0 && dt != null)
            {
                foreach (DataRow dr in dt.Rows)
                {
                    data += "<li><a href='#filter' data-option-value='." + dr["typename"].ToString() + " '> " + dr["typename"].ToString() + "</a></li>";
                }
            }
            return data;
        }
    }
}