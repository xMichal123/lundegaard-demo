import React from 'react';

const PolicyNumberInput: React.FC = () => {
  return (
    <div className="form-group">
      <label htmlFor="policyNumber">Policy Number</label>
      <input
        type="text"
        id="policyNumber"
        name="policyNumber"
        pattern="[A-Za-z0-9]+"
        required
      />
    </div>
  );
};

export default PolicyNumberInput;
