import React, { useEffect, useState } from 'react';
import styles from './EspaceAdmin.module.scss';
import { fetchAllDogs } from '../../apis/admin';

export default function Chiens() {
    //ANCHOR - Constantes
    const [listDogs, setListDogs] = useState([]);
    const [feedback, setFeedback] = useState("");
    const [feedbackGood, setFeedbackGood] = useState("");

    //ANCHOR - Fonctions 

    //NOTE -- cette fonction permet de récupérer toutes les informations nécessaires à l'affichage des adhérents
    useEffect(() => {
        async function fetchData() {
            try {
                const dataBack = await fetchAllDogs();
                setListDogs(dataBack);
            } catch (error) {
                console.error('Error in component:', error);
            }
        }

        fetchData();
    }, []);

    console.log(listDogs);

    return (
        <>
            <h3>Les chiens</h3>

            <article>
                <div>
                    
                </div>
                {listDogs.map((d, index) => (
                    <div className={`${styles.container}`}>
                        <p>{d.nomChien}</p>
                    </div>
                ))}
            </article>
        </>
    )
}
