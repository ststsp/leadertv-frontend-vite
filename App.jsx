
import React from 'react';
import EventsList from './EventsList';
import EventForm from './EventForm';

function App() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <EventsList />
      <EventForm />
    </div>
  );
}

export default App;
