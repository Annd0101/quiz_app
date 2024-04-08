// AchievementDialog.js
import React from "react";
import "../styles/AchievementDialog.css"; // Path to your CSS file

function AchievementDialog({ show, achievement, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <div className='achievement-overlay'>
      <div className='achievement-dialog'>
        <h2>Achievement Unlocked!</h2>
        <div className='achievement-content'>
          <p>{achievement}</p>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default AchievementDialog;
