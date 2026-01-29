
function Nosotros() {
  return (
    <main>

      {/* TÍTULO DE PÁGINA */}
      <section className="py-4 bg-soft">
        <div className="container">
          <h1 className="fw-bold mb-1">Nosotros</h1>
          <p className="text-muted mb-0">Conoce más sobre EcoMarket y nuestro compromiso.</p>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4 align-items-center">

            <div className="col-lg-6">
              <h2 className="fw-bold mb-3">¿Quiénes somos?</h2>
              <p className="text-muted">
                EcoMarket es un emprendimiento enfocado en la venta de productos naturales y sustentables,
                pensado para personas que buscan alternativas responsables para su hogar y cuidado personal.
              </p>
              <p className="text-muted mb-0">
                Nuestro objetivo es facilitar el acceso a productos ecológicos, fomentando un consumo
                consciente que contribuya al cuidado del planeta y al bienestar de las personas.
              </p>
            </div>

            <div className="col-lg-6">
              {/* Imagen referencial */}
              <div className="about-card p-4" style={{ background: 'linear-gradient(135deg, #A8C686 0%, #4F6F52 100%)', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', color: 'white' }}>
                  <h3 style={{ fontSize: '48px', marginBottom: '10px' }}>🌱</h3>
                  <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Equipo EcoMarket</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MISIÓN - VISIÓN - VALORES */}
      <section className="py-5 bg-soft">
        <div className="container">

          <div className="row g-4">

            {/* MISIÓN */}
            <div className="col-md-4">
              <div className="card benefit-card h-100">
                <div className="card-body">
                  <h3 className="h5 fw-bold mb-2">Nuestra misión</h3>
                  <p className="text-muted mb-0">
                    Ofrecer productos naturales y sustentables que ayuden a reducir el impacto ambiental
                    y promuevan hábitos de consumo responsables.
                  </p>
                </div>
              </div>
            </div>

            {/* VISIÓN */}
            <div className="col-md-4">
              <div className="card benefit-card h-100">
                <div className="card-body">
                  <h3 className="h5 fw-bold mb-2">Nuestra visión</h3>
                  <p className="text-muted mb-0">
                    Ser una tienda de referencia en productos ecológicos, reconocida por su compromiso
                    con la sustentabilidad y la calidad.
                  </p>
                </div>
              </div>
            </div>

            {/* VALORES */}
            <div className="col-md-4">
              <div className="card benefit-card h-100">
                <div className="card-body">
                  <h3 className="h5 fw-bold mb-2">Nuestros valores</h3>
                  <ul className="text-muted mb-0">
                    <li>Respeto por el medio ambiente</li>
                    <li>Consumo consciente</li>
                    <li>Responsabilidad social</li>
                    <li>Compromiso con la calidad</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  )
}

export default Nosotros
