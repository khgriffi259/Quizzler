const db = require('./models');

const users = [
  { firstName: 'username', lastName: 'username', username: 'username', password: 'password' },
  { firstName: 'kyle', lastName: 'griffin', username: 'kyle@gmail.com', password: 'password' },
];

const questions = [
  {
    question: 'Which is a JavaScript framework',
    options: ['Node.js', 'React', 'Laravel'],
    correctAnswer: 'React',
    results: ['right', 'wrong']
  },
  { question: 'Where is the correct place to insert a JavaScript?', 
    options: ['The <head> section', 'Both the <head> section and the <body> section are correct'],
    correctAnswer: 'Both the <head> section and the <body> section are correct',
    results: ['right', 'wrong']
  },
  { question: 'What is the correct syntax for referring to an external script called "xxx.js"??', 
    options: ['<script src="xxx.js">', '<script href="xxx.js">', '<script name="xxx.js">'],
    correctAnswer: '<script src="xxx.js">',
    results: ['right', 'wrong']
},
];

const seed = async () => {
  try {
    await db.User.remove();
    console.log('DROP ALL USERS');

    await db.Question.remove();
    console.log('DROP ALL QUESTIONS');

    await Promise.all(users.map(async user => {
      const { firstName, lastName } = user
      const initials = firstName[0].toUpperCase() + lastName[0].toUpperCase()
      await db.User.create({...user, initials})
    }))
    // await db.User.create(user)))
        // await data.save();
  
    console.log('CREATED USERS', JSON.stringify(users));
    
    await Promise.all(
      questions.map(async question => {
        question.options = question.options.map(option => ({ option, votes: 0 }));
        question.results = question.results.map(result => ({ result, count: 0 }));
        const data = await db.Question.create(question);
        const user = await db.User.findOne({ username: 'username' });
        data.user = user;
        user.questions.push(data._id);
        await user.save();
        await data.save();
      }),
    );
    console.log('CREATED QUESTIONS', JSON.stringify(questions));
  } catch (err) {
    console.error(err);
  }
};

seed();