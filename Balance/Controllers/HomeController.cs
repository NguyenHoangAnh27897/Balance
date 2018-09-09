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
            _cntTOW = loadCnt();
            //_cntBL = loadBl();
            ViewBag.MenuLeft = _meuLeft;
            ViewBag.Project = _cntTOW;
            Connection();
            string sql = "select * from balancelife";
            da = new OleDbDataAdapter(sql, cn);
            dt = new DataTable();
            da.Fill(dt);
            return View(dt);
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

        protected string loadCnt()
        {
            string data = "";
            Connection();
            string sql = "select * from project";
            da = new OleDbDataAdapter(sql, cn);
            dt = new DataTable();
            da.Fill(dt);
            string myDiv = "myDiv";
            int i = 1;
            if (dt.Rows.Count > 0 && dt != null)
            {
                data += "<section id='projects' style='width: 100%'>";
                foreach (DataRow dr in dt.Rows)
                {
                    myDiv += i;               
                    data += "<div class='column' style='flex:30%;'>";   
                    data += "<div class='item-thumbs span3 blackandwhite " + dr["type"].ToString() + "'>";
                    data += "<a class='hover-wrap idName' data-id='"+ myDiv + "' data-toggle='modal' data-target='#myModal'>";
                    data += "<span class='overlay-img-thumb'></span>";
                    data += "</a>";
                    data += "<img src='Images/photos/" + dr["Avatar"].ToString() + "' alt=''></div></div>";
                    Session["myDiv" + i] = dr["IDproject"].ToString();
                    i++;
                    myDiv = myDiv.Remove(myDiv.Length - 1);
                }
                data += "</section>";
            }
            return data;
        }



    }
}