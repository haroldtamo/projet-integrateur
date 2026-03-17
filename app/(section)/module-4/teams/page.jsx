export const metadata = {
    title: "Travailler en équipe sur le code",
    description:
        "Mettre en place de bonnes pratiques de collaboration sur le code avec Git et GitHub pendant le sprint 1 : branches, commits et synchronisation.",
    keywords: ["Git", "GitHub", "travail en équipe", "branches", "commits"],
    group: "notes",
};

export default function Page() {
    return (
        <main className="page">
            <section>
                <h1></h1>
                <p>
                    Dans ce sprint, ton équipe va modifier le même code en parallèle. Sans un minimum d’organisation, vous risquez
                    vite de vous écraser mutuellement le travail ou de perdre du temps dans les conflits de fusion.
                </p>
                <p>
                    Cette page te propose quelques règles simples pour collaborer proprement avec Git et GitHub : utiliser des
                    branches, écrire des commits utiles et garder ton dépôt synchronisé avec le reste de l’équipe.
                </p>
            </section>

            <section>
                <h2>Ne pas travailler directement sur la branche principale</h2>
                <p>
                    Pour limiter les risques, évite de tout développer directement sur la branche principale (souvent appelée{" "}
                    <code>main</code> ou <code>master</code>).
                </p>
                <ul>
                    <li>
                        Utilise la branche principale pour le code « stable », qui compile et qui représente l’état actuel du
                        projet.
                    </li>
                    <li>
                        Crée des branches pour développer de nouvelles fonctionnalités, corriger des bugs ou expérimenter des
                        idées.
                    </li>
                    <li>
                        Ne fusionne dans la branche principale que lorsque ta fonctionnalité est dans un état raisonnablement
                        stable (tests passés, application qui fonctionne).
                    </li>
                </ul>
            </section>

            <section>
                <h2>Créer des branches par fonctionnalité ou tâche</h2>
                <p>
                    Une bonne pratique simple consiste à créer une branche par fonctionnalité ou par tâche importante.
                </p>
                <ul>
                    <li>
                        Choisis des noms de branches explicites (par exemple <code>feature/gestion-clients</code> ou{" "}
                        <code>bugfix/correction-login</code>).
                    </li>
                    <li>
                        Laisse chaque membre de l’équipe travailler sur sa propre branche ou sur une branche partagée pour une
                        fonctionnalité donnée.
                    </li>
                    <li>
                        Une fois le travail terminé et testé, fusionne la branche dans la branche principale (en évitant de laisser
                        traîner des branches mortes).
                    </li>
                </ul>
            </section>

            <section>
                <h2>Écrire des messages de commit utiles</h2>
                <p>
                    Les messages de commit doivent permettre de comprendre ce qui a été fait sans devoir ouvrir tous les fichiers
                    modifiés.
                </p>
                <ul>
                    <li>
                        Évite les messages du type <em>« fix »</em> ou <em>« changement »</em> qui ne disent rien.
                    </li>
                    <li>
                        Privilégie des messages courts mais précis, par exemple « Ajout de la validation des champs dans le
                        formulaire de création de client ».
                    </li>
                    <li>
                        Si possible, mentionne l’ID d’une tâche ou d’une user story Jira dans le message de commit pour garder un
                        lien entre le code et le backlog.
                    </li>
                    <li>
                        Fais des commits réguliers, après chaque étape cohérente de ton travail, plutôt qu’un énorme commit à la
                        fin.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Rester synchronisé avec l’équipe</h2>
                <p>
                    Pour éviter les mauvaises surprises, il est important de garder ta branche à jour avec le travail des autres.
                </p>
                <ul>
                    <li>
                        Récupère régulièrement les dernières modifications de la branche principale avant de fusionner ta propre
                        branche.
                    </li>
                    <li>
                        Lorsque des conflits apparaissent, prends le temps de les résoudre proprement et de tester à nouveau ton
                        application.
                    </li>
                    <li>
                        Préviens ton équipe si tu travailles sur une partie sensible du code afin d’éviter que plusieurs personnes
                        modifient exactement les mêmes fichiers en même temps.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Utiliser GitHub comme support de collaboration</h2>
                <p>
                    GitHub ne sert pas uniquement de « sauvegarde » : c’est aussi un outil pour visualiser et partager le travail de
                    chacun.
                </p>
                <ul>
                    <li>
                        Utilise GitHub pour voir l’historique des commits, les branches actives et les fichiers modifiés.
                    </li>
                    <li>
                        Lorsque c’est pertinent, utilise des demandes de fusion (pull requests) pour proposer l’intégration d’une
                        branche et permettre une relecture rapide par un coéquipier.
                    </li>
                    <li>
                        Assure-toi que tous les membres de l’équipe poussent régulièrement leurs modifications, pour éviter que le
                        travail reste bloqué sur une seule machine.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Ce que ton équipe devrait mettre en place</h2>
                <ul>
                    <li>
                        Une règle simple concernant la branche principale (qui peut y fusionner, dans quelles conditions).
                    </li>
                    <li>
                        Une convention minimale pour nommer les branches et écrire les messages de commit.
                    </li>
                    <li>
                        Un réflexe de pousser régulièrement sur GitHub et de récupérer les changements des autres avant de fusionner
                        son propre travail.
                    </li>
                </ul>
            </section>
        </main>
    );
}
