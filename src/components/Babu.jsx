import React from 'react';

export const Babu = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Ganeshbabu M</h1>
      <p style={styles.subtitle}>Computer Science Student | Developer</p>

      <nav style={styles.nav}>
        <a href="#about" style={styles.navLink}>About</a>
        <a href="#skills" style={styles.navLink}>Skills</a>
        <a href="#projects" style={styles.navLink}>Projects</a>
        <a href="#contact" style={styles.navLink}>Contact</a>
      </nav>

      <section id="about" style={styles.section}>
        <h2 style={styles.heading}>About Me</h2>
        <p>
          I’m a Computer Science student with a strong passion for coding and building projects that solve real-world problems.
          I enjoy working with JavaScript, Python, Java, C++, and web development technologies.
        </p>
      </section>

      <section id="skills" style={styles.section}>
        <h2 style={styles.heading}>Skills</h2>
        <ul>
          <li>Languages: Java, Python, C++, JavaScript, HTML, CSS, SQL</li>
          <li>Tools: Git, GitHub, VS Code, Netlify</li>
          <li>Fields: Web Development, Problem Solving, Algorithms</li>
        </ul>
      </section>

      <section id="projects" style={styles.section}>
        <h2 style={styles.heading}>Projects</h2>
        <ul>
          <li>
            <strong>QR Code Generator</strong> —
            <a href="https://ganeshbabu26.github.io/QrCode/" target="_blank" rel="noopener noreferrer" style={styles.link}>
              View Project
            </a>
          </li>
          <li>
            <strong>BabuPython Repository</strong> —
            <a href="https://github.com/Ganeshbabu26/BabuPython" target="_blank" rel="noopener noreferrer" style={styles.link}>
              Visit Repo
            </a>
          </li>
        </ul>
      </section>

      <section id="contact" style={styles.section}>
        <h2 style={styles.heading}>Contact</h2>
        <p>Email:
          <a href="mailto:ganeshbabumadhavan@gmail.com" style={styles.link}> ganeshbabumadhavan@gmail.com</a>
        </p>
        <p>GitHub:
          <a href="https://github.com/Ganeshbabu26" target="_blank" rel="noopener noreferrer" style={styles.link}> Ganeshbabu26</a>
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Segoe UI, sans-serif',
    padding: '2rem',
    backgroundColor: '#0e0e0e',
    color: '#fff',
    maxWidth: '100vw',
    minHeight: '100vh',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '0.5rem',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '1.2rem',
    textAlign: 'center',
    marginBottom: '2rem',
  },
  nav: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  navLink: {
    margin: '0 15px',
    color: '#00ffe0',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  section: {
    marginBottom: '2rem',
  },
  heading: {
    color: '#00ffe0',
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  link: {
    color: '#00ffe0',
    textDecoration: 'none',
    marginLeft: '8px',
  },
};
