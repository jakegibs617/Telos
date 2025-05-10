import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonRange,
  IonSelect,
  IonSelectOption,
  IonButton,
} from '@ionic/react';
import axios from 'axios';

const Home: React.FC = () => {
  const [formData, setFormData] = useState({
    role: '',
    location: '',
    distance: 50,
    jobType: 'remote',
  });

  const submitPreferences = async () => {
    try {
      const payload = {
        ...formData,
        weights,
      };
      await axios.post('http://127.0.0.1:8000/api/preferences', payload);

      // Now fetch jobs
      const jobResponse = await axios.get(
        'http://127.0.0.1:8000/api/jobs/fetch?source=airtable'
      );
      setJobs(jobResponse.data.jobs);
    } catch (error) {
      console.error('Submission failed', error);
    }
  };

  const [weights, setWeights] = useState({
    fortune500: 5,
    financialBacking: 5,
    glassdoor: 5,
    sentiment: 5,
    pay: 5,
  });

  const [jobs, setJobs] = useState<any[]>([]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>🎯 Telos Job Preferences</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonItem>
          <IonLabel position='floating'>Desired Role / Skills</IonLabel>
          <IonInput
            value={formData.role}
            onIonChange={(e) =>
              setFormData({ ...formData, role: e.detail.value! })
            }
          />
        </IonItem>
        <IonItem>
          <IonLabel>Fortune 500 Importance: {weights.fortune500}</IonLabel>
          <IonRange
            min={0}
            max={10}
            step={1}
            value={weights.fortune500}
            onIonChange={(e) =>
              setWeights({ ...weights, fortune500: e.detail.value as number })
            }
          />
        </IonItem>

        <IonItem>
          <IonLabel>Financial Backing: {weights.financialBacking}</IonLabel>
          <IonRange
            min={0}
            max={10}
            step={1}
            value={weights.financialBacking}
            onIonChange={(e) =>
              setWeights({
                ...weights,
                financialBacking: e.detail.value as number,
              })
            }
          />
        </IonItem>

        <IonItem>
          <IonLabel>Glassdoor Reviews: {weights.glassdoor}</IonLabel>
          <IonRange
            min={0}
            max={10}
            step={1}
            value={weights.glassdoor}
            onIonChange={(e) =>
              setWeights({ ...weights, glassdoor: e.detail.value as number })
            }
          />
        </IonItem>

        <IonItem>
          <IonLabel>Public Sentiment: {weights.sentiment}</IonLabel>
          <IonRange
            min={0}
            max={10}
            step={1}
            value={weights.sentiment}
            onIonChange={(e) =>
              setWeights({ ...weights, sentiment: e.detail.value as number })
            }
          />
        </IonItem>

        <IonItem>
          <IonLabel>Anticipated Pay: {weights.pay}</IonLabel>
          <IonRange
            min={0}
            max={10}
            step={1}
            value={weights.pay}
            onIonChange={(e) =>
              setWeights({ ...weights, pay: e.detail.value as number })
            }
          />
        </IonItem>

        <IonItem>
          <IonLabel position='floating'>City or ZIP</IonLabel>
          <IonInput
            value={formData.location}
            onIonChange={(e) =>
              setFormData({ ...formData, location: e.detail.value! })
            }
          />
        </IonItem>

        <IonItem>
          <IonLabel>Distance Radius: {formData.distance} mi</IonLabel>
          <IonRange
            min={5}
            max={100}
            step={5}
            snaps={true}
            value={formData.distance}
            onIonChange={(e) =>
              setFormData({ ...formData, distance: e.detail.value as number })
            }
          />
        </IonItem>

        <IonItem>
          <IonLabel>Job Type</IonLabel>
          <IonSelect
            value={formData.jobType}
            onIonChange={(e) =>
              setFormData({ ...formData, jobType: e.detail.value })
            }
          >
            <IonSelectOption value='remote'>Remote</IonSelectOption>
            <IonSelectOption value='hybrid'>Hybrid</IonSelectOption>
            <IonSelectOption value='onsite'>Onsite</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonButton
          expand='block'
          className='ion-margin-top'
          onClick={submitPreferences}
        >
          Continue →
        </IonButton>
        {jobs.length > 0 && (
          <>
            <h2>🔍 Matching Jobs</h2>
            {jobs.map((job, index) => (
              <IonItem key={index} href={job.url} target='_blank'>
                <IonLabel>
                  <h2>{job.title}</h2>
                  <p>
                    {job.company} — {job.location}
                  </p>
                  <p>
                    <small>
                      Posted: {new Date(job.published).toLocaleDateString()}
                    </small>
                  </p>
                </IonLabel>
              </IonItem>
            ))}
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
