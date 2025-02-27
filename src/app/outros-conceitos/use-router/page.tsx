"use client";
import "./styles.css";
import { useRouter } from "next/navigation";

export default function UseRouterPage() {
  const router = useRouter();

  return (
    <div className="container">
      <h1 className="title">useRouter no Next.js</h1>

      <section className="section">
        <h2>Introdução</h2>
        <p>
          O <strong>Next.js</strong> oferece o hook <code>useRouter</code> para
          facilitar a navegação programática e o acesso às informações de
          roteamento dentro de componentes funcionais. Esse hook é especialmente
          útil para controlar a navegação em resposta a eventos ou acessar
          detalhes específicos da rota atual.
        </p>
      </section>

      <section className="section">
        <h2>Importação e Uso Básico</h2>
        <p>
          Para utilizar o <code>useRouter</code>, importe-o de{" "}
          <code>next/navigation</code> e invoque-o dentro do seu componente
          funcional:
        </p>
        <pre className="code-block">
          <code>{`"use client";
import { useRouter } from "next/navigation";

export default function MeuComponente() {
  const router = useRouter();

  const navegarParaDashboard = () => {
    router.push('/dashboard');
  };

  return (
    <button onClick={navegarParaDashboard}>
      Ir para Dashboard
    </button>
  );
}`}</code>
        </pre>
        <p>
          No exemplo acima, ao clicar no botão, o usuário é redirecionado para a
          rota <code>/dashboard</code>.
        </p>
      </section>

      <section className="section">
        <h2>
          Métodos Disponíveis no <code>useRouter</code>
        </h2>
        <ul>
          <li>
            <strong>
              <code>push(url: string)</code>:
            </strong>{" "}
            Navega para a URL especificada.
            <pre className="code-block">
              <code>router.push('/sobre');</code>
            </pre>
          </li>
          <li>
            <strong>
              <code>replace(url: string)</code>:
            </strong>{" "}
            Substitui a URL atual pela especificada, sem adicionar uma nova
            entrada no histórico do navegador.
            <pre className="code-block">
              <code>router.replace('/contato');</code>
            </pre>
          </li>
          <li>
            <strong>
              <code>back()</code>:
            </strong>{" "}
            Navega para a página anterior no histórico.
            <pre className="code-block">
              <code>router.back();</code>
            </pre>
          </li>
          <li>
            <strong>
              <code>forward()</code>:
            </strong>{" "}
            Navega para a próxima página no histórico.
            <pre className="code-block">
              <code>router.forward();</code>
            </pre>
          </li>
          <li>
            <strong>
              <code>refresh()</code>:
            </strong>{" "}
            Recarrega a página atual.
            <pre className="code-block">
              <code>router.refresh();</code>
            </pre>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Acessando Informações da Rota</h2>
        <ul>
          <li>
            <strong>
              <code>pathname</code>:
            </strong>{" "}
            Retorna o caminho da URL atual.
            <pre className="code-block">
              <code>
                const pathname = router.pathname; console.log(pathname); //
                Exemplo: '/produtos'
              </code>
            </pre>
          </li>
          <li>
            <strong>
              <code>query</code>:
            </strong>{" "}
            Objeto contendo os parâmetros da query string.
            <pre className="code-block">
              <code>
                const {`id`} = router.query; console.log(id); // Exemplo: '123'
                se a URL for '/produtos?id=123'
              </code>
            </pre>
          </li>
          <li>
            <strong>
              <code>asPath</code>:
            </strong>{" "}
            Retorna a URL atual com a query string, exatamente como aparece no
            navegador.
            <pre className="code-block">
              <code>
                const asPath = router.asPath; console.log(asPath); // Exemplo:
                '/produtos?id=123'
              </code>
            </pre>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Considerações Importantes</h2>
        <ul>
          <li>
            <strong>Componentes de Classe:</strong> O <code>useRouter</code> é
            um hook do React e, portanto, só pode ser utilizado em componentes
            funcionais. Para componentes de classe, recomenda-se o uso do HOC{" "}
            <code>withRouter</code>.
          </li>
          <li>
            <strong>Eventos de Roteamento:</strong> Diferentemente da versão
            anterior (<code>next/router</code>), o <code>useRouter</code>{" "}
            importado de <code>next/navigation</code>
            não expõe eventos de roteamento, como <code>
              routeChangeStart
            </code>{" "}
            ou <code>routeChangeComplete</code>. Para funcionalidades que
            dependem desses eventos, pode ser necessário implementar soluções
            alternativas.
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Referências</h2>
        <p>
          Para mais detalhes e informações atualizadas, consulte a{" "}
          <a
            href="https://nextjs.org/docs/app/api-reference/functions/use-router"
            target="_blank"
          >
            documentação oficial do Next.js sobre o <code>useRouter</code>
          </a>
          .
        </p>
      </section>
    </div>
  );
}
