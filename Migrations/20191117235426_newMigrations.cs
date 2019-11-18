using Microsoft.EntityFrameworkCore.Migrations;

namespace angular.Migrations
{
    public partial class newMigrations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AirportData",
                columns: table => new
                {
                    id = table.Column<string>(nullable: false),
                    ident = table.Column<string>(nullable: true),
                    type = table.Column<string>(nullable: true),
                    name = table.Column<string>(nullable: true),
                    latitude_deg = table.Column<string>(nullable: true),
                    longitude_deg = table.Column<string>(nullable: true),
                    elevation_ft = table.Column<string>(nullable: true),
                    continent = table.Column<string>(nullable: true),
                    iso_country = table.Column<string>(nullable: true),
                    iso_region = table.Column<string>(nullable: true),
                    municipality = table.Column<string>(nullable: true),
                    scheduled_service = table.Column<string>(nullable: true),
                    gps_code = table.Column<string>(nullable: true),
                    iata_code = table.Column<string>(nullable: true),
                    local_code = table.Column<string>(nullable: true),
                    home_link = table.Column<string>(nullable: true),
                    keywords = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AirportData", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Runways",
                columns: table => new
                {
                    id = table.Column<string>(nullable: false),
                    airport_ref = table.Column<string>(nullable: true),
                    airport_ident = table.Column<string>(nullable: true),
                    length_ft = table.Column<string>(nullable: true),
                    width_ft = table.Column<string>(nullable: true),
                    surface = table.Column<string>(nullable: true),
                    lighted = table.Column<string>(nullable: true),
                    closed = table.Column<string>(nullable: true),
                    le_ident = table.Column<string>(nullable: true),
                    le_latitude_deg = table.Column<string>(nullable: true),
                    le_longitude_deg = table.Column<string>(nullable: true),
                    le_elevation_ft = table.Column<string>(nullable: true),
                    le_heading_deg = table.Column<string>(nullable: true),
                    le_displaced_threshold_ft = table.Column<string>(nullable: true),
                    he_ident = table.Column<string>(nullable: true),
                    he_latitude_deg = table.Column<string>(nullable: true),
                    he_longitude_deg = table.Column<string>(nullable: true),
                    he_elevation_ft = table.Column<string>(nullable: true),
                    he_heading_degT = table.Column<string>(nullable: true),
                    he_displaced_threshold_ft = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Runways", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AirportData");

            migrationBuilder.DropTable(
                name: "Runways");
        }
    }
}
