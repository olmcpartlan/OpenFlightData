using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using angular.Models;

namespace angular.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        
        
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get() 
        {
            Console.WriteLine("**************************");
            Console.WriteLine("**************************");
            Console.WriteLine("**************************");
            Console.WriteLine("**************************");


            return new string[] { "first", "second" };
        }

        
    }
    public class DataController {
        private HomeContext dbContext;
        public void WeatherForecastController(HomeContext context) {
            dbContext = context;
        }
        [HttpGet]
        [Route("/")]
        public ActionResult<List<string>> Get() {
            List<string> vals = new List<string>() { "first", "second", "third" };

            
            return vals; 
        }


    }
}