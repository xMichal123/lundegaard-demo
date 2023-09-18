import React from 'react';

const SubmitButton: React.FC = () => {
  // Implement form submission logic later
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Implement form submission logic here
  };

  return (
    <div className="form-group">
      <button type="submit" onClick={handleSubmit}>Send Request</button>
    </div>
  );
};

export default SubmitButton;
