import { DownloadBlock, File } from "@/components/DownloadBlock";
/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Contrat d'engagement",
    description: "Présentation du contrat d'engagement et lien vers le document à signer.",
    keywords: ["contrat", "engagement", "projet intégrateur", "responsabilités"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>C'est quoi, le contrat d'engagement ?</h2>
            <p>
                Dans le cadre du projet intégrateur, tu vas travailler sur une période plus longue, avec des livrables, du travail
                d’équipe et des responsabilités qui se rapprochent de ce qu’on retrouve en milieu professionnel.
            </p>
            <p>
                Pour clarifier ce cadre, nous utilisons un <strong>contrat d’engagement</strong>. C’est un document écrit qui résume
                les attentes du cours (objectifs, façons de travailler, échéances, évaluation) et ce à quoi tu t’engages en tant que
                participant·e au projet.
            </p>
            <p>
                Dans la littérature, un contrat d’apprentissage est souvent décrit comme une entente écrite entre un étudiant et un
                professeur, où l’on précise la matière à étudier, la méthode de travail, les délais et les critères d’évaluation.
                Ici, nous reprenons cette idée de base, mais sous une forme commune pour tout le groupe, préparée par l’équipe
                enseignante.
            </p>
        </section>

        <section>
            <h2>Comment ce contrat a été construit ?</h2>
            <p>
                Dans les modèles « classiques » de contrat d’apprentissage, le contenu est négocié individuellement entre
                l’étudiant et le professeur (objectifs personnels, activités d’apprentissage, calendrier, etc.).
            </p>
            <p>
                Dans notre cas, le contrat d’engagement a été rédigé par l’équipe enseignante à partir :
            </p>
            <ul>
                <li>des objectifs du projet intégrateur et du programme;</li>
                <li>des exigences minimales pour réussir le cours et progresser;</li>
                <li>de l’expérience des profs avec ce type de projet (organisation, délais, travail d’équipe, etc.).</li>
            </ul>
            <p>
                Il ne s’agit donc pas d’une négociation au cas par cas, mais d’un cadre commun proposé à tous les étudiants du cours.
                Tu peux toutefois poser des questions ou demander des clarifications si certains éléments ne sont pas clairs.
            </p>
        </section>

        <section>
            <h2>Ce que tu t’engages à faire</h2>
            <p>
                En signant le contrat d’engagement, tu acceptes notamment de :
            </p>
            <ul>
                <li>Participer activement au projet et aux activités prévues.</li>
                <li>Respecter les échéances et les livrables convenus.</li>
                <li>Collaborer de façon constructive avec ton équipe.</li>
                <li>Prévenir rapidement en cas de difficulté qui pourrait nuire à l’avancement du projet.</li>
                <li>Respecter les règles de fonctionnement du cours et les critères d’évaluation annoncés.</li>
            </ul>
            <p>
                De leur côté, les enseignant·e·s s’engagent à préciser les objectifs du cours, à fournir des consignes claires,
                à proposer un calendrier réaliste et à offrir de la rétroaction pour t’aider à progresser.
            </p>
        </section>

        <section>
            <h2>Lire et signer le contrat</h2>
            <p>
                Avant de te lancer pleinement dans le projet intégrateur, tu dois :
            </p>
            <ul>
                <li>Lire attentivement le contrat d’engagement.</li>
                <li>Poser tes questions si quelque chose n’est pas clair.</li>
                <li>Le signer dans les délais indiqués.</li>
            </ul>
        </section>
        <section>
            <h2>Télécharger le contrat d'engagement</h2>
            <p>
                Tu peux accéder au contrat d’engagement en cliquant ici :
            </p>
            <DownloadBlock>
                <File fileName="contrat-engagement.pdf" path="/lab-01/contrat-engagement.pdf"></File>
            </DownloadBlock>
        </section>
    </>;
}
