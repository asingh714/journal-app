exports.seed = function(knex) {
  return knex("entries").insert([
    {
      date: 09-01-2019,
      grateful_one: "My amazing breakfast sandwich",
      grateful_two: "Sleeping 8 hours",
      grateful_three: "Saying hello to my mother on the phone",
      great_one: "Going on my evening walk",
      great_two: "Meditation twice today",
      great_three: "Not eating breakfast",
      daily_affirmation: "I can accomplish all great things so long as I stay focused",
      feel_one: 1,
      amazing_one: "Someone complimented my outfit",
      amazing_two: "I was able to complete all tasks on my todo list",
      amazing_three: "Solved a complicated problem at work",
      better: "I didn't get to foam roll some of the tightness in my upper back",
      feel_two: 2
    },
    {
      date: 09-13-2019,
      grateful_one: "Waking up before my alarm",
      grateful_two: "The birds chirping outside my window",
      grateful_three: "Access to the internet",
      great_one: "If I can make eye contact with a stranger and smile",
      great_two: "Finishing the errands on my todo list",
      great_three: "Making dinner and lunch for tomorrow",
      daily_affirmation: "I am a disciplined person",
      feel_one: 3,
      amazing_one: "I helped a random person carry something to their apartment",
      amazing_two: "I completed a work deadline ahead of time",
      amazing_three: "I read 50 pages from a new book I bought",
      better: "I did not get a chance to go for a jog this morning. I would have liked to do do that",
      feel_two: 4
    },
    {
      date: 09-23-2019,
      grateful_one: "Doing a kickboxing workout",
      grateful_two: "Being able to brush my teeth with clean water",
      grateful_three: "My new mattress",
      great_one: "If I can leave work early for my appointment",
      great_two: "Eat a healthy lunch",
      great_three: "Read before my class",
      daily_affirmation: "I am capable of so much",
      feel_one: 3,
      amazing_one: "I donated an auction ticket to someone random",
      amazing_two: "Had a great class today",
      amazing_three: "Did not have any cavities during my dentist appointment earlier",
      better: "I accidentally cut off someone while driving. Wish I had a chance to apologize",
      feel_two: 5
    }
  ]);
};
