import React from 'react';

const Blogs = () => {
  return (
    <div className=' mb-28 mt-10 mx-5'>
      <h2 className='text-4xl text-center mt-14 mb-8 font-bold text-primary'>Blog Section</h2>
      <div className="card card-compact w-full bg-base-200 shadow-xl mb-10 p-5">
        <div className="card-body">
          <h2 className="card-title text-3xl text-primary">What are the different ways to manage a state in a React application?</h2>
          <p className=' text-lg'>React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of a React app.</p>
        </div>
      </div>

      <div className="card card-compact w-full bg-base-200 shadow-xl mb-10 p-5">
        <div className="card-body">
          <h2 className="card-title text-3xl text-primary">How does prototypical inheritance work?</h2>
          <p className=' text-lg'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
        </div>
      </div>

      <div className="card card-compact w-full bg-base-200 shadow-xl mb-10 p-5">
        <div className="card-body">
          <h2 className="card-title text-3xl text-primary">What is a unit test? Why should we write unit tests?</h2>
          <p className=' text-lg'>What is meant by unit testing?
            A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. <br />They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex. </p>
        </div>
      </div>

      <div className="card card-compact w-full bg-base-200 shadow-xl mb-10 p-5">
        <div className="card-body">
          <h2 className="card-title text-3xl text-primary">React vs. Angular vs. Vue?</h2>
          <p className=' text-lg'>
            If the choice you're making is based on Angular vs React alone, then you'll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.
            <br />
            <br />
            The choice between React vs Vue is often debated and it's not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there's no sign that React is on the decline either.
            <br />
            <br />

            In most cases, you probably wouldn't be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. Vue is the clear choice for less experienced developers, and Angular would be preferred for those working on larger apps.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Blogs;