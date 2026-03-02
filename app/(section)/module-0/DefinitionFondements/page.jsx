

import apprentissageprojet from '@/public/img/module-00/apprentissageprojet.png';
import Image from 'next/image';
/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Pédagogie par projet – Définition",
    description: "Présentation de la définition et des fondements de la pédagogie par projet.",
    keywords: ["pédagogie par projet", "définition", "apprentissage actif", "autonomie", "responsabilité"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Qu'est-ce que la pédagogie par projet ?</h2>
            <p>
                La pédagogie par projet est un modèle d'enseignement dans lequel l'étudiant, s'engageant dans un projet, 
                devient responsable de ses apprentissages et développe des comportements reliés à une pratique professionnelle 
                ou à une situation authentique.
            </p>
            <p style={{ fontStyle: 'italic', fontSize: '0.9em', marginTop: '0.5rem' }}>
                (Arpin et Capra, 2001)
            </p>
            <p>
                La pédagogie par projet est donc un modèle d'enseignement où le projet est l'élément fondamental et dans lequel 
                sont mises en place les conditions favorables pour donner du sens aux apprentissages, pour engager cognitivement 
                les étudiant·e·s à se questionner sur les ressources à développer et pour susciter la recherche de solutions.
            </p>
            <p style={{ fontStyle: 'italic', fontSize: '0.9em', marginTop: '0.5rem' }}>
                (Lafortune, 2010)
            </p>
            
            <Image src={apprentissageprojet} alt="Apprentissage par projet"
            width={576}
                height={249}
                quality={100}
                style={{ maxWidth: '100%', height: 'auto' }} />
            
        </section>

        <section>
            <h2>Un exemple concret : le projet Mars de la NASA</h2>
            <p>
                En 2024, la NASA a lancé un projet visant à définir le modèle architectural qui sera implanté sur Mars dans le 
                cadre de sa campagne Moon to Mars. Ce projet implique des équipes multidisciplinaires qui doivent planifier, 
                concevoir et résoudre des problèmes complexes en situation réelle : habitat lunaire, gestion de l'énergie nucléaire, 
                transport de cargo, etc.
            </p>
            <p>
                Ce type de projet illustre parfaitement les principes de la pédagogie par projet : les participants travaillent 
                sur une situation authentique, mobilisent des connaissances variées, collaborent et développent leur autonomie 
                pour atteindre un objectif concret et significatif.
            </p>
        </section>

        <section>
            <h2>Les caractéristiques de l'approche par projets</h2>
            <p>
                L'approche par projets se distingue par plusieurs caractéristiques essentielles :
            </p>
            <ul>
                <li>
                    <strong>Projet concret et significatif</strong> : Le projet doit répondre à un problème ou à une situation 
                    réelle ou réaliste, afin de donner du sens aux apprentissages.
                </li>
                <li>
                    <strong>Collaboration et encadrement</strong> : Les étudiant·e·s travaillent souvent en équipe et bénéficient 
                    d'un accompagnement de l'enseignant·e tout au long du processus.
                </li>
                <li>
                    <strong>Pédagogie active et autonome</strong> : Les étudiant·e·s sont actifs et responsables de leurs apprentissages, 
                    plutôt que de simplement recevoir de l'information de manière passive.
                </li>
                <li>
                    <strong>Flexibilité</strong> : L'approche permet d'adapter le déroulement du projet en fonction des besoins, 
                    des découvertes et des obstacles rencontrés.
                </li>
                <li>
                    <strong>Motivation et intérêt des élèves</strong> : Le projet mobilise l'intérêt des étudiant·e·s en leur 
                    donnant un rôle actif et en les engageant dans une démarche qui a du sens pour eux.
                </li>
                <li>
                    <strong>Planification et temporalité</strong> : Le projet se déroule sur une période définie et nécessite 
                    une planification rigoureuse (objectifs, échéanciers, livrables).
                </li>
                <li>
                    <strong>Évaluation de l'apprentissage</strong> : L'évaluation porte non seulement sur le produit final, 
                    mais aussi sur le processus, les compétences développées et la capacité à mobiliser les ressources appropriées.
                </li>
            </ul>
        </section>
    </>;
}
