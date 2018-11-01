/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package quote_generator;
import java.util.Scanner;
import java.util.ArrayList;
/**
 *
 * @author Andrew
 */
public class Quote_generator {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String raw = "The passion of life lies within us, not within Mr. Gesk\n" +
"What is the purpose of having purpose in life\n" +
"There is a difference between wanting something and wanting to want something\n" +
"The more you study, the further away from yourself you become\n" +
"The quest for happiness creates the illusion of sadness\n" +
"Those who wait until the last minute suffer until the last second\n" +
"Judge not by the failure of expectations, but rather by the success of imaginations\n" +
"A life of happiness can be achieved by simply acknowledging the happiness of life\n" +
"To hustle or not to hustle. That is the answer\n" +
"If you can’t see the light, be the light. If you can’t be the light, don’t be a light\n" +
"Those who have nice watches often cannot tell the time of their own life\n" +
"The infinite sum of 1s and -1s is not only 1/2 but is also a representation of our way of life: Antimatter and matter, yin and yang. We must learn that equilibrium exists in all facets of life\n" +
"Do not be afraid to be afraid\n" +
"Live every day knowing that every day was lived\n" +
"The only thing that speaks louder than words are no words\n" +
"Before you see the world, you have to see how you see the world\n" +
"If art is the expression of our souls, then we are all paint brushes searching for the right shade of paint\n" +
"If we fear failure, then we also fear success.\n" +
"The quest for sophistication only leads us to deception about what deception truly is\n" +
"Do things not because they are easy or hard, but because they are things\n" +
"Live every day like it's your first.\n" +
"A satisfying life requires that you prove the existence of life within you\n" +
"Those who recognize their losses are winners\n" +
"If you think too hard, you distance yourself from yourself\n" +
"The illusion of time is an illusion because it is relative to itself\n" +
"It is impossible to live a happy life, but we can live a mostly happy life\n" +
"Deep quotes are an accumulation of superficial thoughts\n" +
"Even with no sense of direction, you still go somewhere in life\n" +
"Always look at the big picture because if we view only the small picture, we become it\n" +
"Much like life, a circle seems pointless. However, a circle is the set of all points from a center, much like life\n" +
"If you want to become poor in life, you must become rich in life\n" +
"Those who wait for a miracle in life simply wait\n" +
"You find yourself when others find themselves\n" +
"Think not of what the future holds, but what the past lacked\n" +
"We cannot accept the future because the future is a present that has past.\n" +
"Our everyday lives should not halt our pursuit of philosophy, but should motivate it\n" +
"Don't think too much\n" +
"Some of life's deepest messages cannot be written or told, but are performed and heard\n" +
"Sometimes, what appears to be an illusion may just be an illusion\n" +
"Your SAT score determines the year of your death.\n" +
"Your GPA is the same as your Instagram ratio\n" +
"If you are not motivated, motivate yourself to stop being motivated\n" +
"If 'not b' then 'not a', then if you did not watch me nae-nae, you did not watch me whip\n" +
"Asking for something is the fastest way to not get it\n" +
"If we mustn't run from our problems, achieving perfection is a paradox.\n" +
"If we need adversity to succeed, everybody is a success\n" +
"Much like life, we earn more from a Pringles can if we search deep\n" +
"Much like life, leftover pizza is better when cooked longer in a convection oven\n" +
"Much like life, an iPad is only useful if it has apps\n" +
"Those who do not like your picture do not deserve to be liked\n" +
"If a picture is worth a thousand words, a thousand pictures is only worth one\n" +
"if everyone has a force of gravity, then Daniel Sun is attracted to me\n" +
"Much like life, a good movie ends\n" +
"Though good things come to those who wait, those who do not wait come to good things\n" +
"Is it better to succeed at failing or fail at succeeding?\n" +
"The more you think about life, the less of it you live\n" +
"In order to silence the haters, we must hate ourselves more greatly\n" +
"Much like the conservation of charge and life, you can be positive but someone else must be negative\n" +
"Average minds think. Great minds think of thinking\n" +
"The lesser the word count is, the more the words count\n" +
"People are like cookies. The more they get baked, the better they are\n" +
"Much like life, a clock only works if it goes forward\n" +
"Your followers to following ratio determines the eccentricity of your circle. If it is greater than 1, your focus leads people away from your center.\n" +
"Much like Instagram, absolute value graphs are deceptive. All negatives appear positive and it cannot be differentiated\n" +
"The more you think about a quote, the less logical it gets. The less logical it gets, the more human it gets\n" +
"People are like cubic functions. They often reflect on their origin and have infinite potential to be positive or negative\n" +
"Life is like a piano. Some notes must be excluded to make a song sound good\n" +
"Knowledge is an idea that we use to convince ourselves that we have it\n" +
"Much like parabolas, we should only go up or down in life. If we move sideways, we are not able to function\n" +
"Life is like a box of chocolates. Deadly when kept to oneself, better when shared\n" +
"Humans are much like quotes. The deepest ones are the ones that seem the most shallow\n" +
"In the pursuit of uniqueness, do not do everything. An object that reflects or absorbs every color of light just appears black and white\n" +
"We are defined by what we pursue because we pursue what defines us\n" +
"Much like a spring, we have the greatest potential energy when pressured or stretched to our fullest\n" +
"An imaginary number is written as 'i' because our eyes imagine what we see\n" +
"In order to find yourself, you have to see how others found you\n" +
"Life is like a game of golf. Though everything might seem negative, you actually may be winning\n" +
"Life is like a bed. You either make it or sleep on it\n" +
"Without inspiration in life, there is no life in life\n" +
"The less you succeed, the more you realize that you already succeed\n" +
"Humans are like subatomic particles. Some are strange, some don't interact with others, and some carry force\n" +
"People are like books. Annotate as many as you can\n" +
"Much like humans, paper clips are malleable, able to link others together and mold into sharp, singular sticks\n" +
"The answer to all of life's questions are better questions\n" +
"Much like people, a book should not be judged by its title\n" +
"Much like nose hairs, some people are rarely noticed but are necessary for living\n" +
"Although light is good and dark is bad, too much sunlight will make us dark\n" +
"Life is like a house. We live the least of it when we are living inside of it\n" +
"Much like the placebo effect, the key to living a happy life is in thinking that you live a happy life\n" +
"Life is like a yoga ball. It's just a ball\n" +
"Life is like money. The less you have, the more you borrow it from others\n" +
"Life is like a pizza. The more you eat, the happier and sadder you get.\n" +
"If you give everything meaning, you lose meaning\n" +
"The point of life is to not be a point in life\n" +
"The more we linger in the past, the less futures will become a past\n" +
"Much like life, a memory is forgotten if it is always remembered\n" +
"Life is like a plant. Sometimes you need the sun and sometimes you need the rain\n" +
"Like and unlike life, we only like the shade if light surrounds it\n" +
"To be dumb is to be smart. To be smart is to know that we are all dumb\n" +
"We sleep because we are tired of life. We live because we are tired of being tired of life\n" +
"In the moments you live the most life, life seems the most like a moment\n" +
"People are like light bulbs. The brighter they are, the more resistance they have to others\n" +
"Much like the moment of inertia of a hollow sphere, humans become more resistive when they are concentrated far from their center.\n" +
"Hustlers only sleep when they’re dead\n" +
"We bustle in the night so that we can hustle in the light\n" +
"Life is like ice crea. Though it lives the longest in a freezer, we would not be able to enjoy it.\n" +
"Regular people live their lives by the day. Hustlers live their lives by the life.\n" +
"If a great government governs the least, a great person is as little a person as possible\n" +
"People are like tangent graphs. The cycles are never connecting because when one is infinitely positive, another is infinitely negative.\n" +
"Much like people, all Tetris blocks are both wanted and unwanted at different times\n" +
"Failure is like the root of a plant. The deeper it is, the more nutrients it harvests\n" +
"Like people, you get the most out of bananas if you peel them\n" +
"Life is like a camera. You’re only in the picture if you reflect light\n" +
"In juggling the balls of life, the more balls you have, the more balls you have\n" +
"A good life is reserved for those who don’t make reservations for a good life \n" +
"When we turn thoughts into actions, we move forward. When we turn actions into thoughts, we move upward\n" +
"People are like printers. If they jam too much, they won’t work\n" +
"If opposites attract, then we are truly happy when we are also sad\n" +
"People are like food. If we have a buffet full of it, we cannot eat it all\n" +
"The more we obey others, the less we obey ourselves\n" +
"Your future is determined by whether you consider the future in the future\n" +
"Life is like a roller coaster. Scary when you go up, fun when you go down\n" +
"Good ideas are like spiders. Hard to accept, yet hard to live without\n" +
"Much like people, we discriminate equations in order to differentiate them\n" +
"To think like Plato, we need to think of life as play-dough\n" +
"Haters are lovers who love too much\n" +
"Failure happens when you reject rejection\n" +
"People are like bagels. Tasty on the outside with a hole on the inside\n" +
"A good actor is one who does not act when acting\n" +
"People are like trigonometric functions. They commit sins and go on infinite tangents\n" +
"Life is like an average rate of change. It only matters what the beginning and end are\n" +
"Life is like driving a car. Sometimes you must be a jerk\n" +
"The more we create quotes, the less our lives will be defined by quotes\n" +
"To get the things we want, we have to not want them at all\n" +
"Life is like printing paper. It is only as good as the ink we put on it\n" +
"Life is like a heat engine. No matter how much work we put in it, it will never reach 100% efficiency\n" +
"Much like chloroplast, we can't get food in life unless we have green\n" +
"People are like hot pockets. If we heat them for too long, they will burst\n" +
"Life is like an absolute value function. The faster we want to change, the less differentiable we become\n" +
"If we never have fun in life, life will not be fun back to us\n" +
"Money is like respect. The more you give to people, the more they have\n" +
"Much like driving on a road, breaks are needed in life\n" +
"The greater our expectations are in life, the less we can expect to be great in life\n" +
"Life is like jazz. Some days you're soloing and other days you're only a background\n" +
"Everything is pointless because without a point, nothing sticks out\n" +
"Life is like a book. The more we read, the less pages we have to read\n" +
"Life can be like a chair. It's purpose may only be to be sat on\n" +
"Much like life, music is most enjoyable when we want to make it\n" +
"Much like the derivative of a constant, people who never change are never derived by others\n" +
"Life is like a phone. The more you play with it, the less life you live\n" +
"The more you work out in life, the more life works out for you\n" +
"Like an integral of a function, the area under your curves is integral to functioning in life\n" +
"Much like points of inflection, vocal inflection is determined by whether you have cavities\n" +
"Much like a leader, a leading coefficient is most efficient when it is positive\n" +
"Thoughts are like book titles. They are useless until we write the book\n" +
"The more we take life with a grain of salt, the tastier our lives will become\n" +
"Life is like a philosophy class. Those who understand it the least tend to live the most life\n" +
"Halloween is a means of escaping the hollow weeks of life\n" +
"Some people are like peripheral proteins. Not integral and only attached to the surfaces of others\n" +
"People are like food. We need most the ones that taste the worst\n" +
"People are like paintings. Modern ones seem to lack substance\n" +
"Much like newspapers, we only read the headlines when meeting people\n" +
"People are like time. They fly when we have fun\n" +
"People are like backpacks. The more things we want in them, the harder they are to carry around\n" +
"The fun of life is had in acknowledging the impossibility of a fun life\n" +
"Trying to be deep is like digging a deep hole. It's hard to move forward and to get out of it\n" +
"Life is like music. Though we like to make it, there is no inherent meaning in it\n" +
"People are like computers. Everybody knows how to use them but barely know how they work\n" +
"Much like good movies, deceptive people require lots of money, acting, and scripts\n" +
"People are like fallout, for they are played often and are harmful\n" +
"Humans are like socks. Though finding a pair seems to be about the design, all that matters is the feel\n" +
"Handshakes are like money. The more you give, the more likely you are to receive\n" +
"If we sit on stumps when we are stumped, we should rest in peace when we are in peace\n" +
"Everything in life is free unless you want everything for free\n" +
"Life is like a car. The faster we move forward, the more dangerous it is\n" +
"Discrimination is like publicity. Positive discrimination is still discrimination\n" +
"Life is like the carbon cycle. Sometimes we want the simple stuff, but sometimes we need the complex stuff\n" +
"Watching a YouTube video is like a logistic curve. Our rate of interest grows fastest half way through the video then decreases\n" +
"The more expectations we meet in life, the more we can expect to meet the end of life\n" +
"Those who seek awards in life seek to live without having lived\n" +
"Life follows a logistic curve. People are incapable of reaching their full potential\n" +
"Life is best lived in the same way food is best eaten\n" +
"Much like in a logistic curve, people grow fastest when in the middle of two extremes\n" +
"The more we think of others, the more thankful they become\n" +
"People resemble metronomes at different tempos. Though two may seem dysfunctional, they eventually beat at the same time\n" +
"Much like people, pages of a book stand out when they have folds and marks all over it\n" +
"When you feel down in life, you are not down to live\n" +
"Some people are like belts. The more they want to hold on to you, the more restricted and pained you become\n" +
"Even chairs need a place to sit on\n" +
"People are doors. They let some people in and some people out\n" +
"Quotes are the blueprint of a great idea. Useless by itself\n" +
"People are like fish. We all come from the sea and are more bio diverse at the bottom of it\n" +
"The more we learn in life, the more there is to learn in life\n" +
"The more curious we are, the less chance that we will find a cure\n" +
"People are like candles. They produce tears when they are lit up\n" +
"The more time goes on, the more we think it goes on\n" +
"Life is like jazz. You may think something sounds good until the chord structure changes\n" +
"Like the first law of thermodynamics, it is hard to motivate ourselves to keep emitting light because other people are constantly taking it\n" +
"The smarter we get, the dumber we want to get\n" +
"People abide by the rules of biology. They divide with one another in order to sustain life\n" +
"People represent the ice cream in your life. Stacking too many scoops on your cone will make them all fall\n" +
"When we run away from people, the Earth's roundness brings us closer to them\n" +
"We mustn't classify women as we do snapbacks, which are named for the thing on the back of the hat\n" +
"The more selfies we take, the more selfless we become\n" +
"Life is like a rollercoaster. Some people ride them. Others build them\n" +
"People who use LINE always be lyin\n" +
"People who use Facebook always writing books about people's faces\n" +
"People who use Instagram always be judging people in an instant\n" +
"Marriage is like college. You may be accepted or rejected, you may take a gap year, and they are both institutions of society\n" +
"Those who sleep to run away from their problems end up sleeping with their problems\n" +
"To catch up with life, we must not catch it, for there will be no where else to go\n" +
"Our differences may be overcome if we add up rather than take the difference of each other\n" +
"There are two types of people in this world: those who study CS, and those who play CS\n" +
"There are two types of people in this world: those who are recursive, and those who are one of two types in this world\n" +
"People are like friction. It may hinder your progress, but it will never be able to reverse your direction\n" +
"Resolutions do not resolve an issue. Rather they give us a chance to re-solve our problems\n" +
"Life is not about how bright our rooms are. It's about how dark they can get while still moving forward\n" +
"People, like triangles, have positive sin whether acute or obtuse\n" +
"A jazz solo, like a person's life, must adapt to changes in chords of others to be successful\n" +
"Basketball is like genetics. Crossing over is necessary for diversity in life\n" +
"A wasted life is like a hot pocket with all the stuffing oozed out. We wait to fulfill our dreams later in life until they are not inside of us anymore\n" +
"People who waste their potential are like cereal boxes with the lid open. They let the air take their potential without giving other people the chance to taste us\n" +
"Those who do not take risks in life become a risk to invest in\n" +
"People are like pencils. The more they are sharpened, the less dull they are\n" +
"If we are what we eat, people who eat lots of Lays tend to lay around a lot\n" +
"There is no key to success if there is no lock to be opened\n" +
"Just as the WiiU is not compatible with GameCube games, the more we grow up, the more we forget about our roots\n" +
"Life is not about how hard you can hustle. It's about how little you can hustle but keep on hustling\n" +
"We dislike milk being poured prior to cereal because the cereal remains superficial, only floating at the top of the milk\n" +
"The door to success has a lock. We may get through it more easily if we spent less time finding the key\n" +
"Haters are like rainy days. Though they may make us sad, they give us rain to cultivate our garden\n" +
"Toothbrushes are like destiny. We clean ourselves with it everyday to be free from cavities in life\n" +
"Success is a blank white canvas, for it is a work of art without any paint\n" +
"Spoiled people are like spoiled milk. They age too fast from the world around them\n" +
"Apples are like people. They originate from family trees and their core should be uneaten\n" +
"iPhones are from Apple because Adam and Eve were tempted to eat apples\n" +
"Yoga balls are like people. Bouncy and fun initially, but they deflate with age\n" +
"Racial differences are like handwriting. White paper is best used with black ink\n" +
"People are like conveyor belts. Simple ones convey a message that is dropped on it\n" +
"Math is integral because of integrals and all truth is derived from derivatives\n" +
"Life is like a game of mafia. We accuse each other without substantial evidence\n" +
"Life is a game of chess. It is all about checking mates and dethroning kings\n" +
"Money is like a bathroom stall. People need it, but don't want to share it\n" +
"Life is like Latin. Hard to understand and only fun if you think it is\n" +
"If a musical cannot be a musical without music, life cannot be life without life\n" +
"People resemble cows. Cows like to ruminate food like people ruminate thoughts\n" +
"Humans are like an infinite mathematical series. Our initial terms say nothing about our patterns of growth later on\n" +
"Like humans, the limit for a series may reach zero, but the sum can still be infinite\n" +
"Love is like a black hole. You cannot see it, but it distorts things close to it and sucks you in\n" +
"Phones are like people. Newer and more sophisticated ones often require more protection and are broken more easily\n" +
"Talking to someone is like testing a computer program with a test file. We only feel successful when we pass every single test\n" +
"People are like boba. We often leave many leftovers at the bottom\n" +
"Negative moments in life are like the bottom of a pendulum. We contain the most kinetic energy to move past our pain\n" +
"The imperfect tense describes the past because our past lives were never perfect\n" +
"If time runs slower for objects moving near the speed of light, our time runs out more quickly the more we sit around\n" +
"If a musical is pointless without music, a life is pointless without life\n" +
"Existentialism would not have existed if we didn't exist\n" +
"Succeeding in life is like solving a Rubik's cube. You can't solve it unless you temporarily ruin your good sides\n" +
"Haters are like functions with no x value in them. No matter what you input, you always get the same output\n" +
"People are like shirts. We don't want to wear them if they are too tight or too loose\n" +
"Succeeding in life is like catching a frisbee. Sometimes it doesn't go your way\n" +
"Kids are like even functions. Whether they go up or down, it would be odd to suddenly change their direction\n" +
"We are like Rubik's cubes. The more dimensions we try to have, the longer it takes for people to solve us\n" +
"Target tries to make them your target and wing stop tries to make you stop at their store\n" +
"There are two types of people in this world: those who go to AMC, and those who take the AMC\n" +
"People who waste their time are like a telescoping series. Even when they infinitely add up, they reach the same limit\n" +
"Greatness comes not from how great we are, but from how great we weren't\n" +
"People are meat. They taste better when they've been roasted\n" +
"There are two type of people in the world. Those who play C#, and those who code C#\n" +
"There are two types of people in this world: those who believe there are two types of people in this world\n" +
"People are like pieces of paper. They kill trees and are usually white\n" +
"Ice cream is like our dreams. They can never be eaten unless they have the courage to melt in the heat\n" +
"Our houses are like refrigerators. They protect from the heat of the sun but we may never age and change if we stay for too long\n" +
"There are many fake people in the world to balance out the real of reality\n" +
"A dead person is like Latin. Though it is dead, we sometimes study them forever\n" +
"Going through high school is like evolution. Mutations are random and growth is punctuated.\n" +
"People are Rubik's cubes, for they get easier and faster to solve the more you solve\n" +
"Life is alot like an alarm clock. It gets more annoying the lazier we get\n" +
"Peoples' lives are as obscure as backpacks. We can see what it looks like, but we cannot tell what's inside of it\n" +
"Ideas are like oxygen. We die from too little of it, and get high from too much of it\n" +
"Reading quotes is like playing in the beach. It gets more dangerous the further and deeper you go\n" +
"Some people are like BMW. You don't know what they stand for\n" +
"Life is a movie. You're either watching it, or making it\n" +
"Life is a line. There is no point in following it\n" +
"Some people are like Rubik's cubes. They have multiple faces and are difficult to solve\n" +
"Life is a lot like a clock. Sometimes we want it to speed up, and sometimes we never want it to stop\n" +
"Dreams are like car fuel. Everybody gets it when they don't cost much\n" +
"In the taxicab we call life, the longer we enjoy the ride, the more we have to pay\n" +
"The first step to taking action is to not want to take it at all\n" +
"Innovation is like playing wrong notes in a key signature because we try to open the lock without using a key\n" +
"Much like life, pants have one hole that splits into two the lower you go\n" +
"The pencil is rebellious to the paper as it disturbs the white with its black. But without rebellion, great ideas cannot be put to paper\n" +
"People are like rulers. They are made to keep other people straight\n" +
"Food are like people. Good looking ones are often bad for you\n" +
"Grades are like FM radio stations. They only get good around the 90s\n" +
"Society resembles wind currents. Hot ones move up while cold ones go down\n" +
"Speakers are like nerve cells. They charge you from negative to positive in order to deliver a message\n" +
"In the tenses of life, we live for the future, knowing that it will grant us more presents than the present\n" +
"When life gives you lemons, don't take them\n" +
"Fake people are like fake money. They never reveal their insides when you put a light through them\n" +
"Life is like Pokemon. We are told to catch them all and do not realize that we are in a game\n" +
"On Facebook, there is no face to face contact because we only see the printed book copies of faces\n" +
"Some people are like glue. They are sticky and usually create temporary bonds\n" +
"Life works a lot like the piezoelectric effect. We only become electric once we are under pressure\n" +
"Life is a lot like the cereal, Life. The longer you wait to eat it, the soggier it gets\n" +
"People are like trash bags. Though they themselves may not be trash in the first place, the trashiness of trash rubs off on them and the bags get thrown away like trash\n" +
"People are like celery. When they get salty, they become less stable\n" +
"Target makes consumerism your target in life\n" +
"Some people are like shampoo. Not only are they shams, but they are also poo\n" +
"Much like calculus, the limits of life do not exist\n" +
"Much like electric voltage, people become brighter when they have more potential to make a difference\n" +
"UPS undergoes logistic growth because their packages have a carrying capacity\n" +
"Life is a lot like a roller coaster. It's just a ride\n" +
"Some people are like alternating current. They always fluctuate from positive to negative and are usually more painful than direct current\n" +
"Some people are like diodes. They only listen to the thoughts of people with the same direction, but not those with different directions\n" +
"Some people are like corn. Their origins are truly a maize\n" +
"There are two types of people in this world. Those who are honey bunches and those who eat honey bunches\n" +
"Some people are like toenails. You must keep cutting them or else they will grow on you\n" +
"The people who drink wine the most are the people that whine the most\n" +
"Bad sin is like trigonometric sin. The more we angle off of our straight line, the greater our sin value is\n" +
"Life is like the formal definition of a limit. We often end up never understanding it\n" +
"Some people are like coconut water. They try to combine two good things, but end up tasting like garbage\n" +
"The more we drink Canada Dry, the more we make Canada dry\n" +
"Failure is like coffee. The taste is terrible but we need it to keep working\n" +
"Relationships are like staples. They make holes on the paper they are binding together and ruin the papers when taken apart\n" +
"The only way fake people can be real is by being fake\n" +
"Life is like super smash bros. It's only fun to play if you are a captain\n" +
"Band is life, for if we band together, we live better lives\n" +
"Some people are like alligators. They have big mouths and are very sudden in movement\n" +
"Some people are like dictionaries. No matter how advanced their vocabularies are, they cannot create cohesive stories\n" +
"'You are like a U-lock, because no one can take you away from me.'\n" +
"People are like lines. Either they are pointless, or infinitely full of them\n" +
"Some people are like paper. Because they are so thin, they may hurt you\n" +
"Some people are like blinds. They block the light to help you see but also hold you back from the truth\n" +
"The word map can be rearranged to form the word amp because some people need an amp to show others their map in life\n" +
"Life is like a video game. Fun to play around with but we realize more and more that we are playing ourselves\n" +
"Human relationships are like binders because they use rings to hold their contents together\n" +
"Some people are like snapbacks. They often snap back at people when they don't fit in\n" +
"Some people are like hair. The one that try to stick out the most are the ones that get cut the most\n" +
"Some relationships are like a graduation cap. They get thrown on the first day\n" +
"Gamecubes are perfect because they have volumes that are perfect cubes\n" +
"The word gown can be use to spell gon because you will be gone when you take down your graduation gown\n" +
"We are like erasers because the more we try to erase our mistakes, the more we erase ourselves in the process\n" +
"Much like the conservation of energy, time is not saved nor wasted. Only better spent\n" +
"The word fart has the word art because true pieces of art can only be seen in the most hidden aspects of our lives\n" +
"A graduated cylinder is graduated because there is a way to measure its contents and worth\n" +
"We only define points on a shape if they stand out from the infinite other points around them\n" +
"Bildungsroman has the word dung in it evaluate we are all dung when we are young\n" +
"The word consistent has the words cons and tent because we must keep all our cons under a tent in order to be consistent\n" +
"Though the word bed looks like a bed, the word success looks like a straight line despite it being a bumpy road\n" +
"If the sky's the limit, then we can set any delta airline greater than zero and still have a range close to the sky\n" +
"The word champion has the word ham, ion, and pion, because you can be a champ by either eating a lot of ham, or by studying pions and ions\n" +
"The word train can either mean a locomotive or a verb for working. Either way, you move forward\n" +
"If a cluttered desk symbolizes a busy mind, an empty desk symbolizes a purposeless mind\n" +
"There are two types of people in the world. Those who make the subway and those who make a subway\n" +
"College is like collagen. For some, it is integral for connecting all the issues in some animals\n" +
"Much like a piano, there is no one single key that results in a successful and harmonious life\n" +
"Life is like chipotle. Some days we enjoy all our food in a bowl, but some days we want to just stuff all our problems into one pack\n" +
"The more we realize how imperfect we were, the more we appreciate how pluperfect we had been\n" +
"The closer we are to succeeding, the further we are to success\n" +
"People are like doors. The more open they are, the more opportunities get revealed\n" +
"People are like instruments. Useless without another player\n" +
"People are like earth. The more we realize the world does not revolve around us, the more we are able to discover in life\n" +
"The more we try to redefine success, the less time we have to create example sentences\n" +
"'So have you finally discovered the meaning of life?' 'Well kind of. Doing 365 quotes was a really forceful way to tell myself that we can't find any meaning just by sitting around and typing up some useless quotes.' 'But wouldn't you need the knowledge of quotes in order to guide our actions?' 'Well you're right. There's no application without any theory behind it. I guess what I'm trying to say is that there always needs to be some balance in life, which is a recurring theme in my quotes. The balance here is between personal thought and action. Doing 365 quotes taught me how strong my intentions and thoughts were, but how empty my actions had been. Doing these quotes also showed me the power of self-thought. I impressed myself way too many times with the surprisingly deep quotes I was creating, and I think it is in anybody's power to create their own philosophy in life.' 'Sounds deep... So then what is the meaning of my life?'";
        String[] quotes = raw.split("\n");
        ArrayList<String> neg = new ArrayList<>();
        ArrayList<String> neutral = new ArrayList<>();
        ArrayList<String> pos = new ArrayList<>();
        for(int i = 0; i<quotes.length; i++) {
            String s = quotes[i];
            System.out.print("" + (i+1) + ": ");
            System.out.println(s);
            String f = "Day " + (i+1) + ": " + s;
            int tag = input.nextInt();
            if(tag==1)
                neg.add(f);
            else if(tag==2)
                neutral.add(f);
            else if(tag==3)
                pos.add(f);
        }
        System.out.print("neg = [");
        for(String negQ : neg) {
            System.out.print("\""+negQ+"\"" + ", ");
        }
        System.out.println();
        
        System.out.print("neutral = [");
        for(String negQ : neutral) {
            System.out.print("\""+negQ+"\"" + ", ");
        }
        
        System.out.println();
        
        System.out.print("pos = [");
        for(String negQ : pos) {
            System.out.print("\""+negQ+"\"" + ", ");
        }
    }
    
}
