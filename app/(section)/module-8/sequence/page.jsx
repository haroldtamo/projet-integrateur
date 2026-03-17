import { DownloadBlock, File } from "@/components/DownloadBlock";
import sequence from '@/public/img/module-08/sequence.png';
import Image from 'next/image';
export const metadata = {
    title: "Diagramme de séquence",
    description:
        "Montrer les interactions entre acteurs et objets au cours d’un scénario avec un diagramme de séquence : messages, ordre temporel et conditions.",
    keywords: ["UML", "diagramme de séquence", "messages", "scénario"],
    group: "notes",
};

export default function Page() {
    return (
        <main className="page">
            <section>
                <h1></h1>
                <p>
                    Le diagramme de séquence montre comment des acteurs et des objets interagissent au cours d’un scénario, dans quel
                    ordre et avec quels messages. Il met l’accent sur la chronologie des échanges.
                </p>
                <p>
                    Il est particulièrement utile pour détailler un cas d’utilisation important ou un flux technique entre plusieurs
                    composants.
                </p>
            </section>

            <section>
                <h2>Éléments obligatoires sur ton diagramme</h2>
                <ul>
                    <li>
                        Un ou plusieurs <strong>acteurs</strong> et <strong>objets</strong> (lifelines) alignés horizontalement.
                    </li>
                    <li>
                        Des <strong>messages</strong> envoyés entre acteurs/objets (flèches verticales ou diagonales), avec un nom
                        clair.
                    </li>
                    <li>
                        Un <strong>ordre temporel</strong> lisible (du haut vers le bas).
                    </li>
                    <li>
                        Au moins un <strong>retour</strong> (message de réponse) pour illustrer un aller-retour complet.
                    </li>
                    <li>
                        Si pertinent, une <strong>condition</strong> ou une boucle (par exemple avec un encadré « alt » ou « loop »
                        selon l’outil que tu utilises).
                    </li>
                </ul>
            </section>

            <section>
                <h2>Scénario recommandé pour ton projet</h2>
                <p>
                    Choisis un scénario clé (souvent le même que pour ton diagramme d’activités ou ton cas d’utilisation principal) :
                </p>
                <ul>
                    <li>Identifie les participants (utilisateur, contrôleur, services, base de données, etc.).</li>
                    <li>Décris les messages principaux (requêtes, validations, réponses).</li>
                    <li>Montre l’ordre dans lequel ces messages sont échangés.</li>
                </ul>
            </section>

            <section>
                <h2>Exemple visuel (à adapter pour ton projet)</h2>
                <p>
                     <Image src={sequence} alt="Diagramme de séquence" />
                </p>
                <p>
                    Inspire-toi de la structure et du niveau de détail attendu.
                </p>
            </section>

            <section>
                <h2>Pièges à éviter</h2>
                <ul>
                    <li>Mettre tous les détails techniques (toutes les méthodes internes) au lieu de se concentrer sur les échanges importants.</li>
                    <li>Oublier l’acteur utilisateur, alors que c’est souvent le déclencheur du scénario.</li>
                    <li>Utiliser des noms de messages trop vagues (ex. « faireTruc ») qui n’expliquent pas ce qui se passe.</li>
                </ul>
            </section>
        </main>
    );
}
