/**
 * @type {import("next").Metadata}
 */

export const metadata = {
    title: "Démarrage du premier sprint",
    description:
        "Comprendre comment démarrer le premier sprint : affiner le backlog, définir l’objectif de sprint, découper en tâches et organiser le travail de l’équipe.",
    keywords: ["sprint 1", "Scrum", "sprint planning", "backlog"],
    group: "notes",
};

export default function Page() {
    return (
        <main className="page">
            <section>
                <h1>Démarrer le 1er sprint</h1>
                <p>
                    Dans ce module, tu vois comment démarrer concrètement ton premier sprint. L’idée est de passer du backlog
                    « global » de ton projet à un plan de travail réaliste pour les prochaines semaines, avec un objectif de sprint
                    clair et des tâches concrètes pour chaque membre de l’équipe.
                </p>
                <p>
                    Tu vas apprendre à affiner et prioriser ton backlog pour le sprint 1, définir un objectif de sprint atteignable,
                    découper les user stories en tâches techniques et organiser le travail dans Jira pour que ton équipe sache quoi
                    faire dès le début du sprint.
                </p>
            </section>

            <section>
                <h2>Rappels sur le sprint</h2>
                <ul>
                    <li>
                        Un sprint est une période de temps fixe (timebox) pendant laquelle l’équipe se concentre sur un objectif de
                        sprint précis.
                    </li>
                    <li>
                        À la fin du sprint, l’équipe doit être capable de présenter un incrément fonctionnel du produit (quelque
                        chose qui fonctionne vraiment, même si c’est partiel).
                    </li>
                    <li>
                        Le sprint 1 sert souvent à mettre en place les fondations du projet : fonctionnalités de base, architecture,
                        premières interfaces, etc.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Choisir l’objectif du sprint 1</h2>
                <p>
                    Avant de remplir ton sprint de tâches, tu dois décider ce que tu veux avoir accompli à la fin du sprint 1. Cet
                    objectif doit être compréhensible par ton client ou ton enseignant.
                </p>
                <ul>
                    <li>
                        Discutez en équipe de ce qui est le plus important à montrer à la fin du sprint 1 (par exemple, un premier
                        scénario de bout en bout qui fonctionne).
                    </li>
                    <li>
                        Formulez un objectif de sprint simple et clair (une phrase ou deux) que vous pourrez réutiliser lors de la
                        revue de sprint.
                    </li>
                    <li>
                        Vérifiez que l’objectif est réaliste par rapport au temps disponible et à la capacité de votre équipe.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Affiner et sélectionner le backlog pour le sprint 1</h2>
                <p>
                    À partir de ton backlog global, tu dois choisir quelles user stories feront partie du sprint 1, en fonction de
                    ton objectif de sprint.
                </p>
                <ul>
                    <li>
                        Identifiez dans le backlog les stories nécessaires pour atteindre l’objectif du sprint 1 (et seulement
                        celles-là).
                    </li>
                    <li>
                        Vérifiez que chaque story sélectionnée est suffisamment claire : description, critères d’acceptation, lien
                        avec le besoin du client.
                    </li>
                    <li>
                        Priorisez les stories du sprint 1 (les plus importantes en haut), au cas où vous manqueriez de temps.
                    </li>
                    <li>
                        Déplacez les stories retenues dans le sprint 1 dans Jira (ou marquez-les clairement comme faisant partie du
                        sprint).
                    </li>
                </ul>
            </section>

            <section>
                <h2>Découper les stories en tâches techniques</h2>
                <p>
                    Une fois les stories choisies, il faut les découper en tâches plus petites et plus techniques, que les membres
                    de l’équipe pourront prendre en charge.
                </p>
                <ul>
                    <li>
                        Pour chaque story sélectionnée, listez les tâches nécessaires (ex. « concevoir l’interface », « implémenter
                        la logique côté serveur », « écrire les tests unitaires », etc.).
                    </li>
                    <li>
                        Essayez d’avoir des tâches de taille raisonnable (ni trop grosses, ni microscopiques), qui tiennent sur
                        quelques heures ou une journée.
                    </li>
                    <li>
                        Créez ces tâches dans Jira et liez-les à la story correspondante pour garder une vue claire de l’avancement.
                    </li>
                    <li>
                        Assignez les tâches aux membres de l’équipe ou décidez ensemble de qui prend quoi au début du sprint.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Organiser le travail au quotidien</h2>
                <p>
                    Le démarrage du sprint 1, ce n’est pas seulement remplir un tableau : c’est aussi décider comment vous allez
                    travailler ensemble au jour le jour.
                </p>
                <ul>
                    <li>
                        Mettez en place un rythme de rencontres courtes (daily ou point d’équipe) pour suivre l’avancement et lever
                        les blocages.
                    </li>
                    <li>
                        Décidez comment vous utiliserez Jira au quotidien : mise à jour des tâches, changement de colonnes, ajout de
                        commentaires, etc.
                    </li>
                    <li>
                        Vérifiez que chaque membre de l’équipe sait quelles tâches il ou elle doit commencer en début de sprint.
                    </li>
                    <li>
                        Assurez-vous que Git et GitHub sont prêts pour le sprint (branches, accès, structure du dépôt) afin d'éviter les problèmes techniques de base.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Ce que tu dois avoir à la fin</h2>
                <ul>
                    <li>
                        Un objectif de sprint 1 formulé clairement et partagé par toute l’équipe.
                    </li>
                    <li>
                        Un sprint 1 configuré dans Jira, avec les stories sélectionnées et priorisées.
                    </li>
                    <li>
                        Des tâches techniques créées, liées aux stories, et prêtes à être prises en charge par les membres de
                        l’équipe.
                    </li>
                    <li>
                        Une organisation minimale pour le travail au quotidien (rencontres, utilisation de Jira, utilisation de Git
                        et GitHub).
                    </li>
                </ul>
            </section>
        </main>
    );
}
