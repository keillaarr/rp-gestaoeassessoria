import React, { useEffect, useState } from "react";
import { FaMoneyBillWave, FaUsers, FaCogs } from "react-icons/fa";

export default function Services() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const services = [
    { title: "Assessoria Financeira", desc: "Análise completa das finanças do seu condomínio para maximizar economia.", icon: <FaMoneyBillWave /> },
    { title: "Contratação de Equipes", desc: "Montamos equipes completas de funcionários para o seu condomínio.", icon: <FaUsers /> },
    { title: "Gestão e Otimização", desc: "Estruturamos processos para que seu condomínio funcione de forma eficiente.", icon: <FaCogs /> },
  ];

  return (
    <section className="services-section">
      <h2>Nossos Serviços</h2>
      <div className="services-grid">
        {services.map((s, i) => (
          <div 
            key={i} 
            className={`service-card ${visible ? "fade-in" : ""}`} 
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <div className="icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
