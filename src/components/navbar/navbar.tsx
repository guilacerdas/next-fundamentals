"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Ícones do react-icons
import "./styles.css"; // Importação do novo arquivo de estilos

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Ícone do menu hambúrguer (Mobile) */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX className="icon" /> : <FiMenu className="icon" />}
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="mobileMenu">
          <a href="/">Página Inicial</a>
          <a href="/navegando">Navegando entre Páginas</a>
        </div>
      )}

      {/* Menu Desktop */}
      <div className="desktopMenu">
        <a href="/">Página Inicial</a>
        <a href="/navegando">Navegando entre Páginas</a>
      </div>
    </nav>
  );
}
