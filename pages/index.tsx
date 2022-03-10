import { GetServerSideProps } from "next/types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LabelErrorAlert from "../components/Alerts/LabelError.alert";

import ShippingTabsContainer from "../components/HomePage/ShippingTabs.container";
import {
  setTabStatus,
  setShipments,
  setShipmentsIncluded,
} from "../models/shippingSlice";

import skydropxAPI from "../utils/api/skydropx";
import { shippingData } from "../utils/helpers/types";

interface Props {
  shipments: Array<shippingData>;
  searchArray: Array<any>;
}

export default function Home({
  shipments,
  searchArray,
}: Props): React.ReactElement {
  const dispatch = useDispatch();
  const tabStatus = useSelector(
    ({ shipping }: { shipping: any }) => shipping.tabStatus,
  );
  const errorStatus = useSelector(
    ({ shipping }: { shipping: any }) => shipping.errorStatus,
  );
  const onChangeTab = (tabSlug: string) => {
    dispatch(setTabStatus(tabSlug));
  };

  useEffect(() => {
    dispatch(setShipments(shipments));
    dispatch(setShipmentsIncluded(searchArray));
  }, []);

  return (
    <div className="container">
      <LabelErrorAlert showAlert={errorStatus} />
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
                <a
                  className={`nav-link ${tabStatus === "form" ? "active" : ""}`}
                  href="#"
                  onClick={() => onChangeTab("form")}
                >
                  Crear Envio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${tabStatus === "list" ? "active" : ""}`}
                  href="#"
                  onClick={() => onChangeTab("list")}
                >
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
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data, included } = await skydropxAPI.getShipments();
  return { props: { shipments: data, searchArray: included } };
};
