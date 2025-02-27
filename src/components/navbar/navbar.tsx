"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Ícones do react-icons
import "./styles.css"; // Importação do CSS separado

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Ícone do menu hambúrguer (Mobile) */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX className="icon" /> : <FiMenu className="icon" />}
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="mobileMenu">
          <Link href="/">Home</Link>
          <Link href="/navegando">Navegando entre Páginas</Link>
          <Link href="/renderizacao">Renderização</Link>
          <div className="submenu">
            <button
              className="submenu-btn"
              onClick={() => setSubmenuOpen(!submenuOpen)}
            >
              Outros Conceitos
            </button>
            {submenuOpen && (
              <div className="submenu-content">
                <Link href="/outros-conceitos/fast-refreshing">
                  Fast Refreshing
                </Link>
                <Link href="/outros-conceitos/variaveis-ambiente">
                  Variáveis de Ambiente
                </Link>
                <Link href="/outros-conceitos/scripts-externos">
                  Scripts Externos
                </Link>
                <Link href="/outros-conceitos/use-router">useRouter</Link>
                <Link href="/outros-conceitos/link-component">
                  Componente &lt;Link /&gt;
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Menu Desktop */}
      <div className="desktopMenu">
        <Link href="/">Home</Link>
        <Link href="/navegando">Navegando entre Páginas</Link>
        <Link href="/renderizacao">Renderização</Link>
        <div className="submenu">
          <button
            className="submenu-btn"
            onClick={() => setSubmenuOpen(!submenuOpen)}
          >
            Outros Conceitos
          </button>
          {submenuOpen && (
            <div
              className="submenu-content"
              onClick={() => setSubmenuOpen(!submenuOpen)}
              onMouseLeave={() => setSubmenuOpen(!submenuOpen)}
            >
              <Link href="/outros-conceitos/fast-refreshing">
                Fast Refreshing
              </Link>
              <Link href="/outros-conceitos/variaveis-ambiente">
                Variáveis de Ambiente
              </Link>
              <Link href="/outros-conceitos/scripts-externos">
                Scripts Externos
              </Link>
              <Link href="/outros-conceitos/use-router">useRouter</Link>
              <Link href="/outros-conceitos/link-component">
                Componente &lt;Link /&gt;
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
