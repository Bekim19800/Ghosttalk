
import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  return (
    <div style={{ padding: '2rem', color: '#fff', background: '#111', minHeight: '100vh' }}>
      <h1>GhostTalk</h1>
      <input
        type="text"
        placeholder="Write an anonymous message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ padding: '0.5rem', width: '100%' }}
      />
      <button onClick={handleSend} style={{ marginTop: '1rem' }}>
        Send
      </button>
      <div style={{ marginTop: '2rem' }}>
        <h3>Messages:</h3>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ padding: '0.5rem', borderBottom: '1px solid #444' }}>
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
