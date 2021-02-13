import { useState, useEffect } from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import LoginForm from "../components/LoginForm";

const Login: React.FC = () => {

  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();

  return (
      <IonPage>

          <IonContent fullscreen>
              <IonHeader collapse="condense">
                  <IonToolbar>
                      <IonTitle size="large">Login</IonTitle>
                  </IonToolbar>
              </IonHeader>
              <LoginForm />

              <ExploreContainer name="Login page" />
          </IonContent>
      </IonPage>
  );
};

export default Login;
