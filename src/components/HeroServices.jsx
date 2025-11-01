import React from "react";

export default function HeroServices() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>RP Gestão & Assessoria</h1>
        <p>Economize e otimize seu condomínio com nosso suporte especializado.</p>
        <div className="hero-buttons">
          <a href="https://wa.me/5521980938943" className="btn btn-green">WhatsApp</a>
          <a href="mailto:contato@rpgestaoeassessoria.com.br" className="btn btn-white">E-mail</a>
        </div>
      </div>
      <div className="hero-img">
        <img src="/assets/pessoas-gestao.jpg" alt="Equipe trabalhando" />
      </div>
    </section>
  );
}
