namespace LearnLanguage.Models
{
    public class Voice
    {
        public int Id { get; set; }
        public string Src { get; set; }

        public int QuestionId { get; set; }

        public Question Question { get; set; }
    }
}
