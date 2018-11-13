namespace Core.Interfaces
{
    public interface ITwitterAccessor
    {
        void GetTweets(string userName, int count);
    }
}