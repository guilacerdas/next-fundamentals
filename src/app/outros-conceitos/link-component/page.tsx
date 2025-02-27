import "./styles.css";
import Link from "next/link";

export default function LinkComponentPage() {
  return (
    <div className="container">
      <h1 className="title">O Componente &lt;Link&gt; no Next.js</h1>

      <section className="section">
        <h2>Introdução</h2>
        <p>
          O componente <code>{`<Link>`}</code> do <strong>Next.js</strong> é uma
          extensão do elemento HTML <code>{`<a>`}</code> que facilita a
          navegação no lado do cliente e o pré-carregamento de rotas em
          aplicações React. Ele é essencial para criar transições de página
          rápidas e melhorar a experiência do usuário.
        </p>
      </section>

      <section className="section">
        <h2>Uso Básico</h2>
        <p>
          Para utilizar o <code>{`<Link>`}</code>, importe-o de{" "}
          <code>next/link</code> e utilize-o em seu componente:
        </p>
        <pre className="code-block">
          <code>{`import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Página Inicial</h1>
      <Link href="/sobre">Ir para Sobre</Link>
    </div>
  );
}`}</code>
        </pre>
        <p>
          No exemplo acima, ao clicar em "Ir para Sobre", o usuário é levado à
          página <code>/sobre</code> sem recarregar toda a aplicação.
        </p>
      </section>

      <section className="section">
        <h2>Propriedades do Componente &lt;Link&gt;</h2>
        <ul>
          <li>
            <strong>
              <code>href</code> (obrigatório):
            </strong>{" "}
            Define o destino do link.
            <pre className="code-block">
              <code>{`<Link href="/contato">Contato</Link>`}</code>
            </pre>
          </li>
          <li>
            <strong>
              <code>replace</code>:
            </strong>{" "}
            Substitui a entrada atual no histórico em vez de adicionar uma nova.
            <pre className="code-block">
              <code>{`<Link href="/perfil" replace>Perfil</Link>`}</code>
            </pre>
          </li>
          <li>
            <strong>
              <code>scroll</code>:
            </strong>{" "}
            Define se a página deve rolar até o topo após a navegação.
            <pre className="code-block">
              <code>{`<Link href="/#seção" scroll={false}>Ir para Seção</Link>`}</code>
            </pre>
          </li>
          <li>
            <strong>
              <code>prefetch</code>:
            </strong>{" "}
            Habilita ou desabilita o pré-carregamento da página vinculada.
            <pre className="code-block">
              <code>{`<Link href="/ajuda" prefetch={false}>Ajuda</Link>`}</code>
            </pre>
          </li>
          <li>
            <strong>
              <code>passHref</code>:
            </strong>{" "}
            Garante que a propriedade <code>href</code> seja passada para o
            elemento filho.
            <pre className="code-block">
              <code>{`<Link href="/login" passHref>
  <button>Login</button>
</Link>`}</code>
            </pre>
          </li>
          <li>
            <strong>
              <code>shallow</code>:
            </strong>{" "}
            Executa a navegação sem chamar <code>getStaticProps</code>,{" "}
            <code>getServerSideProps</code> ou <code>getInitialProps</code>{" "}
            novamente.
            <pre className="code-block">
              <code>{`<Link href={{ pathname: '/config', query: { aba: 'perfil' } }} shallow>
  Configurações
</Link>`}</code>
            </pre>
          </li>
          <li>
            <strong>
              <code>locale</code>:
            </strong>{" "}
            Define a localidade para a qual o link deve direcionar.
            <pre className="code-block">
              <code>{`<Link href="/sobre" locale="fr">À propos</Link>`}</code>
            </pre>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Vantagens e Desvantagens do Componente &lt;Link&gt;</h2>

        <h3>✅ Vantagens</h3>
        <ul>
          <li>
            <strong>Navegação Rápida no Cliente:</strong> O{" "}
            <code>{`<Link>`}</code> permite transições de página sem recarregar
            todo o site, proporcionando uma experiência mais fluida.
          </li>
          <li>
            <strong>Pré-carregamento Automático:</strong> Páginas vinculadas são
            pré-carregadas em segundo plano, resultando em tempos de
            carregamento mais rápidos.
          </li>
          <li>
            <strong>SEO Otimizado:</strong> O Next.js garante que as páginas
            sejam renderizadas no servidor, mantendo a indexação eficiente pelos
            motores de busca.
          </li>
        </ul>

        <h3>❌ Desvantagens</h3>
        <ul>
          <li>
            <strong>Comportamento Personalizado:</strong> Em casos onde é
            necessário um comportamento de link altamente personalizado, o uso
            do <code>{`<Link>`}</code> pode exigir configurações adicionais.
          </li>
          <li>
            <strong>Carregamento Desnecessário:</strong> O pré-carregamento pode
            consumir recursos desnecessários se muitos links estiverem presentes
            na página.
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Referências</h2>
        <p>
          Para mais detalhes, consulte a{" "}
          <a
            href="https://nextjs.org/docs/app/api-reference/components/link"
            target="_blank"
          >
            documentação oficial do Next.js sobre o componente &lt;Link&gt;
          </a>
          .
        </p>
      </section>
    </div>
  );
}
