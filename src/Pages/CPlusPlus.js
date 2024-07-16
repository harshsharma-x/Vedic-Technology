// src/CPlusPlus.js
import React from 'react';

const CPlusPlus = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">C++ Syllabus</h1>

        {/* Section 1: Fundamentals of C++ */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. Fundamentals of C++</h2>
          <ul className="list-disc list-inside">
            <li>
              Explain variables, constants, identifiers, and tokens. Also, discuss how to name them.
            </li>
            <li>
              What are the differences between variable declaration and variable initialization?
              Discuss the differences with examples.
            </li>
            <li>Write short notes on Identifiers and Constants.</li>
            <li>Write short notes on Variables and Constants.</li>
            <li>Explain C++ Token in detail.</li>
          </ul>
        </section>

        {/* Section 2: Control Structures */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">2. Control Structures</h2>
          <ul className="list-disc list-inside">
            <li>
              What is the need of switch-case in C++? Explain the need of switch-case functionality
              with a suitable example. Discuss the use of break and continue with examples.
            </li>
            <li>
              Explain the need for control structures in C++. What are the differences between
              while and do-while loop statements?
            </li>
            <li>
              Discuss the different types of loops in C++ with the help of examples. Also, discuss
              the nested loop in C++.
            </li>
            <li>
              Explain with a diagram the if-else-if-else statement and for loop.
            </li>
            <li>
              Explain the working of switch-case and nested switch-case statements. What are the
              differences between break and continue statements?
            </li>
          </ul>
        </section>

        {/* Section 3: Functions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">3. Functions</h2>
          <ul className="list-disc list-inside">
            <li>Explain function overloading with the help of suitable programs.</li>
            <li>Explain recursive functions with the help of examples.</li>
            <li>Write a recursive program/function to find the factorial of n numbers.</li>
            <li>
              What is the concept of pass by value and pass by reference in C++? Give an example
              of each.
            </li>
            <li>Write short notes on Principle of function overloading.</li>
            <li>Write short notes on Functions default arguments.</li>
            <li>Write short notes on Recursion.</li>
            <li>Write short notes on Inline function.</li>
            <li>Explain with suitable examples Signature of parameter.</li>
            <li>
              What is a function? How will you define a function in C++? Define inline function.
              When will you make a function inline and why?
            </li>
            <li>
              What is function overloading? What are the rules for defining overloaded functions?
              What precautions should we take while overloading functions? Also, explain what are
              the r-value and l-value in an expression.
            </li>
          </ul>
        </section>

        {/* Section 4: Object-Oriented Programming (OOP) */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">4. Object-Oriented Programming (OOP)</h2>
          <ul className="list-disc list-inside">
            <li>
              Discuss the important features of an Object-Oriented Programming Language C++.
            </li>
            <li>What is Object-Oriented Programming (OOPs)? Explain the key concept of OOPS.</li>
            <li>Explain the concept of data hiding. What are the advantages of its applications?</li>
            <li>
              Explain the concept of constructors and overloading destructors in a class with the
              help of an example. Can destructors be overloaded? Justify your answer.
            </li>
            <li>Explain the characteristics of constructors and destructors.</li>
            <li>What is a class and how is it related to objects?</li>
            <li>Write short notes on Member function and its characteristics.</li>
            <li>Explain with real world examples: Object and class.</li>
            <li>Explain with suitable program segments: Member function and data member.</li>
            <li>Explain with suitable program segments: How object is an instance of class?</li>
            <li>
              Discuss the concept of an object-oriented programming language with suitable
              examples. Write the use of an object-oriented programming language.
            </li>
            <li>
              Define data members, member functions, private and public members with examples.
            </li>
            <li>
              What are static member variables and functions? How are static variables initialized?
              How is a static member invoked?
            </li>
            <li>Write short notes on Containership.</li>
            <li>Write short notes on Polymorphism.</li>
            <li>
              Explain the significance of virtual functions with the help of an example. What is a
              pure virtual function?
            </li>
            <li>Write short notes on Abstract class.</li>
            <li>Write short notes on Friend function.</li>
            <li>Write short notes on Virtual class.</li>
            <li>Explain with real world examples: Early binding.</li>
            <li>
              Explain the use of inheritance with the help of an example. List three advantages of
              inheritance.
            </li>
            <li>
              What is a friend function and a friend class? Write a program using a friend function
              to add two objects representing heights expressed in feet and inches and meters and
              centimeters respectively.
            </li>
            <li>Explain with suitable examples: Insertion operator.</li>
            <li>Write short notes on Dynamic Binding.</li>
            <li>Write short notes on Template.</li>
          </ul>
        </section>

        {/* Section 5: Constructors and Destructors */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">5. Constructors and Destructors</h2>
          <ul className="list-disc list-inside">
            <li>
              Explain constructor and destructor with the help of suitable program or program
              segment.
            </li>
            <li>Write short notes on Constructors and Destructors.</li>
            <li>
              What are the constructors and destructors? Explain their characteristics.
            </li>
            <li>
              What is special about constructors? When is a copy constructor called? Discuss
              different forms of inheritance.
            </li>
            <li>
              Write a C++ program, to find the factorial of a non-negative integer using a
              constructor and a destructor (generating the message "you have done it").
            </li>
            <li>Write a C++ program to print all the prime numbers between 1 to 1000.</li>
            <li>Explain with real world examples: Constructors and Destructors.</li>
          </ul>
        </section>

        {/* Section 6: Inheritance */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">6. Inheritance</h2>
          <ul className="list-disc list-inside">
            <li>
              What is inheritance? Explain different types of inheritance with suitable examples.
            </li>
            <li>
              Explain the types of inheritance: Single Inheritance, Multiple Inheritance,
              Multilevel Inheritance, Hierarchical Inheritance, Hybrid Inheritance.
            </li>
            <li>Discuss the advantages and disadvantages of Inheritance.</li>
            <li>Write short notes on Inheritance.</li>
            <li>Write short notes on Polymorphism.</li>
            <li>Explain with suitable program segments: Multiple inheritance.</li>
            <li>Explain the types of inheritance with syntax.</li>
            <li>
              What is inheritance? What are the various types of inheritance? Explain the various
              access specifiers.
            </li>
          </ul>
        </section>

        {/* Section 7: Operator Overloading */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">7. Operator Overloading</h2>
          <ul className="list-disc list-inside">
            <li>
              Enlist the different types of operators. Explain new, delete, and comma operators with
              the help of examples.
            </li>
            <li>
              Write a C++ program for operator overloading the Stream Operators {'>>'}and {'<<'}. Use
              comments where needed in the code.
            </li>
            <li>Differentiate between Overloading and Overriding.</li>
            <li>
              What is an operator function? What are the two ways of overloading an operator? Give
              their syntax. List some points that must be kept in mind while overloading operators.
            </li>
            <li>Explain with real world examples: Operator overloading.</li>
            <li>Write short notes on Operators function.</li>
            <li>
              What do you mean by operator overloading? Describe rules for operator overloading.
              Also, explain the difference between operator overloading and function overloading.
            </li>
            <li>
              Design a class complex representing complex numbers. Overload {'<<'} operator for this
              class complex.
            </li>
          </ul>
        </section>

        {/* Section 8: Memory Management */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">8. Memory Management</h2>
          <ul className="list-disc list-inside">
            <li>Discuss the new and delete operators.</li>
            <li>How is dynamic initialization of objects achieved?</li>
            <li>Write short notes on Dynamic initialization of objects.</li>
            <li>What are the advantages of the 'new' operator over the malloc function?</li>
          </ul>
        </section>

        {/* Section 9: Advanced OOP Concepts */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">9. Advanced OOP Concepts</h2>
          <ul className="list-disc list-inside">
            <li>
              Explain virtual functions and pure virtual functions. What happens if a pure virtual
              function is not redefined in a derived class?
            </li>
            <li>Write short notes on Friend functions and friend classes.</li>
            <li>Write short notes on Virtual functions and pure virtual functions.</li>
            <li>Write short notes on Containership.</li>
            <li>Write short notes on Abstract classes.</li>
          </ul>
        </section>

        {/* Section 10: Input and Output */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">10. Input and Output</h2>
          <ul className="list-disc list-inside">
            <li>
              What do you understand by Streams in C++? Discuss Pre-Defined classes and Objects.
            </li>
            <li>Write short notes on Streams in C++.</li>
            <li>What are formatted and unformatted input/output functions?</li>
            <li>Distinguish between the following: Cin() and scanf().</li>
            <li>Distinguish between the following: Cout() and Printf().</li>
            <li>
              Explain with suitable program segments: Formatted Console I/O Operation and
              Manipulators.
            </li>
            <li>
              Why is it necessary to include the file iostream in all our programs? What is the
              role of the iomanip file? What is the basic difference between manipulators and ios
              member functions in implementation?
            </li>
          </ul>
        </section>

        {/* Section 11: File Handling */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">11. File Handling</h2>
          <ul className="list-disc list-inside">
            <li>
              What do you mean by a binary file? Describe the important requirement for the need
              of data storage in files. Write all basic File Operations on Text File.
            </li>
            <li>Explain the use of scope access operator (::) and reference operator (&).</li>
          </ul>
        </section>

        {/* Section 12: Error Handling */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">12. Error Handling</h2>
          <ul className="list-disc list-inside">
            <li>What is an exception? Explain its use in handling errors in a program.</li>
          </ul>
        </section>

        {/* Section 13: Miscellaneous Concepts */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">13. Miscellaneous Concepts</h2>
          <ul className="list-disc list-inside">
            <li>
              Explain the concept of pass by value and pass by reference in C++. Give an example of
              each.
            </li>
            <li>Write short notes on Scope Resolution Operator (::).</li>
            <li>
              What are static member variables and functions? How are static variables initialized?
              How is a static member invoked?
            </li>
            <li>
              What is a reference variable? What is its use? What is the use of the scope
              resolution operator (::) in C++?
            </li>
            <li>What are type modifiers? Why are they essential?</li>
            <li>Write short notes on Identified and Constants.</li>
            <li>Write short notes on Dynamic Binding.</li>
          </ul>
        </section>

        {/* Section 14: Practical Programming Problems */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">14. Practical Programming Problems</h2>
          <ul className="list-disc list-inside">
            <li>Write an OOP to generate the first ten prime numbers.</li>
            <li>Write a recursive program/function to find the factorial of n numbers.</li>
            <li>
              Write a program to count numbers between 1 to 100, which are not divisible by 2, 3,
              and 5.
            </li>
            <li>Write a Program to convert square to square root and vice-versa.</li>
            <li>
              Write a C++ program to find the given sequence is palindrome or not.
            </li>
            <li>Write a program to display the Fibonacci series up to n terms.</li>
            <li>
              Write a program in C++ to convert integer to date and vice-versa using conversion
              function in the source class.
            </li>
            <li>
              You can convert temperature from Degree Celsius to Degree Fahrenheit by multiplying
              9/5 by and adding 32. Write a program that allows the user to enter a floating-point
              number representing Degree Celsius, and then displays the corresponding Degree
              Fahrenheit.
            </li>
            <li>
              Write a program in C++ that maintains the list of students enrolled in different
              courses along with their personal details.
            </li>
          </ul>
        </section>

        {/* Section 15: Comparative Analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">15. Comparative Analysis</h2>
          <ul className="list-disc list-inside">
            <li>Differentiate between Overloading and Overriding.</li>
            <li>
              Differentiate between Derived data types and user-defined data types.
            </li>
            <li>Explain the concept of data abstraction.</li>
            <li>
              What is the difference between the variable declaration and variable initialization?
              Discuss the differences with examples.
            </li>
            <li>
              What is the difference between call by value and call by reference in a function?
              Write a program to find the average male and female height using an array.
            </li>
            <li>
              What is POP and OOP? What are the differences between POP and OOP? Discuss the
              features of POP. Describe how data is shared by the functions in procedure-oriented
              programs.
            </li>
            <li>
              What are static member variables and functions? How are static variables initialized?
              How are static functions and friend functions invoked?
            </li>
          </ul>
        </section>

        {/* Section 16: Short Notes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">16. Short Notes</h2>
          <ul className="list-disc list-inside">
            <li>Write short notes on Abstraction.</li>
            <li>Write short notes on Static binding.</li>
            <li>Write short notes on Virtual function.</li>
            <li>Write short notes on Inheritance.</li>
            <li>Write short notes on Operator overloading.</li>
            <li>Write short notes on Constructors and Destructors.</li>
            <li>Write short notes on Multiple inheritance.</li>
            <li>Write short notes on Polymorphism.</li>
            <li>Write short notes on Templates.</li>
            <li>Write short notes on Stream classes.</li>
            <li>Write short notes on Formatted I/O.</li>
            <li>Write short notes on Unformatted I/O.</li>
            <li>Write short notes on Dynamic initialization of objects.</li>
            <li>Write short notes on Dynamic binding.</li>
          </ul>
        </section>

        {/* End of Sections */}
      </div>
    </div>
  );
};

export default CPlusPlus;
