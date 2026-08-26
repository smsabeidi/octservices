import type { CareersDict, Job } from "../en/careers";

/**
 * careers namespace — French.
 *
 * The three openings and the static labels of the job page template. `slug`,
 * `image` and `seo.ogImage` are routes and assets, not copy, and are byte
 * identical to the English source. The meta card values render uppercase via
 * CSS, not in the data.
 *
 * `\u00A0` below is U+00A0, the non-breaking space French sets before a colon and
 * between a figure and its currency symbol.
 */

const jobs: Job[] = [
  {
    slug: "project-manager",
    eyebrow: "REJOIGNEZ-NOUS",
    title: "Chef de projet",
    summary: "Coordonner les projets de traduction du devis à la livraison\u00A0: périmètre, planning, affectation des linguistes et relation client.",
    type: "Temps plein",
    location: "À distance",
    image: {
      src: "/kafka/img/dW7lQMtwln30YCc5d986Pg7YGE.png",
      width: 1312,
      height: 745,
      aspectRatio: 1.7610738255033558,
    },
    blocks: [
      { type: "heading", text: "Description du poste" },
      { type: "paragraph", text: "Le chef de projet pilote les projets de traduction des clients de l’immigration, des études et de l’entreprise, de la première demande jusqu’à la livraison." },
      { type: "paragraph", text: "Vous déterminerez ce qu’attend l’organisme destinataire, fixerez le périmètre et le délai, affecterez les bons linguistes et tiendrez à jour fichiers, glossaires et dates de livraison. Votre travail permet aux traducteurs et aux réviseurs de se concentrer sur la langue pendant que chaque dossier reste dans les temps." },
      { type: "paragraph", text: "Ce poste convient à une personne méthodique, calme face aux échéances, attentive au détail et désireuse de construire une carrière dans les services linguistiques." },
      { type: "paragraph", text: "Une expérience en agence est un plus, sans être indispensable. Une formation à nos outils et à notre processus qualité est assurée." },
      { type: "heading", text: "Responsabilités" },
      {
        type: "list",
        items: [
          "Chiffrer les projets et confirmer périmètre, format et délai.",
          "Affecter les linguistes par combinaison de langues et par domaine.",
          "Planifier les étapes de traduction, de révision et de livraison.",
          "Suivre les délais, les formats de fichier et les exigences de livraison.",
          "Vérifier les exigences de l’organisme destinataire avant le début des travaux.",
          "Briefer les traducteurs et les réviseurs au lancement de chaque dossier.",
          "Tenir à jour les glossaires et les guides de style des clients.",
          "Entretenir les mémoires de traduction des clients récurrents.",
          "Répondre aux questions des clients sur le processus et les délais.",
          "Préparer le certificat d’exactitude de la traduction pour signature.",
          "Organiser la légalisation notariale et l’apostille sur demande.",
          "Traiter les documents clients en toute confidentialité.",
          "Consigner les retours clients et leur donner suite.",
          "Appuyer la facturation et le suivi des linguistes.",
        ],
      },
      { type: "heading", text: "Qualifications" },
      {
        type: "list",
        items: [
          "Licence ou qualification professionnelle équivalente.",
          "Une expérience de la coordination de projets est appréciée.",
          "Une expérience en agence de traduction ou en service linguistique est un atout.",
          "Solides capacités de planification et de hiérarchisation.",
          "Excellent souci du détail.",
          "Aptitude à rédiger des e-mails clairs et professionnels.",
          "Aisance avec les outils de gestion de traduction et de TAO.",
          "Capacité à gérer de nombreux dossiers et des priorités mouvantes.",
          "Communication professionnelle et respectueuse.",
          "Sens aigu des responsabilités et de la confidentialité.",
          "La maîtrise de l’anglais est exigée.",
          "Une seconde langue est fortement souhaitée.",
        ],
      },
      { type: "heading", text: "Autres avantages" },
      {
        type: "list",
        items: [
          "Intégration complète et formation pratique aux outils.",
          "Accompagnement par des linguistes et des chefs de projet expérimentés.",
          "Possibilités d’évoluer vers un poste senior ou de responsable de projets.",
          "Environnement de travail agréable et professionnel.",
          "Travail hybride possible après la période d’intégration.",
          "Couverture santé privée.",
          "Congés payés et jours de congé personnels.",
          "Matériel et indemnité de télétravail.",
          "Points d’équipe réguliers et événements d’entreprise.",
          "Accès aux formations internes et aux ressources du secteur.",
        ],
      },
    ],
    meta: [
      { label: "Fourchette de rémunération\u00A0:", value: "2\u00A0500\u00A0$–3\u00A0400\u00A0$ par mois" },
      { label: "Service\u00A0:", value: "Gestion de projet" },
      { label: "Horaires\u00A0:", value: "Du lundi au vendredi, 9h00 à 18h00" },
      { label: "Type\u00A0:", value: "Temps plein" },
    ],
    seo: {
      title: "Chef de projet · Global Language Solutions",
      description: "Coordonner les projets de traduction chez Global Language Solutions, du devis et du périmètre à l’affectation des linguistes et à la livraison certifiée.",
      ogImage: "/kafka/img/dW7lQMtwln30YCc5d986Pg7YGE.png",
    },
  },
  {
    slug: "senior-translator",
    eyebrow: "REJOIGNEZ-NOUS",
    title: "Traducteur senior",
    summary: "Traduire des documents d’immigration, académiques et commerciaux vers votre langue maternelle, et piloter la terminologie des comptes clés.",
    type: "Temps plein",
    location: "À distance",
    image: {
      src: "/kafka/img/vDyRaUb0I8ybD7E9tD2v84BoLNU.png",
      width: 1440,
      height: 745,
      aspectRatio: 1.9328859060402686,
    },
    blocks: [
      { type: "paragraph", text: "Nous recherchons un traducteur senior expérimenté pour travailler sur des documents où l’exactitude a de véritables conséquences pour le client." },
      { type: "paragraph", text: "À ce poste, vous traduirez des actes d’état civil, des relevés de notes et des diplômes, des contrats, des documents de société et des politiques internes, ainsi que des contenus marketing à adapter au marché visé plutôt qu’à rendre littéralement." },
      { type: "paragraph", text: "Vous travaillerez directement avec les chefs de projet, les réviseurs et, sur les grands comptes, les relecteurs du client. Le poste exige une connaissance approfondie du domaine et un usage rigoureux des glossaires et des mémoires de traduction." },
      { type: "paragraph", text: "La personne retenue traduira le sens plutôt que les mots, signalera tôt les ambiguïtés du document source et produira un travail que l’organisme destinataire acceptera sans réserve." },
      { type: "heading", text: "Responsabilités" },
      {
        type: "list",
        items: [
          "Traduire vers votre langue maternelle à partir du document source.",
          "Respecter le glossaire et le guide de style du client.",
          "Traiter actes d’état civil, relevés de notes, contrats et politiques internes.",
          "Restituer sceaux, tampons et signatures dans les traductions certifiées.",
          "Signaler tout passage source flou, incomplet ou détérioré.",
          "Rester fidèle à la mise en forme et à la mise en page de l’original.",
          "Entretenir la terminologie dans les glossaires et les mémoires de traduction.",
          "Réviser sur demande la traduction d’un collègue face au document source.",
          "Certifier l’exactitude des traductions que vous réalisez.",
          "Conseiller les chefs de projet sur un délai réaliste.",
          "Adapter les contenus marketing et web au marché visé.",
          "Assurer sur demande traduction à vue et rétrotraduction.",
          "Encadrer les traducteurs juniors et évaluer les tests.",
          "Traiter chaque document client de façon confidentielle.",
        ],
      },
      { type: "heading", text: "Qualifications" },
      {
        type: "list",
        items: [
          "Diplôme en traduction ou formation équivalente.",
          "Ou un diplôme dans un autre domaine et deux ans de traduction.",
          "Ou cinq ans de traduction professionnelle attestée.",
          "Au moins trois ans dans votre domaine de spécialité.",
          "Maîtrise native ou quasi native de la langue cible.",
          "Excellente compréhension de la langue source.",
          "Une certification ATA ou équivalente est un atout.",
          "Aisance avec les outils de TAO et de terminologie.",
          "Connaissance des exigences de révision de la norme ISO 17100.",
          "Recherche rigoureuse et approche documentée de la terminologie.",
          "Capacité à tenir les délais convenus sans relance.",
          "Haut niveau d’intégrité professionnelle et de confidentialité.",
        ],
      },
      { type: "heading", text: "Autres avantages" },
      {
        type: "list",
        items: [
          "Rémunération compétitive, revue régulièrement.",
          "Travail régulier dans votre combinaison et votre domaine.",
          "Des documents qui comptent pour ceux qui les confient.",
          "Développement professionnel et formation en terminologie spécialisée.",
          "Travail entièrement à distance.",
          "Couverture santé privée et avantages bien-être.",
          "Congés payés et jours personnels supplémentaires.",
          "Accès aux ressources de référence et aux bases terminologiques.",
          "Soutien à la certification professionnelle et aux événements du secteur.",
          "Évolution possible vers des postes de réviseur et de linguiste référent.",
        ],
      },
    ],
    meta: [
      { label: "Fourchette de rémunération\u00A0:", value: "5\u00A0000\u00A0$–7\u00A0500\u00A0$ par mois" },
      { label: "Service\u00A0:", value: "Traduction" },
      { label: "Horaires\u00A0:", value: "Du lundi au vendredi, 9h00 à 18h00" },
      { label: "Type\u00A0:", value: "Temps plein" },
    ],
    seo: {
      title: "Traducteur senior · Global Language Solutions",
      description: "Un poste de traducteur senior chez Global Language Solutions, vers votre langue maternelle, sur des dossiers dont dépendent nos clients.",
      ogImage: "/kafka/img/vDyRaUb0I8ybD7E9tD2v84BoLNU.png",
    },
  },
  {
    slug: "quality-reviewer",
    eyebrow: "REJOIGNEZ-NOUS",
    title: "Réviseur qualité",
    summary: "Vérifier les traductions sur le document source\u00A0: exactitude, exhaustivité, terminologie et mise en forme, avant remise au client.",
    type: "Temps plein",
    location: "À distance",
    image: {
      src: "/kafka/img/5B0yTzRf3jvC8kbEfBqbcccLFBw.png",
      width: 1440,
      height: 745,
      aspectRatio: 1.9328859060402686,
    },
    blocks: [
      { type: "heading", text: "Description du poste" },
      { type: "paragraph", text: "En tant que réviseur qualité, vous assurez la révision indépendante par laquelle passe chaque traduction certifiée. Votre travail couvre la comparaison avec le document source, le contrôle de la terminologie et de la mise en forme, et un retour clair au traducteur." },
      { type: "paragraph", text: "Vous travaillerez en lien étroit avec les traducteurs et les chefs de projet pour que chaque dossier parte complet, conforme au glossaire du client et acceptable pour l’organisme destinataire." },
      { type: "paragraph", text: "Ce poste convient à un linguiste méticuleux qui préfère détecter un problème avant la livraison plutôt que l’expliquer après, et qui trouve satisfaction dans un travail précis." },
      { type: "heading", text: "Responsabilités" },
      {
        type: "list",
        items: [
          "Comparer intégralement chaque traduction au document source.",
          "Contrôler la terminologie sur le glossaire et la base du client.",
          "Vérifier noms, dates, chiffres et numéros de référence.",
          "S’assurer que sceaux, tampons et signatures sont restitués.",
          "Vérifier que la mise en forme et la mise en page suivent l’original.",
          "Adresser au traducteur un retour clair et précis.",
          "Consigner les problèmes récurrents et les intégrer aux formations.",
          "Appliquer les étapes de révision définies par la norme ISO 17100.",
          "Valider les fichiers pour certification et livraison.",
          "Mettre à jour glossaires et guides de style après chaque projet.",
          "Traiter les documents clients en toute confidentialité.",
          "Participer aux revues qualité et aux sessions de calibrage.",
        ],
      },
      { type: "heading", text: "Qualifications" },
      {
        type: "list",
        items: [
          "Diplôme en traduction, en linguistique ou dans un domaine proche.",
          "Expérience confirmée de la traduction ou de la révision.",
          "Maîtrise native ou quasi native de la langue cible.",
          "Excellente expression écrite dans les deux langues de travail.",
          "Œil sûr pour l’omission, le contresens et l’incohérence.",
          "Bonne connaissance du processus de révision de la norme ISO 17100.",
          "Aisance avec les outils de TAO et les contrôles qualité.",
          "Capacité à formuler un retour utile et jamais personnel.",
          "Connaissance des domaines juridique, médical ou académique.",
          "Sens aigu de la confidentialité et de la déontologie.",
        ],
      },
      { type: "heading", text: "Autres avantages" },
      {
        type: "list",
        items: [
          "Formation structurée et mentorat par des linguistes seniors.",
          "Perspectives claires d’évolution et de promotion.",
          "Environnement de travail solidaire et collaboratif.",
          "Organisation du travail flexible lorsque c’est possible.",
          "Couverture santé privée et soutien au bien-être.",
          "Congés payés et jours personnels supplémentaires.",
          "Accès aux bases terminologiques et aux ressources de référence.",
          "Événements d’équipe réguliers et occasions de réseautage professionnel.",
        ],
      },
    ],
    meta: [
      { label: "Fourchette de rémunération\u00A0:", value: "3\u00A0800\u00A0$–5\u00A0000\u00A0$ par mois" },
      { label: "Service\u00A0:", value: "Qualité" },
      { label: "Horaires\u00A0:", value: "Du lundi au vendredi, 9h00 à 18h00" },
      { label: "Type\u00A0:", value: "Temps plein" },
    ],
    seo: {
      title: "Réviseur qualité · Global Language Solutions",
      description: "Assurer la révision indépendante de chaque traduction certifiée livrée par Global Language Solutions, en comparant chaque dossier à son document source.",
      ogImage: "/kafka/img/5B0yTzRf3jvC8kbEfBqbcccLFBw.png",
    },
  },
];

export const careers: CareersDict = {
  /** Page metadata for a /careers/<slug> that matches no opening. */
  meta: {
    fallbackTitle: "Carrières · Global Language Solutions",
  },
  /** Static labels of the job page template — the same on all three pages. */
  jobPage: {
    /** Pill at the foot of the sticky summary card; it links to /contact. */
    apply: "Nous contacter",
  },
  /** The "Rejoignez-nous" block repeated at the foot of every job page. */
  joinUs: {
    eyebrow: "CARRIÈRES",
    title: "Rejoignez-nous",
    description: "Rejoignez Global Language Solutions, une équipe de linguistes et de coordinateurs au service de documents que des personnes et des institutions attendent.",
    /** Row link through to one of the other openings. */
    viewJob: "Voir le poste",
  },
  /** The three openings, in source order. */
  jobs,
};
