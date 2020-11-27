const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/jeopardyinfo");
const questionInfoSeed = [
  {
    question:
      "He was featured on the September 22, 1947 cover of Time with the caption 'He and the boss took a chance.'",
    correctAnswer: "Jackie Robinson",
    answerChoices: ["Jackie Robinson", "Derek Jeter", "Babe Ruth", "Cy Young"],
    value: 100,
  },
  {
    question: "The rock and roll hall of fame is located in which U.S state?",
    correctAnswer: "Ohio",
    answerChoices: ["Idaho", "Colorado", "New York", "Ohio"],
    value: 100,
  },
  {
    question:
      "This famous quote is from what 80's movie?'Taste the soup, the soup tastes good?'",
    correctAnswer: "Coming to America",
    answerChoices: [
      "The Sandlot",
      "Coming to America",
      "The Breakfast Club",
      "Rain Man",
    ],
    value: 100,
  },
  {
    question: "How many years did the 100 years war last?",
    correctAnswer: "116",
    answerChoices: ["100", "116", "112", "101"],
    value: 100,
  },
  {
    question: "How high are the NFL goal posts?",
    correctAnswer: "10 feet",
    answerChoices: ["15 feet", "20 feet", "12 feet", "10 feet"],
    value: 300,
  },
  {
    question: "Who won American Idol season 1?",
    correctAnswer: "Kelly Clarkson",
    answerChoices: [
      "Ruben Studdard",
      "Carrie Underwood",
      "Kelly Clarkson",
      "Simon Cowell",
    ],
    value: 300,
  },
  {
    question: "In the James Bond movies, what is the name of Bonds assistant?",
    correctAnswer: "Miss Money Penny",
    answerChoices: ["Miss Penny", "Q", "Miss Money Penny", "MUM"],
    value: 300,
  },
  {
    question:
      "One of the ancient wonders of the world, the 'Hanging Gardens', was found in what city?",
    correctAnswer: "Babylon",
    answerChoices: ["Babylon", "Greece", "Rome", "Alexandria"],
    value: 300,
  },
  {
    question:
      "Who was the first player to win consecutive NBA MVP awards since Micheal Jordan did in 1991 and 1992?",
    correctAnswer: "Tim Duncan",
    answerChoices: [
      "Magic Johnson",
      "Lebron James",
      "Kobe Bryant",
      "Tim Duncan",
    ],
    value: 600,
  },
  {
    question:
      "R.Kelly's unforgettable 'I Believe I Can Fly, was originally featured on the soundtrack of which movie?",
    correctAnswer: "Space Jam",
    answerChoices: ["Like Mike", "Home Alone", "The Truman Show", "Space Jam"],
    value: 600,
  },
  {
    question:
      "Which movie did actor Tom Hanks score his first Academy Awards nomination?",
    correctAnswer: "Big",
    answerChoices: ["Saving Private Ryan", "Forrest Gump", "Big", "Cast Away"],
    value: 600,
  },
  {
    question:
      "In 1945 scientists in this state witnessed the detonation of the world's first atomic bomb?",
    correctAnswer: "The Red Cross",
    answerChoices: ["The Red Cross", "Derek Jeter", "Babe Ruth", "Cy Young"],
    value: 600,
  },
  {
    question: "What team hired Matt Patricia as their head coach?",
    correctAnswer: "Detroit Lions",
    answerChoices: [
      "Pittsburg Steelers",
      "New York Jets",
      "Chicago Bears",
      "Detroit Lions",
    ],
    value: 1000,
  },
  {
    question:
      "International music sensation ABBA originated from which European Country?",
    correctAnswer: "Sweden",
    answerChoices: ["Switzerland", "Sweden", "Norway", "Finland"],
    value: 1000,
  },
  {
    question: "What 1927 musical was the first 'talkie'?",
    correctAnswer: "The Jazz Singer",
    answerChoices: [
      "Golden Dawn",
      "Sally",
      "Show Girl in Hollywood",
      "The Jazz Singer",
    ],
    value: 1000,
  },
  {
    question:
      "How many days was William Harrison president of the United States?",
    correctAnswer: "32",
    answerChoices: ["30", "32", "28", "31"],
    value: 1000,
  },
];
db.JeopardyInfo.remove({})
  .then(() => db.JeopardyInfo.collection.insertMany(questionInfoSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
