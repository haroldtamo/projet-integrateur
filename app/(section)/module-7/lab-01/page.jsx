export const metadata = {
    title: "Labo – Sprint 2, documentation, conception et tests",
    description:
        "Travail pratique : préparer et démarrer le sprint 2 en mettant à jour le backlog, la documentation, la conception et les tests.",
    keywords: ["labo", "sprint 2", "documentation", "conception", "tests"],
    group: "labs",
};

export default function Page() {
    return (
        <main className="page">
            <section>
                <h1></h1>
                <p>
                    Dans ce labo, tu appliques concrètement ce que tu as vu dans le module 7 : démarrer un sprint 2 en utilisant les
                    résultats du sprint 1 et en mettant à jour ton backlog, ta documentation, ta conception et tes tests.
                </p>
                <p>
                    À la fin du labo, tu devras être capable de montrer comment ton projet évolue d’un sprint à l’autre, pas seulement
                    au niveau du code mais aussi au niveau de la conception et de la qualité.
                </p>
            </section>

            <section>
                <h2>Objectifs du labo</h2>
                <ul>
                    <li>
                        Mettre à jour le backlog du projet en fonction des résultats du sprint 1.
                    </li>
                    <li>
                        Préparer et documenter le démarrage du sprint 2 (objectif de sprint, stories, tâches).
                    </li>
                    <li>
                        Mettre à jour au moins un diagramme de conception pour refléter l’état actuel du système.
                    </li>
                    <li>
                        Mettre à jour ou créer des tests pour les fonctionnalités clés livrées.
                    </li>
                    <li>
                        Organiser les documents produits dans le dossier <code>docs/</code> du dépôt.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Etape 1 – Préparer le sprint 2</h2>
                <ol>
                    <li>
                        Relis le bilan du sprint 1 (revue et rétrospective) de ton équipe et identifie :
                        <ul>
                            <li>2 à 3 points positifs à conserver,</li>
                            <li>2 à 3 problèmes ou pistes d’amélioration.</li>
                        </ul>
                    </li>
                    <li>
                        Mets à jour ton backlog :
                        <ul>
                            <li>ajoute les nouvelles idées, améliorations ou bugs identifiés pendant le sprint 1 ;</li>
                            <li>supprime ou reformule les éléments qui ne sont plus pertinents ;</li>
                            <li>revois la priorité des éléments importants.</li>
                        </ul>
                    </li>
                    <li>
                        Rédige un objectif clair pour le sprint 2 en une phrase, centré sur la valeur pour l’utilisateur.
                    </li>
                    <li>
                        Sélectionne les user stories et les tâches (y compris documentation, conception, tests) que ton équipe
                        prévoit de réaliser pendant le sprint 2.
                    </li>
                </ol>
            </section>

            <section>
                <h2>Etape 2 – Mettre à jour la conception</h2>
                <ol>
                    <li>
                        Choisis un ou deux diagrammes de conception existants dans ton projet (par exemple un diagramme
                        d’architecture, de classes, de composants ou de données).
                    </li>
                    <li>
                        Identifie les changements apportés au système pendant le sprint 1 (nouvelles fonctionnalités, modifications
                        de flux, nouvelles données, etc.).
                    </li>
                    <li>
                        Modifie les diagrammes choisis pour qu’ils reflètent l’état réel du système au début du sprint 2.
                    </li>
                    <li>
                        Ajoute dans <code>docs/technique/</code> un court texte qui explique :
                        <ul>
                            <li>ce qui a été changé dans la conception ;</li>
                            <li>pourquoi ces changements ont été faits.</li>
                        </ul>
                    </li>
                </ol>
            </section>

            <section>
                <h2>Etape 3 – Mettre à jour les tests</h2>
                <ol>
                    <li>
                        Liste 2 à 4 scénarios d’utilisation importants qui ont été livrés au sprint 1 (par exemple un parcours
                        utilisateur complet).
                    </li>
                    <li>
                        Pour chaque scénario, vérifie si un test existe déjà (manuel ou automatisé) et s’il est encore valide.
                    </li>
                    <li>
                        Mets à jour les tests qui ne correspondent plus au comportement actuel de l’application (messages, étapes,
                        données, etc.).
                    </li>
                    <li>
                        Si aucun test n’existe pour un scénario important, crée au moins :
                        <ul>
                            <li>une description de test manuel (étapes et résultat attendu), ou</li>
                            <li>un test automatisé simple si ton projet en utilise déjà.</li>
                        </ul>
                    </li>
                    <li>
                        Range les descriptions de tests dans un endroit clair (par exemple <code>docs/tests/</code> ou un fichier
                        dédié) et/ou mets à jour les fichiers de tests automatisés du projet.
                    </li>
                </ol>
            </section>

            <section>
                <h2>Etape 4 – Documentation à produire pour le labo</h2>
                <p>
                    À la fin du labo, ton dépôt doit contenir des éléments concrets qui montrent le travail réalisé pendant ce labo.
                </p>
                <ul>
                    <li>
                        Un objectif de sprint 2 clair, accompagné de la liste des stories et tâches sélectionnées.
                    </li>
                    <li>
                        Au moins un diagramme de conception mis à jour, et une courte explication dans <code>docs/technique/</code>.
                    </li>
                    <li>
                        Des tests mis à jour ou ajoutés pour les scénarios importants (description de tests manuels et/ou tests
                        automatisés).
                    </li>
                    <li>
                        Un dossier <code>docs/</code> structuré (au minimum <code>docs/technique/</code> et <code>docs/utilisateur/</code>,
                        d’autres dossiers si nécessaire).
                    </li>
                </ul>
            </section>

            <section>
                <h2>Suggestion de remise</h2>
                <p>
                    Pour faciliter la correction, ton enseignant peut te demander de fournir :
                </p>
                <ul>
                    <li>
                        Un lien vers le dépôt du projet avec le dossier <code>docs/</code> mis à jour.
                    </li>
                    <li>
                        Une courte note (quelques lignes) indiquant où trouver :
                        <ul>
                            <li>l’objectif du sprint 2 et les stories/tâches sélectionnées ;</li>
                            <li>les diagrammes mis à jour ;</li>
                            <li>les tests créés ou modifiés.</li>
                        </ul>
                    </li>
                </ul>
            </section>
        </main>
    );
}
