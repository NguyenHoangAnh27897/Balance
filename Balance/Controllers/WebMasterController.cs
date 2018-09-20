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
    public class WebMasterController : Controller
    {
        protected OleDbDataAdapter da;
        protected OleDbConnection cn;
        protected DataTable dt;
        protected DataTable dts;
        protected OleDbCommand cmd;
        // GET: WebMaster
        public ActionResult Index()
        {
            if(Session["Authentication"] != null)
            {
                return View();
            }
            else
            {
                return RedirectToAction("Login", "WebMaster");
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
                return RedirectToAction("Login", "WebMaster");
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

            Images = Images.Remove(Images.Length - 1);
            Connection();
            string sql = "";
            sql = "insert into balancelife(IDblife,Tittleblife,Hide,Description,IMG)";
            sql += "values('" + getGUID().ToString() + "','" + title + "'," + chk + ",'" + editor + "','" + Images +"')";
            cmd = new OleDbCommand(sql, cn);
            cmd.ExecuteNonQuery();
            cn.Close();
            return RedirectToAction("QLBL", "WebMaster");
        }

        public ActionResult CSQLL()
        {
            if (Session["Authentication"] != null)
            {
                return View();
            }
            else
            {
                return RedirectToAction("Login", "WebMaster");
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
            return RedirectToAction("QLL", "WebMaster");
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
                return RedirectToAction("Login", "WebMaster");
            }
        }

       [HttpPost]
        [ValidateInput(false)]
        public ActionResult AddQLP(string title, HttpPostedFileBase avatar, HttpPostedFileBase[] images, string editor, bool hide = false, string cboType="")
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
            string Avatar = "";
            if (avatar != null)
            {
                if (avatar.ContentLength > 0)
                {
                    var filename = Path.GetFileName(avatar.FileName);
                    var path = Path.Combine(Server.MapPath("~/Images/photos"), avatar.FileName);
                    avatar.SaveAs(path);
                    Avatar += avatar.FileName;
                }

            }

            string Images = "";
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
            Images = Images.Remove(Images.Length - 1);
            Connection();
            string sql = "";
            sql = "insert into project(IDproject,Tittleproject,Hide,Description,IMG,type,Avatar)";
            sql += "values('" + getid() + "','" + title + "'," + chk + ",'" + editor + "','" + Images + "','" + cboType + "','" + Avatar +  "')";
            cmd = new OleDbCommand(sql, cn);
            cmd.ExecuteNonQuery();
            cn.Close();
            return RedirectToAction("QLP", "WebMaster");
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
                    return RedirectToAction("Index","WebMaster");
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
                return RedirectToAction("Login", "WebMaster");
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
                return RedirectToAction("Login", "WebMaster");
            }
        }

        public ActionResult QLP()
        {
            if (Session["Authentication"] != null)
            {
                Connection();
                string strSql = "Select * from project order by IDproject";

                da = new OleDbDataAdapter(strSql, cn);
                dt = new DataTable();
                da.Fill(dt);
                cn.Close();
                return View(dt);
            }
            else
            {
                return RedirectToAction("Login", "WebMaster");
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

        public ActionResult ECSQLBL(string id)
        {
            if (Session["Authentication"] != null)
            {
                Connection();
                string sql = "select * from balancelife where IDblife='" + id.ToString() + "'";
                da = new OleDbDataAdapter(sql, cn);
                dt = new DataTable();
                da.Fill(dt);
                return View(dt);
            }
            else
            {
                return RedirectToAction("Login", "WebMaster");
            }
         
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
            if(images[0] != null)
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
                Images = Images.Remove(Images.Length - 1);
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
            return RedirectToAction("QLBL", "WebMaster");
        }

        public ActionResult ECSQLP(string id)
        {
            if (Session["Authentication"] != null)
            {
                ViewBag.Type = loadCbo();
                Connection();
                string sql = "select * from project where IDproject=" + int.Parse(id) + "";
                da = new OleDbDataAdapter(sql, cn);
                dt = new DataTable();
                da.Fill(dt);
                return View(dt);
            }
            else
            {
                return RedirectToAction("Login", "WebMaster");
            }
         
        }

        [HttpPost]
        [ValidateInput(false)]
        public ActionResult EditQLP(string ID,string title, HttpPostedFileBase avatar, HttpPostedFileBase[] images, string editor, bool hide = false, string cboType = "")
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
            string Avatar = "";
            if (avatar != null)
            {
                if (avatar.ContentLength > 0)
                {
                    var filename = Path.GetFileName(avatar.FileName);
                    var path = Path.Combine(Server.MapPath("~/Images/photos"), avatar.FileName);
                    avatar.SaveAs(path);
                    Avatar += avatar.FileName;
                }
            }

            string Images = "";
            if(images[0] != null)
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
                Images = Images.Remove(Images.Length - 1);
            } 
            Connection();
            string sql = "";        
            if (Images != "")
            {
                sql = "update project set Tittleproject='" + title + "',Hide=" + chk.ToString() + ",Description='" + editor + "',IMG='" + Images + "',type='" + cboType + "' where IDproject=" + int.Parse(ID) + "";
                //sql += " where IDmanga='" + Request.Params["id"].ToString() + "'";
            }else if(Avatar != "")
            {
                sql = "update project set Tittleproject='" + title + "',Hide=" + chk.ToString() + ",Description='" + editor + "',Avatar='" + Avatar + "',type='" + cboType + "' where IDproject=" + int.Parse(ID) + "";
            }
            else
            {
                sql = "update project set Tittleproject='" + title + "',Hide=" + chk.ToString() + ",Description='" + editor + "',type='" + cboType + "' where IDproject=" + int.Parse(ID) + "";
            }
            cmd = new OleDbCommand(sql, cn);
            cmd.ExecuteNonQuery();
            cn.Close();
            return RedirectToAction("QLP", "WebMaster");
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
                    data += "<option value='" + dr["typename"].ToString() + "'>" + dr["typename"].ToString() + "</option>";
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

        public int getid()
        {

            Connection();
            string sql = "select IDproject from project";
            da = new OleDbDataAdapter(sql, cn);
            dt = new DataTable();
            da.Fill(dt);
            int count = dt.Rows.Count;
            count += 1;
            return count;
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

        public ActionResult deleteProject(string id)
        {
            Connection();   // connection        
            string sql = "delete from project where IDproject=" + int.Parse(id) + "";    // hàm SQL
            cmd = new OleDbCommand(sql, cn);    //command query
            cmd.ExecuteNonQuery();      //thực hiện query
            return RedirectToAction("QLP","WebMaster");
        }

        public ActionResult deleteBalanceLife(string id)
        {
            Connection();   // connection        
            string sql = "delete from balancelife where IDblife='" + id + "'";    // hàm SQL
            cmd = new OleDbCommand(sql, cn);    //command query
            cmd.ExecuteNonQuery();      //thực hiện query
            return RedirectToAction("QLBL", "WebMaster");
        }

        public ActionResult deletetype(string id)
        {
            Connection();   // connection        
            string sql = "delete from loai where IDloai='" + id + "'";    // hàm SQL
            cmd = new OleDbCommand(sql, cn);    //command query
            cmd.ExecuteNonQuery();      //thực hiện query
            return RedirectToAction("QLL", "WebMaster");
        }

        public ActionResult EditSlider()
        {
            if (Session["Authentication"] != null)
            {
                Connection();
                string sql = "select * from slider";
                da = new OleDbDataAdapter(sql, cn);
                dt = new DataTable();
                da.Fill(dt);
                return View(dt);
            }
            else
            {
                return RedirectToAction("Login", "WebMaster");
            }
        }

        [HttpPost]
        public ActionResult EditSlider(HttpPostedFileBase slider1, HttpPostedFileBase slider12, HttpPostedFileBase slider123, HttpPostedFileBase slider1234)
        {
            if(slider1 != null)
            {
                if (slider1.ContentLength > 0)
                {
                    var filename = "image01.jpg";
                    var path = Path.Combine(Server.MapPath("~/Images/slider"), filename);
                    System.IO.File.Delete(path);
                    slider1.SaveAs(path);
                }
            }
              
            if(slider12 != null)
            {
                if (slider12.ContentLength > 0)
                {
                    var filename = "image02.jpg";
                    var path = Path.Combine(Server.MapPath("~/Images/slider"), filename);
                    System.IO.File.Delete(path);
                    slider12.SaveAs(path);
                }
            }
           
            if(slider123 != null)
            {
                if (slider123.ContentLength > 0)
                {
                    var filename = "image03.jpg";
                    var path = Path.Combine(Server.MapPath("~/Images/slider"), filename);
                    System.IO.File.Delete(path);
                    slider123.SaveAs(path);
                }
            }
          
            if(slider1234 != null)
            {
                if (slider1234.ContentLength > 0)
                {
                    var filename = "image04.jpg";
                    var path = Path.Combine(Server.MapPath("~/Images/slider"), filename);
                    System.IO.File.Delete(path);
                    slider1234.SaveAs(path);
                }
            }
           
            return RedirectToAction("Index", "WebMaster");
        }
    }
}