using Microsoft.AspNetCore.Mvc;
using Mission4_celder20.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4_celder20.Controllers
{
    public class OrganizeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public IActionResult Calculator()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Calculator(CalculatorModel model)
        {
            return View();

        }
    }
}
