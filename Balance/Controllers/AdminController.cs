using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data;
using System.Data.OleDb;
using System.IO;
using System.Threading.Tasks;
using System.Net.Mail;
using System.Net;

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
            if(Session["Authentication"] != null)
            {
                return View();
            }
            else
            {
                return RedirectToAction("Login", "Admin");
            }
        }

        public ActionResult CSQLBL()
        {
            if (Session["Authentication"] != null)
            {
                return View();
            }
            else
            {
                return RedirectToAction("Login", "Admin");
            }
        }

        [HttpPost]
        [ValidateInput(false)]
        public ActionResult AddBL(string title, HttpPostedFileBase[] images, string editor, bool hide = false)
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
            foreach(HttpPostedFileBase file in images)
            {
                if (file.ContentLength > 0)
                {
                    var filename = Path.GetFileName(file.FileName);
                    var path = Path.Combine(Server.MapPath("~/Images/photos"), file.FileName);
                    file.SaveAs(path);
                    Images += file.FileName + ",";
                }
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
            if (Session["Authentication"] != null)
            {
                return View();
            }
            else
            {
                return RedirectToAction("Login", "Admin");
            }
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
            
            if (Session["Authentication"] != null)
            {
                ViewBag.Type = loadCbo();
                return View();
            }
            else
            {
                return RedirectToAction("Login", "Admin");
            }
        }

       [HttpPost]
        [ValidateInput(false)]
        public ActionResult AddQLP(string title, HttpPostedFileBase[] images, string editor, bool hide = false, string cboType="")
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
            foreach (HttpPostedFileBase file in images)
            {
                if (file.ContentLength > 0)
                {
                    var filename = Path.GetFileName(file.FileName);
                    var path = Path.Combine(Server.MapPath("~/Images/photos"), file.FileName);
                    file.SaveAs(path);
                    Images += file.FileName + ",";
                }
            } 
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
                    Session["Authentication"] = "True";
                    return RedirectToAction("Index","Admin");
                }
            }
            return RedirectToAction("Error");
        }

        public ActionResult QLBL()
        {
            if (Session["Authentication"] != null)
            {
                Connection();
                string strSql = "Select * from balancelife";

                da = new OleDbDataAdapter(strSql, cn);
                dt = new DataTable();
                da.Fill(dt);
                cn.Close();
                return View(dt);
            }
            else
            {
                return RedirectToAction("Login", "Admin");
            }
           
        }

        public ActionResult QLL()
        {
            if (Session["Authentication"] != null)
            {
                Connection();
                string strSql = "Select * from loai";

                da = new OleDbDataAdapter(strSql, cn);
                dt = new DataTable();
                da.Fill(dt);
                cn.Close();
                return View(dt);
            }
            else
            {
                return RedirectToAction("Login", "Admin");
            }
        }

        public ActionResult QLP()
        {
            if (Session["Authentication"] != null)
            {
                Connection();
                string strSql = "Select * from project";

                da = new OleDbDataAdapter(strSql, cn);
                dt = new DataTable();
                da.Fill(dt);
                cn.Close();
                return View(dt);
            }
            else
            {
                return RedirectToAction("Login", "Admin");
            }
           
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
        public ActionResult EditBL(string ID,string title, HttpPostedFileBase[] images, string editor, bool hide = false)
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
            string Images = ",";
            if(images != null)
            {
                foreach (HttpPostedFileBase file in images)
                {
                    if (file.ContentLength > 0)
                    {
                        var filename = Path.GetFileName(file.FileName);
                        var path = Path.Combine(Server.MapPath("~/Images/photos"), file.FileName);
                        file.SaveAs(path);
                        Images += file.FileName + ",";
                    }
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
        public ActionResult EditQLP(string ID,string title, HttpPostedFileBase[] images, string editor, bool hide = false, string cboType = "")
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
            string Images = ",";
            if(images != null)
            {
                foreach (HttpPostedFileBase file in images)
                {
                    if (file.ContentLength > 0)
                    {
                        var filename = Path.GetFileName(file.FileName);
                        var path = Path.Combine(Server.MapPath("~/Images/photos"), file.FileName);
                        file.SaveAs(path);
                        Images += file.FileName + ",";
                    }
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

        [HttpPost]
        public async Task<ActionResult> SendEmail(string name, string email, string contact)
        {
            var body = "<p>Thông tin khách hàng</p><p>{2}</p>";
            var message = new MailMessage();
            message.To.Add(new MailAddress("bal@bal.vn"));  // replace with valid value 
            message.From = new MailAddress("a3solution.cuscontact@gmail.com");  // replace with valid value
            message.Subject = "Liên hệ từ khách hàng";
            message.Body = string.Format(body, "Khách hàng có để lại lời nhắn", email, "Thông tin khách hàng: "+name+"<br> Địa chỉ Mail: "+email+"<br> Lời nhắn: "+ contact);
            message.IsBodyHtml = true;

            using (var smtp = new SmtpClient())
            {
                var credential = new NetworkCredential
                {
                    UserName = "a3solution.cuscontact@gmail.com",  // replace with valid value
                    Password = "<.*Mf79pBF8nhh]v"  // replace with valid value
                };
                smtp.Credentials = credential;
                smtp.Host = "smtp.gmail.com";
                smtp.Port = 587;
                smtp.EnableSsl = true;
                await smtp.SendMailAsync(message);
                return RedirectToAction("Index","Home");
            }
        }
    }
}