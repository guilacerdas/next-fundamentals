import "./styles.css";
import Script from "next/script";

export default function ScriptsExternos() {
  return (
    <div className="container">
      <h1 className="title">Scripts Externos no Next.js</h1>

      <section className="section">
        <h2>Introdução</h2>
        <p>
          O <strong>Next.js</strong> oferece o componente{" "}
          <code>{`<Script>`}</code> para otimizar o carregamento de scripts
          externos em sua aplicação. Este componente permite controlar quando e
          como os scripts são carregados, melhorando o desempenho e a
          experiência do usuário.
        </p>
      </section>

      <section className="section">
        <h2>Estratégias de Carregamento</h2>
        <p>
          O componente <code>{`<Script>`}</code> possui a propriedade{" "}
          <code>strategy</code>, que define quando o script será carregado. As
          opções incluem:
        </p>
        <ul>
          <li>
            <strong>
              <code>beforeInteractive</code>:
            </strong>{" "}
            Carrega o script antes de qualquer código do Next.js e antes da
            hidratação da página. Ideal para scripts críticos.
          </li>
          <li>
            <strong>
              <code>afterInteractive</code> (padrão):
            </strong>{" "}
            Carrega o script após a hidratação inicial da página. Útil para
            scripts que não são essenciais para a renderização inicial.
          </li>
          <li>
            <strong>
              <code>lazyOnload</code>:
            </strong>{" "}
            Carrega o script durante o tempo ocioso do navegador, minimizando o
            impacto no desempenho.
          </li>
          <li>
            <strong>
              <code>worker</code> (experimental):
            </strong>{" "}
            Carrega o script em um Web Worker, permitindo que scripts de
            terceiros sejam executados em segundo plano, liberando a thread
            principal.
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>
          Uso do Componente <code>{`<Script>`}</code>
        </h2>
        <p>
          Para incluir um script externo, importe o componente e defina a URL e
          a estratégia desejada:
        </p>
        <pre className="code-block">
          <code>{`import Script from 'next/script';

export default function MyPage() {
  return (
    <>
      <Script
        src="https://example.com/script.js"
        strategy="afterInteractive"
        onLoad={() => console.log('Script carregado!')}
      />
      {/* Conteúdo da página */}
    </>
  );
}`}</code>
        </pre>
        <p>
          No exemplo acima, o script será carregado após a hidratação inicial da
          página. A função <code>onLoad</code> é executada assim que o script é
          carregado com sucesso.
        </p>
      </section>

      <section className="section">
        <h2>Scripts Inline</h2>
        <p>
          O componente <code>{`<Script>`}</code> também suporta scripts inline.
          Nesses casos, é obrigatório fornecer um <code>id</code> para o script:
        </p>
        <pre className="code-block">
          <code>{`import Script from 'next/script';

export default function MyPage() {
  return (
    <>
      <Script id="show-banner">
        { \`document.getElementById('banner').classList.remove('hidden');\` }
      </Script>
      {/* Conteúdo da página */}
    </>
  );
}`}</code>
        </pre>
        <p>
          O <code>id</code> garante que o Next.js possa rastrear e otimizar o
          script corretamente.
        </p>
      </section>

      <section className="section">
        <h2>Considerações de Segurança</h2>
        <p>
          Ao utilizar scripts inline, é importante estar ciente de possíveis
          vulnerabilidades de segurança, como ataques de{" "}
          <strong>Cross-Site Scripting (XSS)</strong>. Certifique-se de que o
          conteúdo do script seja confiável e, sempre que possível, evite a
          inserção de dados não sanitizados.
        </p>
      </section>

      <section className="section">
        <h2>Referências</h2>
        <p>
          Para mais informações, consulte a{" "}
          <a
            href="https://nextjs.org/docs/pages/api-reference/components/script"
            target="_blank"
          >
            documentação oficial do Next.js sobre o componente{" "}
            <code>{`<Script>`}</code>
          </a>
          .
        </p>
      </section>
    </div>
  );
}
