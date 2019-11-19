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

    
    [ApiController]
    [Route("api/[controller]")]
    [EnableCors("MyPolicy")]
    public class DataController {
        private HomeContext dbContext;
        public DataController(HomeContext context) {
            dbContext = context;
        }
        [HttpGet]
        [Route("/")]

        public ActionResult<List<Airport>> Get() {
            Console.WriteLine("Inside API Index Route");
            List<int> vals = new List<int>();
            vals.Add(12);
            vals.Add(15);
            vals.Add(20);
            List<Airport> allAirports = dbContext.AirportData.ToList();
            return allAirports; 
        }
        [HttpGet]
        [Route("/{muni}")]
        public ActionResult<List<Airport>> GetAirports(string muni) {
            Console.WriteLine($"CONTROLLER VAL: {muni}");
            List<Airport> airports = dbContext.AirportData.Where(a => a.municipality == muni).ToList();
            return airports;
        }


    }
}