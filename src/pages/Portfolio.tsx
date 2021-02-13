// we need a portfolio page which should display all the current logged-in users' transactions and holdings. 
// this will only make calls to the backend

import { useState, useEffect } from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import PortfolioPage from "../components/PortfolioPage";

const Portfolio: React.FC = () => {

  return (
      <IonPage>

          <IonContent fullscreen>
              <PortfolioPage />
                
              <ExploreContainer name="Portfolio page" />
          </IonContent>
      </IonPage>
  );
};

export default Portfolio;