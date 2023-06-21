using LearnLanguage.Models;
using Microsoft.EntityFrameworkCore;

namespace LearnLanguage.Data
{
    public class AppDBContext : DbContext
    {
        public AppDBContext(DbContextOptions<AppDBContext> options)
            : base(options)
        { }

        public DbSet<Skill> Skills { get; set; }
        public DbSet<Subject> Subjects { get; set; }
        public DbSet<Content> Contents { get; set; }
        public DbSet<Image> Images { get; set; }
        public DbSet<Video> Videos { get; set; }
        public DbSet<Voice> Voices { get; set; }
        public DbSet<Level> Levels { get; set; }

    }


}
