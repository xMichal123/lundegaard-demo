import React from 'react';

const SurnameInput: React.FC = () => {
  return (
    <div className="form-group">
      <label htmlFor="surname">Surname</label>
      <input
        type="text"
        id="surname"
        name="surname"
        pattern="[a-zA-Z]+"
        title="Only letters are allowed"
        required
      />
    </div>
  );
};

export default SurnameInput;
