/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Labo – Jira, Git et GitHub",
    description:
        "Mise en place de Jira, Git et GitHub pour le projet intégrateur, et premières étapes de travail en équipe.",
    keywords: ["labo", "Jira", "Git", "GitHub", "projet intégrateur"],
    group: "labs",
};

export default function Page() {
    return (
        <main className="page">
            <section>
                <h1>Mise en place de Jira, Git et GitHub</h1>
                <p>
                    Dans ce labo, vous allez configurer les outils de base pour votre projet intégrateur : Jira pour l’organisation
                    et le suivi, Git pour le versionnage, et GitHub pour le travail en équipe. Suivez les étapes dans l’ordre.
                </p>
            </section>

            <section>
                <h2>1. Préparer les outils</h2>
                <ol>
                    <li>
                        Créez un projet Scrum Jira pour votre équipe (si ce n’est pas déjà fait) et vérifiez que tout le monde y a
                        accès.
                    </li>
                    <li>
                        Créez un dépôt Git local pour votre projet (ou initialisez Git dans le dossier de votre solution de code).
                    </li>
                    <li>
                        Créez un dépôt privé GitHub pour l’équipe et connectez-le à votre dépôt local (ajoutez le remote{" "}
                        <code>origin</code>, faites un premier <code>push</code>).
                    </li>
                </ol>
            </section>

            <section>
                <h2>2. Structurer le dépôt Git/GitHub</h2>
                <ol>
                    <li>
                        Mettez en place la structure minimale du dépôt, par exemple :
                        <ul>
                            <li>
                                <code>src/</code> : code source de votre application.
                            </li>
                            <li>
                                <code>docs/</code> : documents du projet (cahier des charges, diagrammes, dossier de conception,
                                stratégies de test, etc.).
                            </li>
                            <li>
                                <code>tests/</code> : tests automatisés, données de tests ou scripts de tests, si applicables.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Ajoutez dans <code>docs/</code> les premiers artefacts disponibles : cahier des charges, premiers
                        diagrammes, notes de conception, etc.
                    </li>
                    <li>
                        Faites un premier commit avec un message clair (par exemple « Initialisation du projet et structure du
                        dépôt »), puis poussez sur GitHub.
                    </li>
                </ol>
            </section>

            <section>
                <h2>3. Configurer les accès (enseignant et équipe)</h2>
                <ol>
                    <li>
                        Sur GitHub :
                        <ul>
                            <li>
                                Ajoutez tous les membres de l’équipe comme collaborateurs au dépôt.
                            </li>
                            <li>
                                Ajoutez l’enseignant comme collaborateur avec un rôle lui donnant un accès complet au dépôt.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Sur Jira :
                        <ul>
                            <li>
                                Ajoutez l’enseignant au projet avec un rôle lui permettant de voir le backlog, les sprints et les
                                tâches.
                            </li>
                        </ul>
                    </li>
                </ol>
            </section>

            <section>
                <h2>4. Construire le backlog dans Jira</h2>
                <ol>
                    <li>
                        À partir de votre cahier des charges, créez les premières user stories / tâches dans le backlog Jira (une
                        issue par fonctionnalité ou besoin important).
                    </li>
                    <li>
                        Regroupez les issues si nécessaire (par exemple en utilisant des épics ou des liens entre issues).
                    </li>
                    <li>
                        Priorisez le backlog en ordonnant les items et en ajoutant les informations nécessaires (description,
                        critères d’acceptation, etc.).
                    </li>
                </ol>
            </section>

            <section>
                <h2>5. Préparer et lancer le premier sprint</h2>
                <ol>
                    <li>
                        Créez un premier sprint dans Jira et déplacez dans ce sprint les items que vous pensez pouvoir réaliser
                        dans la période prévue.
                    </li>
                    <li>
                        Discutez en équipe et définissez un objectif de sprint clair (ce que vous voulez avoir accompli à la fin du
                        sprint).
                    </li>
                    <li>
                        Lancez le sprint dans Jira à partir du backlog.
                    </li>
                </ol>
            </section>

            <section>
                <h2>6. Relier le travail Git/GitHub au suivi du projet</h2>
                <ol>
                    <li>
                        Pour chaque fonctionnalité ou tâche importante, associez votre travail à une issue Jira (par exemple en
                        mentionnant l’identifiant de l’issue dans les messages de commit).
                    </li>
                    <li>
                        Mettez à jour régulièrement le dossier <code>docs/</code> avec les nouvelles versions de diagrammes,
                        documents de conception, stratégies de tests, etc., puis commitez et poussez ces changements.
                    </li>
                    <li>
                        Utilisez le dépôt GitHub comme référence lors de vos rencontres d’équipe et des échanges avec l’enseignant
                        (tout ce qui est important pour le projet doit s’y retrouver).
                    </li>
                </ol>
            </section>

            <section>
                <h2>7. Reporter vos rencontres Scrum dans Jira</h2>
                <ol>
                    <li>
                        Sprint planning : notez les objectifs du sprint et les user stories / tâches choisies (dans la description
                        du sprint, un commentaire, ou une issue dédiée).
                    </li>
                    <li>
                        Daily / rencontres d’équipe : consignez les décisions importantes, les blocages et les ajustements faits
                        au plan (commentaires sur les tâches concernées ou issue de suivi).
                    </li>
                    <li>
                        Sprint review : indiquez ce qui a été livré pendant le sprint et les principaux commentaires reçus.
                    </li>
                    <li>
                        Rétrospective : gardez une trace de quelques points à continuer et quelques points à améliorer pour le
                        prochain sprint (par exemple dans une issue « Rétrospective – Sprint 1 »).
                    </li>
                </ol>
            </section>

            <section>
                <h2>À remettre pour ce labo</h2>
                <ul>
                    <li>
                        Lien vers votre projet Jira (avec backlog, premier sprint et traces de vos rencontres Scrum).
                    </li>
                    <li>
                        Lien vers votre dépôt GitHub privé (avec la structure <code>src/</code>, <code>docs/</code>,{" "}
                        <code>tests/</code> et premiers commits).
                    </li>
                    <li>
                        Confirmation que l’enseignant a été ajouté sur Jira et sur GitHub.
                    </li>
                </ul>
            </section>
        </main>
    );
}
