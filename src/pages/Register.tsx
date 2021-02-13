import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import RegistrationForm from "../components/RegistrationForm";

const Register: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <ExploreContainer name="Registration Page" />
        
        <RegistrationForm />

      </IonContent>
    </IonPage>
  );
};

export default Register;
