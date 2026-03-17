import { DownloadBlock, File } from "@/components/DownloadBlock";
import classe from '@/public/img/module-08/classe.png';
import Image from 'next/image';
export const metadata = {
    title: "Diagramme de classes",
    description:
        "Décrire la structure du domaine avec un diagramme de classes : classes, attributs, opérations, associations et héritage.",
    keywords: ["UML", "diagramme de classes", "modèle de données"],
    group: "notes",
};

export default function Page() {
    return (
        <main className="page">
            <section>
                <h1></h1>
                <p>
                    Le diagramme de classes te permet de représenter les principales entités de ton domaine, leurs attributs et les
                    relations entre elles. C’est une base importante pour concevoir ton modèle de données et ton code.
                </p>
                <p>
                    Il doit montrer plus que de simples boîtes avec des noms : on veut voir les attributs essentiels, quelques
                    opérations importantes et des relations claires entre les classes.
                </p>
            </section>

            <section>
                <h2>Éléments obligatoires sur ton diagramme</h2>
                <ul>
                    <li>
                        Plusieurs <strong>classes</strong> (pas une seule) avec un nom clair.
                    </li>
                    <li>
                        Pour chaque classe, quelques <strong>attributs</strong> importants (nom + type si possible).
                    </li>
                    <li>
                        Pour certaines classes, des <strong>opérations</strong> significatives (méthodes importantes, pas tous les détails).
                    </li>
                    <li>
                        Des <strong>associations</strong> entre classes, avec éventuellement des multiplicités (1, 0..*, etc.).
                    </li>
                    <li>
                        Au moins un exemple d’<strong>héritage</strong> si ton domaine s’y prête (par exemple une classe de base et des spécialisations).
                    </li>
                </ul>
            </section>

            <section>
                <h2>Lien avec ton projet</h2>
                <p>
                    Pour ton projet, ton diagramme de classes doit correspondre aux données réellement manipulées par ton application :
                </p>
                <ul>
                    <li>Les classes doivent refléter les entités importantes (Utilisateur, Commande, Produit, etc.).</li>
                    <li>Les relations doivent suivre la logique métier (par exemple, une Commande contient plusieurs LignesCommande).</li>
                    <li>Si tu as une base de données, le diagramme doit être cohérent avec tes tables et relations principales.</li>
                </ul>
            </section>

            <section>
                <h2>Exemple visuel (à adapter pour ton projet)</h2>
                <p>
                    <Image src={classe} alt="Diagramme de classes" />
                </p>
                <p>
                    Utilise l’exemple comme référence pour le niveau de détail attendu (ni trop vide, ni illisible).
                </p>
            </section>

            <section>
                <h2>Pièges à éviter</h2>
                <ul>
                    <li>Une seule classe « fourre-tout » qui contient tout.</li>
                    <li>Des classes sans relations entre elles.</li>
                    <li>Mettre absolument toutes les colonnes de la base de données et tous les getters/setters dans le diagramme.</li>
                </ul>
            </section>
        </main>
    );
}
