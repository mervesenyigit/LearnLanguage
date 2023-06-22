using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using LearnLanguage.Models;

    public class LearnLanguageContext : DbContext
    {
        public LearnLanguageContext (DbContextOptions<LearnLanguageContext> options)
            : base(options)
        {
        }

        public DbSet<LearnLanguage.Models.Subject> Subject { get; set; } = default!;

        public DbSet<LearnLanguage.Models.Level> Level { get; set; } = default!;
    }
