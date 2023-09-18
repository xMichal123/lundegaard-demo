import React from 'react';

const SurnameInput: React.FC = () => {
  return (
    <div className="form-group">
      <label htmlFor="surname">Surname</label>
      <input
        type="text"
        id="surname"
        name="surname"
        pattern="[A-Za-z]+"
        required
      />
    </div>
  );
};

export default SurnameInput;
