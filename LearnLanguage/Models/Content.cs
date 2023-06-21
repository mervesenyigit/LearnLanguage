namespace LearnLanguage.Models
{
    public class Content
    {
        public int Id { get; set; } 

        public int SkillId { get; set; }

        public Skill Skill { get; set; }

        public ICollection<Question> Questions { get; set; }
    }
}
