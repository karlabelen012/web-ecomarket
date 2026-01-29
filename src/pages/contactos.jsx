
function Contacto() {
  return (
    <main>

      {/* TÍTULO DE PÁGINA */}
      <section className="py-4 bg-soft">
        <div className="container">
          <h1 className="fw-bold mb-1">Contacto</h1>
          <p className="text-muted mb-0">¿Tienes dudas? Escríbenos y te responderemos pronto.</p>
        </div>
      </section>

      {/* FORMULARIO + INFO */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">

            <div className="col-xl-7">
              <div className="p-4 bg-white rounded-4 border">
                <h2 className="h5 fw-bold mb-3">Envíanos un mensaje</h2>

                {/* FORMULARIO */}
                <form action="#" method="post">

                  <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre completo *</label>
                    <input type="text" className="form-control" id="nombre" name="nombre"
                           placeholder="Ej: Karla Belén" required minLength="3" maxLength="40" />
                    <div className="form-text">Mínimo 3 caracteres.</div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico *</label>
                    <input type="email" className="form-control" id="email" name="email"
                           placeholder="Ej: correo@gmail.com" required />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">Teléfono *</label>
                    <input type="tel" className="form-control" id="telefono" name="telefono"
                           placeholder="Ej: 912345678" required pattern="[0-9]{9}" />
                    <div className="form-text">Debe tener 9 números (ej: 912345678).</div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="asunto" className="form-label">Asunto *</label>
                    <select className="form-select" id="asunto" name="asunto" required>
                      <option value="" disabled>Selecciona una opción</option>
                      <option value="consulta">Consulta</option>
                      <option value="pedido">Pedido</option>
                      <option value="sugerencia">Sugerencia</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="mensaje" className="form-label">Mensaje *</label>
                    <textarea className="form-control" id="mensaje" name="mensaje" rows="5"
                              placeholder="Escribe tu mensaje..." required minLength="10" maxLength="300"></textarea>
                    <div className="form-text">Mínimo 10 caracteres. Máximo 300.</div>
                  </div>

                  <button type="submit" className="btn btn-success px-4">Enviar mensaje</button>
                </form>

              </div>
            </div>

            {/* INFO */}
            <div className="col-xl-5">
              <div className="p-4 bg-soft rounded-4 border h-100">
                <h2 className="h5 fw-bold mb-3">Información de contacto</h2>

                <div className="mb-3">
                  <p className="mb-1 fw-semibold">📍 Dirección</p>
                  <p className="text-muted mb-0">Santiago, Chile</p>
                </div>

                <div className="mb-3">
                  <p className="mb-1 fw-semibold">📧 Correo</p>
                  <p className="text-muted mb-0">contacto@ecomarket.cl</p>
                </div>

                <div className="mb-4">
                  <p className="mb-1 fw-semibold">📞 Teléfono</p>
                  <p className="text-muted mb-0">+56 9 1234 5678</p>
                </div>

                <hr />

                <h3 className="h6 fw-bold mt-3">Horarios</h3>
                <ul className="text-muted mb-0">
                  <li>Lunes a Viernes: 09:00 - 18:00</li>
                  <li>Sábado: 10:00 - 14:00</li>
                  <li>Domingo: Cerrado</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}

export default Contacto
