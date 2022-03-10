import { Formik, FormikProps } from "formik";
import React from "react";
import * as yup from "yup";
import { INITIAL_VALUES } from "../../utils/constants";

export type ShippingFormValues = {
  codigo_origen: string;
  codigo_destino: string;
  peso: number | undefined;
  altura: number | undefined;
  ancho: number | undefined;
  largo: number | undefined;
};

export type ShippingFormProps = {
  onSubmit: (values: ShippingFormValues) => void;
};

const formValidationSchema = yup.object().shape({
  codigo_origen: yup.string().required("Codigo Origen es requerido."),
  codigo_destino: yup.string().required("Codigo destino es requerido"),
  peso: yup
    .number()
    .required("Peso es requerido")
    .positive("Peso debe ser un entero")
    .integer(),
  altura: yup
    .number()
    .required("Altura es requerido")
    .positive("Altura debe ser un entero")
    .integer(),
  ancho: yup
    .number()
    .required("Ancho es requerido")
    .positive("Ancho debe ser un entero")
    .integer(),
  largo: yup
    .number()
    .required("Largo es requerido")
    .positive("Largo debe ser un entero")
    .integer(),
});

const ShippingForm = (
  props: FormikProps<ShippingFormValues> & Partial<ShippingFormProps>,
) => {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting,
  } = props;

  return (
    <form className="needs-validation m-3" onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-sm-6">
          <label htmlFor="firstName" className="form-label">
            Codigo postal origen
          </label>
          <input
            type="text"
            name="codigo_origen"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.codigo_origen}
            className={`form-control ${
              errors.codigo_origen ? "border-danger" : ""
            }`}
          />
          {errors.codigo_origen && (
            <div className="invalid-feedback d-block">
              {errors.codigo_origen}
            </div>
          )}
        </div>

        <div className="col-sm-6">
          <label htmlFor="lastName" className="form-label">
            Codigo postal destino
          </label>
          <input
            type="text"
            name="codigo_destino"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.codigo_destino}
            className={`form-control ${
              errors.codigo_destino ? "border-danger" : ""
            }`}
          />
          {errors.codigo_destino && (
            <div className="invalid-feedback d-block">
              {errors.codigo_destino}
            </div>
          )}
        </div>

        <div className="col-md-3">
          <label htmlFor="lastName" className="form-label">
            Peso
          </label>
          <input
            type="number"
            name="peso"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.peso}
            className={`form-control ${errors.peso ? "border-danger" : ""}`}
          />
          {errors.peso && (
            <div className="invalid-feedback d-block">{errors.peso}</div>
          )}
        </div>
        <div className="col-md-3">
          <label htmlFor="lastName" className="form-label">
            Altura
          </label>
          <input
            type="number"
            name="altura"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.altura}
            className={`form-control ${errors.altura ? "border-danger" : ""}`}
          />
          {errors.altura && (
            <div className="invalid-feedback d-block">{errors.altura}</div>
          )}
        </div>
        <div className="col-md-3">
          <label htmlFor="lastName" className="form-label">
            Ancho
          </label>
          <input
            type="number"
            name="ancho"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.ancho}
            className={`form-control ${errors.ancho ? "border-danger" : ""}`}
          />
          {errors.ancho && (
            <div className="invalid-feedback d-block">{errors.ancho}</div>
          )}
        </div>
        <div className="col-md-3">
          <label htmlFor="lastName" className="form-label">
            Largo
          </label>
          <input
            type="number"
            name="largo"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.largo}
            className={`form-control ${errors.largo ? "border-danger" : ""}`}
          />
          {errors.largo && (
            <div className="invalid-feedback d-block">{errors.largo}</div>
          )}
        </div>
      </div>
      <hr className="my-4" />
      <button
        className="w-100 btn btn-primary btn-lg"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          "Enviar"
        )}
      </button>
    </form>
  );
};
export default function shippingFormWrapper({
  onSubmit,
}: ShippingFormProps): React.ReactElement {
  return (
    <Formik
      validationSchema={formValidationSchema}
      initialValues={INITIAL_VALUES}
      onSubmit={onSubmit}
    >
      {(props: FormikProps<ShippingFormValues>) => (
        <ShippingForm
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        />
      )}
    </Formik>
  );
}
