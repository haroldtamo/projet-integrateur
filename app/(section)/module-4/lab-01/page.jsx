export const metadata = {
    title: "Labo – Travailler proprement pendant le sprint 1",
    description:
        "Labo du module 4 : appliquer de bonnes pratiques de collaboration Git/GitHub, de stratégie de tests et de qualité de code dans ton projet.",
    keywords: ["labo", "sprint 1", "Git", "tests", "qualité du code"],
    group: "labs",
};

export default function Page() {
    return (
        <main className="page">
            <section>
                <h1></h1>
                <p>
                    Dans ce labo, tu mets en pratique les idées du module 4 dans ton projet intégrateur. L’objectif est de vérifier
                    que votre équipe travaille proprement sur le code, qu’une stratégie de tests existe vraiment et que des tests
                    unitaires ont commencé à être codés.
                </p>
                <p>
                    Suis les étapes ci-dessous avec ton équipe et assure-toi que chaque action laisse une trace dans Jira et dans
                    votre dépôt GitHub.
                </p>
            </section>

            <section>
                <h2>Étape 1 – Organisation Git/GitHub en équipe</h2>
                <ol>
                    <li>
                        Décidez en équipe d’une convention simple pour nommer vos branches (par exemple{" "}
                        <code>feature/...</code>, <code>bugfix/...</code>).
                    </li>
                    <li>
                        Pour une fonctionnalité ou une tâche en cours dans le sprint 1, créez une nouvelle branche à partir de la
                        branche principale.
                    </li>
                    <li>
                        Faites au moins quelques commits sur cette branche avec des messages clairs qui décrivent ce qui a été fait.
                    </li>
                    <li>
                        Poussez la branche sur GitHub, puis fusionnez-la dans la branche principale lorsque le travail est dans un
                        état raisonnablement stable.
                    </li>
                </ol>
            </section>

            <section>
                <h2>Étape 2 – Document de stratégie de tests</h2>
                <ol>
                    <li>
                        Dans le dossier <code>docs/</code> de votre dépôt, créez (ou complétez) un document de stratégie de tests
                        pour votre projet.
                    </li>
                    <li>
                        Pour au moins 3 à 5 fonctionnalités ou user stories importantes, décrivez des scénarios de tests concrets
                        (contexte, actions, résultat attendu).
                    </li>
                    <li>
                        Pour chaque scénario, indiquez le type de test prévu (test unitaire, test d’intégration, autre) et faites le
                        lien avec les stories ou critères d’acceptation concernés.
                    </li>
                    <li>
                        Commitez ce document (ou sa mise à jour) avec un message explicite, puis poussez-le sur GitHub.
                    </li>
                </ol>
            </section>

            <section>
                <h2>Étape 3 – Coder des tests unitaires</h2>
                <ol>
                    <li>
                        Créez, si ce n’est pas déjà fait, un projet ou dossier dédié aux tests (par exemple{" "}
                        <code>tests/</code>) dans votre solution.
                    </li>
                    <li>
                        Choisissez au moins deux scénarios de tests décrits dans votre stratégie de tests qui se prêtent bien à des
                        tests unitaires (par exemple des règles métier ou des calculs).
                    </li>
                    <li>
                        Implémentez des tests unitaires pour ces scénarios et vérifiez qu’ils s’exécutent correctement (tests
                        réussis et tests qui échouent quand vous modifiez volontairement le comportement).
                    </li>
                    <li>
                        Commitez ce travail avec un message de commit clair (par exemple « Ajout de tests unitaires pour la
                        validation des commandes »), puis poussez-le sur GitHub.
                    </li>
                </ol>
            </section>

            <section>
                <h2>Étape 4 – Améliorer un peu la qualité du code</h2>
                <ol>
                    <li>
                        Identifiez ensemble un fichier ou une partie du code qui vous semble difficile à lire (noms peu clairs,
                        fonction trop longue, duplication, etc.).
                    </li>
                    <li>
                        Proposez une petite amélioration réalisable rapidement (par exemple renommer des variables, extraire une
                        fonction, supprimer du code dupliqué), sans changer le comportement attendu.
                    </li>
                    <li>
                        Appliquez cette amélioration sur une branche dédiée, faites passer les tests unitaires, puis fusionnez-la
                        dans la branche principale.
                    </li>
                    <li>
                        Notez dans Jira (commentaire sur une tâche ou une story) ce que vous avez amélioré et pourquoi.
                    </li>
                </ol>
            </section>

            <section>
                <h2>Étape 5 – Vérifier la visibilité de votre travail</h2>
                <ol>
                    <li>
                        Vérifiez que dans Jira, les tâches liées à ces travaux (stratégie de tests, tests unitaires, amélioration de
                        code) existent et sont à jour.
                    </li>
                    <li>
                        Vérifiez que dans GitHub, on voit clairement :
                        <ul>
                            <li>
                                La structure du dépôt (<code>src/</code>, <code>docs/</code>, <code>tests/</code>).
                            </li>
                            <li>
                                Le document de stratégie de tests dans <code>docs/</code>.
                            </li>
                            <li>
                                Les tests unitaires dans le projet ou dossier de tests.
                            </li>
                            <li>
                                Les commits liés à vos améliorations (branches et messages de commit).
                            </li>
                        </ul>
                    </li>
                    <li>
                        Assurez-vous que l’enseignant a toujours accès à Jira et à GitHub pour pouvoir voir ces éléments.
                    </li>
                </ol>
            </section>

            <section>
                <h2>À remettre pour ce labo</h2>
                <ul>
                    <li>
                        Lien vers votre dépôt GitHub privé, montrant la structure du projet, le document de stratégie de tests dans{" "}
                        <code>docs/</code> et la présence de tests unitaires dans <code>tests/</code> (ou équivalent).
                    </li>
                    <li>
                        Lien vers votre projet Jira, avec au moins une tâche liée à ce labo (stratégie de tests, tests unitaires ou
                        amélioration de code) et mise à jour de son état.
                    </li>
                    <li>
                        Une très courte description (quelques lignes) des scénarios que vous avez couverts par des tests unitaires
                        et des améliorations de code que vous avez réalisées.
                    </li>
                </ul>
            </section>
        </main>
    );
}
