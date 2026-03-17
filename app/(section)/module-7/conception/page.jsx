export const metadata = {
    title: "Mettre à jour la conception et les tests au sprint 2",
    description:
        "Rappel aux équipes : profiter du sprint 2 pour mettre à jour la conception (diagrammes) et les tests en fonction des nouvelles fonctionnalités.",
    keywords: ["sprint 2", "conception", "tests", "mise à jour"],
    group: "notes",
};

export default function Page() {
    return (
        <main className="page">
            <section>
                <h1></h1>
                <p>
                    Cette page te rappelle qu’un projet ne se limite pas à ajouter du nouveau code à chaque sprint. Quand tu passes
                    au sprint 2, tu dois aussi mettre à jour la conception et les tests pour qu’ils restent alignés avec la réalité
                    de ton application.
                </p>
            </section>

            <section>
                <h2>Pourquoi mettre à jour la conception ?</h2>
                <p>
                    Après le sprint 1, tu as souvent appris des choses : certaines idées ont évolué, des écrans ont changé, des
                    données ont été ajoutées ou simplifiées. Si tes diagrammes ne suivent pas ces changements, ils deviennent faux et
                    inutiles.
                </p>
                <ul>
                    <li>
                        Vérifie que ton diagramme d’architecture (ou schéma global du système) correspond à ce que fait vraiment ton
                        application après le sprint 1.
                    </li>
                    <li>
                        Mets à jour au moins un diagramme interne (par exemple classes, données, composants) pour refléter les
                        modifications importantes.
                    </li>
                    <li>
                        Ajoute une courte explication des changements (ce qui a été modifié et pourquoi) dans <code>docs/technique/</code>.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Pourquoi mettre à jour les tests ?</h2>
                <p>
                    Les tests servent à vérifier que ce qui marchait avant continue de marcher après tes changements. Si tu ajoutes
                    des fonctionnalités sans revoir tes tests, tu risques de casser des parties importantes sans t’en rendre compte.
                </p>
                <ul>
                    <li>
                        Identifie les fonctionnalités clés livrées au sprint 1 et assure-toi qu’elles sont couvertes par au moins un
                        scénario de test (même manuel).
                    </li>
                    <li>
                        Adapte les tests existants si le comportement a changé (messages, validations, navigation, etc.).
                    </li>
                    <li>
                        Si tu utilises des tests automatisés, ajoute quelques tests ciblés sur les zones les plus critiques ou les
                        plus souvent modifiées.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Comment intégrer ça dans le sprint 2 ?</h2>
                <p>
                    La mise à jour de la conception et des tests ne se fait pas « en plus » du reste : elle doit être planifiée comme
                    des tâches à part entière dans ton backlog.
                </p>
                <ul>
                    <li>
                        Crée des tâches spécifiques dans le backlog du sprint 2 pour mettre à jour les diagrammes et les tests.
                    </li>
                    <li>
                        Lie ces tâches aux user stories concernées (par exemple : « Mettre à jour le diagramme de données pour la
                        gestion des commandes »).
                    </li>
                    <li>
                        Répartis ces tâches dans l’équipe pour éviter que tout repose sur une seule personne à la fin du projet.
                    </li>
                </ul>
            </section>

            <section>
                <h2>À vérifier avant de clore le sprint 2</h2>
                <ul>
                    <li>
                        Tes principaux diagrammes reflètent bien l’état actuel de ton application.
                    </li>
                    <li>
                        Les scénarios importants livrés au sprint 1 et au sprint 2 sont couverts par des tests.
                    </li>
                    <li>
                        Tu sais où sont rangés ces éléments (conception et tests) dans ton dépôt, et tu peux les montrer facilement
                        lors d’une revue de projet.
                    </li>
                </ul>
            </section>
        </main>
    );
}
