using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Diagnostics;
using System.IO;
using System.ComponentModel.DataAnnotations;

namespace angular.Models
{
    public class Runway
    {
        [Key]
        public string id {get;set;}
        public string airport_ref {get;set;}
        public string airport_ident {get;set;}
        public string length_ft {get;set;}
        public string width_ft {get;set;}
        public string surface {get;set;}
        public string lighted {get;set;}
        public string closed {get;set;}
        public string le_ident {get;set;}
        public string le_latitude_deg {get;set;}
        public string le_longitude_deg {get;set;}
        public string le_elevation_ft {get;set;}
        public string le_heading_deg {get;set;}
        public string le_displaced_threshold_ft {get;set;}
        public string he_ident {get;set;}
        public string he_latitude_deg {get;set;}
        public string he_longitude_deg {get;set;}
        public string he_elevation_ft {get;set;}
        public string he_heading_degT {get;set;}
        public string he_displaced_threshold_ft {get;set;}
        
        
    }
}