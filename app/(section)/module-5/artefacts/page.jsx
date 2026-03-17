export const metadata = {
    title: "Rendre visibles tes artefacts",
    description:
        "Vérifier et finaliser les artefacts du projet (Jira, GitHub, dossier de conception, stratégie de tests) avant la revue du sprint 1.",
    keywords: ["artefacts", "Jira", "GitHub", "conception", "tests"],
    group: "notes",
};

export default function Page() {
    return (
        <main className="page">
            <section>
                <h1></h1>
                <p>
                    Une bonne démonstration ne se limite pas à montrer l’application qui tourne. L’enseignant et le client doivent
                    aussi pouvoir voir comment vous avez organisé votre travail et documenté votre projet.
                </p>
                <p>
                    Cette page t’aide à vérifier que tes principaux artefacts (Jira, GitHub, dossier de conception, stratégie de
                    tests) sont à jour, cohérents avec ce que tu présentes, et facilement accessibles au moment de la revue du
                    sprint 1.
                </p>
            </section>

            <section>
                <h2>Jira : backlog et sprint visibles</h2>
                <p>
                    Jira doit refléter ce que vous avez réellement fait pendant le sprint, pas seulement ce que vous aviez prévu au
                    départ.
                </p>
                <ul>
                    <li>
                        Vérifie que le sprint 1 contient bien les stories sur lesquelles vous avez travaillé (et pas des stories
                        obsolètes ou abandonnées).
                    </li>
                    <li>
                        Mets à jour l’état des stories et des tâches (terminé, en cours, à faire) en fonction de la réalité actuelle.
                    </li>
                    <li>
                        Assure-toi que les descriptions et les critères d’acceptation des stories importantes sont suffisamment
                        clairs pour quelqu’un qui lit Jira pendant la revue.
                    </li>
                    <li>
                        Garde une trace des décisions importantes ou des changements de plan sous forme de commentaires sur les
                        issues concernées.
                    </li>
                </ul>
            </section>

            <section>
                <h2>GitHub : code et structure du dépôt</h2>
                <p>
                    Le dépôt GitHub sert de référence pour ton code et ta documentation. Il doit donner une image fidèle de l’état
                    du projet à la fin du sprint 1.
                </p>
                <ul>
                    <li>
                        Vérifie que toutes les branches importantes ont été fusionnées ou, au minimum, poussées sur GitHub et
                        clairement identifiées.
                    </li>
                    <li>
                        Assure-toi que la structure du dépôt est en place (<code>src/</code>, <code>docs/</code>,{" "}
                        <code>tests/</code>, etc.) et qu’elle correspond à ce que vous avez présenté dans le cours.
                    </li>
                    <li>
                        Confirme que le code compile (ou s’exécute) à partir de la branche principale que vous allez utiliser pour
                        la démo.
                    </li>
                    <li>
                        Vérifie que les fichiers importants (documentation, scripts, configuration de base) sont présents et bien
                        rangés.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Dossier de conception : refléter l’état du projet</h2>
                <p>
                    Le dossier de conception doit correspondre à ce que vous avez effectivement mis en place dans le sprint 1, même
                    s’il n’est pas complet.
                </p>
                <ul>
                    <li>
                        Mets à jour les diagrammes qui concernent les fonctionnalités livrées (cas d’utilisation, classes,
                        séquences, objets, etc. selon ce que vous avez fait).
                    </li>
                    <li>
                        Ajoute, si nécessaire, quelques précisions sur l’architecture réellement implantée (si elle a évolué depuis
                        les premières idées).
                    </li>
                    <li>
                        Vérifie que les fichiers du dossier de conception sont bien dans <code>docs/</code> et faciles à ouvrir
                        pendant la revue.
                    </li>
                    <li>
                        Fais le lien, dans le texte ou les titres, entre certains diagrammes et les fonctionnalités que tu vas
                        démontrer.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Stratégie de tests et tests unitaires</h2>
                <p>
                    Ta stratégie de tests et tes tests unitaires sont une partie importante de la qualité de ton projet, même si
                    tout n’est pas encore couvert.
                </p>
                <ul>
                    <li>
                        Relis ton document de stratégie de tests pour t’assurer qu’il couvre au moins les fonctionnalités livrées
                        dans le sprint 1.
                    </li>
                    <li>
                        Vérifie que certains scénarios décrits dans la stratégie sont effectivement implémentés sous forme de tests
                        unitaires.
                    </li>
                    <li>
                        Assure-toi que les tests unitaires peuvent être exécutés facilement (et idéalement qu’ils passent) pour
                        pouvoir le montrer ou le mentionner pendant la revue.
                    </li>
                    <li>
                        Mets à jour le document si des décisions importantes ont été prises concernant ce qui est testé ou non.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Accessibilité pour l’enseignant et le client</h2>
                <p>
                    Tous ces artefacts ne servent à rien s’ils ne sont pas accessibles au moment de la revue de sprint.
                </p>
                <ul>
                    <li>
                        Vérifie que l’enseignant a toujours accès à votre projet Jira avec les bons droits.
                    </li>
                    <li>
                        Vérifie que l’enseignant a accès à votre dépôt GitHub privé (ajout comme collaborateur avec les droits
                        nécessaires).
                    </li>
                    <li>
                        Prépare une courte liste de liens utiles (Jira, GitHub, dossier de conception, stratégie de tests) que tu
                        pourras partager ou utiliser pendant la présentation.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Ce que ton équipe devrait avoir préparé</h2>
                <ul>
                    <li>
                        Un projet Jira à jour, qui reflète fidèlement l’état du sprint 1 (stories, tâches, commentaires).
                    </li>
                    <li>
                        Un dépôt GitHub propre, avec la bonne structure et un code qui représente l’état livré pour le sprint 1.
                    </li>
                    <li>
                        Un dossier de conception et une stratégie de tests mis à jour pour les fonctionnalités que vous allez
                        démontrer.
                    </li>
                    <li>
                        Des liens vérifiés vers tous ces artefacts, pour pouvoir les consulter facilement pendant la revue.
                    </li>
                </ul>
            </section>
        </main>
    );
}
