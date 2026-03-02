/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Labo – Découvrir l’approche par projet",
    description: "Activité pour comparer des projets à des cours classiques et faire ressortir les caractéristiques de l’approche par projet.",
    keywords: ["laboratoire", "projet intégrateur", "pédagogie par projet", "caractéristiques"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Objectif du labo</h2>
            <p>
                Dans ce laboratoire, tu vas découvrir concrètement ce qui distingue un projet d’un cours plus « classique ». 
                Tu vas lire des descriptions de projets, en discuter avec ton équipe et faire ressortir les caractéristiques 
                clés de l’approche par projets.
            </p>
        </section>

        <section>
            <h2>Étape 1 – Découvrir ton projet</h2>
            <p>
                En équipe, on te présente un projet (Projet 1, 2, 3 ou 4 selon la salle ou l’équipe où tu te trouves).
            </p>
            <ul>
                <li>Lis attentivement la description du projet qui t’est attribué.</li>
                <li>Assure-toi que tout le monde dans l’équipe comprend bien le contexte et le mandat.</li>
            </ul>
            <p>
                <strong>Temps suggéré :</strong> 10 minutes.
            </p>

            <h3>Question à discuter en équipe</h3>
            <p>
                Par rapport à un cours plus « classique » (exposés magistraux, exercices sur feuille, examens théoriques) :
            </p>
            <ul>
                <li>Qu’est-ce qui te semble différent dans ce projet ?</li>
                <li>Qu’est-ce qui te frappe ou t’interpelle dans la façon dont le travail est présenté ?</li>
            </ul>
            <p>
                Note tes réponses dans un cadre, un document partagé ou dans ton cahier (par exemple : authenticité de la 
                situation, contact avec un client réel, travail d’équipe, livrables concrets, etc.).
            </p>
        </section>

        <section>
            <h2>Étape 2 – Découvrir un autre projet</h2>
            <p>
                Ensuite, ton équipe prend connaissance d’un <strong>autre</strong> projet (par exemple, celui d’une autre salle ou d’un autre groupe).
            </p>
            <ul>
                <li>Lis la deuxième description de projet.</li>
                <li>Repère à nouveau ce qui le distingue d’un cours plus traditionnel.</li>
            </ul>
            <p>
                <strong>Temps suggéré :</strong> 5 minutes de lecture, puis discussion rapide.
            </p>

            <h3>Discussion</h3>
            <p>
                Compare les deux projets que tu as vus :
            </p>
            <ul>
                <li>Qu’ont-ils en commun dans leur façon de faire travailler les étudiant·e·s ?</li>
                <li>Qu’est-ce qui revient souvent (type de tâches, lien avec le réel, forme de l’évaluation, etc.) ?</li>
            </ul>
        </section>

        <section>
            <h2>Étape 3 – Nommer les caractéristiques de l’approche par projets</h2>
            <p>
                À partir de ce que tu as observé dans les différents projets, discute en équipe pour faire ressortir
                ce qui caractérise l’approche par projets.
            </p>
            <p>
                <strong>Consigne :</strong> formulez ensemble <strong>5 caractéristiques clés</strong> de l’approche par projets.
            </p>
            <ul>
                <li>Écrivez-les en une phrase courte chacune.</li>
                <li>Essayez de couvrir différents aspects (type de tâches, lien avec la réalité, rôle de l’évaluation, 
                    travail d’équipe, lien avec le futur métier, etc.).</li>
            </ul>
            <p>
                Par exemple, en t’inspirant des projets proposés, tu pourrais identifier des éléments comme :
            </p>
            <ul>
                <li>Besoins réels ou concrets (client, communauté, organisme, entreprise).</li>
                <li>Travail sur des situations authentiques, avec un impact visible.</li>
                <li>Évaluation en livrables (produits, présentations, campagnes, livrets, etc.).</li>
                <li>Travail en équipe, collaboration, gestion de conflits et de tâches.</li>
                <li>Développement d’un portfolio ou de réalisations utilisables à l’extérieur du cours.</li>
            </ul>
            <p>
                Ces 5 caractéristiques pourront ensuite être partagées en grand groupe pour construire une vision commune de 
                ce qu’est l’approche par projets.
            </p>
        </section>
    </>;
}
