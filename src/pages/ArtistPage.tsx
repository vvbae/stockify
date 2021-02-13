import { useState, useEffect } from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Artist from "../components/Artist";

const ArtistPage: React.FC = () => {

  return (
      <IonPage>

          <IonContent fullscreen>
              <Artist />
                
              <ExploreContainer name="Artist page" />
          </IonContent>
      </IonPage>
  );
};

export default ArtistPage;