import React from "react";

function StatusPanel({ status, onUpdate }) {
  return (
    <div className="status-panel">
      <p>Status: <strong>{status}</strong></p>
      <div className="button-group">
        <button onClick={() => onUpdate("Active")}>Active</button>
        <button onClick={() => onUpdate("Inactive")}>Inactive</button>
        <button onClick={() => onUpdate("Busy")}>Busy</button>
      </div>
    </div>
  );
}

export default StatusPanel;
