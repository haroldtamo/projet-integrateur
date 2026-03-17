export const metadata = {
    title: "Stratégie de tests et tests unitaires",
    description:
        "Définir une stratégie de tests pour le projet intégrateur et mettre en place des tests unitaires et d’intégration pour l’application.",
    keywords: ["tests", "stratégie de tests", "tests unitaires", "tests d’intégration"],
    group: "notes",
};

export default function Page() {
    return (
        <main className="page">
            <section>
                <h1></h1>
                <p>
                    Dans ce module, tu vas structurer la façon dont ton équipe va tester l’application. L’idée est de ne pas tester
                    « au hasard », mais de définir une stratégie de tests claire et de coder de vrais tests unitaires pour les
                    parties importantes de ton système.
                </p>
                <p>
                    Cette page t’explique ce que doit contenir ton document de stratégie de tests, quels types de tests sont
                    attendus dans le cours, et ce qu’on attend concrètement en termes de tests unitaires pour ton application.
                </p>
            </section>

            <section>
                <h2>Le document de stratégie de tests</h2>
                <p>
                    La stratégie de tests est un document que ton équipe doit créer (et maintenir) dans le dossier{" "}
                    <code>docs/</code> de votre dépôt Git. Il décrit comment vous comptez vérifier que votre application fonctionne
                    correctement.
                </p>
                <ul>
                    <li>
                        Le document doit être compréhensible par quelqu’un qui n’a pas écrit le code (par exemple l’enseignant ou
                        le client).
                    </li>
                    <li>
                        Il doit être suffisamment concret pour guider la conception des tests (automatisés ou non).
                    </li>
                </ul>
                <p>Ta stratégie de tests doit au minimum répondre aux questions suivantes :</p>
                <ul>
                    <li>
                        Quelles parties de l’application sont les plus importantes ou les plus à risque (fonctionnalités critiques,
                        règles métier complexes, etc.) ?
                    </li>
                    <li>
                        Quels scénarios de tests allez-vous couvrir pour ces parties (cas « normaux », cas limites, cas d’erreur) ?
                    </li>
                    <li>
                        Quels types de tests utiliserez-vous pour ces scénarios (tests unitaires, tests d’intégration, autres) ?
                    </li>
                    <li>
                        Quels scénarios seront effectivement automatisés sous forme de tests unitaires ?
                    </li>
                </ul>
            </section>

            <section>
                <h2>Scénarios de tests à décrire</h2>
                <p>
                    Un scénario de test décrit une situation concrète que tu veux vérifier dans ton application. Il est généralement
                    lié à une fonctionnalité ou à une user story de ton backlog.
                </p>
                <ul>
                    <li>
                        Pour chaque fonctionnalité importante, identifie quelques scénarios représentatifs (exemples typiques, cas
                        limites, comportements en cas d’erreur).
                    </li>
                    <li>
                        Pour chaque scénario, note au minimum : le contexte (pré-conditions), les actions effectuées, le résultat
                        attendu.
                    </li>
                    <li>
                        Indique, pour chaque scénario, s’il sera testé manuellement, par un test unitaire, par un test d’intégration
                        ou par un autre type de test.
                    </li>
                    <li>
                        Fais le lien avec ton backlog en indiquant à quelles user stories ou critères d’acceptation le scénario est
                        associé.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Types de tests attendus dans le cours</h2>
                <p>
                    Dans ce projet, on s’attend à ce que tu utilises au moins deux grandes familles de tests pour ton application.
                </p>
                <ul>
                    <li>
                        <strong>Tests unitaires</strong> :
                        <ul>
                            <li>
                                Vérifient le comportement d’une petite unité de code (par exemple une fonction, une méthode, une
                                classe) isolée du reste du système.
                            </li>
                            <li>
                                Sont rapides à exécuter et peuvent être lancés souvent (idéalement à chaque modification pertinente
                                du code).
                            </li>
                            <li>
                                Sont particulièrement utiles pour les règles métier et les calculs.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Tests d’intégration</strong> :
                        <ul>
                            <li>
                                Vérifient que plusieurs composants fonctionnent bien ensemble (par exemple service + base de
                                données, API + couche métier).
                            </li>
                            <li>
                                Ciblent des chemins critiques dans ton application (par exemple un scénario important de bout en
                                bout).
                            </li>
                        </ul>
                    </li>
                </ul>
                <p>
                    Selon ton projet, tu peux aussi mentionner d’autres types de tests (tests d’interface graphique, tests de bout
                    en bout, etc.), mais le cœur du cours reste les tests unitaires et certains tests d’intégration.
                </p>
            </section>

            <section>
                <h2>Coder des tests unitaires pour ton application</h2>
                <p>
                    La stratégie de tests ne doit pas rester théorique : tu dois réellement coder des tests unitaires pour ton
                    application. Ces tests font partie intégrante du livrable.
                </p>
                <ul>
                    <li>
                        Identifie, dans ta stratégie de tests, quelles parties de ton code seront couvertes par des tests unitaires
                        (par exemple les règles métier les plus importantes).
                    </li>
                    <li>
                        Crée un projet ou un dossier dédié aux tests (par exemple <code>tests/</code>) dans ton dépôt, si ce n’est
                        pas déjà fait.
                    </li>
                    <li>
                        Implémente des tests unitaires pour plusieurs scénarios décrits dans ta stratégie de tests (et non uniquement
                        pour des cas « faciles »).
                    </li>
                    <li>
                        Assure-toi que ces tests peuvent être exécutés facilement (par exemple via ton outil de développement ou une
                        commande de test).
                    </li>
                </ul>
                <p>
                    L’objectif n’est pas d’atteindre une couverture parfaite, mais de montrer que tu es capable de concevoir et
                    d’implémenter des tests unitaires pertinents pour ton projet.
                </p>
            </section>

            <section>
                <h2>Faire évoluer ta stratégie de tests pendant le projet</h2>
                <p>
                    Comme le dossier de conception, ta stratégie de tests est un document vivant. Elle doit évoluer au fur et à
                    mesure que ton application se précise.
                </p>
                <ul>
                    <li>
                        Ajoute de nouveaux scénarios de tests quand tu implémentes de nouvelles fonctionnalités.
                    </li>
                    <li>
                        Mets à jour le document quand tu découvres des bugs importants ou de nouveaux risques.
                    </li>
                    <li>
                        Ajuste le type de tests prévu si tu réalises qu’un scénario doit être automatisé (par un test unitaire ou
                        d’intégration) plutôt que testé manuellement.
                    </li>
                    <li>
                        Pense à committer régulièrement les mises à jour de ta stratégie de tests dans <code>docs/</code>, au même
                        titre que ton code.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Ce qui est attendu pour ce module</h2>
                <ul>
                    <li>
                        Un document de stratégie de tests dans le dossier <code>docs/</code>, qui décrit vos scénarios de tests et
                        les types de tests que vous allez utiliser.
                    </li>
                    <li>
                        Un début de mise en œuvre de cette stratégie sous forme de tests unitaires codés pour votre application.
                    </li>
                    <li>
                        Un lien clair entre certains scénarios de tests et des user stories / critères d’acceptation de votre
                        backlog.
                    </li>
                </ul>
            </section>
        </main>
    );
}
