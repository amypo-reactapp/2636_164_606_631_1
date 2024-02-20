import React from 'react';

// Sample React component for the logo
const ReactLogo = () => (
  <img
    src=""
    alt="React Logo"
    style={{ maxWidth: '100px', maxHeight: '100px' }}
  />
);

// Main React Skill Session Component
const ReactSkillSession = () => (
  <div>
    <h6>React Skill Session</h6>
    <p>
      React is a JavaScript library for building user interfaces. It allows
      developers to create reusable UI components and efficiently update the
      user interface in response to data changes. React follows a
      component-based architecture, making it easier to manage and scale
      complex UIs.
    </p>
    <ReactLogo />
  </div>
);

export default ReactSkillSession;
