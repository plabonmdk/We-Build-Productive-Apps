import React, { useEffect, useState } from 'react';

const Installation = () => {
  const [installation, setInstallation] = useState([]);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installation"));
    if (savedList) {
      setInstallation(savedList);
    }
  }, []);

  return (
    <div>
      <h2>Installation</h2>

      
      {installation.length > 0 ? (
        <ul className="list-disc pl-5">
          {installation.map((item, index) => (
            <li key={index}>{item.title || item}</li>
          ))}
        </ul>
      ) : (
        <p>No installations found.</p>
      )}
    </div>
  );
};

export default Installation;
