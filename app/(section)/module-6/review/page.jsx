export const metadata = {
    title: "Revue de sprint 1 et évaluation",
    description:
        "Comprendre le déroulement de la revue de sprint 1, ce qui est attendu pendant la présentation et comment l’évaluation est faite.",
    keywords: ["revue de sprint", "sprint 1", "évaluation", "présentation"],
    group: "notes",
};

export default function Page() {
    return (
        <main className="page">
            <section>
                <h1>Revue de sprint 1 et évaluation</h1>
                <p>
                    La revue de sprint 1 est le moment où votre équipe présente ce qui a été réellement livré pendant le sprint,
                    en lien avec l’objectif que vous aviez défini. C’est aussi sur cette base que l’enseignant vous évalue pour ce
                    sprint.
                </p>
                <p>
                    Cette page t’explique comment se déroule la revue, ce que l’on regarde pendant la présentation et comment vous
                    pouvez utiliser la grille d’évaluation comme guide pour vous préparer.
                </p>
            </section>

            <section>
                <h2>Rappel : but de la revue de sprint</h2>
                <ul>
                    <li>
                        Montrer un incrément fonctionnel du produit, c’est-à-dire quelque chose qui fonctionne vraiment, même si ce
                        n’est pas complet.
                    </li>
                    <li>
                        Vérifier ce qui a été livré par rapport à l’objectif du sprint 1.
                    </li>
                    <li>
                        Recueillir des commentaires de l’enseignant (et éventuellement du client) pour ajuster la suite du projet.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Déroulement typique de la revue de sprint 1</h2>
                <p>
                    Le déroulement exact peut varier selon le cours, mais une revue de sprint suit généralement une structure
                    similaire.
                </p>
                <ul>
                    <li>
                        <strong>Introduction</strong> : l’équipe rappelle le contexte du projet et l’objectif du sprint 1.
                    </li>
                    <li>
                        <strong>Démonstration</strong> : vous montrez les scénarios choisis, en faisant le lien avec les user
                        stories et les besoins du client.
                    </li>
                    <li>
                        <strong>Bilan</strong> : vous expliquez ce qui a été livré, ce qui a été reporté et les difficultés
                        rencontrées.
                    </li>
                    <li>
                        <strong>Questions / échanges</strong> : l’enseignant (et le client, si présent) pose des questions sur le
                        produit, la conception, les tests ou l’organisation du travail.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Ce que l’enseignant regarde pendant la démo</h2>
                <p>
                    La grille d’évaluation détaille les critères exacts, mais voici les grandes catégories typiques qui sont
                    observées pendant la revue.
                </p>
                <ul>
                    <li>
                        <strong>Fonctionnalités démontrées</strong> :
                        <ul>
                            <li>Les scénarios présentés fonctionnent-ils réellement ?</li>
                            <li>
                                Sont-ils cohérents avec ce qui était prévu pour le sprint 1 (objectif, stories sélectionnées) ?
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Qualité de la présentation</strong> :
                        <ul>
                            <li>
                                L’équipe présente-t-elle de manière claire et structurée (introduction, démo, bilan) ?
                            </li>
                            <li>
                                Les explications sont-elles compréhensibles pour quelqu’un qui ne connaît pas tous les détails du
                                code ?
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Maîtrise du projet</strong> :
                        <ul>
                            <li>
                                L’équipe est-elle capable d’expliquer comment les fonctionnalités ont été conçues et testées ?
                            </li>
                            <li>
                                Est-elle capable de répondre aux questions sur les choix techniques ou organisationnels ?
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>

            <section>
                <h2>Ce que l’enseignant regarde dans les artefacts</h2>
                <p>
                    L’évaluation ne se fait pas uniquement sur ce que l’on voit à l’écran pendant la démo. Les artefacts du projet
                    sont aussi pris en compte.
                </p>
                <ul>
                    <li>
                        <strong>Jira</strong> : backlog et sprint 1 à jour, stories et tâches correctement renseignées, traces des
                        décisions et des rencontres.
                    </li>
                    <li>
                        <strong>GitHub</strong> : structure du dépôt, historique des commits, début de tests unitaires, présence du
                        dossier de conception et de la stratégie de tests.
                    </li>
                    <li>
                        <strong>Dossier de conception</strong> : diagrammes et descriptions cohérents avec ce qui a été livré.
                    </li>
                    <li>
                        <strong>Stratégie de tests et tests unitaires</strong> : scénarios définis et quelques tests unitaires
                        réellement codés pour des parties importantes.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Utiliser la grille d’évaluation comme guide</h2>
                <p>
                    La grille d’évaluation de la revue de sprint n’est pas seulement un outil de correction, c’est aussi un guide
                    pour te préparer.
                </p>
                <ul>
                    <li>
                        Relis la grille avant la revue pour vérifier que tu as quelque chose à montrer ou à dire pour chaque
                        critère.
                    </li>
                    <li>
                        Identifie les points où tu te sens plus faible (par exemple tests, justification des choix techniques) et
                        prépare quelques explications supplémentaires.
                    </li>
                    <li>
                        Après la revue, utilise la grille et les commentaires reçus pour alimenter ta rétrospective (ce qui est à
                        améliorer pour le sprint 2).
                    </li>
                </ul>
            </section>

            <section>
                <h2>Attitude attendue pendant la revue</h2>
                <p>
                    Au-delà du contenu, l’attitude de l’équipe pendant la revue compte aussi.
                </p>
                <ul>
                    <li>
                        Soyez honnêtes sur ce qui a été fait et ce qui ne l’a pas été (il vaut mieux l’expliquer calmement que le
                        cacher).
                    </li>
                    <li>
                        Écoutez les commentaires et questions comme des pistes d’amélioration, pas comme une attaque personnelle.
                    </li>
                    <li>
                        Montrez que vous travaillez en équipe (plusieurs personnes impliquées, répartition des rôles, soutien mutuel
                        en cas de question difficile).
                    </li>
                </ul>
            </section>

            <section>
                <h2>Ce que tu devrais avoir à la fin de la revue</h2>
                <ul>
                    <li>
                        Une vision claire de ce que votre équipe a réussi à livrer pendant le sprint 1.
                    </li>
                    <li>
                        Un retour d’évaluation sur votre travail (forces, points à améliorer).
                    </li>
                    <li>
                        Des éléments concrets à utiliser pour la rétrospective et la préparation du sprint 2.
                    </li>
                </ul>
            </section>
        </main>
    );
}
