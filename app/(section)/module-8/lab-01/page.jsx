export const metadata = {
    title: "Labo - Diagrammes UML du projet",
    description:
        "Travail pratique : produire des diagrammes UML (cas d’utilisation, activités, classes, objets, séquence) suffisamment détaillés pour ton projet.",
    keywords: ["labo", "UML", "diagrammes", "cas d’utilisation", "classes", "séquence"],
    group: "labs",
};

export default function Page() {
    return (
        <main className="page">
            <section>
                <h1></h1>
                <p>
                    Dans ce labo, tu vas produire plusieurs diagrammes UML pour ton propre projet. L’objectif n’est pas seulement de
                    « faire des dessins », mais de clarifier ton système et de préparer le travail des prochains sprints.
                </p>
                <p>
                    Tu dois respecter pour chaque type de diagramme les éléments demandés dans le Module 8, afin d’éviter des
                    diagrammes trop simples ou incomplets.
                </p>
            </section>

            <section>
                <h2>Objectifs du labo</h2>
                <ul>
                    <li>Clarifier les fonctionnalités du système avec un diagramme de cas d’utilisation complet.</li>
                    <li>Décrire un scénario important avec un diagramme d’activités.</li>
                    <li>Modéliser la structure du domaine avec un diagramme de classes.</li>
                    <li>Illustrer un cas concret avec un diagramme d’objets.</li>
                    <li>Montrer les interactions au cours d’un scénario avec un diagramme de séquence.</li>
                </ul>
            </section>

            <section>
                <h2>Consignes générales</h2>
                <ul>
                    <li>
                        Tous les diagrammes doivent être liés au <strong>même projet</strong> que celui utilisé dans les sprints.
                    </li>
                    <li>
                        Les diagrammes doivent être lisibles, avec des noms clairs et une mise en page soignée (éviter les lignes qui
                        se croisent dans tous les sens).
                    </li>
                    <li>
                        Place toutes les images et fichiers sources de diagrammes dans <code>docs/technique/diagrammes/</code> (ou un
                        dossier équivalent) dans ton dépôt.
                    </li>
                    <li>
                        Ajoute un fichier <code>README.md</code> dans ce dossier, qui liste les diagrammes produits et explique
                        brièvement ce que montre chacun.
                    </li>
                </ul>
            </section>

            <section>
                <h2>1. Diagramme de cas d’utilisation</h2>
                <p>
                    Produis un diagramme de cas d’utilisation pour ton système, en respectant les exigences suivantes :
                </p>
                <ul>
                    <li>Au moins deux acteurs (par exemple : utilisateur, administrateur, système externe).</li>
                    <li>Plusieurs cas d’utilisation (pas un seul cas énorme qui fait tout).</li>
                    <li>Une frontière de système clairement indiquée.</li>
                    <li>Des relations entre acteurs et cas d’utilisation.</li>
                    <li>
                        Au moins un <code>&lt;&lt;include&gt;&gt;</code> pour un comportement commun.
                    </li>
                    <li>
                        Au moins un <code>&lt;&lt;extend&gt;&gt;</code> pour un comportement optionnel ou exceptionnel.
                    </li>
                </ul>
                <p>
                    Enregistre l’image (ou le fichier du logiciel de modélisation) dans le dossier des diagrammes, avec un nom parlant
                    (par exemple <code>use-case-principal.png</code>).
                </p>
            </section>

            <section>
                <h2>2. Diagramme d’activités</h2>
                <p>
                    Choisis un scénario important de ton application (par exemple « passer une commande », « créer un compte », « réserver une ressource ») et représente-le avec un diagramme d’activités.
                </p>
                <ul>
                    <li>Un point de départ et au moins un point de fin.</li>
                    <li>Des activités (actions) nommées clairement.</li>
                    <li>Des flèches montrant l’ordre des étapes.</li>
                    <li>Au moins un losange de décision avec des conditions sur les flèches.</li>
                    <li>Si possible, un exemple de parallélisme (deux activités en parallèle).</li>
                </ul>
                <p>
                    Enregistre ce diagramme dans le dossier des diagrammes, par exemple sous le nom <code>activite-scenario-principal.png</code>.
                </p>
            </section>

            <section>
                <h2>3. Diagramme de classes</h2>
                <p>
                    Produis un diagramme de classes pour le domaine principal de ton système. Il doit être cohérent avec les données
                    réellement manipulées par ton application.
                </p>
                <ul>
                    <li>Plusieurs classes avec un nom significatif.</li>
                    <li>Pour chaque classe, quelques attributs importants (avec type si possible).</li>
                    <li>Des opérations pour certaines classes (méthodes principales, pas tous les détails techniques).</li>
                    <li>Des associations entre classes, avec multiplicités si possible.</li>
                    <li>Au moins un exemple d’héritage si ton domaine s’y prête.</li>
                </ul>
                <p>
                    Enregistre ce diagramme dans le dossier des diagrammes, par exemple sous le nom <code>classes-domaine.png</code>.
                </p>
            </section>

            <section>
                <h2>4. Diagramme d’objets</h2>
                <p>
                    À partir de ton diagramme de classes, construis un diagramme d’objets qui illustre un cas concret (par exemple
                    « une commande avec plusieurs produits pour un client donné »).
                </p>
                <ul>
                    <li>Plusieurs objets notés <code>nomObjet : NomClasse</code>.</li>
                    <li>Des valeurs d’attributs pour certains objets (par exemple id, nom, statut).</li>
                    <li>Des liens entre objets qui correspondent aux associations de ton diagramme de classes.</li>
                </ul>
                <p>
                    Enregistre ce diagramme dans le dossier des diagrammes, par exemple sous le nom <code>objets-exemple.png</code>.
                </p>
            </section>

            <section>
                <h2>5. Diagramme de séquence</h2>
                <p>
                    Choisis un scénario clé (souvent le même que pour le diagramme d’activités) et produis un diagramme de séquence
                    qui montre les interactions entre acteurs et objets.
                </p>
                <ul>
                    <li>Un acteur et plusieurs objets alignés horizontalement (lifelines).</li>
                    <li>Des messages nommés clairement envoyés dans un certain ordre (de haut en bas).</li>
                    <li>Au moins un aller-retour complet (requête + réponse).</li>
                    <li>Si possible, une condition ou une alternative (par exemple un bloc « alt » ou « loop » selon l’outil utilisé).</li>
                </ul>
                <p>
                    Enregistre ce diagramme dans le dossier des diagrammes, par exemple sous le nom <code>sequence-scenario-principal.png</code>.
                </p>
            </section>

            <section>
                <h2>Diagrammes optionnels (bonus)</h2>
                <p>
                    Si tu le souhaites, tu peux produire un ou plusieurs diagrammes UML optionnels qui apportent une vraie valeur à ton
                    projet (composants, déploiement, états-transitions, etc.).
                </p>
                <p>
                    Si tu en ajoutes, indique-les aussi dans ton fichier <code>README.md</code> avec une courte explication de leur utilité.
                </p>
            </section>

            <section>
                <h2>Remise du labo</h2>
                <p>
                    Pour remettre ce labo, assure-toi que ton dépôt contient :
                </p>
                <ul>
                    <li>
                        Le dossier <code>docs/technique/diagrammes/</code> avec les 5 diagrammes demandés (et éventuellement des
                        diagrammes bonus).
                    </li>
                    <li>
                        Un fichier <code>README.md</code> dans ce dossier qui indique :
                        <ul>
                            <li>la liste des diagrammes ;</li>
                            <li>pour chaque diagramme, le scénario ou la partie du système qu’il illustre.</li>
                        </ul>
                    </li>
                </ul>
                <p>
                    Ton enseignant pourra te demander un court survol en classe ou en démonstration pour vérifier que tu comprends tes
                    propres diagrammes.
                </p>
            </section>
        </main>
    );
}
