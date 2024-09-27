import React from "react";
import { useLocation } from "react-router-dom";
import MesAnnonces from '../MesAnnonces/MesAnnonces';
import "./MesAnnoncesPage.css"
import NavBarEnt from '../NavBarEnt/NavBarEnt';
const MesAnnoncesPage = () => {
  const location = useLocation();
  const connectedEmployerEmail = location.state?.connectedEmployerEmail; // Récupérer l'email de l'employeur

  // Ajoute un console.log pour déboguer
  console.log("Email de l'employeur connecté : ", connectedEmployerEmail);

  return (
    <div>
      <NavBarEnt />
      <h1>Mes Annonces</h1>
      <MesAnnonces connectedEmployerEmail={connectedEmployerEmail} />
    </div>
  );
};
export default MesAnnoncesPage;