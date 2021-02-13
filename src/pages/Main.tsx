import { useState, useEffect } from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import MainPage from "../components/MainPage";

const Main: React.FC = () => {

  return (
      <IonPage>

          <IonContent fullscreen>
              <MainPage />
                
              <ExploreContainer name="Main page" />
          </IonContent>
      </IonPage>
  );
};

export default Main;