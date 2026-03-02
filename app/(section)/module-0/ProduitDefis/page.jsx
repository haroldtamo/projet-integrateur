import troisp from '@/public/img/module-00/3p.png';
import processus from '@/public/img/module-00/processus.png';
import Image from 'next/image';
/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Pédagogie par projet – Produit, plus-value et défis",
    description: "Présentation du modèle des 3P (Produit, Processus, Propos), de la plus-value et des défis de l’apprentissage par projet.",
    keywords: ["pédagogie par projet", "évaluation", "produit", "processus", "propos", "plus-value", "défis"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Produit, processus, propos (modèle des 3P)</h2>
            <p>
                L’apprentissage par projet aboutit généralement à un produit final, en réponse au problème de départ. Ce produit
                peut prendre différentes formes : rapport, plan de conception, objet concret, programme, maquette ou modèle à
                présenter à la classe ou à un public externe.
            </p>
            <Image src={processus} alt="Processus" />
            <p>
                Toutefois, l’évaluation ne doit pas se limiter au produit fini. Le modèle des 3P propose de considérer trois
                dimensions complémentaires :
            </p>
            <ul>
                <li>
                    <strong>Produit</strong> : le résultat final du projet (ce qui est livré ou présenté).
                </li>
                <li>
                    <strong>Processus</strong> : la manière dont le projet a été mené (organisation, démarche, collaboration, gestion du temps).
                </li>
                <li>
                    <strong>Propos</strong> : la réflexion des étudiant·e·s sur leur projet (conversations, justification des choix, analyse critique).
                </li>
            </ul>
            <Image src={troisp} alt="Propos, processus, produit"
                        />
            <p>
                Concrètement, cela signifie que l’évaluation devient multimodale : on tient compte à la fois des productions,
                des observations de l’enseignant·e et des conversations ou réflexions des étudiant·e·s sur leur propre travail.
            </p>
        </section>

        <section>
    <h2>Quelle plus-value pour toi ?</h2>
    <p>
        L’apprentissage par projet t’apporte plusieurs bénéfices importants.
    </p>
    <ul>
        <li>
            <strong>Apprentissage en profondeur</strong> : tu comprends mieux la matière, parce que tu la relies à des situations concrètes,
            pas seulement à de la théorie à mémoriser pour un examen.
        </li>
        <li>
            <strong>Développement de compétences transversales</strong> : tu développes ta capacité à résoudre des problèmes, communiquer,
            collaborer avec les autres, gérer ton temps et réfléchir de façon critique.
        </li>
        <li>
            <strong>Motivation et engagement</strong> : travailler sur un projet qui a du sens pour toi rend le cours plus motivant et te
            donne envie de t’impliquer davantage.
        </li>
        <li>
            <strong>Préparation au monde du travail</strong> : tu te rapproches de ce qui t’attend en milieu professionnel (travail en équipe,
            livrables à remettre, délais à respecter, imprévus à gérer, etc.).
        </li>
    </ul>
    <p>
        Autrement dit, le projet ne te fait pas seulement « passer le cours » : il t’aide à construire des compétences utiles pour la suite
        de tes études et pour ta future carrière.
    </p>
</section>

        <section>
            <h2>Défis potentiels de la pédagogie par projet</h2>
            <p>
                Comme toute approche pédagogique, la pédagogie par projet comporte également des défis qu’il faut anticiper et gérer.
            </p>
            <ul>
                <li>
                    <strong>Niveau d’ambition du projet</strong> : le projet peut être trop ambitieux (irréaliste) ou au contraire
                    pas assez, ce qui nuit soit à la faisabilité, soit à l’intérêt pédagogique.
                </li>
                <li>
                    <strong>Accent excessif sur le produit</strong> : il existe un risque de se concentrer uniquement sur le résultat
                    final et de négliger le processus d’apprentissage et la réflexion des étudiant·e·s.
                </li>
                <li>
                    <strong>Gestion du temps</strong> : les projets peuvent prendre plus de temps que prévu, ce qui peut rendre
                    difficile le respect de l’échéancier du cours.
                </li>
                <li>
                    <strong>Difficultés techniques</strong> : certains projets impliquent des outils, des technologies ou des
                    ressources matérielles qui peuvent poser des problèmes techniques.
                </li>
                <li>
                    <strong>Divergences au sein des équipes</strong> : des conflits, des différences d’investissement ou de
                    vision peuvent apparaître entre les membres d’une équipe.
                </li>
                <li>
                    <strong>Défis d’évaluation sommative</strong> : évaluer de manière juste et transparente la contribution
                    individuelle dans un travail d’équipe et la mobilisation des compétences peut être complexe.
                </li>
                <li>
                    <strong>Risque de démotivation</strong> : si le projet est trop difficile, trop long ou perçu comme peu
                    utile, il peut entraîner une démotivation en cours de route.
                </li>
            </ul>
            <p>
                Dans un contexte de pédagogie par projet, les activités sont conçues pour proposer des projets réalistes, bien encadrés, avec des critères d’évaluation clairs, et un accompagnement permettant de transformer les défis en occasions d’apprentissage.
            </p>
        </section>
    </>;
}
