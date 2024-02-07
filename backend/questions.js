// questions.js
const questions = [
    {
     
      category: "React.js",
      question: "What is React.js primarily used for in web development?",
      options: ["A) Server-side scripting", "B) Database management", "C) User interface components", "D) Machine learning algorithms"],
      answer: "C) User interface components",
    },
    {
      
      category: "React.js",
      question: "Which concept in React.js is responsible for maintaining the state of a component?",
      options: ["A) state()", "B) setState()", "C) updateState()", "D) changeState()"],
      answer: "B) setState()",
    },
    {
      
      category: "React.js",
      question: "In React, what is JSX?",
      options: ["A) JavaScript XML", "B) JSON Extension", "C) JavaScript Extension", "D) JSX is not used in React"],
      answer: "A) JavaScript XML",
    },
    {
       
        category: "React.js",
        question: "What is the purpose of React Router?",
        options: ["A) State management", "B) Client-side routing", "C) Server-side rendering", "D) Form validation"],
        answer: "A) Client-side routing",
      },

      {
        
        category: "React.js",
        question: "Which lifecycle method is called after a component renders?",
        options: ["A) componentDidMount()", "B) componentDidUpdate()", "C) componentWillMount()", "D) componentWillUnmount()"],
        answer: "A) componentDidMount()",
      },

      {
        
        category: "React.js",
        question: "What is the significance of the virtual DOM in React.js?",
        options: ["A) It speeds up server processing", "B) It directly updates the browser DOM", "C) It improves the performance of UI updates", "D) It is unrelated to React.js"],
        answer: "A) It improves the performance of UI updates",
      },

      {
       
        category: "React.js",
        question: "Which command is used to create a new React application?",
        options: ["A) npm start", "B) react new", "C) create-react-app", "D)  init-react"],
        answer: "A) create-react-app",
      },

      {
        
        category: "React.js",
        question: "What is the purpose of the props object in React components?",
        options: ["A) To manage component state", "B) To handle events", "C) To pass data between components", "D) To define component styles"],
        answer: "C) To pass data between components",
      },
    
      {
       
        category: "React.js",
        question: "What is the key benefit of using React hooks?",
        options: ["A) Improved performance", "B) Simplified state management", "C) Better server-side rendering", "D)  Enhanced security"],
        answer: "B) Simplified state management",
      },

      {
       
        category: "React.js",
        question: "Which of the following is NOT a valid React component lifecycle method?",
        options: ["A) shouldComponentUpdate()", "B) getSnapshotBeforeUpdate()", "C) componentWillUpdate()", "D) componentDidUpdateState()"],
        answer: "D) componentDidUpdateState()",
      },
  
    {
      
      category: "Python Programming",
      question: "What is Python primarily known for?",
      options: ["A) Graphic design", "B) Web development", "C) Artificial intelligence and data analysis", "D) Game development"],
      answer: "C) Artificial intelligence and data analysis",
    },
    {
      
      category: "Python Programming",
      question: "Which of the following is a correct way to comment in Python?",
      options: ["A) // This is a comment", "B) /* This is a comment */", "C) # This is a comment", "D) -- This is a comment"],
      answer: "C) # This is a comment",
    },

    {
     
      category: "Python Programming",
      question: "What is the purpose of the 'pip' command in Python?",
      options: ["A) To run Python scripts", "B) To install Python packages", "C) To create virtual environments", "D) To format Python code"],
      answer: "B) To install Python packages",
    },
  
    {
       
        category: "Python Programming",
        question: "Which data type is used to store a sequence of characters in Python?",
        options: ["A) int", "B) float", "C) str", "D)  list"],
        answer: "C) str",
      },

      {
       
        category: "Python Programming",
        question: "What is the key difference between a list and a tuple in Python?",
        options: ["A) Lists are mutable, and tuples are immutable", "B) Lists are faster than tuples", "C) Tuples can only store integers", "D) Lists cannot contain nested elements"],
        answer: "A) Lists are mutable, and tuples are immutable",
      },

      {
       
        category: "Python Programming",
        question: "In Python, how is an exception handled using a try-except block?",
        options: ["A) catch", "B) handle", "C) try-catch", "D) try-except"],
        answer: "B) try-except",
      },

      {
       
        category: "Python Programming",
        question: "Which of the following is a valid way to open a file in Python?",
        options: ["A) file = open('example.txt', 'rb')", "B) file = open('example.txt', 'r+'')", "C) file = open('example.txt', 'w', encoding='utf-8')", "D) All of the above"],
        answer: "D) All of the above",
      },

      {
      
        category: "Python Programming",
        question: "What is the purpose of the 'self' parameter in a Python class method?",
        options: ["A) It refers to the class itself", "B) It is used for conditional statements", "C) It represents the instance of the class", "D) It is not a valid parameter in Python"],
        answer: "C) It represents the instance of the class",
      },

      {
   
        category: "Python Programming",
        question: "Which of the following is true about Python's indentation?",
        options: ["A) It has no impact on code execution", "B) It is optional", "C) It defines the block of code", "D) It is used for commenting"],
        answer: "C) It defines the block of code",
      },

      {
       
        category: "Python Programming",
        question: "What is the purpose of the 'lambda' function in Python?",
        options: ["A) To declare variables", "B) To create anonymous functions", "C) To import external modules", "D) To generate random numbers"],
        answer: "B) To create anonymous functions",
      },

  
    {
      
      category: "Machine Learning Concepts",
      question: "What is the primary goal of machine learning?",
      options: ["A) To write complex algorithms", "B) To automate repetitive tasks", "C) To learn from data and make predictions or decisions", "D) To create intelligent robots"],
      answer: "C) To learn from data and make predictions or decisions",
    },
    {
     
      category: "Machine Learning Concepts",
      question: "Which type of machine learning algorithm is suitable for predicting a continuous value, such as stock prices?",
      options: ["A) Classification", "B) Clustering", "C) Regression", "D) Reinforcement learning"],
      answer: "C) Regression",
    },
    {
     
      category: "Machine Learning Concepts",
      question: "What is the purpose of the training and testing phases in a machine learning model?",
      options: ["A) To confuse the model", "B) To validate the model's accuracy", "C) To increase model complexity", "D) To reduce computational load"],
      answer: "B) To validate the model's accuracy",
    },

    {
       
        category: "Python Programming",
        question: "In supervised learning, what is the role of the labels in the training dataset?",
        options: ["A) They are ignored during training", "B) They are used to evaluate the model", "C) They are the input features", "D) They are the output variables the model learns to predict"],
        answer: "D) They are the output variables the model learns to predict",
      },

      {
       
        category: "Python Programming",
        question: "What does the term 'overfitting' mean in the context of machine learning?",
        options: ["A) The model is too simple", "B) The model performs well on unseen data", "C) The model is too complex and performs poorly on new data", "D) The model is not trained enough"],
        answer: "C) The model is too complex and performs poorly on new data",
      },

      {
       
        category: "Python Programming",
        question: "Which algorithm is commonly used for image recognition tasks in deep learning?",
        options: ["A) K-Means Clustering", "B) Decision Trees", "C) Convolutional Neural Networks (CNN)", "D) Naive Bayes"],
        answer: "C) Convolutional Neural Networks (CNN)",
      },

      {
        
        category: "Python Programming",
        question: "What is the purpose of the activation function in a neural network?",
        options: ["A) To determine the learning rate", "B) To calculate the loss function", "C) To introduce non-linearity", "D) To initialize weights"],
        answer: "C) To introduce non-linearity",
      },

      {
       
        category: "Python Programming",
        question: "What does the term 'feature scaling' involve in machine learning?",
        options: ["A) Removing irrelevant features", "B) Normalizing input features to a similar scale", "C) Increasing the number of features", "D) Combining multiple features into one"],
        answer: "B) Normalizing input features to a similar scale",
      },

      {
        
        category: "Python Programming",
        question: "What is the purpose of cross-validation in machine learning?",
        options: ["A) To train the model on a single dataset", "B) To install Python packages", "C) To split the dataset into training and testing sets", "D) To improve the model's accuracy"],
        answer: "B) To evaluate the model's performance on multiple datasets",
      },

      {
       
        category: "Python Programming",
        question: "In reinforcement learning, what is the role of the 'reward' signal?",
        options: ["A) To punish the model for incorrect predictions", "B) To guide the model towards desired behavior", "C) To determine the learning rate", "D) To initialize the model's parameters"],
        answer: "B) To guide the model towards desired behavior",
      },

      {
        
        category: "Python Programming",
        question: "Which type of Programming does Python support?",
        options: ["A) Object-oriented programming", "B) Structured programming", "C) Functional programming", "D) All of the mentioned"],
        answer: "B) All of the mentioned",
      },
      {
       
        category: "Python Programming",
        question: "Who developed Python Programming Language?",
        options: ["A) Wick van Rossum", "B) Rasmus Lerdorf", "C) Guido van Rossum", "D) Niene Stom"],
        answer: "B) Guido van Rossum",
      },  
  ];
  
  module.exports = questions;
  