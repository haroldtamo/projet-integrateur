export const metadata = {
    title: "Démarrer le sprint 2",
    description:
        "S’appuyer sur le sprint 1 pour planifier et lancer le sprint 2 : objectif de sprint, backlog mis à jour, conception, tests et documentation.",
    keywords: ["sprint 2", "démarrage", "backlog", "planification"],
    group: "notes",
};

export default function Page() {
    return (
        <main className="page">
            <section>
                <h1></h1>
                <p>
                    Le sprint 2 ne se démarre pas comme le tout premier sprint d’un projet. Tu disposes déjà d’un produit partiel, d’un
                    backlog mis à jour, d’une rétrospective du sprint 1 et de premières décisions de conception, de tests et de
                    documentation.
                </p>
                <p>
                    Cette page te guide pour utiliser ces informations afin de bien préparer et lancer ton sprint 2.
                </p>
            </section>

            <section>
                <h2>1. Relire le sprint 1</h2>
                <p>
                    Avant de choisir ce que tu vas faire au sprint 2, prends quelques minutes pour regarder en arrière ce qui s’est
                    passé au sprint 1.
                </p>
                <ul>
                    <li>
                        Quels objectifs du sprint 1 ont été atteints, lesquels ne l’ont pas été ?
                    </li>
                    <li>
                        Quelles décisions importantes ont été prises sur la conception, les tests et la documentation ?
                    </li>
                    <li>
                        Qu’est-ce qui a bien fonctionné dans l’organisation de l’équipe, et qu’est-ce qui a posé problème ?
                    </li>
                </ul>
            </section>

            <section>
                <h2>2. Mettre à jour le backlog avant la planification</h2>
                <p>
                    Le backlog doit être mis à jour avant la planification du sprint 2, pour éviter de perdre du temps en réunion sur
                    des éléments flous ou obsolètes.
                </p>
                <ul>
                    <li>
                        Ajoute de nouvelles user stories ou tâches qui sont apparues pendant le sprint 1 (idées, bugs, améliorations).
                    </li>
                    <li>
                        Ajuste la priorité des éléments en fonction de ce qui est le plus utile pour la suite du projet.
                    </li>
                    <li>
                        Supprime ou reformule les éléments qui ne sont plus pertinents ou trop vagues.
                    </li>
                </ul>
            </section>

            <section>
                <h2>3. Définir l’objectif du sprint 2</h2>
                <p>
                    L’objectif du sprint 2 doit être formulé en une phrase simple que toute l’équipe comprend. Il sert de fil
                    conducteur pour choisir le travail à réaliser.
                </p>
                <ul>
                    <li>
                        Formule un objectif centré sur la valeur pour l’utilisateur (par exemple : « Permettre à l’utilisateur de
                        passer une commande complète »).
                    </li>
                    <li>
                        Vérifie que les user stories que tu sélectionnes servent directement cet objectif.
                    </li>
                    <li>
                        Garde un objectif réaliste : il doit tenir compte de ce que tu as appris sur la capacité de l’équipe au
                        sprint 1.
                    </li>
                </ul>
            </section>

            <section>
                <h2>4. Choisir le travail du sprint 2</h2>
                <p>
                    Une fois l’objectif défini, tu sélectionnes dans le backlog les éléments que l’équipe s’engage à réaliser pendant
                    le sprint 2.
                </p>
                <ul>
                    <li>
                        Choisis des user stories qui contribuent à l’objectif du sprint 2 et qui sont suffisamment claires pour être
                        commencées.
                    </li>
                    <li>
                        Ajoute aussi des tâches d’amélioration issues de la rétrospective (organisation, qualité, tests,
                        documentation).
                    </li>
                    <li>
                        Découpe les stories en tâches techniques pour faciliter la répartition du travail dans l’équipe.
                    </li>
                </ul>
            </section>

            <section>
                <h2>5. Penser à la conception, aux tests et à la documentation dès le début</h2>
                <p>
                    Le démarrage du sprint 2 est le moment idéal pour rappeler que la conception, les tests et la documentation doivent
                    avancer en même temps que le code.
                </p>
                <ul>
                    <li>
                        Ajoute des tâches pour mettre à jour les diagrammes ou la conception si les stories du sprint modifient
                        l’architecture ou les données.
                    </li>
                    <li>
                        Ajoute des tâches de tests (scénarios de tests manuels ou automatisés) liées aux nouvelles fonctionnalités.
                    </li>
                    <li>
                        Planifie un début ou une mise à jour de la documentation dans le dossier <code>docs/</code> (technique et
                        utilisateur).
                    </li>
                </ul>
            </section>

            <section>
                <h2>6. Check-list avant de lancer le sprint 2</h2>
                <p>
                    Avant de dire « on démarre », vérifie quelques points simples.
                </p>
                <ul>
                    <li>
                        Le backlog a été nettoyé et priorisé pour le sprint 2.
                    </li>
                    <li>
                        L’objectif du sprint 2 est formulé clairement et compris par tout le monde.
                    </li>
                    <li>
                        Les user stories sélectionnées sont découpées en tâches techniques.
                    </li>
                    <li>
                        Des tâches pour la conception, les tests et la documentation sont présentes dans le sprint, pas seulement du
                        code.
                    </li>
                </ul>
            </section>
        </main>
    );
}
