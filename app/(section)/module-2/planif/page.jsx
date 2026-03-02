/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Planification du projet (Gantt)",
    description: "Utiliser un diagramme de Gantt pour planifier le projet intégrateur dans un contexte agile.",
    keywords: ["planification", "Gantt", "GanttProject", "MS Project", "agile"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Pourquoi planifier avec un diagramme de Gantt ?</h2>
            <p>
                Même si on travaille en mode agile avec Scrum, on a quand même besoin d’une vision globale du projet dans le temps :
                grandes étapes, jalons, livrables importants, etc. Un diagramme de Gantt te permet de visualiser cette planification
                sur toute la session.
            </p>
            <p>
                Tu peux utiliser un outil comme <strong>GanttProject</strong>, <strong>Microsoft Project</strong> ou un autre
                logiciel similaire pour construire cette vue d’ensemble (tâches, dates, durées, dépendances, ressources).
            </p>
        </section>

        <section>
            <h2>Gantt ≠ cascade figée</h2>
            <p>
                Le diagramme de Gantt n’est pas là pour verrouiller ton projet de façon rigide comme dans une approche en cascade.
                Au contraire, il doit rester <strong>évolutif</strong> et refléter le fait que tu travailles en itérations.
            </p>
            <ul>
                <li>Les phases du projet peuvent se chevaucher (conception et développement en parallèle pendant les sprints).</li>
                <li>Le plan peut être ajusté au fil du temps, en fonction de la rétroaction et de l’avancement réel.</li>
                <li>Les dépendances entre tâches servent à repérer les points critiques, pas à figer définitivement l’ordre de tout.</li>
            </ul>
            <p>
                L’idée est d’avoir une <em>carte</em> du projet, pas une prison.
            </p>
        </section>

        <section>
            <h2>Ce que ta planification doit contenir</h2>
            <p>
                Ta planification doit être complète, détaillée et cohérente avec le fait que tu travailles en agile.
            </p>
            <ul>
                <li>Les grandes phases (analyse, cahier des charges, conception, développement, tests, préparation de la présentation…).</li>
                <li>Les <strong>3 sprints de 4 semaines</strong> (de la semaine 3 à la semaine 14) clairement identifiés.</li>
                <li>Des tâches associées à chaque sprint (ce qui est prévu dans chaque période).</li>
                <li>Les dates, durées et éventuellement les dépendances entre certaines tâches.</li>
                <li>Les ressources principales (qui est responsable de quoi dans l’équipe).</li>
            </ul>
            <p>
                On doit pouvoir regarder ton diagramme et comprendre comment le projet avance dans le temps et quand les grandes
                étapes/livrables sont prévus.
            </p>
        </section>

        <section>
            <h2>Planifier dans un contexte agile</h2>
            <p>
                Pour rester cohérent avec Scrum, ta planification doit montrer :
            </p>
            <ul>
                <li>les sprints comme des blocs de temps (avec leurs objectifs principaux) ;</li>
                <li>que certaines activités se chevauchent (par exemple, conception et développement pendant les sprints) ;</li>
                <li>les moments importants de revue et de rétroaction (fin de sprint, présentation intermédiaire, etc.).</li>
            </ul>
            <p>
                Tu peux voir chaque sprint comme une « mini-phase » sur le Gantt, avec ses propres tâches, tout en gardant
                une vue globale jusqu’à la fin de la session.
            </p>
        </section>

        <section>
            <h2>En pratique</h2>
            <p>
                Concrètement, pour ce cours, on s’attend à ce que tu :
            </p>
            <ul>
                <li>crées un diagramme de Gantt complet couvrant du début à la fin du projet intégrateur ;</li>
                <li>y indiques les 3 sprints de 4 semaines, les tâches associées et les livrables majeurs ;</li>
                <li>mettes à jour ton plan si des ajustements importants surviennent (tout en respectant les jalons du cours) ;</li>
                <li>utilises ce plan comme support pour discuter de l’avancement avec ton équipe et ton enseignant·e.</li>
            </ul>
            <p>
                Le but n’est pas d’avoir un plan « parfait » dès le départ, mais un plan clair, vivant, qui t’aide vraiment
                à piloter ton projet.
            </p>
        </section>
    </>;
}
