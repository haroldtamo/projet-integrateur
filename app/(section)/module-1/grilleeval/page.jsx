import { DownloadBlock, File } from "@/components/DownloadBlock";
import autoeval from '@/public/img/module-01/autoeval.png';
import evalpairs from '@/public/img/module-01/evalpairs.png';
import grillemodele from '@/public/img/module-01/grillemodele.png';
import Image from 'next/image';
/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Grille d’évaluation",
    description: "Présentation de la grille d’évaluation, de l’autoévaluation et de l’évaluation par les pairs.",
    keywords: ["grille d’évaluation", "autoévaluation", "évaluation par les pairs", "projet intégrateur"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>La grille d’évaluation du projet</h2>
            <p>
                Pour le projet intégrateur, une grille d’évaluation détaillée a été préparée. Elle regroupe différents critères
                qui seront utilisés pour juger de la qualité du produit final, du processus de travail et de la contribution de chacun.
            </p>
            <p>
                Cette grille n’est pas seulement un outil pour les profs : tu peux aussi t’en servir pour faire ton propre bilan
                (seul ou en équipe) avant les remises importantes.
            </p>
            <Image src={grillemodele} alt="Grille d'évaluation" />
        </section>

        <section>
            <h2>À quoi servent les critères d’évaluation ?</h2>
            <p>
                Chaque critère décrit un aspect précis de ce qu’on attend dans le projet (qualité du livrable, rigueur, collaboration,
                communication, etc.). Un bon critère d’évaluation est :
            </p>
            <ul>
                <li>pertinent pour le projet ;</li>
                <li>clair et formulé sans ambiguïté ;</li>
                <li>observable et mesurable dans ton travail ;</li>
                <li>distinct des autres critères ;</li>
                <li>lié à un élément concret du produit, du processus ou du comportement en équipe ;</li>
                <li>associé à une qualité recherchée (ex. précision, créativité, rigueur, respect des échéances).</li>
            </ul>
            <p>
                Pendant le projet, toutes les semaines, la rétroaction portera sur certains de ces critères (pas forcément tous en même
                temps), pour t’aider à voir où tu te situes et quoi améliorer.
            </p>
        </section>

        <section>
            <h2>Utiliser la grille pour t’autoévaluer</h2>
            <p>
                L’autoévaluation, c’est le moment où tu prends la grille et tu te poses la question : « où est-ce que je me situe par
                rapport à ces critères ? ». L’objectif n’est pas de te “noter toi-même” à la place du prof, mais de prendre conscience
                de tes forces et de ce qui reste à travailler.
            </p>
            <p>
                Concrètement, la grille peut te servir à :
            </p>
            <ul>
                <li>faire le point avant une remise importante ;</li>
                <li>identifier ce que tu veux améliorer dans la semaine suivante ;</li>
                <li>préparer tes questions pour la rétroaction avec le prof ;</li>
                <li>suivre ta progression au fil du projet.</li>
            </ul>
            <p>
                Plus tu prends l’habitude de t’autoévaluer honnêtement, plus tu deviens autonome dans la gestion de ton apprentissage.
            </p>
            <Image src={autoeval} alt="Auto évaluation" />
        </section>

        <section>
            <h2>Évaluation par les pairs (équipe)</h2>
            <p>
                Dans un projet d’équipe, tout le monde ne contribue pas toujours de la même façon, et ce n’est pas toujours visible
                uniquement dans le livrable final. C’est pour ça qu’il est possible qu’une partie de l’évaluation passe par une
                <strong> évaluation par les pairs</strong>.
            </p>
            <p>
                L’idée est simple : les membres d’une équipe portent un jugement, à l’aide d’une grille, sur la contribution de
                leurs coéquipiers (coopération, qualité de la partie individuelle, qualité de la rétroaction donnée aux autres,
                assiduité, etc.).
            </p>
            <p>
                Cette démarche permet de :
            </p>
            <ul>
                <li>mieux reconnaître l’effort réel de chacun au sein de l’équipe ;</li>
                <li>responsabiliser tout le monde par rapport au travail collectif ;</li>
                <li>t’amener à réfléchir à ta propre façon de collaborer.</li>
            </ul>
            <p>
                Si ce type d’évaluation est utilisé, les consignes et la grille spécifique d’évaluation par les pairs te seront
                présentées clairement avant l’activité.
            </p>
            <Image src={evalpairs} alt="Evaluation par les pairs" />
        </section>

        <section>
            <h2>En pratique, pour toi</h2>
            <p>
                Pour tirer le maximum de cette grille d’évaluation, tu peux :
            </p>
            <ul>
                <li>la lire au début du projet pour savoir exactement ce qui compte ;</li>
                <li>t’y référer régulièrement pendant que tu travailles ;</li>
                <li>l’utiliser pour t’autoévaluer (seul ou en équipe) avant les remises ;</li>
                <li>revoir les critères après avoir reçu une rétroaction, pour comprendre comment progresser.</li>
            </ul>
            <p>
                La grille d’évaluation complète te sera fournie en document séparé (papier ou en ligne) et servira de référence tout
                au long du projet.
            </p>
        </section>
        <section>
            <h2>Télécharger la grille d'évaluation</h2>
            <p>
                Tu peux accéder à la grille d'évaluation en cliquant ici :
            </p>
            <DownloadBlock>
                <File fileName="grille-evaluation.pdf" path="/lab-01/grille-evaluation.pdf"></File>
            </DownloadBlock>
        </section>
    </>;
}
