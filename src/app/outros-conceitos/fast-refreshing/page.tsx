import "./styles.css";

export default function FastRefreshing() {
  return (
    <div className="container">
      <h1 className="title">Fast Refreshing no Next.js</h1>

      <section className="section">
        <h2>Visão Geral</h2>
        <p>
          O Fast Refresh é um recurso do Next.js que permite a atualização
          instantânea de componentes React durante o desenvolvimento,
          preservando o estado local sempre que possível. Isso melhora
          significativamente a experiência do desenvolvedor, tornando o processo
          de desenvolvimento mais eficiente.
        </p>
      </section>

      <section className="section">
        <h2>Como Funciona</h2>
        <p>O Fast Refresh combina duas técnicas principais:</p>
        <ul>
          <li>
            <strong>Hot Module Replacement (HMR):</strong> Substitui módulos
            atualizados sem recarregar a página inteira.
          </li>
          <li>
            <strong>Preservação de Estado:</strong> Mantém o estado dos
            componentes sempre que possível, evitando a perda de dados durante
            as atualizações.
          </li>
        </ul>
        <p>
          Quando uma alteração é detectada, o Next.js tenta atualizar apenas o
          módulo modificado. Se a atualização puder ser feita de forma segura, o
          estado do componente é preservado. Caso contrário, o Next.js realiza
          um recarregamento completo para garantir a consistência.
        </p>
      </section>

      <section className="section">
        <h2>Considerações Técnicas</h2>
        <p>
          Para garantir o funcionamento adequado do Fast Refresh, é importante
          seguir algumas práticas:
        </p>
        <ul>
          <li>Evitar mutações diretas de objetos de estado.</li>
          <li>Garantir que os componentes sejam funções puras.</li>
          <li>
            Evitar efeitos colaterais fora do escopo de hooks como{" "}
            <code>useEffect</code>.
          </li>
        </ul>
        <p>
          Essas práticas ajudam o Next.js a identificar corretamente as
          dependências e a aplicar o Fast Refresh de maneira eficaz.
        </p>
      </section>
    </div>
  );
}
