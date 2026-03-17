export const metadata = {
    title: "Labo – Faire le bilan du sprint 1",
    description:
        "Labo du module 6 : mener une rétrospective d’équipe et mettre à jour le backlog après le sprint 1.",
    keywords: ["labo", "sprint 1", "rétrospective", "backlog"],
    group: "labs",
};

export default function Page() {
    return (
        <main className="page">
            <section>
                <h1></h1>
                <p>
                    Dans ce labo, ton équipe formalise la clôture du sprint 1. L’objectif est de prendre un moment pour réfléchir à
                    la façon dont le sprint s’est déroulé et de mettre à jour votre backlog pour préparer le sprint 2.
                </p>
                <p>
                    Suis les étapes ci-dessous avec ton équipe et assure-toi que le résultat est visible dans Jira (et, au besoin,
                    dans votre dossier <code>docs/</code>).
                </p>
            </section>

            <section>
                <h2>Étape 1 – Rétrospective d’équipe</h2>
                <ol>
                    <li>
                        Réunissez l’équipe (sans l’enseignant) pour discuter du sprint 1, juste après la revue de sprint si
                        possible.
                    </li>
                    <li>
                        Sur un tableau, un document partagé ou une issue Jira, créez trois zones :
                        <ul>
                            <li>
                                <strong>Ce qu’on garde</strong> (ce qui a bien fonctionné).
                            </li>
                            <li>
                                <strong>Ce qu’on veut améliorer</strong> (ce qui a posé problème).
                            </li>
                            <li>
                                <strong>Actions concrètes</strong> (ce qu’on va changer dès le sprint 2).
                            </li>
                        </ul>
                    </li>
                    <li>
                        Chaque membre de l’équipe propose au moins une idée dans les deux premières colonnes, puis vous discutez
                        ensemble pour garder les éléments les plus importants.
                    </li>
                    <li>
                        À partir de ces éléments, définissez 1 à 3 actions concrètes que vous vous engagez à mettre en place au
                        sprint 2.
                    </li>
                </ol>
            </section>

            <section>
                <h2>Étape 2 – Documenter la rétrospective</h2>
                <ol>
                    <li>
                        Créez une issue dans Jira (par exemple « Rétrospective – Sprint 1 ») ou un document dans{" "}
                        <code>docs/</code> pour garder une trace de votre rétro.
                    </li>
                    <li>
                        Notez-y, en quelques points :
                        <ul>
                            <li>2–3 éléments à garder (forces du sprint).</li>
                            <li>2–3 éléments à améliorer.</li>
                            <li>Les actions concrètes décidées pour le sprint 2.</li>
                        </ul>
                    </li>
                    <li>
                        Si vous utilisez Jira, assignez l’issue de rétro à un membre de l’équipe responsable de suivre ces actions.
                    </li>
                </ol>
            </section>

            <section>
                <h2>Étape 3 – Mettre à jour les stories du sprint 1</h2>
                <ol>
                    <li>
                        Ouvrez le sprint 1 dans Jira et passez en revue toutes les stories et tâches.
                    </li>
                    <li>
                        Marquez comme terminées les stories pour lesquelles les critères d’acceptation sont vraiment remplis.
                    </li>
                    <li>
                        Pour les stories commencées mais non terminées :
                        <ul>
                            <li>
                                Décidez si vous les scindez en deux (partie faite / partie à faire) ou si vous les reportez
                                telles quelles au prochain sprint.
                            </li>
                            <li>
                                Ajoutez un commentaire pour expliquer ce qui a été fait et ce qui reste à faire.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Fermez officiellement le sprint 1 dans Jira lorsque l’état des stories reflète la réalité.
                    </li>
                </ol>
            </section>

            <section>
                <h2>Étape 4 – Ajouter les nouvelles stories pour la suite</h2>
                <ol>
                    <li>
                        À partir de la revue de sprint et de la rétro, listez les nouvelles idées ou besoins qui sont apparus
                        (améliorations, corrections, ajustements, actions d’organisation).
                    </li>
                    <li>
                        Créez de nouvelles stories ou tâches dans le backlog Jira pour ces éléments (en les distinguant des
                        fonctionnalités « métier » si nécessaire).
                    </li>
                    <li>
                        Donnez-leur une priorité et, si possible, un lien avec les stories ou événements du sprint 1 qui les ont
                        motivées.
                    </li>
                </ol>
            </section>

            <section>
                <h2>Étape 5 – Lier les actions d’amélioration au sprint 2</h2>
                <ol>
                    <li>
                        Pour chaque action concrète décidée en rétro (par exemple « ajouter des tests unitaires sur X », « mieux
                        préparer les daily », etc.), créez une tâche dédiée dans Jira.
                    </li>
                    <li>
                        Placez certaines de ces tâches dans le backlog du prochain sprint, au même titre que des fonctionnalités
                        pour le client.
                    </li>
                    <li>
                        Assignez ces tâches à des membres de l’équipe et assurez-vous qu’elles seront discutées lors de la
                        préparation du sprint 2.
                    </li>
                </ol>
            </section>

            <section>
                <h2>À remettre pour ce labo</h2>
                <ul>
                    <li>
                        Un lien vers l’issue ou le document de rétrospective du sprint 1 (avec ce que vous gardez, ce que vous
                        améliorez et les actions concrètes).
                    </li>
                    <li>
                        Un lien vers votre projet Jira montrant :
                        <ul>
                            <li>Le sprint 1 clôturé avec des stories mises à jour.</li>
                            <li>De nouvelles stories ou tâches ajoutées au backlog à la suite de la revue et de la rétro.</li>
                        </ul>
                    </li>
                    <li>
                        Une courte description (quelques lignes) des principales décisions que vous avez prises pour améliorer
                        votre façon de travailler au sprint 2.
                    </li>
                </ul>
            </section>
        </main>
    );
}
