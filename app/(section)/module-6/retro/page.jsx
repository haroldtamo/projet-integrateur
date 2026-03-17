export const metadata = {
    title: "Rétrospective et mise à jour du backlog",
    description:
        "Mener une rétrospective d’équipe après le sprint 1 et mettre à jour le backlog pour préparer le sprint suivant.",
    keywords: ["rétrospective", "sprint 1", "amélioration continue", "backlog"],
    group: "notes",
};

export default function Page() {
    return (
        <main className="page">
            <section>
                <h1></h1>
                <p>
                    Après la revue de sprint, il est important de prendre un moment en équipe pour réfléchir à la façon dont le
                    sprint s’est déroulé et décider comment vous voulez travailler pour la suite.
                </p>
                <p>
                    Cette page t’explique comment mener une rétrospective simple et comment mettre à jour ton backlog dans Jira
                    pour refléter l’état réel du projet et préparer le sprint 2.
                </p>
            </section>

            <section>
                <h2>Pourquoi faire une rétrospective ?</h2>
                <ul>
                    <li>
                        Identifier ce qui a bien fonctionné pendant le sprint pour pouvoir le garder et le renforcer.
                    </li>
                    <li>
                        Repérer ce qui a moins bien fonctionné (organisation, communication, techniques) pour l’améliorer.
                    </li>
                    <li>
                        Décider 1–2 actions concrètes à mettre en place dès le prochain sprint (plutôt que de rester dans des
                        généralités).
                    </li>
                </ul>
            </section>

            <section>
                <h2>Format simple de rétrospective</h2>
                <p>
                    Tu n’as pas besoin d’un atelier complexe : un format léger mais honnête suffit pour ce cours.
                </p>
                <ul>
                    <li>
                        <strong>Ce qu’on garde</strong> : listez 2–3 choses qui ont bien fonctionné (ex. utilisation de Jira,
                        communication, organisation des réunions, etc.).
                    </li>
                    <li>
                        <strong>Ce qu’on veut améliorer</strong> : listez 2–3 aspects qui ont posé problème (ex. gestion du temps,
                        manque de tests, branches Git mal gérées, etc.).
                    </li>
                    <li>
                        <strong>Actions concrètes</strong> : choisissez 1–2 actions précises à appliquer dès le sprint 2 (ex. fixer
                        un daily court, écrire des tests pour les modules critiques, mieux préparer les revues de code).
                    </li>
                </ul>
            </section>

            <section>
                <h2>Documenter ta rétrospective</h2>
                <p>
                    La rétrospective doit laisser une trace pour que vous puissiez vous y référer plus tard (et pour que
                    l’enseignant voie votre démarche).
                </p>
                <ul>
                    <li>
                        Créez une issue dédiée dans Jira (par exemple « Rétrospective – Sprint 1 ») ou un petit document dans{" "}
                        <code>docs/</code>.
                    </li>
                    <li>
                        Notez-y brièvement ce que vous gardez, ce que vous voulez améliorer et les actions concrètes décidées.
                    </li>
                    <li>
                        Assignez les actions à des membres de l’équipe et/ou créez des tâches associées dans le backlog du sprint 2.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Mettre à jour le backlog après le sprint 1</h2>
                <p>
                    La fin du sprint 1 est un bon moment pour remettre ton backlog en ordre avant d’attaquer le sprint 2.
                </p>
                <ul>
                    <li>
                        Marque comme terminées les stories réellement complétées pendant le sprint (en vérifiant que les critères
                        d’acceptation sont bien remplis).
                    </li>
                    <li>
                        Pour les stories commencées mais non terminées, décide si tu les scindes (partie faite / partie à faire) ou
                        si tu les reportes telles quelles au sprint suivant.
                    </li>
                    <li>
                        Ajoute au backlog les nouvelles idées ou besoins identifiés pendant la revue (par exemple des
                        améliorations, des corrections, des ajustements).
                    </li>
                    <li>
                        Revois rapidement les priorités pour préparer la sélection des stories du sprint 2.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Lier la rétrospective au backlog</h2>
                <p>
                    La rétrospective n’a de valeur que si elle débouche sur des changements concrets dans la façon de travailler.
                </p>
                <ul>
                    <li>
                        Pour chaque action décidée en rétro, crée une tâche ou une story dans Jira (par exemple « Mettre en place un
                        daily de 10 minutes » ou « Ajouter des tests unitaires pour le module X »).
                    </li>
                    <li>
                        Inclue certaines de ces actions dans le sprint 2, au même titre que des fonctionnalités pour le client.
                    </li>
                    <li>
                        Lors de la rétro du sprint 2, reviens voir si ces actions ont été réalisées et si elles ont aidé.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Ce que tu dois avoir après cette étape</h2>
                <ul>
                    <li>
                        Une rétrospective de sprint 1 documentée (issue ou document) avec points positifs, points à améliorer et
                        actions concrètes.
                    </li>
                    <li>
                        Un backlog Jira mis à jour : stories terminées clairement identifiées, stories reportées ou ajustées, nouvelles
                        stories ajoutées si nécessaire.
                    </li>
                    <li>
                        Quelques actions d’amélioration prêtes à être prises en compte dans la préparation du sprint 2.
                    </li>
                </ul>
            </section>
        </main>
    );
}
