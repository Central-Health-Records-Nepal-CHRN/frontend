
import React from "react";

const EmailVerified = () => {


  return (
    <div style={styles.container}>
      <div style={styles.card} className="mx-auto flex flex-col justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          fill="#16a34a"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm-1.2 17.4l-5.4-5.4 1.8-1.8 3.6 3.6 7.2-7.2 1.8 1.8-9 9z" />
        </svg>

        <h1 style={styles.title}>Email Verified 🎉</h1>
        <p style={styles.subtitle}>
          Your email has been successfully verified.
        </p>
        <p style={styles.description}>
          You can now log in and start using the app.
        </p>

       
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#ecfdf5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    padding: "40px 30px",
    textAlign: "center"  as React.CSSProperties["textAlign"],
    maxWidth: "400px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#14532d",
    marginTop: "16px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#166534",
    marginTop: "10px",
  },
  description: {
    fontSize: "14px",
    color: "#374151",
    marginTop: "8px",
  },
  button: {
    backgroundColor: "#16a34a",
    color: "#fff",
    border: "none",
    padding: "14px 30px",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: "600",
    marginTop: "24px",
    cursor: "pointer",
  },
};

export default EmailVerified;
