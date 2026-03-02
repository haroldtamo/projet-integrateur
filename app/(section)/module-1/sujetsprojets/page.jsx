import { DownloadBlock, File } from "@/components/DownloadBlock";
/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Sujets de projets",
    description: "Présentation des sujets de projets disponibles et du processus de choix par équipe.",
    keywords: ["sujets de projets", "choix de projet", "projet intégrateur"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Des projets commandités, pas des sujets libres</h2>
            <p>
                Dans plusieurs cours, tu peux choisir librement ton sujet de projet. Pour le projet intégrateur, c’est différent :
                les sujets ont été sélectionnés à l’avance. Il s’agit de <strong>projets commandités</strong> par de vrais clients,
                soit à l’interne (dans le collège), soit à l’externe.
            </p>
            <p>
                Concrètement, tu auras accès à une liste de <strong>5 projets</strong> parmi lesquels ton équipe devra établir ses
                préférences.
            </p>
        </section>

        <section>
            <h2>Comment se fait le choix du projet ?</h2>
            <p>
                Chaque équipe devra produire une <strong>liste ordonnée</strong> de projets, du plus souhaité au moins souhaité
                (par exemple : 1 = projet préféré, 5 = dernier choix).
            </p>
            <ul>
                <li>Tu discutes avec ton équipe des 5 projets proposés.</li>
                <li>Vous établissez ensemble votre top 5, en les classant par ordre de préférence.</li>
                <li>Vous remettez cette liste à l’enseignant·e, qui fera l’attribution finale.</li>
            </ul>
            <p>
                L’enseignant·e tiendra compte autant que possible de vos préférences, tout en respectant les contraintes de
                répartition entre les équipes.
            </p>
        </section>

        <section>
            <h2>Limite du nombre d’équipes par projet</h2>
            <p>
                Pour garder un bon équilibre entre les sujets, il y aura un nombre maximal d’équipes par projet. Par exemple, si
                10 équipes sont formées, on pourrait limiter à <strong>2 équipes par projet</strong>.
            </p>
            <p>
                Cela veut dire qu’il est possible que tu n’obtiennes pas ton premier choix, mais ta liste ordonnée permet de
                maximiser les chances que ton équipe obtienne un sujet qui l’intéresse vraiment.
            </p>
        </section>

        <section>
            <h2>Et après ? Présentation au client</h2>
            <p>
                À la fin de la session, les projets pourront être présentés au client associé (interne ou externe). Dans certains
                cas, le client pourra choisir le projet qu’il souhaite utiliser ou poursuivre.
            </p>
            <p>
                Ton projet ne sert donc pas seulement à obtenir une note : il peut aussi avoir un impact réel et devenir une
                réalisation concrète dans ton portfolio.
            </p>
        </section>
        <section>
                    <h2>Télécharger les sujets de projets</h2>
                    <p>
                        Tu peux accéder aux sujets de projets en cliquant ici :
                    </p>
                    <DownloadBlock>
                        <File fileName="sujets de projets.zip" path="/lab-01/sujets de projets.zip"></File>
                    </DownloadBlock>
                </section>
    </>;
}
