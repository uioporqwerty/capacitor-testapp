import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { MetadataConfig } from 'capacitor-metadata-config';

const MetadataConfigPage: React.FC = () => {
  const readValue = async () => {
    const { value } = await MetadataConfig.read({ key: 'myCustomKey'})
    alert(`value read is ${value}`)
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Metadata Config</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton expand="block" onClick={readValue}>
          Read value for custom key
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default MetadataConfigPage;
