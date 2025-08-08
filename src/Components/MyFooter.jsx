function MyFooter() {
  return (
    <footer className="bg-dark py-4 px-3">
      <p className="text-light mb-2">Italia | English (UK)</p>

      <p className="text-light mb-4">
        Copyright &amp; 2024 Apple Inc. Tutti i diritti riservati
      </p>

      <div
        className="d-flex flex-wrap justify-content-center gap-3"
        style={{ rowGap: "1rem" }}
      >
        <a href="#" className="text-decoration-none text-light px-2">
          Condizioni dei Servizi Internet
        </a>
        <a href="#" className="text-decoration-none text-light px-2">
          Apple Music e Privacy
        </a>
        <a href="#" className="text-decoration-none text-light px-2">
          Avviso sui Cookie
        </a>
        <a href="#" className="text-decoration-none text-light px-2">
          Supporto
        </a>
        <a href="#" className="text-decoration-none text-light px-2">
          Feedback
        </a>
      </div>
    </footer>
  );
}

export default MyFooter;
