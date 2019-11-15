﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using angular.Models;

namespace angular.Migrations
{
    [DbContext(typeof(HomeContext))]
    [Migration("20191115134506_newMigrations")]
    partial class newMigrations
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("angular.Models.Airport", b =>
                {
                    b.Property<string>("id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("continent")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("elevation_ft")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("gps_code")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("home_link")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("iata_code")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ident")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("iso_country")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("iso_region")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("keywords")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("latitude_deg")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("local_code")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("longitude_deg")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("municipality")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("scheduled_service")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("type")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("AirportData");
                });

            modelBuilder.Entity("angular.Models.Runway", b =>
                {
                    b.Property<string>("id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("airport_ident")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("airport_ref")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("closed")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("he_displaced_threshold_ft")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("he_elevation_ft")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("he_heading_degT")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("he_ident")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("he_latitude_deg")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("he_longitude_deg")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("le_displaced_threshold_ft")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("le_elevation_ft")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("le_heading_deg")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("le_ident")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("le_latitude_deg")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("le_longitude_deg")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("length_ft")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("lighted")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("surface")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("width_ft")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Runways");
                });
#pragma warning restore 612, 618
        }
    }
}
