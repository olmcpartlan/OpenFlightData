using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using angular.Models;
using Microsoft.AspNetCore.Cors;

namespace angular.Controllers
{

    

    
    [EnableCors("CorsPolicy")]
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
    [ApiController]
    [Route("api/[controller]")]
    [EnableCors("MyPolicy")]
    public class DataController {
        private HomeContext dbContext;
        public void WeatherForecastController(HomeContext context) {
            dbContext = context;
        }
        [HttpGet]
        [Route("/")]
<<<<<<< HEAD
        public ActionResult<List<int>> Get() {
            Console.WriteLine("Inside proxy route");
            List<int> vals = new List<int>();
            vals.Add(12);
            vals.Add(15);
            vals.Add(20);
=======
        public ActionResult<List<string>> Get() {
            List<string> vals = new List<string>() { "first", "second", "third" };

            
>>>>>>> 93181999dd9eb4419ffa9c079dfed3e9f9bee740
            return vals; 
        }


    }
}