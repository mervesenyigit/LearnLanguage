namespace LearnLanguage.Models
{
    public class Skill
    {
        public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

        public int SubjectId { get; set; }  

        public Subject Subject { get; set; }

        public ICollection<Content> Contents { get; set; }
    }
}
