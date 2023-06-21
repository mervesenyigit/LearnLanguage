namespace LearnLanguage.Models
{
    public class Video
    {
        public int Id { get; set; }
        public string Src { get; set; }

        public int ContentId { get; set; }

        public Content Content { get; set; } = new Content();
    }
}
