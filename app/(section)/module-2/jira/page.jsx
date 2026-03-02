/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Organisation et suivi du projet (Jira)",
    description: "Introduction à Jira comme outil de gestion du backlog, des sprints et des tâches pour le projet intégrateur.",
    keywords: ["Jira", "gestion de projet", "backlog", "Scrum", "user stories"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Pourquoi utiliser Jira dans ce projet ?</h2>
            <p>
                Jira est un outil de gestion de projet largement utilisé en industrie pour suivre les tâches, gérer un backlog
                et organiser le travail en Scrum (backlog, sprints, tableaux, rapports, etc.).
            </p>
            <p>
                Dans le projet intégrateur, Jira va te servir à :
            </p>
            <ul>
                <li>centraliser toutes les tâches du projet (backlog) ;</li>
                <li>organiser le travail de ton équipe par sprints ;</li>
                <li>voir qui fait quoi et où vous en êtes dans l’avancement ;</li>
                <li>garder une trace des décisions, commentaires et rétroactions.</li>
            </ul>
        </section>

        <section>
            <h2>De ton cahier des charges à ton backlog Jira</h2>
            <p>
                Le cahier des charges te donne une vue globale du projet (contexte, besoins, fonctionnalités, contraintes).
                À partir de ce document, tu vas :
            </p>
            <ul>
                <li>identifier les principales fonctionnalités et exigences ;</li>
                <li>les traduire en <strong>user stories</strong> ou en tâches dans Jira ;</li>
                <li>les organiser dans ton <strong>Product Backlog</strong>.</li>
            </ul>
            <p>
                Une user story, c’est généralement une petite description d’un besoin utilisateur, par exemple :
                « En tant que [type d’utilisateur], je veux [objectif] afin de [bénéfice]. »
            </p>
        </section>

        <section>
            <h2>Les éléments de base dans Jira</h2>
            <p>
                Pour ce projet, tu utiliseras surtout les fonctionnalités suivantes de Jira :
            </p>
            <ul>
                <li>
                    <strong>Projets</strong> : ton équipe travaille dans un projet Jira dédié au projet intégrateur.
                </li>
                <li>
                    <strong>Issues</strong> (tâches) : chaque élément de travail est une « issue » (par exemple de type Story,
                    Task, Bug, etc.).
                </li>
                <li>
                    <strong>Product Backlog</strong> : la liste de toutes les issues à réaliser pour compléter le projet.
                </li>
                <li>
                    <strong>Tableau Scrum</strong> : une vue Kanban avec des colonnes (par exemple À faire / En cours / Terminé)
                    qui te permet de suivre l’avancement des tâches.
                </li>
                <li>
                    <strong>Sprints</strong> : périodes de travail (4 semaines dans ce cours) pendant lesquelles vous sélectionnez
                    certaines issues du backlog à réaliser.
                </li>
            </ul>
        </section>

        <section>
            <h2>Comment tu vas l’utiliser concrètement</h2>
            <p>
                De façon générale, le flux de travail avec Jira dans ce cours sera le suivant :
            </p>
            <ul>
                <li>À partir du cahier des charges, tu crées des user stories et des tâches dans ton backlog Jira.</li>
                <li>Au début de chaque sprint, ton équipe choisit les éléments à réaliser et les place dans le sprint en cours.</li>
                <li>Chaque membre prend en charge certaines tâches et les fait avancer sur le tableau (À faire → En cours → Terminé).</li>
                <li>À la fin du sprint, vous faites le point sur ce qui est terminé et ce qui doit être reporté.</li>
            </ul>
            <p>
                L’objectif n’est pas de faire un « Jira parfait », mais de l’utiliser pour rendre ton travail d’équipe plus clair
                et plus organisé.
            </p>
        </section>
                <section>
            <h2>Reporter vos rencontres Scrum dans Jira</h2>
            <p>
                Dans ce projet, toutes vos rencontres importantes liées à Scrum doivent laisser une trace dans Jira. L’objectif
                est que l’on puisse suivre votre démarche, pas seulement le résultat final.
            </p>
            <p>
                Concrètement, pour chaque type de rencontre :
            </p>
            <ul>
                <li>
                    <strong>Sprint planning</strong> : notez les objectifs du sprint et les user stories / tâches que vous avez
                    décidé d’inclure (par exemple dans un champ de description, un commentaire, ou une issue dédiée au sprint).
                </li>
                <li>
                    <strong>Daily / points d’équipe</strong> : consignez les décisions importantes, les blocages identifiés et
                    les ajustements faits au plan (commentaire sur les tâches concernées ou note rapide dans une issue de suivi).
                </li>
                <li>
                    <strong>Sprint review</strong> : indiquez ce qui a été réellement livré pendant le sprint et les principaux
                    commentaires/recommandations reçus.
                </li>
                <li>
                    <strong>Rétrospective</strong> : gardez une trace de 1–2 choses à continuer, 1–2 choses à améliorer pour
                    le prochain sprint (par exemple dans une issue « Rétrospective – Sprint X »).
                </li>
            </ul>
            <p>
                Ces traces dans Jira permettent à ton équipe, à ton enseignant·e (et éventuellement au client) de voir comment
                le projet a été géré, pas seulement ce qui a été déposé à la fin.
            </p>
        </section>
        <section>
                <h2>Accès enseignant sur Jira</h2>
                <p>
                    Comme pour GitHub, votre projet Jira doit être accessible à l’enseignant. Ajoutez-le au projet avec un rôle
                    qui lui donne un accès complet (par exemple « Administrators » ou l’équivalent selon la configuration de
                    Jira).
                </p>
                <p>
                    Cet accès complet permet à l’enseignant de consulter votre backlog, vos sprints, vos tâches et le suivi de vos
                    rencontres Scrum directement dans Jira.
                </p>
            </section>


        <section>
            <h2>Bonnes pratiques pour ton équipe</h2>
            <p>
                Pour que Jira reste utile (et ne devienne pas un fardeau), quelques bonnes pratiques :
            </p>
            <ul>
                <li>Garder les tâches assez petites pour être réalisables dans un sprint.</li>
                <li>Donner des titres clairs et des descriptions suffisantes pour que tout le monde comprenne.</li>
                <li>Mettre à jour régulièrement le statut des tâches (ne pas laisser tout « À faire » jusqu’à la fin).</li>
                <li>Utiliser les commentaires pour garder une trace des décisions et des questions.</li>
            </ul>
            <p>
                Plus votre tableau Jira reflète la réalité, plus il sera utile pour vous et pour le suivi du projet.
            </p>
        </section>

    </>;
}
