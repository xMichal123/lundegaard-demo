import React, { useState } from 'react';

const RequestTextarea: React.FC = () => {
  const maxLength = 500;
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setText(newText);
  };

  return (
    <div className="form-group">
      <label htmlFor="request">Your Request</label>
      <textarea
        id="request"
        name="request"
        maxLength={maxLength}
        onChange={handleChange}
        required
        value={text}
      />
      <div className="char-count">
        {maxLength - text.length} / {maxLength}
      </div>
    </div>
  );
};

export default RequestTextarea;
