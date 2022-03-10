import { AxiosInstance } from "axios";

import defaultSkyDropxAPIConn from "./axios";
import {
  createShipmentsRequest,
  createShipmentsResponse,
  createLabelRequest,
  createLabelResponse,
} from "./skydropx.types";

const createSkyDropxAPI = (conn: AxiosInstance = defaultSkyDropxAPIConn) => {
  const createShipments = async (
    payload: createShipmentsRequest,
  ): Promise<createShipmentsResponse> => {
    const { data } = await conn.post<createShipmentsResponse>(
      "/shipments",
      payload,
    );
    return data;
  };
  const getShipments = async (): Promise<createShipmentsResponse> => {
    const { data } = await conn.get<createShipmentsResponse>("/shipments");
    return data;
  };
  const createLabel = async (
    payload: createLabelRequest,
  ): Promise<createLabelResponse> => {
    const { data } = await conn.post<createLabelResponse>("/labels", payload);
    return data;
  };
  return {
    createShipments,
    getShipments,
    createLabel,
  };
};
export default createSkyDropxAPI();

export { createSkyDropxAPI };

export * from "./skydropx.types";
