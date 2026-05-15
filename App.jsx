// src/App.jsx
import React from 'react';
import { profile, projects } from './data';
import './App.css';

function App() {
  return (
    <div className="portfolio-root">
      <div className="main-container">
        
        {/* HERO SECTION */}
        <header className="hero-section">
          <div className="hero-text">
            <p className="greeting">HELLO, I'M</p>
            <h1><span className="highlight">{profile.name}</span></h1>
            <h2 className="role-text">{profile.role}</h2>
            <p className="about-me">{profile.about}</p>
            <div className="cta-buttons">
              <a href={`mailto:${profile.email}`} className="btn-primary">Contact Me</a> 
              <a href={profile.linkedin} className="btn-outline" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </header>

        {/* TECHNICAL SKILLS BLOCK */}
        <section className="section-padding">
          <h2 className="section-title">Technical <span className="highlight">Skills</span></h2>
          <div className="skills-grid">
            {profile.skillCategories.map((cat, i) => (
              <div key={i} className="skill-card">
                <h4>{cat.title}</h4>
                <div className="skill-list">
                  {cat.list.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS BLOCK */}
        <section className="section-padding">
          <h2 className="section-title">Featured <span className="highlight">Projects</span></h2>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <div key={i} className="project-card">
                <div className="project-header">
                  <span className="p-date">{p.date}</span>
                  <h3>{p.title}</h3>
                </div>
                <p>{p.desc}</p>
                <div className="tech-tags">
                  {p.tech.map(t => <span key={t} className="t-tag">#{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;
