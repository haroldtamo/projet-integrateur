export const metadata = {
    title: "Préparer la revue de sprint 1",
    description:
        "Choisir quoi démontrer pour le sprint 1, structurer la revue autour de l’objectif de sprint et répartir les rôles dans l’équipe.",
    keywords: ["revue de sprint", "sprint 1", "démonstration", "présentation"],
    group: "notes",
};

export default function Page() {
    return (
        <main className="page">
            <section>
                <h1></h1>
                <p>
                    La revue de sprint 1 sert à montrer ce que votre équipe a réellement accompli par rapport à l’objectif du
                    sprint. L’idée n’est pas de tout montrer, mais de présenter clairement les éléments les plus importants et
                    de donner une vision honnête de votre avancement.
                </p>
                <p>
                    Cette page t’aide à choisir ce que tu vas démontrer, à structurer ta présentation autour de l’objectif de
                    sprint et à répartir les rôles dans ton équipe pour la revue.
                </p>
            </section>

            <section>
                <h2>Revenir à l’objectif du sprint 1</h2>
                <p>
                    La première étape pour préparer ta revue consiste à relire l’objectif de sprint que vous avez formulé au
                    démarrage.
                </p>
                <ul>
                    <li>
                        Relisez ensemble l’objectif de sprint 1 tel qu’il a été défini (dans Jira ou dans votre documentation).
                    </li>
                    <li>
                        Listez ce qui a été réellement livré qui contribue directement à cet objectif.
                    </li>
                    <li>
                        Identifiez aussi ce qui était prévu mais n’a pas pu être terminé ou a été reporté.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Choisir les scénarios à démontrer</h2>
                <p>
                    Tu n’as pas besoin de montrer chaque détail technique : concentre-toi sur quelques scénarios représentatifs,
                    compréhensibles pour le client et l’enseignant.
                </p>
                <ul>
                    <li>
                        Choisis 2 à 4 scénarios d’utilisation qui illustrent bien l’objectif du sprint (par exemple un parcours
                        utilisateur complet ou plusieurs cas clés).
                    </li>
                    <li>
                        Pour chaque scénario, note le chemin que tu vas suivre dans l’application (écran de départ, actions,
                        résultat attendu).
                    </li>
                    <li>
                        Prévois quelques mots pour expliquer ce qui se passe « derrière » (logique métier, données, contraintes).
                    </li>
                    <li>
                        Si certaines parties ne sont pas terminées, décide si tu les mentionnes en mode « aperçu » ou si tu les
                        gardes pour un sprint suivant.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Structurer ta présentation</h2>
                <p>
                    Une bonne revue de sprint est courte, structurée et relie toujours la démonstration à l’objectif de sprint.
                </p>
                <ul>
                    <li>
                        Commence par rappeler l’objectif du sprint 1 en une phrase ou deux.
                    </li>
                    <li>
                        Présente ensuite les scénarios que tu vas démontrer, dans un ordre logique (par exemple du plus simple au
                        plus complet).
                    </li>
                    <li>
                        Pour chaque scénario, montre rapidement le fonctionnement dans l’application puis explique ce que cela
                        représente pour le client ou l’utilisateur.
                    </li>
                    <li>
                        Termine par un court bilan : ce qui a été livré, ce qui reste à faire, et les principaux obstacles que vous
                        avez rencontrés.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Répartir les rôles dans l’équipe</h2>
                <p>
                    Tout le monde n’a pas besoin de parler pendant la revue, mais il est important que les rôles soient clairs.
                </p>
                <ul>
                    <li>
                        Décidez qui introduit la revue (rappel du contexte et de l’objectif de sprint).
                    </li>
                    <li>
                        Répartissez les scénarios de démonstration entre les membres de l’équipe (qui montre quoi).
                    </li>
                    <li>
                        Prévoyez qui répondra aux questions plus techniques (architecture, conception, tests) si l’enseignant ou le
                        client en posent.
                    </li>
                    <li>
                        Faites au moins une répétition rapide entre vous pour vérifier le déroulement et le timing.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Anticiper les questions</h2>
                <p>
                    La revue de sprint est aussi un moment d’échange, pas seulement une « démo ». Il est utile de préparer quelques
                    réponses.
                </p>
                <ul>
                    <li>
                        Soyez prêts à expliquer pourquoi certains éléments prévus n’ont pas été livrés (sans chercher d’excuses,
                        mais en décrivant les faits).
                    </li>
                    <li>
                        Préparez quelques exemples de décisions importantes que vous avez prises pendant le sprint (techniques ou
                        organisationnelles).
                    </li>
                    <li>
                        Réfléchissez à ce que vous envisagez pour le sprint suivant, en lien avec ce qui a été appris pendant le
                        sprint 1.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Ce que votre équipe devrait avoir préparé</h2>
                <ul>
                    <li>
                        Un objectif de sprint 1 relu et, si nécessaire, légèrement reformulé pour coller à la réalité.
                    </li>
                    <li>
                        Une liste de scénarios à démontrer, avec un ordre de présentation et un responsable par scénario.
                    </li>
                    <li>
                        Un plan de revue (introduction, démonstration, bilan) que toute l’équipe connaît.
                    </li>
                </ul>
            </section>
        </main>
    );
}
