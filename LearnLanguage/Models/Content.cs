namespace LearnLanguage.Models
{
    public class Content
    {
        public int Id { get; set; } 

        public string Question { get; set; } = string.Empty;

        public string Answer { get; set; } = string.Empty;

        public int SkillId { get; set; }

        public Skill Skill { get; set; }

        public ICollection<Image> Images { get; set; }

        public ICollection<Voice> Voices { get; set; }

        public ICollection<Video> Videos { get; set; }
    }
}
