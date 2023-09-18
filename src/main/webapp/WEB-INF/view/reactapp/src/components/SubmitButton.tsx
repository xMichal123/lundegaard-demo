import axios from 'axios';
import React, { useState } from 'react';

const SubmitButton: React.FC = () => {

  return (
    <div className="form-group">
      <button type="submit">Send Request</button>
    </div>
  );
};

export default SubmitButton;
