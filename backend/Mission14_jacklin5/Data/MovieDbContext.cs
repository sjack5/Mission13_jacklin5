using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System.Security.Cryptography.X509Certificates;

namespace Mission14_jacklin5.Data
{
    public class MovieDbContext : DbContext
    {       
        public MovieDbContext (DbContextOptions<MovieDbContext> options) : base(options) { }
        public DbSet<Movies> Movies { get; set; }
    }
}
