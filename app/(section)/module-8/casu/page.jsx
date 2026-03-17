import { DownloadBlock, File } from "@/components/DownloadBlock";
import casu from '@/public/img/module-08/casu.png';
import Image from 'next/image';
export const metadata = {
    title: "Diagramme de cas d’utilisation",
    description:
        "Préciser les exigences fonctionnelles avec un diagramme de cas d’utilisation : acteurs, cas, relations include/extend et frontière du système.",
    keywords: ["UML", "cas d’utilisation", "use case", "include", "extend"],
    group: "notes",
};

export default function Page() {
    return (
        <main className="page">
            <section>
                <h1></h1>
                <p>
                    Le diagramme de cas d’utilisation sert à montrer qui utilise le système (les acteurs) et pour faire quoi (les cas
                    d’utilisation). Il donne une vue d’ensemble des fonctionnalités offertes par ton application.
                </p>
                <p>
                    Dans ce cours, on attend de toi un diagramme de cas d’utilisation suffisamment détaillé, qui exploite les
                    relations <code>&lt;&lt;include&gt;&gt;</code> et <code>&lt;&lt;extend&gt;&gt;</code> quand c’est pertinent, et qui
                    montre clairement la frontière de ton système.
                </p>
            </section>

            <section>
                <h2>Éléments obligatoires sur ton diagramme</h2>
                <ul>
                    <li>
                        <strong>Acteurs</strong> : au moins un acteur principal (utilisateur, administrateur, système externe, etc.).
                    </li>
                    <li>
                        <strong>Cas d’utilisation</strong> : plusieurs cas d’utilisation décrivant les grandes fonctionnalités (pas un
                        seul énorme cas « Gérer le système »).
                    </li>
                    <li>
                        <strong>Frontière du système</strong> : un rectangle qui encadre les cas d’utilisation, avec le nom du
                        système.
                    </li>
                    <li>
                        <strong>Relations acteur–cas</strong> : lignes d’association entre acteurs et cas d’utilisation.
                    </li>
                    <li>
                        <strong>Relations &lt;&lt;include&gt;&gt;</strong> pour factoriser un comportement commun à plusieurs cas
                        d’utilisation.
                    </li>
                    <li>
                        <strong>Relations &lt;&lt;extend&gt;&gt;</strong> pour représenter un comportement optionnel ou exceptionnel
                        qui prolonge un cas d’utilisation de base.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Exemple d’exigences pour ton projet</h2>
                <p>
                    Pour ton projet, ton diagramme de cas d’utilisation devrait au minimum montrer :
                </p>
                <ul>
                    <li>les acteurs principaux (par exemple : Client, Administrateur, Système externe de paiement) ;</li>
                    <li>les cas d’utilisation principaux (ex. : S’inscrire, Se connecter, Passer une commande, Consulter son profil) ;</li>
                    <li>
                        au moins un <code>&lt;&lt;include&gt;&gt;</code> (par exemple « Authentifier l’utilisateur » inclus dans
                        plusieurs cas) ;
                    </li>
                    <li>
                        au moins un <code>&lt;&lt;extend&gt;&gt;</code> (par exemple une gestion d’options avancées ou de cas
                        d’erreur).
                    </li>
                </ul>
            </section>

            <section>
                <h2>Exemple visuel (à adapter à ton projet)</h2>
                <p>
                    <Image src={casu} alt="Diagramme de cas d’utilisation" />
                </p>
                <p>
                    Inspire-toi de la structure, mais adapte les noms d’acteurs et de cas d’utilisation à ton propre projet.
                </p>
            </section>

            <section>
                <h2>Pièges à éviter</h2>
                <ul>
                    <li>Un seul cas d’utilisation qui englobe tout (trop vague, pas exploitable).</li>
                    <li>Trop de détails techniques dans les noms (reste au niveau métier : « Passer une commande », pas « Appeler API X »).</li>
                    <li>Oublier la frontière du système et mélanger ce qui est dans le système avec ce qui est externe.</li>
                    <li>Ne jamais utiliser <code>&lt;&lt;include&gt;&gt;</code> ni <code>&lt;&lt;extend&gt;&gt;</code> alors que des comportements communs ou optionnels existent clairement.</li>
                </ul>
            </section>
        </main>
    );
}
