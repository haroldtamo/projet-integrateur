export const metadata = {
    title: "Qualité du code au quotidien",
    description:
        "Appliquer des pratiques simples pour garder un code lisible, cohérent et maintenable pendant le sprint 1.",
    keywords: ["qualité du code", "lisibilité", "bonnes pratiques", "équipe"],
    group: "notes",
};

export default function Page() {
    return (
        <main className="page">
            <section>
                <h1></h1>
                <p>
                    Pendant le sprint, vous allez écrire et modifier beaucoup de code en équipe. Sans quelques règles simples de
                    qualité, le projet devient vite difficile à comprendre et à faire évoluer, même pour vous.
                </p>
                <p>
                    Cette page te propose des bonnes pratiques accessibles pour garder un code lisible et cohérent au jour le jour,
                    sans transformer ce cours en module complet de génie logiciel.
                </p>
            </section>

            <section>
                <h2>Nommage clair et cohérent</h2>
                <p>
                    Le nommage est l’un des aspects les plus importants de la qualité du code : un bon nom explique déjà une partie
                    du comportement.
                </p>
                <ul>
                    <li>
                        Choisis des noms explicites pour les variables, fonctions, classes et fichiers (on doit deviner leur rôle
                        sans lire tout le code).
                    </li>
                    <li>
                        Évite les abréviations obscures ou les noms trop génériques comme <code>data</code>, <code>tmp</code>,{" "}
                        <code>doStuff</code>.
                    </li>
                    <li>
                        Adopte une convention simple en équipe (par exemple <em>CamelCase</em> pour les classes,{" "}
                        <em>camelCase</em> pour les méthodes et variables) et essaie de t’y tenir.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Fonctions courtes qui font une seule chose</h2>
                <p>
                    Des fonctions trop longues ou qui font « un peu de tout » sont difficiles à comprendre, à tester et à réutiliser.
                </p>
                <ul>
                    <li>
                        Essaie d’écrire des fonctions qui ont une responsabilité principale claire (un rôle bien identifié).
                    </li>
                    <li>
                        Quand une fonction devient trop longue ou trop compliquée, vois si tu peux extraire une partie du code dans
                        une nouvelle fonction auxiliaire.
                    </li>
                    <li>
                        Évite de mélanger trop de niveaux d’abstraction dans une même fonction (par exemple logique métier et
                        détails d’interface utilisateur).
                    </li>
                </ul>
            </section>

            <section>
                <h2>Commentaires utiles (pas redondants)</h2>
                <p>
                    Les commentaires doivent apporter une information que le code ne montre pas déjà facilement.
                </p>
                <ul>
                    <li>
                        Utilise les commentaires pour expliquer le « pourquoi » (la raison d’un choix, d’un cas particulier), pas
                        pour réécrire le « quoi » que l’on voit déjà dans le code.
                    </li>
                    <li>
                        Si tu te surprends à devoir écrire un long commentaire pour expliquer une fonction, demande-toi si tu peux
                        la simplifier ou la découper.
                    </li>
                    <li>
                        Pense à mettre à jour ou supprimer les commentaires qui ne sont plus corrects après une modification du
                        code.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Organisation des fichiers et des dossiers</h2>
                <p>
                    La qualité du code, ce n’est pas seulement l’intérieur des fichiers, c’est aussi la façon dont tu organises ton
                    projet.
                </p>
                <ul>
                    <li>
                        Regroupe les fichiers par rôle ou par fonctionnalité (par exemple par couche ou par module), plutôt que de
                        tout laisser à la racine du projet.
                    </li>
                    <li>
                        Donne à tes fichiers des noms cohérents avec ce qu’ils contiennent (par exemple{" "}
                        <code>ClientService</code>, <code>CommandeController</code>, etc.).
                    </li>
                    <li>
                        Évite de dupliquer du code : si tu copies-colles plusieurs fois les mêmes blocs, envisage d’extraire une
                        fonction ou une classe commune.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Relire le code des autres (et le sien)</h2>
                <p>
                    Une courte relecture par un coéquipier peut éviter des bugs et améliorer la qualité globale du projet.
                </p>
                <ul>
                    <li>
                        Quand c’est possible, demande à un membre de l’équipe de jeter un œil à ton code avant de fusionner une
                        branche importante.
                    </li>
                    <li>
                        Lors d’une relecture, concentre-toi sur la lisibilité (est-ce que je comprends ce que ça fait ?) autant que
                        sur la correction technique.
                    </li>
                    <li>
                        N’hésite pas à améliorer un peu le code que tu touches (renommer une variable, extraire une fonction) tant
                        que tu ne changes pas le comportement sans en parler à l’équipe.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Ce que vous pouvez décider en équipe</h2>
                <ul>
                    <li>
                        Une petite liste de règles de nommage communes (classes, méthodes, variables, fichiers).
                    </li>
                    <li>
                        Quelques bonnes pratiques simples (taille des fonctions, organisation des dossiers) que tout le monde
                        s’engage à respecter.
                    </li>
                    <li>
                        Dans quels cas vous faites une relecture rapide avant de fusionner une branche (par exemple pour les
                        changements importants ou risqués).
                    </li>
                </ul>
            </section>
        </main>
    );
}
