export const metadata = {
    title: "Labo – Préparer ta démo de sprint 1",
    description:
        "Labo du module 5 : construire le plan de démonstration du sprint 1 et vérifier la préparation des artefacts du projet.",
    keywords: ["labo", "sprint 1", "revue de sprint", "démonstration"],
    group: "labs",
};

export default function Page() {
    return (
        <main className="page">
            <section>
                <h1></h1>
                <p>
                    Dans ce labo, ton équipe prépare concrètement la revue du sprint 1. L’objectif est d’arriver à la présentation
                    avec un plan de démo clair et des artefacts à jour, plutôt que d’improviser au dernier moment.
                </p>
                <p>
                    Suis les étapes ci-dessous pour construire ton plan de démonstration, répartir les rôles et vérifier que Jira,
                    GitHub, la conception et les tests sont prêts à être montrés.
                </p>
            </section>

            <section>
                <h2>Étape 1 – Clarifier l’objectif de sprint 1</h2>
                <ol>
                    <li>
                        En équipe, relisez l’objectif de sprint 1 tel que vous l’aviez formulé au démarrage (dans Jira ou dans un
                        document).
                    </li>
                    <li>
                        Si nécessaire, reformulez-le légèrement pour qu’il corresponde à ce qui a réellement été visé dans le
                        sprint.
                    </li>
                    <li>
                        Notez cette version finale de l’objectif de sprint dans un endroit accessible (par exemple dans la
                        description du sprint Jira ou un document partagé).
                    </li>
                </ol>
            </section>

            <section>
                <h2>Étape 2 – Choisir les scénarios à démontrer</h2>
                <ol>
                    <li>
                        Listez les fonctionnalités ou user stories qui ont été réellement livrées pendant le sprint 1.
                    </li>
                    <li>
                        Choisissez 2 à 4 scénarios d’utilisation qui illustrent bien l’objectif de sprint (parcours utilisateur,
                        cas métier important, etc.).
                    </li>
                    <li>
                        Pour chaque scénario, décrivez brièvement :
                        <ul>
                            <li>Le point de départ (écran ou état de l’application).</li>
                            <li>Les actions effectuées par l’utilisateur.</li>
                            <li>Le résultat attendu visible pendant la démo.</li>
                        </ul>
                    </li>
                    <li>
                        Notez à quelles user stories ou tâches Jira chaque scénario est lié.
                    </li>
                </ol>
            </section>

            <section>
                <h2>Étape 3 – Structurer le déroulement de la démo</h2>
                <ol>
                    <li>
                        Décidez de l’ordre dans lequel vous allez présenter les scénarios (par exemple du plus simple au plus
                        complet).
                    </li>
                    <li>
                        Préparez un mini-plan de présentation avec trois parties :
                        <ul>
                            <li>Introduction : rappel du contexte et de l’objectif du sprint.</li>
                            <li>Démonstration : enchaînement des scénarios choisis.</li>
                            <li>Bilan : ce qui a été livré, ce qui reste à faire, difficultés rencontrées.</li>
                        </ul>
                    </li>
                    <li>
                        Écrivez ce plan dans un document court (quelques lignes ou puces) que vous pourrez ouvrir pendant la revue.
                    </li>
                </ol>
            </section>

            <section>
                <h2>Étape 4 – Répartir les rôles dans l’équipe</h2>
                <ol>
                    <li>
                        Choisissez qui présente l’introduction (objectif du sprint, structure de la démo).
                    </li>
                    <li>
                        Attribuez chaque scénario à un membre de l’équipe qui le présentera (ou le pilotera au clavier).
                    </li>
                    <li>
                        Décidez qui sera prêt à répondre aux questions sur :
                        <ul>
                            <li>L’architecture et la conception.</li>
                            <li>Les tests (stratégie de tests, tests unitaires).</li>
                            <li>L’organisation du travail (Jira, GitHub).</li>
                        </ul>
                    </li>
                    <li>
                        Faites une répétition rapide entre vous (même informelle) pour tester le déroulement et le timing.
                    </li>
                </ol>
            </section>

            <section>
                <h2>Étape 5 – Vérifier les artefacts à montrer</h2>
                <ol>
                    <li>
                        Ouvrez votre projet Jira et vérifiez que :
                        <ul>
                            <li>Les stories et tâches du sprint 1 sont à jour (états, descriptions, commentaires).</li>
                            <li>L’objectif du sprint est visible et cohérent avec ce que vous allez présenter.</li>
                        </ul>
                    </li>
                    <li>
                        Ouvrez votre dépôt GitHub et vérifiez que :
                        <ul>
                            <li>La branche principale est dans l’état que vous voulez démontrer.</li>
                            <li>La structure du dépôt (<code>src/</code>, <code>docs/</code>, <code>tests/</code>) est bien en
                                place.</li>
                        </ul>
                    </li>
                    <li>
                        Vérifiez que votre dossier de conception et votre stratégie de tests sont à jour pour les fonctionnalités
                        que vous allez montrer.
                    </li>
                    <li>
                        Assurez-vous que les tests unitaires pertinents passent (ou sachez expliquer clairement s’il y a des tests
                        qui échouent et pourquoi).
                    </li>
                </ol>
            </section>

            <section>
                <h2>Étape 6 – Accessibilité et liens</h2>
                <ol>
                    <li>
                        Vérifiez une dernière fois que l’enseignant a accès à votre projet Jira et à votre dépôt GitHub privé.
                    </li>
                    <li>
                        Préparez une petite liste de liens utiles pour la revue (Jira, GitHub, dossier de conception, stratégie de
                        tests, éventuellement application déployée).
                    </li>
                    <li>
                        Gardez cette liste à portée de main pendant la présentation (document, note, message épinglé, etc.).
                    </li>
                </ol>
            </section>

            <section>
                <h2>À remettre pour ce labo</h2>
                <ul>
                    <li>
                        Un court document (ou section de document) contenant :
                        <ul>
                            <li>L’objectif final du sprint 1 tel que vous le présentez.</li>
                            <li>La liste des scénarios que vous allez démontrer.</li>
                            <li>Le plan de déroulement de la revue (introduction, démo, bilan) et la répartition des rôles.</li>
                        </ul>
                    </li>
                    <li>
                        Les liens vers votre projet Jira et votre dépôt GitHub, avec la confirmation que tout est à jour pour la
                        revue.
                    </li>
                    <li>
                        (Optionnel, si demandé dans le cours) Une courte note sur les questions que vous anticipez et la façon dont
                        vous comptez y répondre.
                    </li>
                </ul>
            </section>
        </main>
    );
}
