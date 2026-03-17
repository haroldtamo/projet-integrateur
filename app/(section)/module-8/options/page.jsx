export const metadata = {
    title: "Diagrammes UML optionnels",
    description:
        "Présentation de quelques diagrammes UML optionnels (composants, déploiement, états, etc.) que tu peux ajouter si utile pour ton projet.",
    keywords: ["UML", "diagrammes optionnels", "composants", "déploiement", "états"],
    group: "notes",
};

export default function Page() {
    return (
        <main className="page">
            <section>
                <h1></h1>
                <p>
                    En plus des diagrammes principaux vus dans ce module, certains projets peuvent bénéficier d’autres types de
                    diagrammes UML. Ils ne sont pas obligatoires pour tout le monde, mais tu peux les utiliser si tu en vois l’utilité.
                </p>
            </section>

            <section>
                <h2>Diagramme de composants</h2>
                <p>
                    Le diagramme de composants montre comment ton système est découpé en parties logicielles (modules, services,
                    bibliothèques) et comment ces parties dépendent les unes des autres.
                </p>
                <p>
                    Il peut être utile si ton projet comporte plusieurs services, une API distincte, ou des modules réutilisables.
                </p>
            </section>

            <section>
                <h2>Diagramme de déploiement</h2>
                <p>
                    Le diagramme de déploiement montre sur quelles machines ou environnements ton application est installée
                    (serveur, poste client, mobile, cloud, etc.) et comment ces éléments sont connectés.
                </p>
                <p>
                    Il est particulièrement pertinent si ton projet implique plusieurs serveurs ou une architecture distribuée.
                </p>
            </section>

            <section>
                <h2>Diagramme d’états-transitions</h2>
                <p>
                    Le diagramme d’états-transitions montre les différents états possibles d’un objet important (par exemple une
                    commande, un ticket, une réservation) et les événements qui déclenchent le passage d’un état à l’autre.
                </p>
                <p>
                    Il peut t’aider si tu as un cycle de vie complexe à modéliser.
                </p>
            </section>

            <section>
                <h2>Quand en ajouter dans ton projet ?</h2>
                <ul>
                    <li>
                        Si un diagramme supplémentaire te permet d’expliquer plus clairement une partie difficile de ton système, il a
                        sa place dans <code>docs/technique/diagrammes</code>.
                    </li>
                    <li>
                        Tu n’as pas besoin d’utiliser tous les types de diagrammes UML. Choisis ceux qui t’aident vraiment à concevoir
                        et à communiquer.
                    </li>
                </ul>
            </section>
        </main>
    );
}
