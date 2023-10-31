import React from 'react';

const styles = {
  body: {
    padding: 0,
    margin: 0,
  },
  geeks: {
    padding: "200px",
    textAlign: "center",
  },
  pattern: {
    width: "300px", // Adjusted the width for vertical display
    height: "100vh",
    position: "relative",
    backgroundColor: "#3bb78f",
    backgroundImage: "linear-gradient(45deg, #3bb78f 0%, #0bab64 74%)",
  },
  wave: {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    width: "250px",
    height: "100%",
    backgroundImage: "url(https://media.geeksforgeeks.org/wp-content/uploads/20200326181026/wave3.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    transform: "rotate(-90deg) translateY(100%)", // Added rotation and translate for vertical positioning
    transformOrigin: "top left",
  },
};

function WaveBackground() {
  return (
    <section style={styles.pattern}>
      <div style={styles.wave}></div>
      <div style={styles.geeks}>
        <h1>GEEKS FOR GEEKS</h1>
      </div>
    </section>
  );
}

export default WaveBackground;
