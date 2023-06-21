﻿namespace LearnLanguage.Models
{
    public class Subject
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;  

        public int LevelId { get; set; }
        public Level Level { get; set; }

        public ICollection<Skill> Skills { get; set; }
    }
}
