const HOSTED_URLS = {
  model:
      'https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/model.json',
  metadata:
      'https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/metadata.json'
};

class SentimentPredictor {
  async init(urls) {
    this.urls = urls;
    this.model = await tf.loadModel(urls.model);
    await this.loadMetadata();
    return this;
  }

  async loadMetadata() {
    const metadataJson = await fetch(this.urls.metadata);
    const sentimentMetadata = await metadataJson.json();
    this.indexFrom = sentimentMetadata['index_from'];
    this.maxLen = sentimentMetadata['max_len'];
    this.wordIndex = sentimentMetadata['word_index']
  }

  predict(text) {
    // Convert to lower case and remove all punctuations.
    const inputText =
        text.trim().toLowerCase().replace(/(\.|\,|\!)/g, '').split(' ');
    // Look up word indices.
    const inputBuffer = tf.buffer([1, this.maxLen], 'float32');
    for (let i = 0; i < inputText.length; ++i) {
      const word = inputText[i];
      inputBuffer.set(this.wordIndex[word] + this.indexFrom, 0, i);
    }
    const input = inputBuffer.toTensor();
    const predictOut = this.model.predict(input);
    const score = predictOut.dataSync()[0];
    predictOut.dispose();

    return score;
  }
};


/**
 * Loads the pretrained model and metadata, and registers the predict
 * function with the UI.
 */
async function setupSentiment() {
  const predictor = await new SentimentPredictor().init(HOSTED_URLS);
  prepUI(x => predictor.predict(x));
}

setupSentiment();

//end of index.js
//start of ui.js

const negative = ["Day 131: Life is like an average rate of change. It only matters what the beginning and end are", "Day 77: Life is like a game of golf. Though everything might seem negative, you actually may be winning","Day 2: What is the purpose of having purpose in life", "Day 4: The more you study, the further away from yourself you become", "Day 7: Judge not by the failure of expectations, but rather by the success of imaginations", "Day 10: If you can’t see the light, be the light. If you can’t be the light, don’t be a light", "Day 13: Do not be afraid to be afraid", "Day 18: If we fear failure, then we also fear success.", "Day 20: Do things not because they are easy or hard, but because they are things", "Day 23: Those who recognize their losses are winners", "Day 24: If you think too hard, you distance yourself from yourself", "Day 26: It is impossible to live a happy life, but we can live a mostly happy life", "Day 28: Even with no sense of direction, you still go somewhere in life", "Day 29: Always look at the big picture because if we view only the small picture, we become it", "Day 30: Much like life, a circle seems pointless. However, a circle is the set of all points from a center, much like life", "Day 31: If you want to become poor in life, you must become rich in life", "Day 32: Those who wait for a miracle in life simply wait", "Day 34: Think not of what the future holds, but what the past lacked", "Day 35: We cannot accept the future because the future is a present that has past.", "Day 36: Our everyday lives should not halt our pursuit of philosophy, but should motivate it", "Day 37: Don't think too much", "Day 38: Some of life's deepest messages cannot be written or told, but are performed and heard", "Day 42: If you are not motivated, motivate yourself to stop being motivated", "Day 57: In order to silence the haters, we must hate ourselves more greatly", "Day 62: Much like life, a clock only works if it goes forward", "Day 65: The more you think about a quote, the less logical it gets. The less logical it gets, the more human it gets", "Day 72: In the pursuit of uniqueness, do not do everything. An object that reflects or absorbs every color of light just appears black and white", "Day 74: Much like a spring, we have the greatest potential energy when pressured or stretched to our fullest", "Day 76: In order to find yourself, you have to see how others found you", "Day 79: Without inspiration in life, there is no life in life", "Day 80: The less you succeed, the more you realize that you already succeed", "Day 89: Much like the placebo effect, the key to living a happy life is in thinking that you live a happy life", "Day 93: If you give everything meaning, you lose meaning", "Day 94: The point of life is to not be a point in life", "Day 95: The more we linger in the past, the less futures will become a past", "Day 97: Life is like a plant. Sometimes you need the sun and sometimes you need the rain", "Day 111: Failure is like the root of a plant. The deeper it is, the more nutrients it harvests", "Day 115: A good life is reserved for those who don’t make reservations for a good life ", "Day 118: If opposites attract, then we are truly happy when we are also sad", "Day 122: Life is like a roller coaster. Scary when you go up, fun when you go down", "Day 126: Haters are lovers who love too much", "Day 127: Failure happens when you reject rejection", "Day 134: To get the things we want, we have to not want them at all", "Day 140: If we never have fun in life, life will not be fun back to us", "Day 142: Much like driving on a road, breaks are needed in life", "Day 143: The greater our expectations are in life, the less we can expect to be great in life", "Day 151: The more you work out in life, the more life works out for you", "Day 155: Thoughts are like book titles. They are useless until we write the book", "Day 156: The more we take life with a grain of salt, the tastier our lives will become", "Day 157: Life is like a philosophy class. Those who understand it the least tend to live the most life", "Day 160: People are like food. We need most the ones that taste the worst", "Day 164: People are like backpacks. The more things we want in them, the harder they are to carry around", "Day 165: The fun of life is had in acknowledging the impossibility of a fun life", "Day 166: Trying to be deep is like digging a deep hole. It's hard to move forward and to get out of it", "Day 173: If we sit on stumps when we are stumped, we should rest in peace when we are in peace", "Day 176: Discrimination is like publicity. Positive discrimination is still discrimination", "Day 183: Much like in a logistic curve, people grow fastest when in the middle of two extremes", "Day 187: When you feel down in life, you are not down to live", "Day 189: Even chairs need a place to sit on", "Day 205: Life is like a rollercoaster. Some people ride them. Others build them", "Day 209: Marriage is like college. You may be accepted or rejected, you may take a gap year, and they are both institutions of society", "Day 210: Those who sleep to run away from their problems end up sleeping with their problems", "Day 211: To catch up with life, we must not catch it, for there will be no where else to go", "Day 212: Our differences may be overcome if we add up rather than take the difference of each other", "Day 215: People are like friction. It may hinder your progress, but it will never be able to reverse your direction", "Day 216: Resolutions do not resolve an issue. Rather they give us a chance to re-solve our problems", "Day 217: Life is not about how bright our rooms are. It's about how dark they can get while still moving forward", "Day 219: A jazz solo, like a person's life, must adapt to changes in chords of others to be successful", "Day 222: People who waste their potential are like cereal boxes with the lid open. They let the air take their potential without giving other people the chance to taste us", "Day 223: Those who do not take risks in life become a risk to invest in", "Day 226: There is no key to success if there is no lock to be opened", "Day 228: Life is not about how hard you can hustle. It's about how little you can hustle but keep on hustling", "Day 230: The door to success has a lock. We may get through it more easily if we spent less time finding the key", "Day 231: Haters are like rainy days. Though they may make us sad, they give us rain to cultivate our garden", "Day 234: Spoiled people are like spoiled milk. They age too fast from the world around them", "Day 247: Humans are like an infinite mathematical series. Our initial terms say nothing about our patterns of growth later on", "Day 248: Like humans, the limit for a series may reach zero, but the sum can still be infinite", "Day 253: Negative moments in life are like the bottom of a pendulum. We contain the most kinetic energy to move past our pain", "Day 258: Succeeding in life is like solving a Rubik's cube. You can't solve it unless you temporarily ruin your good sides", "Day 259: Haters are like functions with no x value in them. No matter what you input, you always get the same output", "Day 261: Succeeding in life is like catching a frisbee. Sometimes it doesn't go your way", "Day 272: Ice cream is like our dreams. They can never be eaten unless they have the courage to melt in the heat", "Day 274: There are many fake people in the world to balance out the real of reality", "Day 277: People are Rubik's cubes, for they get easier and faster to solve the more you solve", "Day 289: The first step to taking action is to not want to take it at all", "Day 300: Fake people are like fake money. They never reveal their insides when you put a light through them", "Day 303: Some people are like glue. They are sticky and usually create temporary bonds", "Day 304: Life works a lot like the piezoelectric effect. We only become electric once we are under pressure", "Day 306: People are like trash bags. Though they themselves may not be trash in the first place, the trashiness of trash rubs off on them and the bags get thrown away like trash", "Day 307: People are like celery. When they get salty, they become less stable", "Day 310: Much like calculus, the limits of life do not exist", "Day 311: Much like electric voltage, people become brighter when they have more potential to make a difference", "Day 314: Some people are like alternating current. They always fluctuate from positive to negative and are usually more painful than direct current", "Day 315: Some people are like diodes. They only listen to the thoughts of people with the same direction, but not those with different directions", "Day 318: Some people are like toenails. You must keep cutting them or else they will grow on you", "Day 319: The people who drink wine the most are the people that whine the most", "Day 324: Failure is like coffee. The taste is terrible but we need it to keep working", "Day 333: Some people are like paper. Because they are so thin, they may hurt you", "Day 334: Some people are like blinds. They block the light to help you see but also hold you back from the truth", "Day 335: The word map can be rearranged to form the word amp because some people need an amp to show others their map in life", "Day 336: Life is like a video game. Fun to play around with but we realize more and more that we are playing ourselves", "Day 343: We are like erasers because the more we try to erase our mistakes, the more we erase ourselves in the process", "Day 344: Much like the conservation of energy, time is not saved nor wasted. Only better spent", "Day 349: The word consistent has the words cons and tent because we must keep all our cons under a tent in order to be consistent", "Day 350: Though the word bed looks like a bed, the word success looks like a straight line despite it being a bumpy road", "Day 357: Much like a piano, there is no one single key that results in a successful and harmonious life", "Day 359: The more we realize how imperfect we were, the more we appreciate how pluperfect we had been", "Day 360: The closer we are to succeeding, the further we are to success", "Day 364: The more we try to redefine success, the less time we have to create example sentences"];
const neutral = ["Day 1: The passion of life lies within us, not within Mr. Gesk", "Day 3: There is a difference between wanting something and wanting to want something", "Day 6: Those who wait until the last minute suffer until the last second", "Day 11: Those who have nice watches often cannot tell the time of their own life", "Day 12: The infinite sum of 1s and -1s is not only 1/2 but is also a representation of our way of life: Antimatter and matter, yin and yang. We must learn that equilibrium exists in all facets of life", "Day 15: The only thing that speaks louder than words are no words", "Day 16: Before you see the world, you have to see how you see the world", "Day 17: If art is the expression of our souls, then we are all paint brushes searching for the right shade of paint", "Day 21: Live every day like it's your first.", "Day 25: The illusion of time is an illusion because it is relative to itself", "Day 33: You find yourself when others find themselves", "Day 39: Sometimes, what appears to be an illusion may just be an illusion", "Day 44: Asking for something is the fastest way to not get it", "Day 45: If we mustn't run from our problems, achieving perfection is a paradox.", "Day 46: If we need adversity to succeed, everybody is a success", "Day 53: Much like life, a good movie ends", "Day 54: Though good things come to those who wait, those who do not wait come to good things", "Day 55: Is it better to succeed at failing or fail at succeeding?", "Day 56: The more you think about life, the less of it you live", "Day 58: Much like the conservation of charge and life, you can be positive but someone else must be negative", "Day 59: Average minds think. Great minds think of thinking", "Day 60: The lesser the word count is, the more the words count", "Day 63: Your followers to following ratio determines the eccentricity of your circle. If it is greater than 1, your focus leads people away from your center.", "Day 67: Life is like a piano. Some notes must be excluded to make a song sound good", "Day 68: Knowledge is an idea that we use to convince ourselves that we have it", "Day 73: We are defined by what we pursue because we pursue what defines us", "Day 75: An imaginary number is written as 'i' because our eyes imagine what we see", "Day 78: Life is like a bed. You either make it or sleep on it", "Day 82: People are like books. Annotate as many as you can", "Day 83: Much like humans, paper clips are malleable, able to link others together and mold into sharp, singular sticks", "Day 84: The answer to all of life's questions are better questions", "Day 85: Much like people, a book should not be judged by its title", "Day 87: Although light is good and dark is bad, too much sunlight will make us dark", "Day 88: Life is like a house. We live the least of it when we are living inside of it", "Day 90: Life is like a yoga ball. It's just a ball", "Day 91: Life is like money. The less you have, the more you borrow it from others", "Day 92: Life is like a pizza. The more you eat, the happier and sadder you get.", "Day 96: Much like life, a memory is forgotten if it is always remembered", "Day 98: Like and unlike life, we only like the shade if light surrounds it", "Day 99: To be dumb is to be smart. To be smart is to know that we are all dumb", "Day 100: We sleep because we are tired of life. We live because we are tired of being tired of life", "Day 102: People are like light bulbs. The brighter they are, the more resistance they have to others", "Day 103: Much like the moment of inertia of a hollow sphere, humans become more resistive when they are concentrated far from their center.", "Day 105: We bustle in the night so that we can hustle in the light", "Day 107: Regular people live their lives by the day. Hustlers live their lives by the life.", "Day 108: If a great government governs the least, a great person is as little a person as possible", "Day 109: People are like tangent graphs. The cycles are never connecting because when one is infinitely positive, another is infinitely negative.", "Day 110: Much like people, all Tetris blocks are both wanted and unwanted at different times", "Day 112: Like people, you get the most out of bananas if you peel them", "Day 113: Life is like a camera. You’re only in the picture if you reflect light", "Day 116: When we turn thoughts into actions, we move forward. When we turn actions into thoughts, we move upward", "Day 117: People are like printers. If they jam too much, they won’t work", "Day 119: People are like food. If we have a buffet full of it, we cannot eat it all", "Day 120: The more we obey others, the less we obey ourselves", "Day 121: Your future is determined by whether you consider the future in the future", "Day 123: Good ideas are like spiders. Hard to accept, yet hard to live without", "Day 124: Much like people, we discriminate equations in order to differentiate them", "Day 125: To think like Plato, we need to think of life as play-dough", "Day 132: Life is like driving a car. Sometimes you must be a jerk", "Day 133: The more we create quotes, the less our lives will be defined by quotes", "Day 137: Much like chloroplast, we can't get food in life unless we have green", "Day 141: Money is like respect. The more you give to people, the more they have", "Day 145: Everything is pointless because without a point, nothing sticks out", "Day 146: Life is like a book. The more we read, the less pages we have to read", "Day 147: Life can be like a chair. It's purpose may only be to be sat on", "Day 148: Much like life, music is most enjoyable when we want to make it", "Day 150: Life is like a phone. The more you play with it, the less life you live", "Day 158: Halloween is a means of escaping the hollow weeks of life", "Day 162: Much like newspapers, we only read the headlines when meeting people", "Day 163: People are like time. They fly when we have fun", "Day 167: Life is like music. Though we like to make it, there is no inherent meaning in it", "Day 168: People are like computers. Everybody knows how to use them but barely know how they work", "Day 169: Much like good movies, deceptive people require lots of money, acting, and scripts", "Day 170: People are like fallout, for they are played often and are harmful", "Day 174: Everything in life is free unless you want everything for free", "Day 179: The more expectations we meet in life, the more we can expect to meet the end of life", "Day 180: Those who seek awards in life seek to live without having lived", "Day 182: Life is best lived in the same way food is best eaten", "Day 184: The more we think of others, the more thankful they become", "Day 185: People resemble metronomes at different tempos. Though two may seem dysfunctional, they eventually beat at the same time", "Day 186: Much like people, pages of a book stand out when they have folds and marks all over it", "Day 190: People are doors. They let some people in and some people out", "Day 191: Quotes are the blueprint of a great idea. Useless by itself", "Day 192: People are like fish. We all come from the sea and are more bio diverse at the bottom of it", "Day 193: The more we learn in life, the more there is to learn in life", "Day 194: The more curious we are, the less chance that we will find a cure", "Day 196: The more time goes on, the more we think it goes on", "Day 199: The smarter we get, the dumber we want to get", "Day 200: People abide by the rules of biology. They divide with one another in order to sustain life", "Day 202: When we run away from people, the Earth's roundness brings us closer to them", "Day 203: We mustn't classify women as we do snapbacks, which are named for the thing on the back of the hat", "Day 204: The more selfies we take, the more selfless we become", "Day 218: People, like triangles, have positive sin whether acute or obtuse", "Day 221: A wasted life is like a hot pocket with all the stuffing oozed out. We wait to fulfill our dreams later in life until they are not inside of us anymore", "Day 224: People are like pencils. The more they are sharpened, the less dull they are", "Day 235: Apples are like people. They originate from family trees and their core should be uneaten", "Day 237: Yoga balls are like people. Bouncy and fun initially, but they deflate with age", "Day 238: Racial differences are like handwriting. White paper is best used with black ink", "Day 239: People are like conveyor belts. Simple ones convey a message that is dropped on it", "Day 240: Math is integral because of integrals and all truth is derived from derivatives", "Day 241: Life is like a game of mafia. We accuse each other without substantial evidence", "Day 243: Money is like a bathroom stall. People need it, but don't want to share it", "Day 245: If a musical cannot be a musical without music, life cannot be life without life", "Day 251: Talking to someone is like testing a computer program with a test file. We only feel successful when we pass every single test", "Day 254: The imperfect tense describes the past because our past lives were never perfect", "Day 255: If time runs slower for objects moving near the speed of light, our time runs out more quickly the more we sit around", "Day 256: If a musical is pointless without music, a life is pointless without life", "Day 263: We are like Rubik's cubes. The more dimensions we try to have, the longer it takes for people to solve us", "Day 266: People who waste their time are like a telescoping series. Even when they infinitely add up, they reach the same limit", "Day 271: People are like pieces of paper. They kill trees and are usually white", "Day 273: Our houses are like refrigerators. They protect from the heat of the sun but we may never age and change if we stay for too long", "Day 278: Life is alot like an alarm clock. It gets more annoying the lazier we get", "Day 279: Peoples' lives are as obscure as backpacks. We can see what it looks like, but we cannot tell what's inside of it", "Day 280: Ideas are like oxygen. We die from too little of it, and get high from too much of it", "Day 281: Reading quotes is like playing in the beach. It gets more dangerous the further and deeper you go", "Day 283: Life is a movie. You're either watching it, or making it", "Day 284: Life is a line. There is no point in following it", "Day 285: Some people are like Rubik's cubes. They have multiple faces and are difficult to solve", "Day 286: Life is a lot like a clock. Sometimes we want it to speed up, and sometimes we never want it to stop", "Day 287: Dreams are like car fuel. Everybody gets it when they don't cost much", "Day 288: In the taxicab we call life, the longer we enjoy the ride, the more we have to pay", "Day 293: People are like rulers. They are made to keep other people straight", "Day 294: Food are like people. Good looking ones are often bad for you", "Day 296: Society resembles wind currents. Hot ones move up while cold ones go down", "Day 297: Speakers are like nerve cells. They charge you from negative to positive in order to deliver a message", "Day 308: Target makes consumerism your target in life", "Day 312: UPS undergoes logistic growth because their packages have a carrying capacity", "Day 313: Life is a lot like a roller coaster. It's just a ride", "Day 320: Bad sin is like trigonometric sin. The more we angle off of our straight line, the greater our sin value is", "Day 321: Life is like the formal definition of a limit. We often end up never understanding it", "Day 322: Some people are like coconut water. They try to combine two good things, but end up tasting like garbage", "Day 325: Relationships are like staples. They make holes on the paper they are binding together and ruin the papers when taken apart", "Day 330: Some people are like dictionaries. No matter how advanced their vocabularies are, they cannot create cohesive stories", "Day 332: People are like lines. Either they are pointless, or infinitely full of them", "Day 347: We only define points on a shape if they stand out from the infinite other points around them", "Day 353: The word train can either mean a locomotive or a verb for working. Either way, you move forward", "Day 354: If a cluttered desk symbolizes a busy mind, an empty desk symbolizes a purposeless mind", "Day 363: People are like earth. The more we realize the world does not revolve around us, the more we are able to discover in life"];
const positive = ["Day 5: The quest for happiness creates the illusion of sadness", "Day 8: A life of happiness can be achieved by simply acknowledging the happiness of life", "Day 9: To hustle or not to hustle. That is the answer", "Day 14: Live every day knowing that every day was lived", "Day 19: The quest for sophistication only leads us to deception about what deception truly is", "Day 22: A satisfying life requires that you prove the existence of life within you", "Day 27: Deep quotes are an accumulation of superficial thoughts", "Day 40: Your SAT score determines the year of your death.", "Day 41: Your GPA is the same as your Instagram ratio", "Day 43: If 'not b' then 'not a', then if you did not watch me nae-nae, you did not watch me whip", "Day 47: Much like life, we earn more from a Pringles can if we search deep", "Day 48: Much like life, leftover pizza is better when cooked longer in a convection oven", "Day 49: Much like life, an iPad is only useful if it has apps", "Day 50: Those who do not like your picture do not deserve to be liked", "Day 51: If a picture is worth a thousand words, a thousand pictures is only worth one", "Day 52: if everyone has a force of gravity, then Daniel Sun is attracted to me", "Day 61: People are like cookies. The more they get baked, the better they are", "Day 64: Much like Instagram, absolute value graphs are deceptive. All negatives appear positive and it cannot be differentiated", "Day 66: People are like cubic functions. They often reflect on their origin and have infinite potential to be positive or negative", "Day 69: Much like parabolas, we should only go up or down in life. If we move sideways, we are not able to function", "Day 70: Life is like a box of chocolates. Deadly when kept to oneself, better when shared", "Day 71: Humans are much like quotes. The deepest ones are the ones that seem the most shallow", "Day 81: Humans are like subatomic particles. Some are strange, some don't interact with others, and some carry force", "Day 86: Much like nose hairs, some people are rarely noticed but are necessary for living", "Day 101: In the moments you live the most life, life seems the most like a moment", "Day 104: Hustlers only sleep when they’re dead", "Day 106: Life is like ice crea. Though it lives the longest in a freezer, we would not be able to enjoy it.", "Day 114: In juggling the balls of life, the more balls you have, the more balls you have", "Day 128: People are like bagels. Tasty on the outside with a hole on the inside", "Day 129: A good actor is one who does not act when acting", "Day 130: People are like trigonometric functions. They commit sins and go on infinite tangents", "Day 135: Life is like printing paper. It is only as good as the ink we put on it", "Day 136: Life is like a heat engine. No matter how much work we put in it, it will never reach 100% efficiency", "Day 138: People are like hot pockets. If we heat them for too long, they will burst", "Day 139: Life is like an absolute value function. The faster we want to change, the less differentiable we become", "Day 144: Life is like jazz. Some days you're soloing and other days you're only a background", "Day 149: Much like the derivative of a constant, people who never change are never derived by others", "Day 152: Like an integral of a function, the area under your curves is integral to functioning in life", "Day 153: Much like points of inflection, vocal inflection is determined by whether you have cavities", "Day 154: Much like a leader, a leading coefficient is most efficient when it is positive", "Day 159: Some people are like peripheral proteins. Not integral and only attached to the surfaces of others", "Day 161: People are like paintings. Modern ones seem to lack substance", "Day 171: Humans are like socks. Though finding a pair seems to be about the design, all that matters is the feel", "Day 172: Handshakes are like money. The more you give, the more likely you are to receive", "Day 175: Life is like a car. The faster we move forward, the more dangerous it is", "Day 177: Life is like the carbon cycle. Sometimes we want the simple stuff, but sometimes we need the complex stuff", "Day 178: Watching a YouTube video is like a logistic curve. Our rate of interest grows fastest half way through the video then decreases", "Day 181: Life follows a logistic curve. People are incapable of reaching their full potential", "Day 188: Some people are like belts. The more they want to hold on to you, the more restricted and pained you become", "Day 195: People are like candles. They produce tears when they are lit up", "Day 197: Life is like jazz. You may think something sounds good until the chord structure changes", "Day 198: Like the first law of thermodynamics, it is hard to motivate ourselves to keep emitting light because other people are constantly taking it", "Day 201: People represent the ice cream in your life. Stacking too many scoops on your cone will make them all fall", "Day 206: People who use LINE always be lyin", "Day 207: People who use Facebook always writing books about people's faces", "Day 208: People who use Instagram always be judging people in an instant", "Day 213: There are two types of people in this world: those who study CS, and those who play CS", "Day 214: There are two types of people in this world: those who are recursive, and those who are one of two types in this world", "Day 220: Basketball is like genetics. Crossing over is necessary for diversity in life", "Day 225: If we are what we eat, people who eat lots of Lays tend to lay around a lot", "Day 227: Just as the WiiU is not compatible with GameCube games, the more we grow up, the more we forget about our roots", "Day 229: We dislike milk being poured prior to cereal because the cereal remains superficial, only floating at the top of the milk", "Day 232: Toothbrushes are like destiny. We clean ourselves with it everyday to be free from cavities in life", "Day 233: Success is a blank white canvas, for it is a work of art without any paint", "Day 236: iPhones are from Apple because Adam and Eve were tempted to eat apples", "Day 242: Life is a game of chess. It is all about checking mates and dethroning kings", "Day 244: Life is like Latin. Hard to understand and only fun if you think it is", "Day 246: People resemble cows. Cows like to ruminate food like people ruminate thoughts", "Day 249: Love is like a black hole. You cannot see it, but it distorts things close to it and sucks you in", "Day 250: Phones are like people. Newer and more sophisticated ones often require more protection and are broken more easily", "Day 252: People are like boba. We often leave many leftovers at the bottom", "Day 257: Existentialism would not have existed if we didn't exist", "Day 260: People are like shirts. We don't want to wear them if they are too tight or too loose", "Day 262: Kids are like even functions. Whether they go up or down, it would be odd to suddenly change their direction", "Day 264: Target tries to make them your target and wing stop tries to make you stop at their store", "Day 265: There are two types of people in this world: those who go to AMC, and those who take the AMC", "Day 267: Greatness comes not from how great we are, but from how great we weren't", "Day 268: People are meat. They taste better when they've been roasted", "Day 269: There are two type of people in the world. Those who play C#, and those who code C#", "Day 270: There are two types of people in this world: those who believe there are two types of people in this world", "Day 275: A dead person is like Latin. Though it is dead, we sometimes study them forever", "Day 276: Going through high school is like evolution. Mutations are random and growth is punctuated.", "Day 282: Some people are like BMW. You don't know what they stand for", "Day 290: Innovation is like playing wrong notes in a key signature because we try to open the lock without using a key", "Day 291: Much like life, pants have one hole that splits into two the lower you go", "Day 292: The pencil is rebellious to the paper as it disturbs the white with its black. But without rebellion, great ideas cannot be put to paper", "Day 295: Grades are like FM radio stations. They only get good around the 90s", "Day 298: In the tenses of life, we live for the future, knowing that it will grant us more presents than the present", "Day 299: When life gives you lemons, don't take them", "Day 301: Life is like Pokemon. We are told to catch them all and do not realize that we are in a game", "Day 302: On Facebook, there is no face to face contact because we only see the printed book copies of faces", "Day 305: Life is a lot like the cereal, Life. The longer you wait to eat it, the soggier it gets", "Day 309: Some people are like shampoo. Not only are they shams, but they are also poo", "Day 316: Some people are like corn. Their origins are truly a maize", "Day 317: There are two types of people in this world. Those who are honey bunches and those who eat honey bunches", "Day 323: The more we drink Canada Dry, the more we make Canada dry", "Day 326: The only way fake people can be real is by being fake", "Day 327: Life is like super smash bros. It's only fun to play if you are a captain", "Day 328: Band is life, for if we band together, we live better lives", "Day 329: Some people are like alligators. They have big mouths and are very sudden in movement", "Day 331: 'You are like a U-lock, because no one can take you away from me.'", "Day 337: Human relationships are like binders because they use rings to hold their contents together", "Day 338: Some people are like snapbacks. They often snap back at people when they don't fit in", "Day 339: Some people are like hair. The one that try to stick out the most are the ones that get cut the most", "Day 340: Some relationships are like a graduation cap. They get thrown on the first day", "Day 341: Gamecubes are perfect because they have volumes that are perfect cubes", "Day 342: The word gown can be use to spell gon because you will be gone when you take down your graduation gown", "Day 345: The word fart has the word art because true pieces of art can only be seen in the most hidden aspects of our lives", "Day 346: A graduated cylinder is graduated because there is a way to measure its contents and worth", "Day 348: Bildungsroman has the word dung in it evaluate we are all dung when we are young", "Day 351: If the sky's the limit, then we can set any delta airline greater than zero and still have a range close to the sky", "Day 352: The word champion has the word ham, ion, and pion, because you can be a champ by either eating a lot of ham, or by studying pions and ions", "Day 355: There are two types of people in the world. Those who make the subway and those who make a subway", "Day 356: College is like collagen. For some, it is integral for connecting all the issues in some animals", "Day 358: Life is like chipotle. Some days we enjoy all our food in a bowl, but some days we want to just stuff all our problems into one pack", "Day 361: People are like doors. The more open they are, the more opportunities get revealed", "Day 362: People are like instruments. Useless without another player", "Day 365: 'So have you finally discovered the meaning of life?' 'Well kind of. Doing 365 quotes was a really forceful way to tell myself that we can't find any meaning just by sitting around and typing up some useless quotes.' 'But wouldn't you need the knowledge of quotes in order to guide our actions?' 'Well you're right. There's no application without any theory behind it. I guess what I'm trying to say is that there always needs to be some balance in life, which is a recurring theme in my quotes. The balance here is between personal thought and action. Doing 365 quotes taught me how strong my intentions and thoughts were, but how empty my actions had been. Doing these quotes also showed me the power of self-thought. I impressed myself way too many times with the surprisingly deep quotes I was creating, and I think it is in anybody's power to create their own philosophy in life.' 'Sounds deep... So then what is the meaning of my life?'"];

function status(score) {
  if(score>0 && score<0.33) {
    document.getElementById('quote').textContent = generateNegativeQuote();
    document.getElementById('status').textContent = "Here's a quote to make you feel better";
  }
  else if(score>=0.33 && score<0.7) {
    document.getElementById('quote').textContent = generateNeutralQuote();
    document.getElementById('status').textContent = "Okay. Well here's something to think about for fun";
  }
  else {
    document.getElementById('quote').textContent = generatePositiveQuote();
    document.getElementById('status').textContent = "Awesome! Did you know:";
  }
}

function prepUI(predict) {
  setPredictFunction(predict);
}

function getReviewText() {
  const reviewText = document.getElementById('msg');
  return reviewText.value;
}

function generateNegativeQuote() {
  var rand = Math.floor(Math.random()*negative.length);
  return negative[rand];
}

function generateNeutralQuote() {
  var rand = Math.floor(Math.random()*neutral.length);
  return neutral[rand]; 
}

function generatePositiveQuote() {
  var rand = Math.floor(Math.random()*positive.length);
  return positive[rand];
}

function doPredict(predict) {
  const reviewText = document.getElementById('msg');
  const result = predict(reviewText.value);
  status(result);
}

function setReviewText(text, predict) {
  const reviewText = document.getElementById('msg');
  reviewText.value = text;
  doPredict(predict);
}

function setPredictFunction(predict) {
  const reviewText = document.getElementById('msg');
  reviewText.addEventListener('input', () => doPredict(predict));
}

function disableLoadModelButtons() {
  document.getElementById('load-pretrained-remote').style.display = 'none';
  document.getElementById('load-pretrained-local').style.display = 'none';
}

$(document).ready(function(){
    $('#msg').keypress(function(e){
      if(e.keyCode==13) {
        changeQuote();
      }
    });
});

function changeQuote() {
  var a = function() {
      var defer = $.Deferred();
      $("#real-quote").fadeOut();
      $("#real-status").fadeOut();
      setTimeout(function() {
          defer.resolve(); // When this fires, the code in a().then(/..../); is executed.
      }, 500);
      return defer;
  };
  var b = function() {
      var defer = $.Deferred();
      pressedEnter();
      setTimeout(function() {
          defer.resolve(); // When this fires, the code in a().then(/..../); is executed.
      }, 500);
      return defer;
  };
  var c = function() {
      var defer = $.Deferred();
      $("#real-quote").fadeIn();
      $("#real-status").fadeIn();
      setTimeout(function() {
          defer.resolve(); // When this fires, the code in a().then(/..../); is executed.
      }, 500);
      return defer;
  };
   
  a().then(b).then(c);
}

function pressedEnter() {
  document.getElementById('real-quote').textContent = document.getElementById('quote').textContent;
  document.getElementById('real-status').textContent = document.getElementById('status').textContent;
}