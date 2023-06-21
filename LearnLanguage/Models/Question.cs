namespace LearnLanguage.Models
{
    public class Question
    {
        public int Id { get; set; }

        public string Name { get; set; } = string.Empty;
        public int ContectId { get; set; }
        public Content Content { get; set; }
        public ICollection<Answer> Answer { get; set; }
        public ICollection<Image> Images { get; set; }

        public ICollection<Voice> Voices { get; set; }

        public ICollection<Video> Videos { get; set; }
    }
}
