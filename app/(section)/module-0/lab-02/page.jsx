/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Labo – Projets à analyser",
    description: "Descriptions de quatre projets à utiliser pour le laboratoire sur l’approche par projet.",
    keywords: ["laboratoire", "projet intégrateur", "projets", "pédagogie par projet"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Projets à analyser</h2>
            <p>
                Les projets ci-dessous servent de base au laboratoire sur l’approche par projet. En équipe, tu analyseras un ou 
                plusieurs de ces projets pour en dégager ce qui les distingue d’un cours plus « classique ».
            </p>
            <p>
                Pour chaque projet, repère les éléments importants : contexte, type de tâches, forme d’évaluation, liens avec le réel, etc.
            </p>
        </section>

        <section>
            <h2>Projet 1 – Design graphique : Redonner vie à un lieu oublié</h2>
            <p>
                Un quartier de la ville souhaite réhabiliter un vieux cinéma fermé depuis 20 ans. L’objectif est de lui redonner 
                une identité visuelle forte pour qu’il devienne un lieu culturel incontournable.
            </p>
            <p>
                Les équipes sont invitées à :
            </p>
            <ul>
                <li>Imaginer une nouvelle image de marque du cinéma (logo, couleurs, typographies).</li>
                <li>Créer une affiche d’événement inaugural et une déclinaison numérique pour les réseaux sociaux.</li>
                <li>Préparer une courte présentation visuelle à soumettre à un comité local de citoyens.</li>
            </ul>
            <p>
                Chaque équipe doit articuler sa proposition autour d’un concept porteur de sens pour la communauté.
            </p>
        </section>

        <section>
            <h2>Projet 2 – Réseaux sociaux : Une campagne pour une cause étudiante</h2>
            <p>
                Une association étudiante veut sensibiliser la communauté collégiale à la réduction du gaspillage alimentaire à la cafétéria.
            </p>
            <p>
                Les équipes doivent concevoir et mettre en œuvre une campagne numérique de 3 semaines sur Instagram et TikTok :
            </p>
            <ul>
                <li>Création de contenus engageants (vidéos courtes, mèmes, infographies).</li>
                <li>Planification d’un calendrier éditorial cohérent.</li>
                <li>Analyse de la portée et de l’engagement à partir d’indicateurs réels.</li>
            </ul>
            <p>
                La campagne est publiée sur les comptes officiels de l’association, et un retour d’expérience est réalisé 
                avec la direction de la cafétéria.
            </p>
        </section>

        <section>
            <h2>Projet 3 – Gestion de la nutrition : Repas santé pour tous</h2>
            <p>
                Un organisme communautaire qui soutient des familles à faible revenu lance un défi : proposer un plan de menus 
                hebdomadaires, nutritifs, équilibrés et accessibles financièrement.
            </p>
            <p>
                Par petits groupes, les étudiant·e·s doivent :
            </p>
            <ul>
                <li>Rechercher et concevoir un menu complet de 5 jours avec des recettes détaillées.</li>
                <li>Établir le coût total et démontrer la faisabilité économique.</li>
                <li>Produire un livret illustré destiné aux familles bénéficiaires.</li>
            </ul>
            <p>
                Les propositions sont partagées lors d’un repas-test avec des membres de l’organisme, qui donnent leurs impressions 
                et leurs suggestions.
            </p>
        </section>

        <section>
            <h2>Projet 4 – Commerce / marketing : Lancement d’un produit local</h2>
            <p>
                Une microentreprise de la région s’apprête à lancer une nouvelle boisson énergisante naturelle. Elle fait appel 
                aux étudiant·e·s pour bâtir une stratégie marketing qui la distingue de ses concurrents.
            </p>
            <p>
                Le mandat consiste à :
            </p>
            <ul>
                <li>Étudier le marché et définir une clientèle cible.</li>
                <li>Développer une stratégie de mise en marché (prix, distribution, promotion).</li>
                <li>Concevoir un prototype de matériel promotionnel (affiche, slogan, vidéo courte).</li>
                <li>Présenter la stratégie au propriétaire lors d’un « pitch » simulé.</li>
            </ul>
            <p>
                Le projet combine analyse de marché, créativité et communication persuasive, avec un retour direct du client.
            </p>
        </section>
    </>;
}
