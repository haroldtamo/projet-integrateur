/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Rétroaction",
    description: "Fonctionnement des rétroactions hebdomadaires et rôle de la rétroaction en pédagogie par projet.",
    keywords: ["rétroaction", "feedback", "projet intégrateur", "évaluation formative"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Rétroaction : ce qui change dans ce cours</h2>
            <p>
                Dans beaucoup de cours, tu reçois une évaluation seulement à certains moments clés (par exemple, un test ou un
                travail toutes les quatre semaines). Ici, comme il s’agit d’un projet intégrateur, tu vas recevoir de la
                <strong> rétroaction chaque semaine</strong>.
            </p>
            <p>
                Cette rétroaction sera liée aux critères de la grille d’évaluation du projet. Ce ne seront pas forcément les mêmes
                critères chaque semaine, ni tous les critères en même temps, mais tu auras toujours un retour sur l’avancement de
                ton projet.
            </p>
            <p>
                L’idée, c’est de t’aider à ajuster le tir en cours de route, plutôt que de tout découvrir seulement à la toute fin.
            </p>
        </section>

        <section>
            <h2>À quoi sert la rétroaction en projet ?</h2>
            <p>
                La pédagogie par projet est une démarche plus complexe qu’un simple devoir : tu dois planifier, produire, collaborer,
                présenter, t’adapter… Pour t’aider, la rétroaction joue un rôle central.
            </p>
            <ul>
                <li>Valider ce qui fonctionne bien dans ton travail.</li>
                <li>Identifier ce qui est à améliorer pendant qu’il est encore temps de le corriger.</li>
                <li>T’aider à réguler ton apprentissage (et permettre aux profs d’ajuster leur accompagnement).</li>
            </ul>
            <p>
                La rétroaction peut porter sur le <strong>produit</strong> (les livrables), le <strong>processus</strong> (ta façon de travailler,
                t’organiser, collaborer) ou les <strong>propos</strong> (tes explications, tes justifications, tes échanges avec les autres).
            </p>
        </section>

        <section>
            <h2>Différents types de rétroaction que tu peux recevoir</h2>
            <p>
                Selon le moment dans le projet et ton niveau d’autonomie, la rétroaction peut prendre différentes formes.
            </p>

            <h3>Rétroaction de base</h3>
            <p>
                On te dit si ce que tu fais est correct ou non, et on te donne la bonne réponse, la bonne méthode ou une façon plus
                efficace de faire. Ce type de rétroaction est surtout utile quand tu débutes ou quand tu te trompes sur un point
                important.
            </p>

            <h3>Rétroaction directive</h3>
            <p>
                On te dit plus précisément quoi changer ou quoi faire pour t’améliorer (par exemple : « clarifie cet objectif »,
                « structure ton document de cette façon », « ajoute tel élément dans ta présentation »). C’est souvent ce qui aide
                le plus pour avancer rapidement sur une tâche complexe.
            </p>

            <h3>Rétroaction d’encadrement (coaching)</h3>
            <p>
                Au lieu de te dire quoi faire, on te pose des questions ou on te donne des indices pour t’amener à trouver toi-même
                ce qui doit être amélioré. Ce type de rétroaction t’aide à développer ta capacité à t’autoévaluer et à ajuster ton
                travail par toi-même.
            </p>
        </section>

        <section>
            <h2>Ce que l’on attend de toi avec ces rétroactions</h2>
            <p>
                Pour que ces rétroactions hebdomadaires soient vraiment utiles, il est important que tu :
            </p>
            <ul>
                <li>Prennes le temps de les lire ou de les écouter attentivement.</li>
                <li>Les utilises pour ajuster ton travail (seul ou avec ton équipe).</li>
                <li>Poses des questions si quelque chose n’est pas clair.</li>
                <li>Gardes une trace des commentaires importants pour voir ta progression.</li>
            </ul>
            <p>
                Ces rétroactions ne sont pas là seulement pour « juger » ton travail : elles sont surtout là pour t’aider à progresser
                tout au long du projet.
            </p>
        </section>
    </>;
}
