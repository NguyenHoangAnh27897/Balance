﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data;
using System.Data.OleDb;
using System.IO;

namespace Balance.Controllers
{
    public class AdminController : Controller
    {
        protected OleDbDataAdapter da;
        protected OleDbConnection cn;
        protected DataTable dt;
        protected DataTable dts;
        protected OleDbCommand cmd;
        // GET: Admin
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult CSQLBL()
        {
            return View();
        }

        [HttpPost]
        [ValidateInput(false)]
        public ActionResult AddBL(string title, HttpPostedFileBase images, string editor, bool hide = false)
        {
            string chk = "";
            if(hide == false)
            {
                chk = "False";
            }
            else
            {
                chk = "True";
            }
            string Images = "";
            if (images.ContentLength > 0)
            {
                var filename = Path.GetFileName(images.FileName);
                var path = Path.Combine(Server.MapPath("~/Images/photos"), images.FileName);
                images.SaveAs(path);
                Images = images.FileName;
            }
            Connection();
            string sql = "";
            sql = "insert into balancelife(IDblife,Tittleblife,Hide,Description,IMG)";
            sql += "values('" + getGUID().ToString() + "','" + title + "'," + chk + ",'" + editor + "','" + Images + "')";
            cmd = new OleDbCommand(sql, cn);
            cmd.ExecuteNonQuery();
            cn.Close();
            return RedirectToAction("Index", "Admin");
        }

        public ActionResult CSQLL()
        {
            return View();
        }

        [HttpPost]
        public ActionResult AddType(string type)
        {
            Connection();
            string sql = "insert into loai(IDloai,typename) values('" + type + "','" + type + "')";
            cmd = new OleDbCommand(sql, cn);
            cmd.ExecuteNonQuery();
            cn.Close();
            return RedirectToAction("Index", "Admin");
        }

        public ActionResult CSQLP()
        {
            ViewBag.Type = loadCbo();
            return View();
        }

       [HttpPost]
        [ValidateInput(false)]
        public ActionResult AddQLP(string title, HttpPostedFileBase images, string editor, bool hide = false, string cboType="")
        {
            String chk = "";
            if (hide == false)
            {
                chk = "False";
            }
            else
            {
                chk = "True";
            }
            string Images = "";
            if (images.ContentLength > 0)
            {
                var filename = Path.GetFileName(images.FileName);
                var path = Path.Combine(Server.MapPath("~/Images/photos"), images.FileName);
                images.SaveAs(path);
                Images = images.FileName;
            }
            Connection();
            string sql = "";
            sql = "insert into project(IDproject,Tittleproject,Hide,Description,IMG,type)";
            sql += "values('" + getGUID().ToString() + "','" + title + "'," + chk + ",'" + editor + "','" + Images + "','" + cboType + "')";
            cmd = new OleDbCommand(sql, cn);
            cmd.ExecuteNonQuery();
            cn.Close();
            return RedirectToAction("Index", "Admin");
        }

        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Login(string email, string pass)
        {
            if (email.Contains("admin@gmail.com"))
            {
                if (pass.Contains("1234"))
                {
                    return RedirectToAction("Index","Admin");
                }
            }
            return RedirectToAction("Error");
        }

        public ActionResult QLBL()
        {
            Connection();
            string strSql = "Select * from balancelife";

            da = new OleDbDataAdapter(strSql, cn);
            dt = new DataTable();
            da.Fill(dt);
            cn.Close();
            return View(dt);
        }

        public ActionResult QLL()
        {
            Connection();
            string strSql = "Select * from loai";
            da = new OleDbDataAdapter(strSql, cn);
            dt = new DataTable();   
            da.Fill(dt);
            cn.Close();
            return View(dt);
        }

        public ActionResult QLP()
        {
            Connection();
            string strSql = "Select * from project";

            da = new OleDbDataAdapter(strSql, cn);
            dt = new DataTable();
            da.Fill(dt);
            cn.Close();
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

        public ActionResult ECSQLBL(int id)
        {
            Connection();
            string sql = "select * from balancelife where IDblife='" + id.ToString() + "'";
            da = new OleDbDataAdapter(sql, cn);
            dt = new DataTable();
            da.Fill(dt);
            return View(dt);
        }

        [HttpPost]
        [ValidateInput(false)]
        public ActionResult EditBL(string ID,string title, HttpPostedFileBase images, string editor, bool hide = false)
        {
            string chk = "";
            if (hide == false)
            {
                chk = "False";
            }
            else
            {
                chk = "True";
            }
            string Images = "";
            if(images != null)
            {
                if (images.ContentLength > 0)
                {
                    var filename = Path.GetFileName(images.FileName);
                    var path = Path.Combine(Server.MapPath("~/Images/photos"), images.FileName);
                    images.SaveAs(path);
                    Images = images.FileName;
                }
            }
           
            Connection();
            string sql = "";
            if (Images != "")
            {
                sql = "update balancelife set Tittleblife='" + title + "',Hide=" + chk.ToString() + ",Description='" + editor + "',IMG='" + Images + "' where IDblife='" + ID + "'";
                //sql += " where IDmanga='" + Request.Params["id"].ToString() + "'";
            }
            else
            {
                sql = "update balancelife set Tittleblife='" + title + "',Hide=" + chk.ToString() + ",Description='" + editor + "' where IDblife='" + ID + "'";
            }
            cmd = new OleDbCommand(sql, cn);
            cmd.ExecuteNonQuery();
            cn.Close();
            return RedirectToAction("Index", "Admin");
        }

        public ActionResult ECSQLP(string id)
        {
            Connection();
            string sql = "select * from project where IDproject='" + id.ToString() + "'";
            da = new OleDbDataAdapter(sql, cn);
            dt = new DataTable();
            da.Fill(dt);
            return View(dt);
        }

        [HttpPost]
        [ValidateInput(false)]
        public ActionResult EditQLP(string ID,string title, HttpPostedFileBase images, string editor, bool hide = false, string cboType = "")
        {
            string chk = "";
            if (hide == false)
            {
                chk = "False";
            }
            else
            {
                chk = "True";
            }
            string Images = "";
            if(images != null)
            {
                if (images.ContentLength > 0)
                {
                    var filename = Path.GetFileName(images.FileName);
                    var path = Path.Combine(Server.MapPath("~/Images/photos"), images.FileName);
                    images.SaveAs(path);
                    Images = images.FileName;
                }
            }
           
            Connection();
            string sql = "";
            if (Images != "")
            {
                sql = "update project set Tittleproject='" + title + "',Hide=" + chk.ToString() + ",Description='" + editor + "',IMG='" + Images + "',type='" + cboType + "' where IDproject='" + ID + "'";
                //sql += " where IDmanga='" + Request.Params["id"].ToString() + "'";
            }
            else
            {
                sql = "update project set Tittleproject='" + title + "',Hide=" + chk.ToString() + ",Description='" + editor + "',type='" + cboType + "' where IDproject='" + ID + "'";
            }
            cmd = new OleDbCommand(sql, cn);
            cmd.ExecuteNonQuery();
            cn.Close();
            return RedirectToAction("Index", "Admin");
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
                data += "<select name='cboType' class='form-control'>";
                foreach (DataRow dr in dt.Rows)
                {
                    data += "<option value='" + dr["IDloai"].ToString() + "'>" + dr["typename"].ToString() + "</option>";
                }
                data += "</select>";
            }
            return data;
        }

        public static string getGUID()
        {
            string rs = "";
            char replace = '-';
            char to = '_';
            try
            {
                rs = Guid.NewGuid().ToString();
                rs = rs.Replace(replace, to);
            }
            catch (Exception ex)
            {
                string mess = ex.Message.ToString();
            }
            return rs;
        }
    }
}