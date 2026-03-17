export const metadata = {
    title: "Documentation du projet (technique et manuel utilisateur)",
    description:
        "Organiser la documentation du projet : documentation technique, documentation générée depuis le code avec Doxygen et manuel utilisateur.",
    keywords: ["documentation", "technique", "Doxygen", "manuel utilisateur"],
    group: "notes",
};

export default function Page() {
    return (
        <main className="page">
            <section>
                <h1></h1>
                <p>
                    Dans ce module, tu mets en place une documentation de projet qui va au-delà du code lui-même. Tu organises à la
                    fois une documentation technique, une documentation générée automatiquement à partir des commentaires du code et
                    un manuel utilisateur pour ton application.
                </p>
                <p>
                    L’objectif n’est pas d’écrire un énorme document théorique, mais de produire une documentation utile, à jour et
                    facile à retrouver pour l’équipe et pour les personnes qui voudront reprendre ton projet plus tard.
                </p>
            </section>

            <section>
                <h2>Organisation générale de la documentation</h2>
                <p>
                    Toute la documentation du projet doit être rangée dans un dossier <code>docs/</code> à la racine de ton dépôt.
                    Tu peux ensuite organiser ce dossier par type de documentation.
                </p>
                <ul>
                    <li>
                        <code>docs/technique/</code> : documents sur l’architecture, les choix techniques importants, les modèles de
                        données, les principaux flux, etc.
                    </li>
                    <li>
                        <code>docs/utilisateur/</code> : guide de prise en main, captures d’écran, explication des fonctionnalités
                        vues par l’utilisateur.
                    </li>
                    <li>
                        <code>docs/api/</code> (ou autre nom explicite) : documentation générée automatiquement depuis le code avec
                        un outil comme Doxygen.
                    </li>
                    <li>
                        Au besoin, d’autres sous-dossiers pour des besoins spécifiques (par exemple <code>docs/tests</code> pour des
                        plans de tests plus détaillés).
                    </li>
                </ul>
            </section>

            <section>
                <h2>Documentation technique “à la main”</h2>
                <p>
                    La documentation technique complète ce que l’on voit dans le code. Elle explique les grandes décisions et donne
                    une vue d’ensemble que l’on ne peut pas deviner en lisant seulement les fichiers source.
                </p>
                <ul>
                    <li>
                        Décris l’architecture générale de ton application (schémas simples, composants principaux, interactions).
                    </li>
                    <li>
                        Note les décisions techniques importantes (par exemple le choix d’un framework ou d’un design particulier) et
                        leurs raisons.
                    </li>
                    <li>
                        Présente les principaux modèles de données ou formats d’échange (API, fichiers, messages, etc.).
                    </li>
                    <li>
                        Mets ces éléments dans des fichiers lisibles (par exemple <code>.md</code>) dans <code>docs/technique/</code>,
                        avec des titres clairs pour qu’on les retrouve facilement.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Documentation générée à partir du code (Doxygen)</h2>
                <p>
                    En plus de la doc écrite à la main, tu peux générer automatiquement une documentation de ton code à partir de
                    commentaires structurés. Un outil classique pour ça est Doxygen.
                </p>
                <ul>
                    <li>
                        Ajoute des commentaires Doxygen sur certaines parties importantes de ton code (fonctions, classes, modules)
                        en utilisant des balises comme <code>@brief</code> pour un résumé et une description plus détaillée en dessous.
                    </li>
                    <li>
                        Crée un fichier de configuration Doxygen (souvent nommé <code>Doxyfile</code>) ou un script minimal qui
                        indique à Doxygen où trouver ton code et où générer la documentation (par exemple dans <code>docs/api/</code>).
                    </li>
                    <li>
                        Documente dans ton projet comment lancer la génération (commande à exécuter, dossier de sortie), pour que
                        les autres puissent régénérer la doc à partir du code.
                    </li>
                    <li>
                        Rappelle-toi que cette doc générée ne remplace pas la documentation technique : elle la complète en donnant
                        une vue détaillée des fonctions et classes réellement présentes dans le code.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Manuel utilisateur</h2>
                <p>
                    Le manuel utilisateur sert à expliquer ton application à quelqu’un qui ne connaît pas le projet et qui ne lit pas
                    le code. Il doit être simple, concret et illustré.
                </p>
                <ul>
                    <li>
                        Prévois un guide de démarrage rapide qui explique comment installer, lancer et utiliser les fonctionnalités
                        principales de l’application.
                    </li>
                    <li>
                        Ajoute des sections par fonctionnalité importante avec des captures d’écran et des étapes numérotées.
                    </li>
                    <li>
                        Range ces fichiers dans <code>docs/utilisateur/</code> et utilise une structure de titres qui suit les menus
                        ou les écrans de ton application, pour que l’utilisateur s’y retrouve facilement.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Ce qui est attendu à ce stade du projet</h2>
                <p>
                    Au moment où tu travailles sur cette page, on ne s’attend pas à ce que toute la documentation soit parfaite et
                    terminée. En revanche, certaines bases doivent déjà être en place.
                </p>
                <ul>
                    <li>
                        Le dossier <code>docs/</code> existe, avec au moins les sous-dossiers <code>technique</code> et{" "}
                        <code>utilisateur</code>, et éventuellement un dossier pour la documentation générée par Doxygen.
                    </li>
                    <li>
                        Une première version de la documentation technique est présente (même partielle), décrivant au moins l’idée
                        générale de l’architecture et quelques décisions clés.
                    </li>
                    <li>
                        Un début de manuel utilisateur est créé, avec un mini guide de démarrage rapide ou la description d’un
                        parcours utilisateur simple.
                    </li>
                    <li>
                        Si tu utilises Doxygen ou un outil similaire, la configuration minimale est en place et tu es capable de
                        générer une documentation HTML à partir des commentaires du code pour au moins une partie du projet.
                    </li>
                </ul>
            </section>
        </main>
    );
}
