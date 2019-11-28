using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using angular.Models;
using Microsoft.AspNetCore.Cors;
using Newtonsoft.Json;
using System.Net.Http;
using Newtonsoft.Json.Linq;
using System.Net;
using System.IO;

namespace angular.Controllers
{


    [ApiController]
    [Route("api/[controller]")]
    [EnableCors("MyPolicy")]
    public class DataController
    {
        private HomeContext dbContext;
        public DataController(HomeContext context)
        {
            dbContext = context;
        }
        [HttpGet]
        [Route("/")]

        public ActionResult<List<Airport>> Get()
        {
            Console.WriteLine("Inside API Index Route");
            List<int> vals = new List<int>();
            vals.Add(12);
            vals.Add(15);
            vals.Add(20);
            List<Airport> allAirports = dbContext.AirportData.Where(a => a.type == "large_airport").ToList();
            return allAirports;
        }
        [HttpGet]
        [Route("/{muni}")]
        public ActionResult<string> GetAirports(string muni)
        {
            Console.WriteLine($"CONTROLLER VAL: {muni}");
            List<Airport> airports = dbContext.AirportData.Where(a => a.municipality == muni).ToList();

            string json = JsonConvert.SerializeObject(airports);
            Console.WriteLine(json);
            return json;
        }

        [HttpGet]
        [Route("/airport/convert/{id}")]
        public ActionResult<string> ConvertDirection(int id)
        {
            Console.WriteLine("INSIDE CONVERT METHOD");
            string res = angular.ConvertDirection.Convert(id);
            Console.WriteLine(res);
            return res;

        }
        
        [HttpGet]
        [Route("/airport/{id}")]
        public async Task<JArray> GetWeather(string id)
        {
            Console.WriteLine("in method");
            Airport currentAirport = dbContext.AirportData.FirstOrDefault(a => a.id == id);
            string cityname = currentAirport.municipality;
            string code = currentAirport.iso_country;
            string apiKey = "a165ed38d87e7dd9e33bd169edca0292";
            string apiUrl = $"http://api.openweathermap.org/data/2.5/forecast?q={cityname},{code}&APPID={apiKey}";
            Uri address = new Uri(apiUrl);


            var request = (HttpWebRequest)WebRequest.Create(apiUrl);
            var response = await request.GetResponseAsync();
            var rawJson = new StreamReader(response.GetResponseStream()).ReadToEnd();

            dynamic json = JObject.Parse(rawJson.ToString());
            var res = json.list;

            Console.WriteLine("*******************");

            return res;

        }

        
    }
}