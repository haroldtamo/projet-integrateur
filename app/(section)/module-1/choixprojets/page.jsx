/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Choix du projet et travail en équipe",
    description: "Quelques repères pour choisir un projet en équipe et gérer la collaboration et les conflits.",
    keywords: ["travail d'équipe", "conflits", "choix de projet", "collaboration"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Choisir un projet en équipe</h2>
            <p>
                Le choix du projet se fait en équipe. Ce ne sera pas toujours ton premier choix personnel, et c’est normal : 
                l’objectif est que l’équipe s’entende sur un classement commun.
            </p>
            <p>
                Quand vous discutez des sujets, pensez à :
            </p>
            <ul>
                <li>vos intérêts communs (ce qui motive le plus le groupe) ;</li>
                <li>vos forces (graphisme, communication, technique, organisation, etc.) ;</li>
                <li>le niveau de défi que vous êtes prêts à relever.</li>
            </ul>
            <p>
                L’important est de sortir de la discussion avec une décision claire et acceptée par tout le monde, même si ce n’est
                pas le « projet idéal » pour chacun individuellement.
            </p>
        </section>

        <section>
            <h2>Travail en équipe : ce que ça implique</h2>
            <p>
                Le travail d’équipe ne consiste pas simplement à « se séparer les tâches et les recoller à la fin ». Travailler
                ensemble, c’est mettre en commun des idées, des compétences et des points de vue pour arriver à un résultat plus
                solide que si chacun travaillait seul.
            </p>
            <p>
                Cela suppose que chaque membre :
            </p>
            <ul>
                <li>se prépare et fait sa part ;</li>
                <li>communique de façon honnête et respectueuse ;</li>
                <li>accepte de négocier, d’ajuster ses idées et de chercher des compromis ;</li>
                <li>reste concentré sur les objectifs communs du projet.</li>
            </ul>
        </section>

        <section>
            <h2>Quelques types de conflits fréquents</h2>
            <p>
                Même dans une bonne équipe, des tensions peuvent apparaître. Par exemple :
            </p>
            <ul>
                <li>
                    <strong>Organisation et fonctionnement</strong> : retards, absences, difficulté à trouver des moments pour se
                    voir, répartition floue des tâches.
                </li>
                <li>
                    <strong>Contenu du travail</strong> : désaccords sur les idées, les objectifs, la qualité attendue, la façon de
                    présenter le projet.
                </li>
                <li>
                    <strong>Façons de travailler</strong> : différences de rythme, de style (perfectionnisme, laisser-aller, etc.),
                    personnalités qui s’entrechoquent.
                </li>
                <li>
                    <strong>Différences de parcours ou de culture</strong> : visions différentes du travail, des priorités, des 
                    valeurs, qui peuvent créer des malentendus.
                </li>
            </ul>
            <p>
                Le conflit n’est pas forcément un échec : c’est la façon dont on le gère qui fait la différence.
            </p>
        </section>

        <section>
            <h2>Comment gérer un conflit dans ton équipe ?</h2>
            <p>
                Plus on attend, plus un conflit risque de s’envenimer. Il vaut mieux intervenir tôt, calmement, dès qu’on
                sent que quelque chose ne va pas.
            </p>
            <ul>
                <li>
                    <strong>Clarifie le problème</strong> : explique ce qui te pose difficulté avec des faits concrets (comportements,
                    situations) plutôt qu’avec des jugements.
                </li>
                <li>
                    <strong>Exprime ton point de vue</strong> : dis ce que tu as ressenti et ce que tu aimerais voir changer, en
                    restant respectueux.
                </li>
                <li>
                    <strong>Cherche un terrain d’entente</strong> : recentre la discussion sur les objectifs communs du projet et
                    sur ce qui est faisable pour tout le monde.
                </li>
                <li>
                    <strong>Réajuste l’organisation</strong> : au besoin, modifiez la répartition des tâches, les échéances ou la
                    façon de communiquer.
                </li>
            </ul>
            <p>
                Si la situation bloque vraiment, n’hésite pas à en parler à ton enseignant·e assez tôt pour qu’il ou elle puisse
                t’aider à trouver des solutions.
            </p>
        </section>

        <section>
            <h2>À retenir</h2>
            <p>
                Un bon travail d’équipe peut mener à des résultats très solides, développer ton réseau et t’aider à acquérir des
                compétences utiles pour la suite (communication, gestion de conflits, organisation, etc.).
            </p>
            <p>
                Mais cela demande des efforts de communication, du respect mutuel et une vraie volonté de collaborer. Le projet
                intégrateur est aussi une occasion de pratiquer ces compétences, pas seulement de produire un livrable.
            </p>
        </section>
    </>;
}
