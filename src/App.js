function App() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <header style={{ textAlign: 'center' }}>
        <img
  src="/profile.jpg"
  alt="Abu Saleh"
  style={{
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    margin: '20px auto',
    display: 'block'
  }}
/>

        <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>Abu Saleh (Rashed)</h1>
        <p style={{ fontSize: '18px', color: 'gray' }}>
          IT Support Specialist | Network Administrator | IT Manager
        </p>
      </header>

      <section>
        <h2 style={{ fontSize: '24px', color: '#1e40af' }}>About Me</h2>
        <p>
          IT professional with 12+ years of experience in service delivery, system and network administration,
          and technical leadership. Skilled in managing complex infrastructures and improving performance/security.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '24px', color: '#1e40af' }}>Key Skills</h2>
        <ul>
          <li>IT Support & Troubleshooting (Windows/Linux)</li>
          <li>Network Setup & Admin (Cisco, MikroTik, Dell)</li>
          <li>Server & Active Directory Management</li>
          <li>CCTV, VOIP, Call Manager Systems</li>
          <li>Firewall & Security Configuration</li>
          <li>Remote Support & Ticketing Systems</li>
        </ul>
      </section>

      <section>
        <h2 style={{ fontSize: '24px', color: '#1e40af' }}>Projects</h2>
        <ul>
          <li><strong>Health Facility IT Deployment:</strong> Setup LAN, CCTV, disaster recovery at icddr,b Teknaf</li>
          <li><strong>Enterprise Network Upgrade:</strong> Cisco ACI, Palo Alto, security for Bashundhara Group</li>
          <li><strong>Support Optimization:</strong> Ticketing & monitoring system for Banglalion</li>
        </ul>
      </section>

      <section>
        <h2 style={{ fontSize: '24px', color: '#1e40af' }}>Certifications</h2>
        <ul>
          <li>CCNA, MCSE, MCT, MTCNA</li>
          <li>Azure Fundamentals (AZ-900)</li>
        </ul>
      </section>

      <section>
        <h2 style={{ fontSize: '24px', color: '#1e40af' }}>Contact</h2>
        <p>Email: mailofrashed@gmail.com</p>
        <p>Phone: +8801717731195</p>
        <p>Location: Mirpur, Dhaka, Bangladesh</p>
      </section>
    </div>
  );
}

export default App;
