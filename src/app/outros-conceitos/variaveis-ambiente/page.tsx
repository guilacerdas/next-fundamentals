import "./styles.css";

export default function VariaveisAmbiente() {
  return (
    <div className="container">
      <h1 className="title">Variáveis de Ambiente no Next.js</h1>

      <section className="section">
        <h2>Introdução</h2>
        <p>
          Variáveis de ambiente são utilizadas para configurar valores que podem
          variar entre diferentes ambientes (desenvolvimento, teste, produção).
          No Next.js, elas permitem que você defina valores que podem ser
          acessados tanto no servidor quanto no cliente, dependendo da sua
          configuração.
        </p>
      </section>

      <section className="section">
        <h2>Configuração</h2>
        <p>
          Para definir variáveis de ambiente no Next.js, você pode criar um
          arquivo <code>.env.local</code> na raiz do seu projeto:
        </p>
        <pre className="code-block">
          <code>
            {`# .env.local
DATABASE_URL=your_database_url
NEXT_PUBLIC_API_URL=your_api_url`}
          </code>
        </pre>
        <p>
          Variáveis que começam com <code>NEXT_PUBLIC_</code> estarão
          disponíveis tanto no servidor quanto no cliente. As demais estarão
          disponíveis apenas no servidor.
        </p>
      </section>

      <section className="section">
        <h2>Acessando Variáveis de Ambiente</h2>
        <p>
          Para acessar uma variável de ambiente, você pode usar{" "}
          <code>process.env</code>:
        </p>
        <pre className="code-block">
          <code>
            {`// Exemplo de uso no servidor
const dbUrl = process.env.DATABASE_URL;

// Exemplo de uso no cliente
const apiUrl = process.env.NEXT_PUBLIC_API_URL;`}
          </code>
        </pre>
        <p>
          Lembre-se de que apenas variáveis prefixadas com{" "}
          <code>NEXT_PUBLIC_</code> estarão disponíveis no código que roda no
          cliente.
        </p>
      </section>

      <section className="section">
        <h2>Considerações de Segurança</h2>
        <p>
          É crucial não expor informações sensíveis no cliente. Portanto, evite
          prefixar variáveis sensíveis com <code>NEXT_PUBLIC_</code>. Além
          disso, certifique-se de que seus arquivos de configuração (
          <code>.env.local</code>, <code>.env.production</code>, etc.) não sejam
          incluídos no controle de versão, adicionando-os ao seu{" "}
          <code>.gitignore</code>.
        </p>
      </section>
    </div>
  );
}
