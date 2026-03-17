import { DownloadBlock, File } from "@/components/DownloadBlock";
import activite from '@/public/img/module-08/activite.png';
import Image from 'next/image';
export const metadata = {
    title: "Diagramme d’activités",
    description:
        "Représenter un scénario ou un processus métier avec un diagramme d’activités : flux, décisions, parallélisme, début et fin.",
    keywords: ["UML", "diagramme d’activités", "flux", "processus"],
    group: "notes",
};

export default function Page() {
    return (
        <main className="page">
            <section>
                <h1></h1>
                <p>
                    Le diagramme d’activités permet de représenter le déroulement d’un scénario ou d’un processus, étape par étape.
                    C’est une sorte de « flux d’actions » qui montre les décisions, les boucles et éventuellement les traitements en
                    parallèle.
                </p>
                <p>
                    Il est particulièrement utile pour décrire un parcours utilisateur important ou un processus complexe côté système.
                </p>
            </section>

            <section>
                <h2>Éléments obligatoires sur ton diagramme</h2>
                <ul>
                    <li>
                        Un nœud de <strong>début</strong> (point noir) et au moins un nœud de <strong>fin</strong>.
                    </li>
                    <li>
                        Des <strong>activités</strong> (actions) clairement nommées.
                    </li>
                    <li>
                        Des <strong>flèches de transition</strong> qui indiquent l’ordre d’exécution.
                    </li>
                    <li>
                        Au moins un <strong>nœud de décision</strong> (losange) avec des conditions sur les flèches sortantes.
                    </li>
                    <li>
                        Si ton scénario s’y prête, un exemple de <strong>parallélisme</strong> (fork/join) pour montrer deux
                        activités qui peuvent être réalisées en même temps.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Scénario recommandé pour ton projet</h2>
                <p>
                    Choisis un scénario significatif de ton application (par exemple « Passer une commande », « Créer un compte » ou
                    « Réserver une ressource ») et représente-le avec un diagramme d’activités.
                </p>
                <ul>
                    <li>Montre les principales étapes côté utilisateur et/ou côté système.</li>
                    <li>Intègre au moins une décision (succès/échec, choix d’option, etc.).</li>
                    <li>Si pertinent, illustre une partie qui peut se faire en parallèle (par exemple vérification de stock et calcul de frais).</li>
                </ul>
            </section>

            <section>
                <h2>Exemple visuel (à adapter pour ton projet)</h2>
                <p>
                    <Image src={activite} alt="Diagramme d’activités" />
                </p>
                <p>
                    Utilise cet exemple comme référence pour la richesse attendue (pas seulement 3 cases en ligne).
                </p>
            </section>

            <section>
                <h2>Pièges à éviter</h2>
                <ul>
                    <li>Un simple enchaînement linéaire sans aucune décision, alors que le scénario en comporte.</li>
                    <li>Des noms d’activités trop vagues (ex. « Traiter », « Gérer ») qui ne disent pas ce qui se passe vraiment.</li>
                    <li>Mélanger tous les scénarios possibles dans un seul diagramme illisible.</li>
                </ul>
            </section>
        </main>
    );
}
