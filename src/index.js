
export * from './Types'
export class SentimentanaClient { }


exports.getClient = function(url) {
    return new SentimentanaClient(url)
   }