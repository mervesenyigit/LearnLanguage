using Microsoft.AspNetCore.Mvc;

namespace LearnLanguage.Controllers
{
    public class SkillController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
