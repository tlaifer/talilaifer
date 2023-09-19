import React from 'react';

const Experience: React.FC = () => {
  return (
    <div>
      <h2>Work Experience</h2>
      <div>
        I could write up some stuff here... or you could just check out <a href='https://www.linkedin.com/in/talilaifer/'>LinkedIn</a>.
        Gotta stay DRY 😄.
      </div>
      <h2>Education</h2>
      <div>
        I studied philosophy, computer science, and environmental policy as an undergraduate at Northwestern University.
        <br></br>
        <br></br>
        While working at C3 AI, I completed my master's in computer science from the University of Illinois at Urbana Champaign (UIUC).
        {/* <br></br>
        <br></br>
        The state of Illinois has been good to me! */}
      </div>
      <h2>Projects</h2>
      <div>Here are a few code projects of which I am proud.</div>
      <h3>Gilga</h3>
      <div>
        In April 2023 Donald Glover announced his creative agency Gilga was taking open applications.
        I had some fun building a website for my application for the the AI Promt Engineer & Librarian
        role. It can be seen <a href='/gilga-app/public/index.html'>here.</a>
      </div>
    </div>
  );
};

export default Experience;
