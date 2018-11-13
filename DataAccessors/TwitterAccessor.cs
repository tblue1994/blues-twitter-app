using Core.Interfaces;
using Core.Types;
using HelperClasses;
using Microsoft.Extensions.Options;

namespace DataAccessors
{
    public class TwitterAccessor : ITwitterAccessor
    {
        private IOptions<TwitterOptions> _twitterOptions;
        public TwitterAccessor(IOptions<TwitterOptions> twitterOptions)
        {
            _twitterOptions = twitterOptions;
        }

        public void GetTweets(string userName, int count)
        {
            var helper = new TwitterHelper(_twitterOptions.Value.ConsumerKey, _twitterOptions.Value.ConsumerKeySecret, 
                _twitterOptions.Value.AccessToken, _twitterOptions.Value.AccessTokenSecret);
            
            string response = helper.GetTweets("StLouisBlues", 5);
        }
    }
}