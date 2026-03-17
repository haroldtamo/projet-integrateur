import { DownloadBlock, File } from "@/components/DownloadBlock";
import classe from '@/public/img/module-08/classe.png';
import Image from 'next/image';
export const metadata = {
    title: "Diagramme d’objets",
    description:
        "Illustrer un cas concret avec un diagramme d’objets : instances de classes, valeurs d’attributs et liens entre objets.",
    keywords: ["UML", "diagramme d’objets", "instances"],
    group: "notes",
};

export default function Page() {
    return (
        <main className="page">
            <section>
                <h1></h1>
                <p>
                    Le diagramme d’objets ressemble à un diagramme de classes, mais il montre des <strong>instances concrètes </strong>
                    de ces classes à un instant donné, avec des valeurs d’attributs réelles.
                </p>
                <p>
                    Il permet de vérifier que ton modèle de classes fonctionne pour un cas précis et de visualiser les liens entre
                    objets pendant un scénario.
                </p>
            </section>

            <section>
                <h2>Éléments obligatoires sur ton diagramme</h2>
                <ul>
                    <li>
                        Plusieurs <strong>objets</strong> (instances) notés sous la forme <code>nomObjet : NomClasse</code>.
                    </li>
                    <li>
                        Pour certains objets, des <strong>valeurs d’attributs</strong> (par exemple <code>id = 123</code>, <code>statut = "Payée"</code>).
                    </li>
                    <li>
                        Des <strong>liens</strong> entre objets qui correspondent aux associations de ton diagramme de classes.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Cas concret à représenter</h2>
                <p>
                    Choisis un scénario précis de ton application (par exemple « une commande avec deux produits pour un client ») et
                    montre :
                </p>
                <ul>
                    <li>un objet représentant le client ;</li>
                    <li>un objet représentant la commande ;</li>
                    <li>des objets pour les lignes de commande et les produits concernés ;</li>
                    <li>les liens entre ces objets.</li>
                </ul>
            </section>

            <section>
                <h2>Exemple visuel (à adapter pour ton projet)</h2>
                <p>
                   <Image src={classe} alt="Diagramme d’objets" />
                </p>
                <p>
                    L’objectif est surtout de t’aider à visualiser un cas concret, pas de tout représenter.
                </p>
            </section>

            <section>
                <h2>Pièges à éviter</h2>
                <ul>
                    <li>Un diagramme d’objets qui ne montre qu’un seul objet isolé.</li>
                    <li>Des objets qui ne correspondent pas aux classes définies dans ton diagramme de classes.</li>
                    <li>Oublier les valeurs d’attributs alors que c’est ce qui rend l’exemple concret.</li>
                </ul>
            </section>
        </main>
    );
}
