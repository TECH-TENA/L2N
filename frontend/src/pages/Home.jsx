import React from 'react'
import PayButton from '../components/PayButton'

export default function Home(){
  return (
    <div style={{ background: '#0f172a', color: '#fff', minHeight: '100vh', padding: 24 }}>
      <header style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <h1 style={{ fontSize: 22, fontWeight: 800 }}>Learn2Earn — DevOps & Cloud for Africa</h1>
        <nav>
          <a href="#courses" style={{ color:'#ddd', marginRight:12 }}>Courses</a>
          <a href="#teachers" style={{ color:'#ddd' }}>For Teachers</a>
        </nav>
      </header>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ fontSize: 34, fontWeight: 800 }}>Empowering African students</h2>
        <p style={{ color:'#cbd5e1' }}>Affordable, practical, community-first learning. Pay 2000 FRS to join the mentorship WhatsApp group.</p>
        <div style={{ marginTop: 12 }}>
          <PayButton />
        </div>
      </section>

      <section id="courses" style={{ marginTop: 36 }}>
        <h3 style={{ fontSize:20, fontWeight:700 }}>Featured courses</h3>
        <ul style={{ color:'#cbd5e1' }}>
          <li>DevOps Mastery</li>
          <li>Cloud Computing</li>
          <li>Cybersecurity</li>
        </ul>
      </section>

      <footer style={{ marginTop:48, color:'#94a3b8' }}>© Learn2Earn — Free education for African communities</footer>
    </div>
  )
}
