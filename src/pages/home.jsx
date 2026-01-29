
import { Link } from "react-router-dom"
import HomeCarousel from '../components/Carousel'
import BenefitCard from '../components/Card'

function Home() {
  return (
    <>
      <HomeCarousel />

      {/* HERO */}
      <section className="hero-section py-5">
        <div className="container">
          <div className="row align-items-center g-4">

            <div className="col-xl-6">
              <span className="badge text-bg-success-subtle text-success mb-2">EcoMarket</span>
              <h1 className="display-5 fw-bold mb-3">Productos naturales para tu hogar</h1>
              <p className="lead text-muted mb-4">
                Descubre alternativas ecológicas y sustentables para tu día a día.
              </p>

              <div className="d-flex gap-2">
                <Link to="/productos" className="btn btn-success btn-lg">Ver productos</Link>
                <Link to="/contacto" className="btn btn-outline-success btn-lg">Contáctanos</Link>
              </div>
            </div>

            <div className="col-xl-6">
              <img
                src="/assets/image/productos_naturales.png"
                className="img-fluid"
                alt="Productos EcoMarket"
              />
            </div>

          </div>
        </div>
      </section>

      {/* QUIENES SOMOS */}
      <section className="py-5 bg-soft">
        <div className="container">
          <h2 className="h3 mb-3">Quiénes Somos</h2>
          <p className="text-muted">
            En EcoMarket nos dedicamos a ofrecer productos sostenibles que cuidan tu hogar y el planeta.
            Creemos en el consumo responsable y en apoyar a productores locales que comparten nuestros valores.
          </p>
          <p className="text-muted">
            Nuestra selección se centra en ingredientes naturales, empaques reciclables y procesos que minimizan
            el impacto ambiental. Trabajamos continuamente para ampliar nuestra oferta y brindar alternativas
            accesibles para toda la familia.
          </p>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-5">
        <div className="container">
          <h2 className="h3 mb-4">Beneficios</h2>
          <div className="row">
            <BenefitCard
              title="Sustentable"
              text="Productos elaborados pensando en el medio ambiente y en prácticas responsables."
              icon={<span>🌱</span>}
            />

            <BenefitCard
              title="Apoyo local"
              text="Colaboramos con productores locales para potenciar la economía regional."
              icon={<span>🤝</span>}
            />

            <BenefitCard
              title="Calidad garantizada"
              text="Seleccionamos productos con estándares altos de calidad y transparencia."
              icon={<span>✅</span>}
            />

            <BenefitCard
              title="Envío rápido"
              text="Gestión de envíos eficiente para que recibas tus productos a tiempo."
              icon={<span>🚚</span>}
            />

            <BenefitCard
              title="Productos veganos"
              text="Opciones libres de ingredientes animales y con certificaciones claras."
              icon={<span>🌿</span>}
            />

            <BenefitCard
              title="Precios justos"
              text="Ofrecemos precios competitivos y transparencia en el costo de los productos."
              icon={<span>💚</span>}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
