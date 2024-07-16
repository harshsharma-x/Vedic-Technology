import React from 'react';

const Training = () => {
  return (
    <section id="training" className="pt-40 bg-white ">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Two-Year Training Program</h2>
        
        {/* Year 1 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-bold mb-4">Year 1: Foundations and Frontend Development</h3>
          
          {/* Month 1-2 */}
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">Month 1-2: Foundations of Web Development</h4>
            <ul className="list-disc list-inside">
              <li>HTML5 and CSS3 basics</li>
              <li>Responsive design with Flexbox and Grid</li>
              <li>SCSS/SASS and Tailwind CSS</li>
              <li>JavaScript basics and ES6+ features</li>
            </ul>
          </div>
          
          {/* Month 3-4 */}
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">Month 3-4: JavaScript Deep Dive</h4>
            <ul className="list-disc list-inside">
              <li>Advanced JavaScript concepts (asynchronous JS, Promises)</li>
              <li>DOM manipulation</li>
              <li>Fetch API and AJAX</li>
              <li>JavaScript projects and exercises</li>
            </ul>
          </div>
          
          {/* Month 5-6 */}
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">Month 5-6: React Basics</h4>
            <ul className="list-disc list-inside">
              <li>Introduction to React and JSX</li>
              <li>Components, Props, and State</li>
              <li>React lifecycle methods</li>
              <li>React project implementation</li>
            </ul>
          </div>
          
          {/* Month 7-8 */}
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">Month 7-8: Advanced React</h4>
            <ul className="list-disc list-inside">
              <li>React Hooks (useState, useEffect, useContext)</li>
              <li>Context API and React Router</li>
              <li>State management with Redux and Redux Toolkit</li>
              <li>Performance optimization and testing with Jest and React Testing Library</li>
            </ul>
          </div>
          
          {/* Month 9-10 */}
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">Month 9-10: TypeScript</h4>
            <ul className="list-disc list-inside">
              <li>TypeScript basics (type annotations, interfaces)</li>
              <li>Advanced TypeScript concepts (generics, decorators)</li>
              <li>Integrating TypeScript with React</li>
              <li>TypeScript projects and exercises</li>
            </ul>
          </div>
          
          {/* Month 11-12 */}
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">Month 11-12: Design and Prototyping with Figma</h4>
            <ul className="list-disc list-inside">
              <li>Introduction to Figma and basic tools</li>
              <li>Creating components and design systems</li>
              <li>Prototyping in Figma</li>
              <li>Collaborative design projects</li>
            </ul>
          </div>
        </div>
        
        {/* Year 2 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-bold mb-4">Year 2: Backend Development, Fullstack Integration, and Advanced Topics</h3>
          
          {/* Month 1-2 */}
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">Month 1-2: Backend Development with Node.js and Express</h4>
            <ul className="list-disc list-inside">
              <li>Introduction to Node.js and npm</li>
              <li>Building and handling modules</li>
              <li>Creating RESTful APIs with Express.js</li>
              <li>Middleware and error handling</li>
            </ul>
          </div>
          
          {/* Month 3-4 */}
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">Month 3-4: Database Management with MongoDB</h4>
            <ul className="list-disc list-inside">
              <li>Introduction to MongoDB and CRUD operations</li>
              <li>Using Mongoose ORM</li>
              <li>Aggregation framework and indexes</li>
              <li>MongoDB projects and exercises</li>
            </ul>
          </div>
          
          {/* Month 5-6 */}
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">Month 5-6: Fullstack Development</h4>
            <ul className="list-disc list-inside">
              <li>Integrating frontend with backend</li>
              <li>Building a fullstack project (React + Node.js + MongoDB)</li>
              <li>Deploying applications to AWS (EC2, S3)</li>
              <li>Serverless architecture with AWS Lambda</li>
            </ul>
          </div>
          
          {/* Month 7-8 */}
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">Month 7-8: Unit Testing and DevOps</h4>
            <ul className="list-disc list-inside">
              <li>Unit testing with Jest</li>
              <li>Integration testing and end-to-end testing with Cypress</li>
              <li>Introduction to Docker and containerization</li>
              <li>CI/CD principles and pipelines</li>
            </ul>
          </div>
          
          {/* Month 9-10 */}
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">Month 9-10: English Communication and Soft Skills</h4>
            <ul className="list-disc list-inside">
              <li>Business English and technical writing</li>
              <li>Presentation skills and public speaking</li>
              <li>Interview preparation and mock interviews</li>
              <li>Soft skills workshops and team projects</li>
            </ul>
          </div>
          
          {/* Month 11-12 */}
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">Month 11-12: Advanced Topics and Final Projects</h4>
            <ul className="list-disc list-inside">
              <li>Advanced React (Performance optimization, React Profiler)</li>
              <li>Advanced TypeScript (Type manipulation, advanced types)</li>
              <li>Advanced AWS (Scaling applications, CloudFormation)</li>
              <li>Final project development and presentation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Training;
