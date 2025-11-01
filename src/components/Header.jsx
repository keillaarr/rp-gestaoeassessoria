import React from "react";

export default function Header() {
  const navLinks = ["Sobre", "Serviços", "Contato"];

  return (
    <header className="header">
      <h1 className="logo">RP Gestão</h1>
      <nav className="nav">
        {navLinks.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>
        ))}
      </nav>
    </header>
  );
}
