export const metadata = {
    title: "Diagrammes UML et conception détaillée",
    description:
        "Découvrir et préciser les principaux diagrammes UML du projet (cas d’utilisation, activités, classes, objets, séquences) et leur rôle dans le sprint 2.",
    keywords: ["UML", "diagrammes", "cas d’utilisation", "activités", "classes", "séquence"],
    group: "notes",
};

export default function Page() {
    return (
        <main className="page">
            <section>
                <h1></h1>
                <p>
                    Dans ce module, tu vas préciser la conception de ton application en utilisant plusieurs types de diagrammes UML.
                    L’objectif est de rendre tes idées plus claires, d’éviter les ambiguïtés et d’aider ton équipe à prendre de
                    meilleures décisions pendant le sprint 2.
                </p>
                <p>
                    Chaque type de diagramme a un rôle différent : certains se concentrent sur les interactions avec les utilisateurs,
                    d’autres sur le flux d’activités, la structure des données ou les échanges entre objets au cours d’un scénario.
                </p>
            </section>

            <section>
                <h2>Diagrammes à produire (minimum attendu)</h2>
                <p>
                    Pour ce module, tu dois au minimum produire ou mettre à jour les diagrammes suivants pour ton projet :
                </p>
                <ul>
                    <li>Un diagramme de cas d’utilisation (use case diagram).</li>
                    <li>Un diagramme d’activités (activity diagram) pour au moins un scénario important.</li>
                    <li>Un diagramme de classes pour ton domaine principal.</li>
                    <li>Un diagramme d’objets simple pour illustrer un cas concret.</li>
                    <li>Un diagramme de séquence pour un scénario clé.</li>
                </ul>
                <p>
                    Pour chaque diagramme, cette section du cours t’indique les éléments que tu dois obligatoirement faire apparaître,
                    afin d’éviter des diagrammes trop simples ou incomplets.
                </p>
            </section>

            <section>
                <h2>Diagrammes optionnels</h2>
                <p>
                    Selon ton projet, tu peux aussi ajouter d’autres diagrammes UML si tu trouves qu’ils t’aident à mieux comprendre ou
                    expliquer ton système.
                </p>
                <ul>
                    <li>Diagramme de composants (component diagram).</li>
                    <li>Diagramme de déploiement (deployment diagram).</li>
                    <li>Diagramme d’états-transitions (state machine).</li>
                    <li>Autres diagrammes spécifiques à ton contexte, si utile.</li>
                </ul>
                <p>
                    Ces diagrammes optionnels ne sont pas obligatoires pour tous les projets, mais ils peuvent être très utiles dans
                    certains cas. N’hésite pas à les utiliser si cela clarifie ta conception.
                </p>
            </section>

            <section>
                <h2>Organisation des diagrammes dans le dépôt</h2>
                <p>
                    Tous tes diagrammes (images, fichiers sources, explications) doivent être rangés de manière cohérente dans ton
                    dépôt, par exemple :
                </p>
                <ul>
                    <li>
                        <code>docs/technique/diagrammes/</code> pour les images ou fichiers de diagrammes.
                    </li>
                    <li>
                        Un fichier d’index (par exemple <code>docs/technique/diagrammes/README.md</code>) qui liste les diagrammes
                        disponibles et explique brièvement leur contenu.
                    </li>
                </ul>
            </section>

            {/* <section>
                <h2>Pages liées à ce module</h2>
                <ul>
                    <li>
                        <strong>Diagramme de cas d’utilisation</strong> : acteurs, cas d’utilisation, include, extend, frontière du
                        système.
                    </li>
                    <li>
                        <strong>Diagramme d’activités</strong> : activités, décisions, parallélisme, début/fin.
                    </li>
                    <li>
                        <strong>Diagramme de classes</strong> : classes, attributs, opérations, associations, héritage.
                    </li>
                    <li>
                        <strong>Diagramme d’objets</strong> : instances concrètes, valeurs d’attributs, liens entre objets.
                    </li>
                    <li>
                        <strong>Diagramme de séquence</strong> : acteurs/objets, messages, ordre temporel, conditions.
                    </li>
                    <li>
                        <strong>Diagrammes optionnels</strong> : composants, déploiement, états, etc.
                    </li>
                </ul>
            </section> */}
        </main>
    );
}
