export const metadata = {
    title: "Gestion du code et de la documentation (Git/GitHub)",
    description:
        "Utilisation de Git et GitHub pour versionner le code et la documentation du projet intégrateur, et collaborer efficacement en équipe.",
    keywords: ["Git", "GitHub", "gestion de versions", "projet intégrateur"],
    group: "notes",
};

export default function Page() {
    return (
        <main className="page">
            <section>
                <h1>Git et GitHub pour votre projet</h1>
                <p>
                    Dans ce projet intégrateur, vous devez utiliser Git et GitHub pour gérer l’ensemble de votre travail, pas
                    seulement le code source. Git est un système de gestion de versions qui enregistre l’historique des
                    modifications et permet de revenir à un état précédent en cas de problème.
                </p>
                <p>
                    GitHub est une plateforme en ligne qui héberge vos dépôts Git et facilite le travail en équipe : tout le
                    monde accède au même dépôt, peut récupérer la dernière version, proposer des changements et suivre
                    l’évolution du projet.
                </p>
            </section>

            <section>
                <h2>Pourquoi utiliser Git pour ce projet ?</h2>
                <ul>
                    <li>
                        Garder un historique clair de votre projet : chaque commit documente une étape de votre travail (code,
                        docs, tests, etc.), ce qui permet de comprendre l’évolution du projet.
                    </li>
                    <li>
                        Pouvoir revenir en arrière si une modification casse quelque chose ou si une idée ne fonctionne pas.
                    </li>
                    <li>
                        Faciliter le travail en équipe : chacun peut travailler sur ses tâches sans écraser le travail des
                        autres, puis fusionner les changements.
                    </li>
                    <li>
                        Centraliser tous les artefacts du projet au même endroit (code, diagrammes, cahier des charges, tests,
                        etc.), plutôt que de les disperser dans des dossiers locaux ou des pièces jointes.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Structure minimale de votre dépôt</h2>
                <p>
                    Tous les artefacts de votre projet doivent être versionnés dans un seul dépôt Git. La structure suivante est
                    recommandée pour ce cours :
                </p>
                <ul>
                    <li>
                        <code>src/</code> : code source de votre application (projet solution, fichiers .cs, .xaml, etc. selon la
                        technologie utilisée).
                    </li>
                    <li>
                        <code>docs/</code> : documents du projet (diagrammes, cahier des charges, dossier de conception,
                        stratégies de test, plans de tests, documentation utilisateur, etc.).
                    </li>
                    <li>
                        <code>tests/</code> (ou équivalent) : tests automatisés, jeux de données de tests, scripts ou outils de
                        tests, si applicables.
                    </li>
                    <li>
                        Autres dossiers au besoin (par exemple <code>scripts/</code> pour des scripts utilitaires), tant que la
                        structure reste claire et cohérente pour l’équipe.
                    </li>
                </ul>
                <p>
                    Aucun document important du projet ne doit exister uniquement sur vos machines ou dans Teams / OneDrive : la
                    version de référence doit toujours être celle qui se trouve dans le dépôt Git.
                </p>
            </section>

            <section>
                <h2>Dépôt GitHub privé pour le projet</h2>
                <p>
                    Pour ce cours, chaque équipe doit créer un dépôt privé sur GitHub qui sera utilisé comme dépôt central du
                    projet. Git sera utilisé localement par chaque membre, et GitHub servira de point de synchronisation entre
                    vous.
                </p>
                <ul>
                    <li>
                        Créez un dépôt privé sur GitHub pour votre équipe, avec un nom explicite (par exemple{" "}
                        <code>projet-integrateur-equipeX</code>).
                    </li>
                    <li>
                        Ajoutez tous les membres de votre équipe comme collaborateurs au dépôt pour qu’ils puissent cloner,
                        pousser et créer des branches.
                    </li>
                    <li>
                        Ajoutez l’enseignant comme collaborateur avec un rôle lui donnant un accès complet (par exemple « Admin »
                        / plein accès) via <em>Settings → Collaborators / Manage access → Add people</em>.
                    </li>
                    <li>
                        Utilisez ce dépôt comme source de vérité : c’est ce dépôt que l’enseignant consultera pour corriger et
                        suivre l’évolution de votre projet.
                    </li>
                </ul>
            </section>

            
            <section>
                <h2>Attentes minimales d’utilisation</h2>
                <ul>
                    <li>
                        Commitez régulièrement (plutôt que tout d’un coup à la fin) avec des messages de commit clairs qui
                        décrivent ce que vous avez fait.
                    </li>
                    <li>
                        Poussez vos changements sur GitHub fréquemment pour ne pas garder tout le travail uniquement en local.
                    </li>
                    <li>
                        Assurez-vous que la structure <code>src/</code>, <code>docs/</code> et autres dossiers convenus est
                        respectée tout au long du projet.
                    </li>
                    <li>
                        Utilisez le dépôt GitHub comme support lors de vos rencontres de suivi et remises : tout ce qui est évalué
                        doit pouvoir être retrouvé dans le dépôt.
                    </li>
                </ul>
            </section>
        </main>
    );
}
