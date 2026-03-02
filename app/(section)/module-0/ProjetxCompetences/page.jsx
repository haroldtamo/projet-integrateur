import projetcompetences from '@/public/img/module-00/projetcompetences.png';
import Image from 'next/image';
/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Approche par projet et approche par compétences",
    description: "Explication du lien entre l'approche par projet et l'approche par compétences.",
    keywords: ["approche par compétences", "pédagogie par projet", "évaluation", "construction formative"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Lien entre approche par projet et approche par compétences</h2>
            <p>
                L'approche par projet est une méthode privilégiée de l'approche par compétences puisqu'elle permet une intégration 
                authentique et complète des compétences à développer chez les étudiant·e·s.
            </p>
            <p>
                Contrairement à une évaluation traditionnelle centrée uniquement sur la mémorisation de contenus théoriques, 
                l'approche par projet permet d'évaluer les compétences en action, dans des situations réelles ou réalistes qui 
                reflètent les défis du monde professionnel.
            </p>
            <Image src={projetcompetences} alt="Approche par projet et approche par compétences"
            width={276}
                height={249}
                quality={100}
                style={{ maxWidth: '100%', height: 'auto' }}  />
        </section>

        <section>
            <h2>Pourquoi l'approche par projet est-elle idéale pour développer les compétences ?</h2>
            <p>
                L'approche par projet offre deux avantages majeurs pour le développement et l'évaluation des compétences :
            </p>

            <h3>1. Une construction formative des compétences</h3>
            <p>
                Le projet permet aux étudiant·e·s de développer leurs compétences de manière progressive et itérative, par essais, 
                erreurs et ajustements. Cette approche formative est essentielle, car elle reconnaît que l'apprentissage n'est pas 
                linéaire : les étudiant·e·s apprennent en expérimentant, en recevant de la rétroaction et en réajustant leurs 
                stratégies.
            </p>
            <p>
                Dans un projet, les étudiant·e·s peuvent :
            </p>
            <ul>
                <li>
                    Tester différentes approches pour résoudre un problème.
                </li>
                <li>
                    Apprendre de leurs erreurs et améliorer leur travail en continu.
                </li>
                <li>
                    Recevoir de la rétroaction régulière de l'enseignant·e et de leurs pairs pour ajuster leur démarche.
                </li>
                <li>
                    Développer leur capacité d'autoévaluation et de réflexion critique sur leur propre travail.
                </li>
            </ul>

            <h3>2. Une évaluation sommative intégrée</h3>
            <p>
                À la fin du projet, l'évaluation sommative peut mesurer non seulement la maîtrise des savoirs théoriques, mais 
                aussi la capacité des étudiant·e·s à mobiliser ces savoirs en contexte authentique. Cette évaluation reflète 
                donc la compétence dans son ensemble, en tenant compte :
            </p>
            <ul>
                <li>
                    De la qualité du produit final ou de la solution proposée.
                </li>
                <li>
                    De la démarche suivie et des stratégies utilisées pour résoudre le problème.
                </li>
                <li>
                    De la capacité à collaborer, à communiquer et à s'adapter aux imprévus.
                </li>
                <li>
                    De la mobilisation appropriée des ressources (connaissances, habiletés, attitudes).
                </li>
            </ul>
            <p>
                L'évaluation sommative intégrée permet ainsi de vérifier que les étudiant·e·s ne se contentent pas de connaître 
                des concepts théoriques, mais qu'ils et elles sont capables de les utiliser de manière efficace et pertinente 
                dans des situations complexes.
            </p>
        </section>

        <section>
            <h2>En résumé</h2>
            <p>
                L'approche par projet est un outil pédagogique puissant pour développer et évaluer les compétences. Elle permet 
                aux étudiant·e·s de vivre des expériences d'apprentissage authentiques, de construire progressivement leurs 
                compétences par essais et erreurs, et d'être évalués de manière cohérente et intégrée sur leur capacité à mobiliser 
                leurs acquis dans des contextes réels.
            </p>
            <p>
                C'est pourquoi l'approche par projet occupe une place centrale dans les programmes d'enseignement modernes axés 
                sur le développement de compétences.
            </p>
        </section>
    </>;
}
