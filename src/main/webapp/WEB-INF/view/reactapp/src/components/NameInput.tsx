import React from 'react';

const PolicyNumberInput: React.FC = () => {
  return (
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        pattern="[a-zA-Z]+"
        title="Only letters are allowed"
        required
      />
    </div>
  );
};

export default PolicyNumberInput;
