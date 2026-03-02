/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Scrum et gestion agile",
    description: "Rappel des bases de Scrum et de la façon dont il sera utilisé dans le projet intégrateur.",
    keywords: ["scrum", "agile", "gestion de projet", "backlog", "sprint"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Scrum dans le projet intégrateur</h2>
            <p>
                Tu as déjà vu Scrum dans le cours Analyse et conception des systèmes. On ne va donc pas tout revoir en détail ici,
                mais plutôt te rappeler l’essentiel et te montrer comment on va l’utiliser concrètement dans le projet intégrateur.
            </p>
            <p>
                Scrum est un cadre de travail agile qui découpe le projet en petits blocs de temps appelés <strong>sprints</strong>,
                avec des objectifs clairs et des livrables à chaque itération. Dans ce cours, il va surtout te servir à organiser
                ton travail d’équipe et à faire avancer ton projet par étapes.
            </p>
        </section>

        <section>
            <h2>Les rôles</h2>
            <p>
                On garde l’esprit de Scrum, mais adapté à un projet de cours.
            </p>
            <ul>
                <li>
                    <strong>Product Owner</strong> : représente le client et les besoins du projet. Ici, ce rôle est principalement
                    joué par le client et l’enseignant·e, qui précisent les attentes et les priorités.
                </li>
                <li>
                    <strong>Scrum Master</strong> : aide l’équipe à rester organisée, à enlever les obstacles et à améliorer sa façon
                    de travailler. Ce rôle peut être pris par un membre de l’équipe (éventuellement à tour de rôle) avec l’appui
                    de l’enseignant·e.
                </li>
                <li>
                    <strong>Équipe de développement</strong> : c’est ton équipe de projet. Vous êtes responsables de planifier
                    les tâches du sprint et de livrer ce qui a été prévu.
                </li>
            </ul>
        </section>

        <section>
            <h2>Les artefacts que tu vas utiliser</h2>
            <p>
                Tu as déjà vu les artefacts Scrum en détail. Dans ce cours, on va surtout se concentrer sur :
            </p>
            <ul>
                <li>
                    <strong>Product Backlog</strong> : la liste de tout ce qui doit être fait pour le projet (fonctionnalités,
                    exigences, tâches). Tu vas le construire à partir de ton cahier des charges et de tes user stories.
                </li>
                <li>
                    <strong>Sprint Backlog</strong> : ce que ton équipe décide de réaliser pendant un sprint donné (les éléments
                    du Product Backlog sélectionnés pour cette période).
                </li>
                <li>
                    <strong>Incrément</strong> : ce qui fonctionne réellement à la fin d’un sprint (démontrable à l’enseignant·e
                    ou au client).
                </li>
            </ul>
            <p>
                Le cahier des charges que tu vas préparer dans la page suivante servira de base pour alimenter ton Product Backlog.
            </p>
        </section>

        <section>
            <h2>Les événements Scrum dans le contexte du cours</h2>
            <p>
                Les événements de Scrum (planning, revues, rétrospectives, etc.) seront utilisés de façon allégée, mais l’idée reste la même.
            </p>
            <ul>
                <li>
                    <strong>Sprint</strong> : le projet est découpé en <strong>3 sprints de 4 semaines</strong>, à partir de la semaine 3
            jusqu’à la semaine 14.
                </li>
                <li>
                    <strong>Planificaion de sprint (Sprint Planning)</strong> : au début de chaque sprint, ton équipe décide ce qui sera fait pendant les 4
            semaines à venir, à partir du Product Backlog.
                </li>
                <li>
                    <strong>Points d’équipe réguliers (Daily Scrum)</strong> : courts suivis (en classe ou en dehors) pour voir l’avancement, les blocages
            et les prochaines étapes à l’intérieur du sprint.
                </li>
                <li>
                    <strong>Revue de sprint (Sprint Review)</strong> : à la fin de chaque sprint, vous présentez ce que vous avez effectivement accompli
            (démo, livrables) et vous recevez de la rétroaction.
                </li>
                <li>
                    <strong>Rétrospective (Sprint Retrospective)</strong> : après la revue, vous prenez quelques minutes pour discuter de votre façon de travailler
            (« qu’est-ce qu’on garde, qu’est-ce qu’on change pour le prochain sprint ? »).
                </li>
            </ul>
        </section>

        <section>
            <h2>En lien avec le cahier des charges</h2>
            <p>
                Même si Scrum ne demande pas un gros cahier des charges figé au départ, on va utiliser un cahier des charges
                comme outil de vision globale pour ton projet.
            </p>
            <p>
                La démarche sera donc la suivante :
            </p>
            <ul>
                <li>tu rédiges un cahier des charges pour clarifier le contexte, les objectifs et les grandes exigences ;</li>
                <li>tu traduis ces exigences en user stories dans ton Product Backlog ;</li>
                <li>tu choisis, sprint par sprint, ce que ton équipe va réaliser à partir de ce backlog.</li>
            </ul>
            <p>
                La prochaine page te présente le gabarit de cahier des charges que tu utiliseras pour ton projet.
            </p>
        </section>
    </>;
}
