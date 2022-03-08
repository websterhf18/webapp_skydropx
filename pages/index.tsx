import type { NextPage } from "next";
import ShippingTabsContainer from "../components/HomePage/ShippingTabs.container";

const Home: NextPage = () => {
  return (
    <div className="container">
      <main>
        <div className="py-5 text-center">
          <h2>Calcular envio</h2>
          <p className="lead">
            Desarrollar una aplicación que permita al usuario escoger la opción
            de servicio de paquetería de su preferencia para enviar un paquete.
          </p>
        </div>
        <div className="row">
          <div className="col-md-10 m-auto">
            <ul className="nav nav-tabs nav-fill">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Crear Envio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Envios
                </a>
              </li>
            </ul>
          </div>
        </div>
        <ShippingTabsContainer />
      </main>
    </div>
  );
};

export default Home;
