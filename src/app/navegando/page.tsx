"use client";
import "./styles.css"; // Importação do arquivo de estilos

export default function Navegacao() {
  return (
    <div className="container">
      <h1 className="title">Navegação Entre Páginas no Next.js</h1>

      <section className="section">
        <h2>1️⃣ Navegação Simples</h2>
        <p>
          Qualquer arquivo dentro de <code>/app</code> vira automaticamente uma
          página acessível pela URL.
        </p>
      </section>

      <section className="section">
        <h2>2️⃣ Navegação com `next/link`</h2>
        <p>
          Use o componente <code>&lt;Link&gt;</code> para trocar de página sem
          recarregar.
        </p>
      </section>

      <section className="section">
        <h2>3️⃣ Navegação Programática (`useRouter`)</h2>
        <p>Podemos navegar via código, sem precisar de links visíveis.</p>
      </section>

      <section className="section">
        <h2>4️⃣ Navegação com Parâmetros Dinâmicos</h2>
        <p>Criamos URLs dinâmicas como `/produto/123`.</p>
      </section>

      <section className="section">
        <h2>5️⃣ Navegação com Layout Persistente</h2>
        <p>Layouts continuam fixos entre trocas de páginas.</p>
      </section>

      <section className="section">
        <h2>6️⃣ Redirecionamento Baseado em API</h2>
        <p>
          O Next.js permite redirecionamentos automáticos baseados em lógica de
          autenticação.
        </p>
      </section>
    </div>
  );
}
