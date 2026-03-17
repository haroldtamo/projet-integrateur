export const metadata = {
    title: "Labo 3 – Préparer ton sprint 1",
    description:
        "Labo du module 3 : configurer le sprint 1 dans Jira, définir l’objectif de sprint, sélectionner les stories et produire les premiers éléments du dossier de conception.",
    keywords: ["labo", "sprint 1", "Jira", "dossier de conception"],
    group: "labs",
};

export default function Page() {
    return (
        <main className="page">
            <section>
                <h1>Labo 3 – Préparer ton sprint 1</h1>
                <p>
                    Dans ce labo, tu appliques concrètement ce que tu as vu dans le module 3. L’objectif est de sortir avec un
                    sprint 1 prêt à démarrer dans Jira, un objectif de sprint clair, et une première version du dossier de
                    conception suffisante pour guider ton développement.
                </p>
                <p>
                    Suis les étapes dans l’ordre et assure-toi que toute ton équipe participe aux décisions (objectif de sprint,
                    choix des stories, conception).
                </p>
            </section>

            <section>
                <h2>Étape 1 – Définir l’objectif du sprint 1</h2>
                <ol>
                    <li>
                        En équipe, discutez de ce que vous voulez absolument avoir accompli à la fin du sprint 1 (par exemple un
                        premier scénario complet qui fonctionne).
                    </li>
                    <li>
                        Rédigez une phrase ou deux qui décrivent clairement l’objectif de sprint, compréhensible par votre client et
                        votre enseignant.
                    </li>
                    <li>
                        Ajoutez cet objectif dans Jira (dans la description du sprint) ou dans un document partagé accessible à
                        toute l’équipe.
                    </li>
                </ol>
            </section>

            <section>
                <h2>Étape 2 – Sélectionner et prioriser les stories du sprint 1</h2>
                <ol>
                    <li>
                        Ouvrez votre backlog Jira et identifiez les user stories nécessaires pour atteindre l’objectif du sprint 1.
                    </li>
                    <li>
                        Vérifiez que chaque story sélectionnée est suffisamment claire (description, critères d’acceptation,
                        lien avec le besoin du client).
                    </li>
                    <li>
                        Déplacez ces stories dans le sprint 1 et ordonnez-les par priorité (les plus importantes en haut).
                    </li>
                    <li>
                        Si nécessaire, laissez de côté des stories moins prioritaires pour éviter de surcharger le sprint.
                    </li>
                </ol>
            </section>

            <section>
                <h2>Étape 3 – Découper les stories en tâches techniques</h2>
                <ol>
                    <li>
                        Pour chaque story du sprint 1, listez les tâches techniques nécessaires (interface, logique métier,
                        persistance, tests, etc.).
                    </li>
                    <li>
                        Créez ces tâches dans Jira et liez-les à la story correspondante.
                    </li>
                    <li>
                        Assignez les tâches aux membres de l’équipe ou décidez ensemble qui commencera par quoi.
                    </li>
                    <li>
                        Vérifiez que les tâches sont de taille raisonnable (réalisables en quelques heures ou une journée).
                    </li>
                </ol>
            </section>

            <section>
                <h2>Étape 4 – Préparer la base de ton dossier de conception</h2>
                <ol>
                    <li>
                        Dans le dossier <code>docs/</code> de votre dépôt Git, créez un sous-dossier (par exemple{" "}
                        <code>docs/conception</code>) pour y ranger vos diagrammes et documents de conception.
                    </li>
                    <li>
                        Produisez au moins :
                        <ul>
                            <li>
                                Un diagramme de cas d’utilisation qui couvre le scénario principal que vous visez dans le sprint 1.
                            </li>
                            <li>
                                Un premier diagramme de classes avec les entités principales liées à ce scénario.
                            </li>
                            <li>
                                Un ou deux diagrammes de séquence pour des scénarios critiques que vous comptez implémenter.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Ajoutez une courte section texte décrivant l’architecture prévue (par exemple une vue en couches) et les
                        principales technologies utilisées.
                    </li>
                    <li>
                        Commitez ces fichiers dans votre dépôt Git, avec un message de commit explicite (par exemple « Ajout des
                        premiers diagrammes de conception pour le sprint 1 »), puis poussez sur GitHub.
                    </li>
                </ol>
            </section>

            <section>
                <h2>Étape 5 – Finaliser la préparation du sprint 1</h2>
                <ol>
                    <li>
                        Vérifiez dans Jira que :
                        <ul>
                            <li>
                                Le sprint 1 existe et contient les stories sélectionnées.
                            </li>
                            <li>
                                Les tâches techniques sont créées, liées aux stories et (idéalement) assignées.
                            </li>
                            <li>
                                L’objectif de sprint est documenté.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Vérifiez dans GitHub que :
                        <ul>
                            <li>
                                La structure de base du dépôt est en place (<code>src/</code>, <code>docs/</code>, etc.).
                            </li>
                            <li>
                                Les fichiers du dossier de conception sont présents dans <code>docs/</code>.
                            </li>
                        </ul>
                    </li>
                    <li>
                        En équipe, faites un court point pour vous assurer que chacun sait par quoi il ou elle va commencer au
                        début du sprint.
                    </li>
                </ol>
            </section>

            <section>
                <h2>À remettre pour ce labo</h2>
                <ul>
                    <li>
                        Lien vers votre projet Jira avec le sprint 1 configuré (stories sélectionnées, tâches créées, objectif de
                        sprint).
                    </li>
                    <li>
                        Lien vers votre dépôt GitHub privé, montrant la présence des premiers éléments du dossier de conception
                        dans le dossier <code>docs/</code>.
                    </li>
                    <li>
                        Une courte description (quelques lignes) de l’objectif de sprint 1, telle que formulée par votre équipe.
                    </li>
                </ul>
            </section>
        </main>
    );
}
