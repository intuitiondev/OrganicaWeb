import React from 'react';

import useForm from "../components/contact/useForm";
import validate from "./contact/validate";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

import { makeStyles } from "@material-ui/core/styles";
import styled from "@emotion/styled";
import {
    Box,
    Grid,
} from '@material-ui/core';

export const Error = styled.p`
  margin-bottom: 0.5em;
  color: palevioletred;
  display: block;
  font-family: "Ubuntu", sans-serif;
`;

const Toast = Swal.mixin({
    toast: true,
    position: "start-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

const Contact = () => {

  const classes = useStyles();

    const submit = () => {
        let templateParams = {
          from_name: values.email,
          to_name: "dominguezmatiasadrian@gmail.com",
          subject: values.name,
          asunto: values.asunto,
          message: values.msj,
        };
        emailjs
          .send(
            "gmail",
            "template_giaqfsr",
            templateParams,
            "user_yZyxeasxVmTcG19Dy1H5F"
          )
          .then(
            function (response) {
              console.log("SUCCESS!", response.status, response.text);
              Toast.fire({
                icon: "success",
                title: "The data has been sent. Thanks a lot!",
              });
            },
            function (error) {
              console.log("FAILED...", error);
            }
          );
        reset();
      };
      const { values, handleChange, handleSubmit, errors, reset } = useForm(
        submit,
        validate
      );

    return ( 
        <Box className={classes.bgimg} pt={15}>
          <Box ml={15} mr={15}>   
              <form
                  onSubmit={(e) => handleSubmit(e)}
              >
                  <Box display="flex" justifyContent="space-between" mb={2.5}>
                      <Box flex={0.315}>
                          <input 
                              type="text"
                              placeholder="Nombre"
                              name="name"
                              value={values.name}
                              onChange={(e) => handleChange(e)}
                              style={{
                                  border: "none",
                                  borderRadius: "3px",
                                  height: "3rem",
                                  paddingLeft: "1rem",
                                  width: "100%",
                              }}
                          />
                      </Box>
                      {errors.name && <Error>{errors.name}</Error>}
                      <Box flex={0.315}>
                          <input 
                              type="text"
                              placeholder="Correo electrónico"
                              name="email"
                              value={values.email}
                              onChange={(e) => handleChange(e)}
                              style={{
                                  border: "none",
                                  borderRadius: "3px",
                                  height: "3rem",
                                  paddingLeft: "1rem",
                                  width: "100%",
                              }}
                          />
                      </Box>
                      {errors.email && <Error>{errors.email}</Error>}
                      <Box flex={0.315}>
                          <input 
                              type="text"
                              placeholder="Asunto"
                              name="asunto"
                              value={values.asunto}
                              onChange={(e) => handleChange(e)}
                              style={{
                                  border: "none",
                                  borderRadius: "3px",
                                  height: "3rem",
                                  paddingLeft: "1rem",
                                  width: "100%",
                              }}
                          />
                      </Box>
                      {errors.asunto && <Error>{errors.asunto}</Error>}
                  </Box>
                  <Box>
                      <textarea
                          placeholder="Mensaje"
                          name="msj"
                          value={values.msj}
                          onChange={(e) => handleChange(e)}
                          style={{
                              border: "none",
                              borderRadius: "3px",
                              height: "15rem",
                              paddingLeft: "1rem",
                              paddingTop: "1rem",
                              width: "100%"
                          }}
                      ></textarea>
                  </Box>
                  {errors.msj && <Error>{errors.msj}</Error>}
                  <Box display="flex" justifyContent="flex-end">
                      <button
                          type="submit"
                          className={classes.conteactButton}
                      >Send message</button>
                  </Box>
              </form>
            </Box>
        </Box>
     );
}
 
export default Contact;

const useStyles = makeStyles({
  bgimg: {
    backgroundImage: `url(images/fondo.png)`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    width: "100%",
    height: "100vh",
  },
  dataContainer: {
    width: "100%"
  },
  conteactButton: {
    backgroundColor: "rgb(99, 169, 142)",
    border: "solid 2px rgb(99, 169, 142)",
    borderRadius: "3px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "0.8rem",
    marginTop: "2rem",
    paddingTop:"8px", 
    paddingBottom: "8px",
    textAlign: "center", 
    textTransform: "uppercase",
    width: "60%",

    '&:hover': {
      color: "rgb(99, 169, 142)",
      background: "none",
    }
  },
});