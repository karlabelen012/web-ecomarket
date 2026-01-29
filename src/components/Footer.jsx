
function Footer() {
  return (
    <footer className="bg-dark text-light pt-5">

      <div className="container">
        <div className="row gy-4">

          {/* COLUMNA 1 */}
          <div className="col-xl-4">
            <h5 className="fw-bold">EcoMarket</h5>
            <p className="small">Productos naturales y sustentables.</p>

            {/* ICONOS REDES */}
            <div className="d-flex gap-3 mt-3">

              {/* INSTAGRAM */}
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <img src="/assets/image/instagram (1).png" alt="Instagram" style={{ width: "30px" }} />
              </a>

              {/* WHATSAPP */}
              <a href="https://wa.me/56912345678" target="_blank" rel="noreferrer">
                <img src="/assets/image/whatsapp.png" alt="WhatsApp" style={{ width: "30px" }} />
              </a>

              {/* FACEBOOK */}
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <img src="/assets/image/facebook.png" alt="Facebook" style={{ width: "30px" }} />
              </a>

              {/* TIKTOK */}
              <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
                <img src="/assets/image/tik-tok.png" alt="TikTok" style={{ width: "30px" }} />
              </a>

            </div>
          </div>

          {/* COLUMNA 2 */}
          <div className="col-xl-4">
            <h6 className="fw-bold">Contacto</h6>
            <p className="small mb-1">📍 Santiago, Chile</p>
            <p className="small mb-1">📧 contacto@ecomarket.cl</p>
            <p className="small">📞 +56 9 1234 5678</p>
          </div>

          {/* COLUMNA 3 */}
          <div className="col-xl-4">
            <h6 className="fw-bold">Suscríbete</h6>
            <p className="small">Recibe novedades.</p>

            <form className="d-flex gap-2">
              <input type="email" className="form-control form-control-sm" placeholder="Tu email" />
              <button className="btn btn-success btn-sm">Enviar</button>
            </form>
          </div>

        </div>

        <hr className="border-secondary my-4" />

        <div className="text-center small text-secondary pb-3">
          © 2026 EcoMarket. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer
