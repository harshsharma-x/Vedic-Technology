import React from 'react';
import createQuestionImage from './CreateQuestion.png';
import editQuestionsImage from './EditQuestions.png';
import homeImage from './Home.png';
import DoodleBackground from './DoodleBackground';
import './styles.css';  // Import the CSS file here

const Testworld = () => {
  return (
    <div className='mx-auto -z-30 relative  bg-gradient-to-r z--100 items-center justify-center from-green-100 to-pink-200 min-h-screen'>
      <div className="container relative ">
     <div className=''>
        
            <div className='items-center flex justify-center h-screen premium-doodle-background '> 
                <div>
                    <h1 className='text-3xl'>TestWorld.</h1>
                <p className='text-5xl'>Providing students, <br /> faculty, 24/7 Test Sessions</p>
                </div>
            </div>
     </div>
      <div className='w-[80%]  mx-auto'>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Overview</h2>
        <p className="text-lg">
          Our online test application, "Test World," is designed to provide an efficient and user-friendly platform for educators to create, manage, and edit tests. It also helps students to take these tests online, offering a seamless experience from both ends. The application boasts features that facilitate question creation, test management, and comprehensive time management strategies, making it an ideal solution for modern educational needs.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Features</h2>
        <div className="mb-6 flex ">
        <div><p className="text-lg">
        <h3 className="text-2xl font-semibold">Home Page</h3>
            The home page highlights the importance of time management during online tests. It emphasizes how effective time management helps users stay focused, complete questions accurately within the allotted time, thereby boosting their chances of success.
          </p></div>
          <div><img src={homeImage} alt="Home Page" className="w-full h-auto mb-4"/></div>
         
          
        </div>
        <div className="mb-6 flex gap-5">
      
         <div> <img src={createQuestionImage} alt="Create New Question" className="w-full h-auto mb-4"/></div>
         <div> <h3 className="text-2xl font-semibold">Create New Questions</h3>
          <p className="text-lg">
            The app offers an easy-to-navigate interface for creating new questions. Educators can effortlessly add questions by selecting the test name, difficulty level, subject, chapter, topic, and section. There is an option to mark the question as multiple choice and specify the correct answer(s). This feature ensures that a variety of question types can be included in the test.
          </p></div>
          
        </div>
        <div className="mb-6 flex ">
        <div>
        <h3 className="text-2xl font-semibold">Edit Questions</h3>
          <p className="text-lg">
            This section helps users manage and edit existing questions. Users can select a test name to view all associated questions. Each question can be edited to update its content, marks, and correct answers.
          </p>
        </div>
          <div><img src={editQuestionsImage} alt="Edit Questions" className="w-full h-auto mb-4"/></div>
         
        </div>
       
      </section>
      </div>
      <footer className="text-center">
        <p>&copy; 2024 Test World. All rights reserved.</p>
      </footer>
    </div>
    </div>
  );
};

export default Testworld;
