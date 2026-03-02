/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Histoire de la pédagogie par projet",
    description: "Présentation de l'origine et de l'évolution historique de la pédagogie par projet.",
    keywords: ["histoire", "pédagogie par projet", "Rome", "architecture", "Prix de Rome", "Dewey", "Kilpatrick"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Les origines : de l'architecture à l'éducation</h2>
            <p>
                Quelques chercheurs (Boutinet, 2001; Knoll, 1997) avancent l'idée que la pédagogie par projet aurait pris racine 
                en Italie au 16ᵉ siècle lors d'un concours d'architecture à Rome. Les étudiants de l'Accademia di San Luca 
                devaient résoudre des problèmes architecturaux concrets en situation d'examen chronométré, mobilisant leurs 
                connaissances théoriques et pratiques pour proposer des solutions créatives.
            </p>
            <p>
                Moins de cent ans plus tard, les architectes français introduisent le principe de ce concours à l'Académie royale 
                d'architecture de Paris avec le célèbre Prix de Rome, créé officiellement en 1720 pour l'architecture. Ce concours 
                prestigieux demandait aux candidats de concevoir des projets architecturaux ambitieux, en mobilisant savoirs 
                théoriques, créativité et résolution de problèmes complexes.
            </p>
            <p>
                À la fin du 18ᵉ siècle, la pédagogie par projet s'étend de l'Europe en Amérique et de l'architecture à l'ingénierie 
                pour finalement établir les bases d'un mode d'enseignement qui s'implantera graduellement à tous les niveaux d'éducation.
            </p>
        </section>

        <section>
            <h2>Un peu de théorie pour expliquer les fondements</h2>
            <p>
                Trois penseurs majeurs ont contribué à définir et à développer la pédagogie par projet telle qu'on la connaît aujourd'hui.
            </p>

            <h3>John Dewey (1859–1952)</h3>
            <p>
                <strong>Vision de l'éducation :</strong> L'école doit préparer les individus à la vie démocratique, en mettant 
                l'accent sur l'expérience vécue et l'action.
            </p>
            <p>
                <strong>Apport à l'approche par projet :</strong>
            </p>
            <ul>
                <li>
                    L'apprentissage doit être centré sur l'élève et ses intérêts.
                </li>
                <li>
                    L'expérience concrète, la résolution de problèmes réels et l'enquête sont au cœur du processus éducatif.
                </li>
                <li>
                    L'école doit devenir une « communauté de vie » où les élèves apprennent en faisant (<em>learning by doing</em>).
                </li>
            </ul>
            <p>
                <strong>Idée clé :</strong> Le projet est un moyen d'unir théorie et pratique en mobilisant l'élève dans des 
                situations authentiques.
            </p>

            <h3>William H. Kilpatrick (1871–1965)</h3>
            <p>
                <strong>Disciple et continuateur de Dewey :</strong> Il a systématisé l'approche par projet et lui a donné une 
                large reconnaissance.
            </p>
            <p>
                <strong>Apport à l'approche par projet :</strong>
            </p>
            <ul>
                <li>
                    Définition du <em>Project Method</em> (1918), où le projet est une activité intentionnelle, choisie par 
                    l'élève et poursuivie avec motivation.
                </li>
                <li>
                    Il distingue plusieurs types de projets : productifs (fabriquer quelque chose), constructifs (résoudre un 
                    problème), appréciatifs (explorer ou expérimenter), formatifs (développement personnel).
                </li>
                <li>
                    Le rôle de l'enseignant : accompagnateur, facilitateur et guide, plutôt que simple transmetteur de savoirs.
                </li>
            </ul>
            <p>
                <strong>Idée clé :</strong> L'intérêt de l'élève est le moteur de l'apprentissage.
            </p>

            <h3>Jean Piaget (1896–1980)</h3>
            <p>
                <strong>Vision de l'apprentissage :</strong> L'enfant construit activement ses connaissances en interaction avec 
                son environnement. C'est ce qu'on appelle le (socio)constructivisme.
            </p>
            <p>
                <strong>Apport à l'approche par projet :</strong>
            </p>
            <ul>
                <li>
                    Fondements théoriques du constructivisme : l'étudiant apprend en agissant, en expérimentant et en résolvant 
                    des problèmes concrets.
                </li>
                <li>
                    Importance du développement cognitif : les projets doivent être adaptés au stade de développement des étudiant·e·s.
                </li>
                <li>
                    L'activité de projet favorise l'équilibre entre assimilation (intégrer de nouvelles informations) et 
                    accommodation (adapter ses schèmes de pensée).
                </li>
            </ul>
            <p>
                <strong>Idée clé :</strong> Le projet est un contexte privilégié pour permettre aux étudiants de construire 
                activement leur savoir et leurs compétences.
            </p>
        </section>
    </>;
}
