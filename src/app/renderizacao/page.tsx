import "./styles.css"; // Importação do CSS separado

export default function Renderizacao() {
  return (
    <div className="container">
      <h1 className="title">
        Renderização no Next.js: Client-Side, Server-Side e Static Site
        Generation
      </h1>

      <section className="section">
        <h2>1️⃣ O Que é Client-Side Rendering (CSR)?</h2>
        <p>
          No CSR, o navegador recebe um HTML básico e preenche o conteúdo usando
          JavaScript. Isso é ideal para aplicativos interativos.
        </p>
        <p>
          <strong>Exemplo:</strong> Um painel de controle que carrega dados após
          a página ser exibida.
        </p>

        <pre className="code-block">
          <code>{`"use client";
import { useState, useEffect } from "react";

export default function CSRPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return <div>{data ? <h1>{data.title}</h1> : <p>Carregando...</p>}</div>;
}`}</code>
        </pre>
      </section>

      <section className="section">
        <h2>2️⃣ O Que é Server-Side Rendering (SSR)?</h2>
        <p>
          No SSR, o servidor processa a página e envia um HTML pronto para o
          navegador. Isso melhora o SEO e acelera o carregamento inicial.
        </p>
        <p>
          <strong>Exemplo:</strong> Um site de notícias que precisa exibir
          conteúdo atualizado ao carregar.
        </p>

        <pre className="code-block">
          <code>{`export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();

  return { props: { data } };
}

export default function SSRPage({ data }) {
  return <h1>{data.title}</h1>;
}`}</code>
        </pre>
      </section>

      <section className="section">
        <h2>3️⃣ O Que é Static Site Generation (SSG)?</h2>
        <p>
          No SSG, a página é gerada no momento do build e servida como um HTML
          estático. Isso melhora a performance e reduz a carga no servidor.
        </p>
        <p>
          <strong>Exemplo:</strong> Um blog que gera as postagens no momento da
          build e as serve como páginas estáticas.
        </p>

        <pre className="code-block">
          <code>{`  
  export default function SSGPage({ data }) {
    return <h1>{data.title}</h1>;
  
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();
  
  return { props: { data } };
  }
`}</code>
        </pre>
      </section>

      <section className="section">
        <h2>4️⃣ Comparação entre CSR, SSR e SSG</h2>
        <p>
          <strong>CSR (Client-Side Rendering):</strong> O JavaScript do
          navegador busca os dados e os renderiza dinamicamente.
        </p>
        <p>
          <strong>SSR (Server-Side Rendering):</strong> O servidor processa e
          envia o HTML pronto a cada requisição.
        </p>
        <p>
          <strong>SSG (Static Site Generation):</strong> O HTML é gerado no
          momento do build e servido de forma estática.
        </p>
      </section>
    </div>
  );
}
