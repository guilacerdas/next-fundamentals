import "./styles.css";

export default function OutrosConceitos() {
  return (
    <div className="container">
      <h1 className="title">Outros Conceitos no Next.js</h1>
      <p>Escolha um tópico para aprender mais:</p>
      <ul>
        <li>
          <a href="/outros-conceitos/fast-refreshing">Fast Refreshing</a>
        </li>
        <li>
          <a href="/outros-conceitos/variaveis-ambiente">
            Variáveis de Ambiente
          </a>
        </li>
        <li>
          <a href="/outros-conceitos/scripts-externos">Scripts Externos</a>
        </li>
        <li>
          <a href="/outros-conceitos/use-routing">useRouter</a>
        </li>
        <li>
          <a href="/outros-conceitos/link-component">
            Componente &lt;Link /&gt;
          </a>
        </li>
      </ul>
    </div>
  );
}
