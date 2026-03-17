export const metadata = {
    title: "Dossier de conception",
    description:
        "Comprendre le rôle du dossier de conception et produire les premiers diagrammes UML nécessaires pour démarrer le sprint 1.",
    keywords: ["dossier de conception", "UML", "architecture", "projet intégrateur"],
    group: "notes",
};

export default function Page() {
    return (
        <main className="page">
            <section>
                <h1>Conception des fonctionnalités du sprint 1</h1>
                <p>
                    Le dossier de conception sert à rendre explicite la structure et le comportement de ton application. C’est un
                    document vivant qui aide ton équipe à se comprendre, à prendre des décisions cohérentes et à garder une vue
                    d’ensemble du système pendant que vous avancez dans les sprints.
                </p>
                <p>
                    Dans ce module, tu prépares une première version « minimale mais utile » de ton dossier de conception, suffisante
                    pour démarrer le sprint 1. Tu pourras ensuite le compléter et l’ajuster au fil des sprints en fonction de
                    l’évolution de ton projet.
                </p>
            </section>

            <section>
                <h2>À quoi sert le dossier de conception ?</h2>
                <ul>
                    <li>
                        Aligner l’équipe sur la vision technique du projet (architecture, composants, flux principaux).
                    </li>
                    <li>
                        Servir de référence lorsque vous devez prendre des décisions de conception ou intégrer de nouvelles
                        fonctionnalités.
                    </li>
                    <li>
                        Aider l’enseignant et le client à comprendre comment votre solution est structurée « sous le capot ».
                    </li>
                    <li>
                        Garder une trace des choix que vous faites, pour pouvoir les justifier ou les revisiter plus tard.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Contenu attendu du dossier de conception</h2>
                <p>
                    Le dossier de conception est organisé en sections. Pour le sprint 1, tu te concentres sur les éléments
                    essentiels qui décrivent le cœur de ton système.
                </p>
                <ul>
                    <li>
                        <strong>Diagrammes UML</strong> (au minimum pour les fonctionnalités centrales) :
                        <ul>
                            <li>
                                <em>Diagrammes de cas d’utilisation</em> : montrent les acteurs et les fonctionnalités principales
                                du système, vus du point de vue de l’utilisateur.
                            </li>
                            <li>
                                <em>Diagrammes d’activités</em> : décrivent le déroulement d’un processus ou d’un scénario métier.
                            </li>
                            <li>
                                <em>Diagrammes de classes</em> : structurent les entités, leurs attributs et leurs relations.
                            </li>
                             <li>
                <em>Diagrammes d’objets</em> : illustrent des exemples concrets d’instances (objets) et de liens
                entre elles à un instant donné, pour clarifier un scénario ou un cas particulier.
            </li>
            <li>
                                <em>Diagrammes de séquence</em> : détaillent les échanges entre objets ou services pour un scénario
                                critique.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Architecture et technologies</strong> :
                        <ul>
                            <li>
                                Vue d’ensemble de l’architecture (par exemple couches, services, base de données, API externes).
                            </li>
                            <li>
                                Principales technologies utilisées et leurs rôles (framework, base de données, bibliothèques
                                importantes, etc.).
                            </li>
                            <li>
                                Grandes responsabilités des composants principaux (qui fait quoi dans le système).
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Lien avec le backlog</strong> :
                        <ul>
                            <li>
                                Indiquer quelles user stories (ou quelles fonctionnalités) sont couvertes par quels diagrammes.
                            </li>
                            <li>
                                S’assurer que les scénarios importants du backlog sont visibles dans au moins un diagramme.
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>

            <section>
                <h2>Attentes minimales pour le sprint 1</h2>
                <p>
                    Pour démarrer le sprint 1, on ne te demande pas un dossier de conception parfait, mais un socle clair et cohérent
                    sur lequel ton équipe peut s’appuyer.
                </p>
                <ul>
                    <li>
                        Au moins un diagramme de cas d’utilisation qui couvre le cœur de ton système (les scénarios les plus
                        importants pour l’utilisateur).
                    </li>
                    <li>
                        Un premier diagramme de classes qui présente les entités principales et leurs relations.
                    </li>
                    <li>
        Un diagramme d’objets illustrant un exemple concret d’instances et de liens pour l’un de ces scénarios
        (par exemple l’état du système pendant un cas d’utilisation clé).
    </li>
                    <li>
                        Un à deux diagrammes de séquence pour des scénarios critiques que vous comptez implémenter dans le sprint 1.
                    </li>
                    <li>
                        Une courte description de l’architecture prévue (par exemple une vue en couches) et des technologies
                        principales retenues.
                    </li>
                    <li>
                        Un début de lien entre ton dossier de conception et ton backlog (quelles stories sont couvertes par quels
                        diagrammes).
                    </li>
                </ul>
            </section>

            <section>
                <h2>Documenter et faire évoluer ton dossier</h2>
                <ul>
                    <li>
                        Stocke ton dossier de conception dans le dossier <code>docs/</code> de ton dépôt Git (par exemple sous forme
                        de fichiers textes, PDFs ou exports d’outils de modélisation).
                    </li>
                    <li>
                        Mets à jour le dossier au fur et à mesure que tu affines ton architecture et que tu ajoutes des
                        fonctionnalités.
                    </li>
                    <li>
                        Utilise le dossier de conception comme support lors de tes rencontres d’équipe et de tes discussions avec
                        l’enseignant.
                    </li>
                </ul>
            </section>
        </main>
    );
}
