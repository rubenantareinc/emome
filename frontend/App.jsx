import React, { useState, useEffect } from 'react';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');

  const fetchNotes = async () => {
    const res = await fetch('/api/user123/timeline');
    const data = await res.json();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input) return;

    await fetch('/api/user123/friend', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: input }),
    });

    setInput('');
    fetchNotes();
  };

  return (
    <div>
      <h1>Emome Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a note about a friend"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {notes.map((n, i) => (
          <li key={i}>{n.text}</li>
        ))}
      </ul>
    </div>
  );
}
