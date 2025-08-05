import React, { useState } from "react";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>My Simple TSX App</h1>
      <p style={styles.text}>You clicked {count} times</p>
      <button style={styles.button} onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    marginTop: "50px",
  },
  header: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  text: {
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    fontSize: "1rem",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default App;
