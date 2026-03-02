import { DownloadBlock, File } from "@/components/DownloadBlock";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Cahier des charges",
    description: "Comprendre le rôle du cahier des charges dans un projet agile et structure proposée pour votre projet intégrateur.",
    keywords: ["cahier des charges", "exigences", "scrum", "projet intégrateur"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Cahier des charges et approche agile</h2>
            <p>
                Dans une approche agile comme Scrum, on ne travaille généralement pas avec un cahier des charges figé et complet
                au début du projet. Les besoins évoluent, et le backlog est ajusté au fur et à mesure.
            </p>
            <p>
                Dans le cadre du projet intégrateur, on utilise tout de même un <strong>cahier des charges</strong> comme outil
                pédagogique. Il te permet d’avoir une vision globale de ton projet (contexte, objectifs, exigences, technologies,
                livrables), avant de découper tout ça en user stories et en tâches dans ton backlog.
            </p>
            <p>
                Le cahier des charges que tu vas préparer n’est donc pas un document « gravé dans le marbre » : il pourra être
                ajusté au besoin, mais il sert de base de référence pour ton équipe et pour le client.
            </p>
        </section>

        <section>
            <h2>Structure proposée pour ton cahier des charges</h2>
            <p>
                Le modèle ci-dessous te propose une structure pour ton cahier des charges. Selon ton projet, certaines sections
                seront plus développées que d’autres, et tu pourras adapter le contenu au contexte.
            </p>
        </section>

        <section>
            <h2>1. Présentation du projet</h2>

            <h3>1.1 Contexte</h3>
            <p>
                Décris l’environnement du projet : domaine, enjeux, problématique, utilisateurs ciblés, contexte académique ou
                organisationnel. L’objectif est de situer clairement « d’où vient » le besoin.
            </p>

            <h3>1.2 Objectifs</h3>
            <p>
                Indique les résultats que le projet doit atteindre. Tu peux formuler des objectifs spécifiques, par exemple :
            </p>
            <ul>
                <li>Permettre à un utilisateur de faire une action précise.</li>
                <li>Réduire ou optimiser un processus.</li>
                <li>Assurer la sécurité ou la fiabilité d’un aspect du système.</li>
            </ul>
            <p>
                Tu peux aussi préciser des critères de performance qui seront importants (rapidité, fiabilité, qualité du code,
                qualité de l’interface, impact social, etc.).
            </p>

            <h3>1.3 Périmètre du projet</h3>
            <p>
                Définis clairement ce qui fait partie du projet et ce qui n’en fait pas partie.
            </p>
            <ul>
                <li>
                    Ce qui est inclus : par exemple, développement de l’interface utilisateur, création d’un backend, tests de
                    performance.
                </li>
                <li>
                    Ce qui est exclu : par exemple, intégration avec certains systèmes externes, fonctionnalités avancées qui ne
                    seront pas traitées dans ce cours.
                </li>
            </ul>
        </section>

        <section>
            <h2>2. Description fonctionnelle</h2>

            <h3>2.1 Besoins et exigences métiers</h3>
            <p>
                Décris les besoins du client ou les exigences métiers auxquelles la solution doit répondre.
            </p>
            <ul>
                <li>
                    <strong>Problématique à résoudre</strong> : quel problème ou besoin le projet cherche-t-il à adresser ?
                </li>
                <li>
                    <strong>Utilisateurs cibles</strong> : qui utilisera la solution (utilisateurs finaux, administrateurs, clients…) ?
                </li>
                <li>
                    <strong>Scénarios d’utilisation</strong> : exemples concrets de ce que les utilisateurs doivent pouvoir faire.
                </li>
            </ul>

            <h3>2.1.1 Diagramme de cas d’utilisation</h3>
            <p>
                Pour compléter la description des besoins, tu peux ajouter un <strong>diagramme de cas d’utilisation</strong>.
                Ce diagramme montre visuellement quels types d’utilisateurs interagissent avec le système et quelles
                fonctionnalités principales sont offertes.
            </p>
            <p>
                Il permet de :
            </p>
            <ul>
                <li>donner une vue d’ensemble des fonctionnalités à implémenter ;</li>
                <li>clarifier qui fait quoi dans le système (acteurs et cas d’utilisation) ;</li>
                <li>faciliter la transition vers les user stories et le Product Backlog.</li>
            </ul>
            <p>
                Ce diagramme peut être inclus dans le cahier des charges, même si tu travailles en agile, car il représente bien
                l’ensemble des fonctionnalités ciblées au début du projet.
            </p>

            <h3>2.2 Fonctionnalités principales</h3>
            <p>
                Liste les fonctionnalités que la solution doit absolument contenir. Chaque fonctionnalité importante doit être
                décrite clairement (par exemple : gestion des utilisateurs, enregistrement des transactions, génération de rapports, etc.).
            </p>

            <h3>2.3 Interface utilisateur</h3>
            <p>
                Donne les grandes lignes de l’interface graphique :
            </p>
            <ul>
                <li>Attentes en termes d’ergonomie (simplicité, intuitivité, adaptation mobile, etc.).</li>
                <li>Technologies recommandées pour l’interface (HTML/CSS, React, etc.).</li>
                <li>Éventuels wireframes ou esquisses d’écran pour illustrer l’organisation de l’interface.</li>
            </ul>

            <h3>2.4 Conditions d’utilisation</h3>
            <p>
                Précise dans quels environnements la solution sera utilisée (PC, mobile, navigateur, serveur spécifique, etc.) et
                les contraintes associées (connexion Internet, permissions, matériel, etc.).
            </p>
        </section>

        <section>
            <h2>3. Description technique</h2>

            <h3>3.1 Technologies à utiliser</h3>
            <p>
                Indique les technologies principales qui seront utilisées :
            </p>
            <ul>
                <li>Langages de programmation pour le frontend, le backend, etc.</li>
                <li>Frameworks, plateformes ou bibliothèques recommandées ou imposées.</li>
                <li>Type de base de données envisagé.</li>
            </ul>

            <h3>3.2 Architecture du système</h3>
            <p>
                Décris l’organisation générale du système et de ses composants. Tu peux inclure :
            </p>
            <ul>
                <li>Un diagramme d’architecture ou une description textuelle claire.</li>
                <li>Le type d’architecture choisi (client-serveur, microservices, etc.).</li>
                <li>Un schéma d’intégration si l’application interagit avec d’autres systèmes.</li>
            </ul>

            <h3>3.3 Sécurité</h3>
            <p>
                Précise les exigences de sécurité importantes : protection des données, gestion des identifiants, communications
                sécurisées, rôles et permissions, etc.
            </p>

            <h3>3.4 Performance et scalabilité</h3>
            <p>
                Indique les attentes de performance et de capacité, par exemple :
            </p>
            <ul>
                <li>Temps de réponse attendu (ex. : le système doit répondre en moins de 2 secondes).</li>
                <li>Nombre d’utilisateurs ou de requêtes que le système doit supporter.</li>
            </ul>
        </section>

        <section>
            <h2>4. Planification et livrables</h2>

            <h3>4.1 Phases du projet</h3>
            <p>
                Décris les grandes phases du projet (analyse, conception, développement, tests, déploiement, etc.) et les principales
                dates associées. Tu peux t’appuyer sur ton outil de planification (Gantt, calendrier, etc.).
            </p>

            <h3>4.2 Livrables attendus</h3>
            <p>
                Liste ce qui sera remis au client à la fin (ou à des jalons intermédiaires) :
            </p>
            <ul>
                <li>Code source, base de données, documentation technique ou utilisateur.</li>
                <li>Services opérationnels (ex. serveur web fonctionnel, déploiement accessible, etc.).</li>
                <li>Tout autre livrable spécifique demandé par le mandat.</li>
            </ul>
        </section>

        <section>
            <h2>5. Modalités de validation</h2>
            <p>
                Explique comment vous allez vérifier que la solution répond bien aux attentes, besoins et exigences du client.
            </p>
            <ul>
                <li>Tests d’acceptation utilisateur.</li>
                <li>Vérification de certaines fonctionnalités clés.</li>
                <li>Tests de performance ou de charge si c’est pertinent.</li>
            </ul>
        </section>

        <section>
            <h2>6. Conclusion</h2>
            <p>
                Termine le cahier des charges par un court mot de conclusion. Tu peux y rappeler les points importants, préciser
                certaines limites, ou ajouter des informations qui ne rentraient pas dans les sections précédentes.
            </p>
            <p>
                Ce document servira ensuite de base pour définir vos user stories et construire progressivement votre backlog Scrum.
            </p>
        </section>

        <section>
            <h2>Télécharger le gabarit d'un cahier de charges générique</h2>
            <p>
                Tu peux accéder au gabarit du cahier des charges en cliquant ici :
            </p>
            <DownloadBlock>
                <File
                    fileName="gabarit-cahier-charge-generique.pdf"
                    path="/lab-01/gabarit-cahier-charge-generique.pdf"
                />
            </DownloadBlock>
        </section>
    </>;
}
