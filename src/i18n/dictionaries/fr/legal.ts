import type { LegalDict, TermsSection } from "../en/legal";

/**
 * legal namespace — French.
 *
 * Covers /terms-and-conditions and the 404 boundary. The terms body keeps the
 * same eight numbered sections in the same order and with the same intro /
 * items / outro / contact shape as the English source, so the DOM the page
 * builds is identical whatever the language.
 *
 * The `mailto:` address on the permission paragraph is an address, not copy,
 * and is unchanged. `\u00A0` below is U+00A0, the non-breaking space French sets
 * before `: ; ? !`.
 */

/** Sections 1 to 8, in the order the page renders them. */
const termsSections: TermsSection[] = [
  {
    heading: "1. Champ d’application",
    intro: [
      "Les présentes conditions s’appliquent à toute personne qui utilise ce site, y compris à celles qui nous contactent sans devenir clientes.",
      "Elles couvrent\u00A0:",
    ],
    items: [
      "L’utilisation des pages, textes, images et fichiers publiés sur ce site.",
      "Les demandes de renseignements, les demandes de devis et tout document que vous nous envoyez pour obtenir un prix ou une date.",
      "Les travaux que nous réalisons ensuite, également régis par le devis et le contrat écrits que nous établissons. En cas de divergence, ce contrat prévaut.",
    ],
    outro: [
      "Utiliser le site vaut acceptation des présentes conditions. Si vous ne les acceptez pas, n’utilisez pas le site et ne nous transmettez rien par son intermédiaire.",
    ],
  },
  {
    heading: "2. Les informations de ce site",
    intro: ["Ce que vous lisez ici relève de l’information générale. Il ne s’agit pas\u00A0:"],
    items: [
      "D’un conseil juridique, migratoire, académique ou financier sur votre situation.",
      "D’une confirmation qu’un organisme donné acceptera un document donné.",
      "D’une garantie de délai, de temps de traitement ou de résultat.",
      "D’un devis, que nous établissons par écrit après avoir vu les fichiers source.",
      "D’une promesse que chaque service existe dans toutes les combinaisons de langues.",
    ],
    outro: [
      "Les exigences de dépôt évoluent\u00A0: vérifiez auprès de nous ou de l’organisme concerné tout élément qui dépend d’une échéance.",
    ],
  },
  {
    heading: "3. Confidentialité des demandes et des documents",
    intro: [
      "Tout ce que vous nous envoyez, d’une première question à un jeu complet d’actes d’état civil, est traité de façon confidentielle.",
      "L’accès est limité aux linguistes et aux équipes projet qui travaillent sur votre dossier, tous soumis à des obligations de confidentialité. Les fichiers ne sont conservés que le temps nécessaire.",
      "Nous signons un accord de confidentialité lorsque vous en avez besoin.",
    ],
  },
  {
    heading: "4. Documents source et exigences de l’organisme destinataire",
    intro: [
      "Vous confirmez être en droit de nous transmettre les documents que vous nous remettez, et que ceux-ci sont complets et lisibles. Nous traduisons le document tel qu’il nous parvient\u00A0: une page manquante ou un tampon illisible se retrouve dans le fichier livré.",
      "Il vous revient de vérifier ce qu’exige l’organisme destinataire, et nous vous aidons dans la mesure du possible. Indiquez-nous à qui la traduction est destinée et si l’organisme demande une certification, une légalisation notariale, une apostille, une orthographe précise d’un nom ou un format imposé\u00A0: nous travaillerons selon cette exigence. Lorsque l’exigence n’est pas claire, nous préparons le dossier selon la pratique habituelle pour ce type de document.",
    ],
  },
  {
    heading: "5. Propriété intellectuelle",
    intro: [
      "Les textes, images et mises en page de ce site appartiennent à OCT Services ou à ses concédants. Vous ne pouvez pas\u00A0:",
    ],
    items: [
      "Republier des pages de ce site sous votre nom.",
      "Utiliser notre nom ou notre logotype pour suggérer un partenariat ou une recommandation.",
      "Revendre ou rediffuser des contenus issus de ces pages.",
      "Présenter notre travail comme celui d’un autre prestataire.",
      "Modifier une traduction livrée ou le certificat d’exactitude de la traduction qui l’accompagne.",
    ],
    contact: {
      before: "Pour toute autorisation de reproduction de contenus de ce site, écrivez-nous à",
      email: "info@octservices.com",
      after: ". Nous répondrons par écrit.",
    },
  },
  {
    heading: "6. Limitation de responsabilité",
    intro: [
      "Nous assumons le travail que nous livrons. Si une traduction comporte une erreur, signalez-la et nous la corrigerons à nos frais. Nous ne sommes pas responsables\u00A0:",
    ],
    items: [
      "Des décisions prises sur votre dossier par un organisme, un employeur ou une institution.",
      "Des retards dus à des documents source incomplets, illisibles ou tardifs.",
      "Des préjudices liés à une exigence qui ne nous a pas été communiquée avant le début du travail.",
      "Des interruptions de ce site ou des services dont il dépend.",
    ],
    outro: [
      "Rien dans les présentes conditions ne limite une responsabilité qui ne peut l’être selon la loi. Au-delà, notre responsabilité sur un projet est limitée aux honoraires versés pour celui-ci.",
    ],
  },
  {
    heading: "7. Liens vers d’autres sites",
    intro: [
      "Ce site renvoie vers des pages officielles, des organismes d’évaluation des diplômes et d’autres organisations parce que ces sources sont utiles. Nous ne les contrôlons pas, et leur contenu, leurs conditions et leurs pratiques de confidentialité leur appartiennent.",
      "Les exigences publiées par un organisme destinataire doivent toujours être vérifiées à la source.",
    ],
  },
  {
    heading: "8. Droit applicable et modification des conditions",
    intro: [
      "Les présentes conditions sont régies par le droit du pays dans lequel OCT Services est établie, et tout litige relève des juridictions de ce pays.",
      "Lorsque le droit local vous accorde des droits auxquels un contrat ne peut déroger, ces droits demeurent et rien ici ne les réduit. Un projet donné peut par ailleurs être soumis à des conditions convenues avec vous par écrit.",
      "Nous mettons ces conditions à jour lorsque nos services, nos processus ou nos obligations évoluent.",
      "La version en vigueur est celle publiée sur cette page.",
    ],
  },
];

export const legal: LegalDict = {
  /** /terms-and-conditions */
  terms: {
    meta: {
      title: "Conditions d’utilisation — OCT Services",
    },

    hero: {
      eyebrow: "CONDITIONS GÉNÉRALES",
      title: "Conditions d’utilisation",
      lastUpdated: "Dernière mise à jour\u00A0: août 2026",
    },

    /** The two paragraphs that open the body, above section 1. */
    intro: [
      "Chez OCT Services, les documents que vous nous transmettez et les demandes que vous nous adressez sont traités avec soin et restent confidentiels.",
      "Les présentes conditions définissent les règles d’utilisation de ce site et ce à quoi vous pouvez vous attendre lorsque vous demandez un devis, nous confiez des documents à traduire ou réservez un interprète. Merci de les lire avant de nous contacter.",
    ],

    sections: termsSections,
  },

  /** /404 and the not-found boundary. */
  notFound: {
    meta: {
      title: "OCT Services",
    },
    heading: "404 PAGE INTROUVABLE",
    lead: "Nous n’avons trouvé cette page dans aucune langue.",
    /** Label on the pill button back to the localised home page. */
    homeLinkLabel: "Retour à l’accueil",
  },
};
