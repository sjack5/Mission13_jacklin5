using Microsoft.AspNetCore.Mvc;
using Mission14_jacklin5.Data;

namespace Mission14_jacklin5.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieDbContext context;
        public MovieController(MovieDbContext temp)
        {
            context = temp;
        }
        public IEnumerable<Movies> Get()
        {
            var x = context.Movies.Where(x => !string.IsNullOrEmpty(x.edited)).OrderBy(x => x.title).ToArray();
            return x;
        }
    }
}
