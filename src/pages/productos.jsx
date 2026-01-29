
function Productos() {
  return (
    <main>

      {/* TÍTULO DE PÁGINA */}
      <section className="py-4 bg-soft">
        <div className="container">
          <h1 className="fw-bold mb-1">Productos</h1>
          <p className="text-muted mb-0">Explora nuestro catálogo ecológico y sustentable.</p>
        </div>
      </section>

      {/* CATEGORÍAS VISUALES */}
      <section className="py-4">
        <div className="container">
          <h2 className="h5 fw-bold mb-3">Categorías</h2>

          <div className="d-flex flex-wrap gap-2">
            <a href="#catalogo" className="btn btn-outline-success btn-sm">Limpieza</a>
            <a href="#catalogo" className="btn btn-outline-success btn-sm">Cuidado personal</a>
            <a href="#catalogo" className="btn btn-outline-success btn-sm">Cocina</a>
            <a href="#catalogo" className="btn btn-outline-success btn-sm">Reutilizables</a>
            <a href="#catalogo" className="btn btn-success btn-sm">Ver todo</a>
          </div>

          <div className="row g-3 mt-3">
            <div className="col-xl-3">
              <div className="cat-box p-3 text-center">
                <img src="/assets/image/limpieza.png" className="img-fluid cat-img" alt="Categoría Limpieza" />
                <p className="mt-2 mb-0 fw-semibold">Limpieza</p>
              </div>
            </div>

            <div className="col-xl-3">
              <div className="cat-box p-3 text-center">
                <img src="/assets/image/cuidado.png" className="img-fluid cat-img" alt="Categoría Cuidado personal" />
                <p className="mt-2 mb-0 fw-semibold">Cuidado</p>
              </div>
            </div>

            <div className="col-xl-3">
              <div className="cat-box p-3 text-center">
                <img src="/assets/image/hogar.png" className="img-fluid cat-img" alt="Categoría Cocina" />
                <p className="mt-2 mb-0 fw-semibold">Cocina</p>
              </div>
            </div>

            <div className="col-xl-3">
              <div className="cat-box p-3 text-center">
                <img src="/assets/image/reutilizable.png" className="img-fluid cat-img" alt="Categoría Reutilizables" />
                <p className="mt-2 mb-0 fw-semibold">Reutilizables</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CATÁLOGO (mínimo 6 productos) */}
      <section id="catalogo" className="py-5 bg-soft">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end flex-wrap gap-2 mb-3">
            <div>
              <h2 className="fw-bold mb-1">Catálogo</h2>
              <p className="text-muted mb-0">Productos destacados de EcoMarket.</p>
            </div>

            <div style={{ maxWidth: "200px" }}>
              <select className="form-select form-select-sm">
                <option selected>Ordenar por</option>
                <option>Precio: menor a mayor</option>
                <option>Precio: mayor a menor</option>
              </select>
            </div>
          </div>

          <div className="row g-3">

            <div className="col-xl-4">
              <div className="card product-card h-100">
                <img src="/assets/image/jabon_natural.png" className="card-img-top product-img" alt="Jabón Natural" />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Jabón Natural</h5>
                  <p className="card-text text-muted small mb-2">Aroma suave · Ingredientes naturales</p>
                  <p className="fw-bold mb-3">$4.990</p>
                  <a href="/contacto" className="btn btn-success btn-sm w-100">Consultar</a>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="card product-card h-100">
                <img src="/assets/image/botella_vidrio.png" className="card-img-top product-img" alt="Botella de Vidrio" />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Botella de Vidrio</h5>
                  <p className="card-text text-muted small mb-2">Ideal para cocina · 500ml</p>
                  <p className="fw-bold mb-3">$6.990</p>
                  <a href="/contacto" className="btn btn-success btn-sm w-100">Consultar</a>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="card product-card h-100">
                <img src="/assets/image/shampoo_solido.png" className="card-img-top product-img" alt="Shampoo Sólido" />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Shampoo Sólido</h5>
                  <p className="card-text text-muted small mb-2">Sin plástico · Uso diario</p>
                  <p className="fw-bold mb-3">$7.990</p>
                  <a href="/contacto" className="btn btn-success btn-sm w-100">Consultar</a>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="card product-card h-100">
                <img src="/assets/image/limpiador_multiuso.png" className="card-img-top product-img" alt="Limpiador Multiuso" />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Limpiador Multiuso</h5>
                  <p className="card-text text-muted small mb-2">Biodegradable · Aroma cítrico</p>
                  <p className="fw-bold mb-3">$5.490</p>
                  <a href="/contacto" className="btn btn-success btn-sm w-100">Consultar</a>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="card product-card h-100">
                <img src="/assets/image/esponja_reutilizable.png" className="card-img-top product-img" alt="Pack Esponjas" />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Pack Esponjas</h5>
                  <p className="card-text text-muted small mb-2">Reutilizables · Lavables</p>
                  <p className="fw-bold mb-3">$3.990</p>
                  <a href="/contacto" className="btn btn-success btn-sm w-100">Consultar</a>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="card product-card h-100">
                <img src="/assets/image/kit_sustentable.png" className="card-img-top product-img" alt="Kit Sustentable" />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Kit Sustentable</h5>
                  <p className="card-text text-muted small mb-2">Ideal para empezar</p>
                  <p className="fw-bold mb-3">$12.990</p>
                  <a href="/contacto" className="btn btn-success btn-sm w-100">Consultar</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SUSTENTABILIDAD */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4 align-items-center">

            <div className="col-xl-6">
              <h2 className="fw-bold mb-3">Sustentabilidad</h2>
              <p className="text-muted">
                En EcoMarket promovemos productos que reduzcan el impacto ambiental y ayuden a disminuir residuos.
                Priorizamos opciones reutilizables y materiales más responsables.
              </p>
              <ul className="text-muted mb-0">
                <li>Menos plástico y más reutilización.</li>
                <li>Productos biodegradables y eco-amigables.</li>
                <li>Consumo consciente en el día a día.</li>
              </ul>
            </div>

            <div className="col-xl-6">
              <div className="info-box p-4">
                <h3 className="h5 fw-bold mb-3">¿Por qué elegir eco?</h3>
                <div className="row g-3">
                  <div className="col-xl-6">
                    <div className="p-3 bg-white rounded-4 border">
                      <p className="mb-1 fw-bold">♻️ Menos residuos</p>
                      <p className="small text-muted mb-0">Reduce tu basura mensual.</p>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="p-3 bg-white rounded-4 border">
                      <p className="mb-1 fw-bold">🌿 Ingredientes</p>
                      <p className="small text-muted mb-0">Más naturales y suaves.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}

export default Productos
