import React from "react"
import { Link } from "gatsby"

import {  SEO } from "../components"
import { Button, Purchase } from "../styles/components"

const Gracias = () => (
  <>
    <SEO title="Compra exitosa" />
    <Purchase>
      <h2>Compra Exitosa</h2>
      <p>Expero que disfrutes tu swag, lucelo con or</p>
      <p>¡Te esperamos de vuelta, no pares de aprender</p>
      <span role="img" aria-label="emoji">♥</span>
      <Link to="/">
        <Button>Volver al Cátalogo</Button>
      </Link>
    </Purchase>
  </>
)

export default Gracias
