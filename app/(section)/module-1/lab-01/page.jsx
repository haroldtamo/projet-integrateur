import { DownloadBlock, File } from "@/components/DownloadBlock";
/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Labo – Mise en route du projet intégrateur",
    description: "Activités à réaliser pour démarrer le projet intégrateur : contrat, grille, choix du projet et fonctionnement d’équipe.",
    keywords: ["laboratoire", "contrat d’engagement", "grille d’évaluation", "choix de projet", "travail d’équipe"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Objectif du labo</h2>
            <p>
                Ce laboratoire sert à lancer officiellement ton projet intégrateur. À la fin de cette activité, ton équipe et toi
                devriez :
            </p>
            <ul>
                <li>avoir pris connaissance du cadre du projet (contrat, grille d’évaluation) ;</li>
                <li>avoir signé le contrat d’engagement ;</li>
                <li>avoir indiqué vos préférences de projet ;</li>
                <li>avoir discuté de la façon dont vous allez fonctionner en équipe.</li>
            </ul>
        </section>

        <section>
    <h2>Étape 1 – Lire et signer le contrat d’engagement</h2>
    <p>
        Avant de te lancer dans le projet intégrateur, prends le temps de lire attentivement le contrat d’engagement. 
        C’est lui qui précise le cadre du projet et ce à quoi tu t’engages pendant la session.
    </p>
    <ul>
        <li>Lis le contrat d’engagement au complet.</li>
        <li>Note les points importants (engagement, participation, respect des échéances, travail d’équipe).</li>
        <li>Pose tes questions si quelque chose n’est pas clair.</li>
        <li>Signe le contrat selon les consignes données (en ligne ou sur papier).</li>
    </ul>
    <p>
        Cette étape confirme que tu comprends les attentes du cours et que tu acceptes d’y adhérer.
    </p>
    <DownloadBlock>
                <File fileName="contrat-engagement.pdf" path="/lab-01/contrat-engagement.pdf"></File>
            </DownloadBlock>
</section>


        <section>
            <h2>Étape 2 – Lire la grille d’évaluation</h2>
            <p>
                La grille d’évaluation décrit les critères qui seront utilisés pour juger la qualité de ton projet (produit,
                processus, collaboration, etc.).
            </p>
            <ul>
                <li>Repère les grands critères et les dimensions évaluées.</li>
                <li>Identifie ce qui te semble le plus exigeant pour toi ou ton équipe.</li>
                <li>Discutez en équipe des critères que vous devrez surveiller dès le début (ex. communication, respect des délais).</li>
            </ul>
            <p>
                Tu pourras revenir à cette grille plus tard pour t’autoévaluer avant les remises importantes.
            </p>
            <DownloadBlock>
                <File fileName="grille-evaluation.pdf" path="/lab-01/grille-evaluation.pdf"></File>
            </DownloadBlock>
        </section>

        <section>
            <h2>Étape 3 – Découvrir les sujets de projets</h2>
            <p>
                En équipe, consulte la page qui présente les sujets de projets disponibles (projets commandités par de vrais clients).
            </p>
            <ul>
                <li>Assure-toi que tout le monde a lu la description des 5 projets.</li>
                <li>Discutez de ce qui vous attire ou vous inquiète dans chaque sujet.</li>
                <li>Réfléchissez aux forces de votre équipe et au type de défi que vous voulez relever.</li>
            </ul>
            <DownloadBlock>
                        <File fileName="sujets de projets.zip" path="/lab-01/sujets de projets.zip"></File>
                    </DownloadBlock>
        </section>

        <section>
            <h2>Étape 4 – Choisir vos préférences de projet en équipe</h2>
            <p>
                Vous devez maintenant produire une <strong>liste ordonnée</strong> des 5 projets, du plus au moins souhaité.
            </p>
            <ul>
                <li>Mettez-vous d’accord sur un classement commun (1 = projet préféré, 5 = dernier choix).</li>
                <li>Notez clairement ce classement (par écrit ou dans le formulaire fourni par l’enseignant·e).</li>
                <li>Remettez votre liste dans les délais indiqués.</li>
            </ul>
            <p>
                L’enseignant·e utilisera ces classements pour attribuer les projets, en tenant compte des limites (nombre maximum
                d’équipes par projet).
            </p>
        </section>

        <section>
            <h2>Étape 5 – Clarifier vos règles de fonctionnement d’équipe</h2>
            <p>
                Profitez de ce labo pour poser les bases de votre travail d’équipe. Ça évite bien des problèmes plus tard.
            </p>
            <ul>
                <li>Décidez comment vous allez communiquer (Teams, Discord, courriel, autre).</li>
                <li>Prévoyez à quels moments vous pourrez travailler ensemble (en classe, en ligne, en dehors des cours).</li>
                <li>Discutez de ce que vous ferez en cas de retard, d’absence ou de travail non fait.</li>
                <li>Identifiez comment vous réagirez en cas de conflit (qui prévenir, comment en parler, etc.).</li>
            </ul>
            <p>
                Notez ces décisions (document partagé, cahier de bord, etc.) : vous pourrez y revenir en cas de doute ou de tension
                dans l’équipe.
            </p>
        </section>

        <section>
            <h2>À la fin de ce labo, tu devrais…</h2>
            <ul>
                <li>avoir lu et signé le contrat d’engagement ;</li>
                <li>avoir compris les grands critères de la grille d’évaluation ;</li>
                <li>avoir remis, avec ton équipe, votre classement des projets ;</li>
                <li>avoir discuté de la façon dont votre équipe va fonctionner.</li>
            </ul>
            <p>
                Tu seras alors prêt·e à commencer le projet intégrateur avec un cadre clair et une équipe mieux organisée.
            </p>
        </section>
    </>;
}
