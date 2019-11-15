using Microsoft.EntityFrameworkCore;
namespace angular.Models
{

    //INSTALL ENTITY 
    //dotnet add package Microsoft.EntityFrameworkCore.SqlServer
    public class HomeContext : DbContext
    {
        public HomeContext(DbContextOptions options) : base(options) { }
        public DbSet<Airport> AirportData { get; set; }
        public DbSet<Runway> Runways { get; set; }

    }
}