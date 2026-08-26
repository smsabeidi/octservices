import type { CareersDict, Job } from "../en/careers";

/**
 * careers namespace — Spanish.
 *
 * The three openings rendered at /[locale]/careers/[slug] plus the static
 * labels of the job page template. `slug` and `image` are not copy: a slug is a
 * route and must stay identical in every language, and every language shows the
 * same photograph. The meta card values render uppercase via CSS, not here.
 */

const jobs: Job[] = [
  {
    slug: "project-manager",
    eyebrow: "ÚNASE AL EQUIPO",
    title: "Gestor de proyectos",
    summary: "Coordine proyectos de traducción del presupuesto a la entrega: alcance, planificación, asignación de lingüistas y comunicación con el cliente.",
    type: "Tiempo completo",
    location: "Remoto",
    image: {
      src: "/kafka/img/dW7lQMtwln30YCc5d986Pg7YGE.png",
      width: 1312,
      height: 745,
      aspectRatio: 1.7610738255033558,
    },
    blocks: [
      { type: "heading", text: "Descripción del puesto" },
      { type: "paragraph", text: "El gestor de proyectos dirige proyectos de traducción para clientes de inmigración, educación y empresa, desde la primera consulta hasta la entrega." },
      { type: "paragraph", text: "Determinará qué necesita la oficina receptora, fijará el alcance y el plazo, asignará a los lingüistas adecuados y mantendrá en orden archivos, glosarios y fechas de entrega. Su trabajo permite que traductores y revisores se concentren en la lengua mientras cada encargo avanza a tiempo." },
      { type: "paragraph", text: "El puesto encaja con alguien metódico, sereno ante los plazos, atento al detalle e interesado en desarrollar una carrera en servicios lingüísticos." },
      { type: "paragraph", text: "La experiencia previa en agencia ayuda, pero no es imprescindible. Se imparte formación sobre nuestras herramientas y nuestro proceso de calidad." },
      { type: "heading", text: "Responsabilidades" },
      {
        type: "list",
        items: [
          "Presupuestar proyectos y confirmar alcance, formato y plazo.",
          "Asignar lingüistas por combinación de idiomas y materia.",
          "Planificar las fases de traducción, revisión y entrega.",
          "Controlar plazos, formatos de archivo y requisitos de entrega.",
          "Confirmar qué exige el organismo receptor antes de empezar.",
          "Instruir a traductores y revisores al inicio de cada encargo.",
          "Mantener al día los glosarios y las guías de estilo del cliente.",
          "Mantener las memorias de traducción de los clientes recurrentes.",
          "Responder a las dudas del cliente sobre el proceso y los plazos.",
          "Preparar el Certificado de Exactitud de la Traducción para su firma.",
          "Gestionar la notarización y la apostilla cuando se soliciten.",
          "Tratar los documentos del cliente con estricta confidencialidad.",
          "Registrar los comentarios del cliente y darles seguimiento.",
          "Apoyar la facturación y los registros de lingüistas.",
        ],
      },
      { type: "heading", text: "Requisitos" },
      {
        type: "list",
        items: [
          "Título universitario o cualificación profesional afín.",
          "Se valora la experiencia previa en coordinación de proyectos.",
          "Es una ventaja haber trabajado en una agencia de traducción o un equipo lingüístico.",
          "Sólida capacidad de planificación y de fijar prioridades.",
          "Excelente atención al detalle.",
          "Capacidad para redactar correos claros y profesionales.",
          "Soltura con sistemas de gestión de traducción y herramientas TAO.",
          "Capacidad para llevar muchos encargos y prioridades cambiantes.",
          "Estilo de comunicación profesional y respetuoso.",
          "Fuerte sentido de la responsabilidad y de la confidencialidad.",
          "Se requiere dominio del inglés.",
          "Se valora mucho un segundo idioma.",
        ],
      },
      { type: "heading", text: "Otras ventajas" },
      {
        type: "list",
        items: [
          "Incorporación completa y formación práctica en herramientas.",
          "Apoyo de lingüistas y jefes de proyecto con experiencia.",
          "Opciones de crecer a un puesto sénior o de jefatura de proyecto.",
          "Ambiente de trabajo cercano y profesional.",
          "Modalidad híbrida tras el periodo de incorporación.",
          "Seguro médico privado.",
          "Vacaciones pagadas y días de asuntos propios.",
          "Equipo y ayuda para la oficina en casa.",
          "Reuniones de equipo periódicas y eventos de empresa.",
          "Acceso a formación interna y a recursos del sector.",
        ],
      },
    ],
    meta: [
      { label: "Banda salarial:", value: "$2,500–$3,400 al mes" },
      { label: "Departamento:", value: "Gestión de proyectos" },
      { label: "Horario:", value: "De lunes a viernes, de 09:00 a 18:00" },
      { label: "Tipo:", value: "Tiempo completo" },
    ],
    seo: {
      title: "Gestor de proyectos · Global Language Solutions",
      description: "Coordine proyectos de traducción en Global Language Solutions, del presupuesto y el alcance a la asignación de lingüistas y la entrega certificada.",
      ogImage: "/kafka/img/dW7lQMtwln30YCc5d986Pg7YGE.png",
    },
  },
  {
    slug: "senior-translator",
    eyebrow: "ÚNASE AL EQUIPO",
    title: "Traductor sénior",
    summary: "Traduzca documentos migratorios, académicos y comerciales a su lengua materna y dirija la terminología de las cuentas clave.",
    type: "Tiempo completo",
    location: "Remoto",
    image: {
      src: "/kafka/img/vDyRaUb0I8ybD7E9tD2v84BoLNU.png",
      width: 1440,
      height: 745,
      aspectRatio: 1.9328859060402686,
    },
    blocks: [
      { type: "paragraph", text: "Buscamos un traductor sénior con experiencia para trabajar en documentos donde la exactitud tiene consecuencias reales para el cliente." },
      { type: "paragraph", text: "En este puesto traducirá actas del registro civil, expedientes académicos y diplomas, contratos, documentación societaria y políticas, y contenido de marketing que hay que adaptar a un mercado de destino en lugar de trasladarlo literalmente." },
      { type: "paragraph", text: "Trabajará directamente con gestores de proyectos, revisores y, en las cuentas más grandes, con los revisores del propio cliente. El puesto exige un conocimiento profundo de la materia junto a un uso disciplinado de glosarios y memorias de traducción." },
      { type: "paragraph", text: "La persona seleccionada traducirá el sentido y no las palabras, señalará pronto las ambigüedades del original y producirá un trabajo que el organismo receptor aceptará sin objeciones." },
      { type: "heading", text: "Responsabilidades" },
      {
        type: "list",
        items: [
          "Traducir a su lengua materna a partir del documento original.",
          "Trabajar conforme al glosario y la guía de estilo del cliente.",
          "Ocuparse de actas civiles, expedientes académicos, contratos y políticas.",
          "Reflejar sellos, timbres y firmas en el trabajo certificado.",
          "Plantear consultas sobre originales poco claros, incompletos o dañados.",
          "Mantener el formato y la maquetación fieles al original.",
          "Mantener la terminología en glosarios y memorias de traducción.",
          "Revisar la traducción de un colega contra el original cuando se pida.",
          "Certificar la exactitud de las traducciones que realice.",
          "Asesorar a los gestores sobre un plazo realista para cada encargo.",
          "Adaptar contenido de marketing y web a un mercado de destino.",
          "Apoyar con traducción a la vista y retrotraducción cuando se pida.",
          "Orientar a traductores júnior y evaluar pruebas de muestra.",
          "Tratar todo documento del cliente con confidencialidad.",
        ],
      },
      { type: "heading", text: "Requisitos" },
      {
        type: "list",
        items: [
          "Título en traducción o formación equivalente.",
          "O título en otro campo con dos años traduciendo.",
          "O cinco años de traducción profesional documentada.",
          "Al menos tres años dentro de su materia de especialidad.",
          "Dominio nativo o casi nativo de la lengua de destino.",
          "Excelente comprensión de la lengua de partida.",
          "La certificación ATA o una credencial equivalente es una ventaja.",
          "Soltura con herramientas TAO y software de terminología.",
          "Conocimiento de los requisitos de revisión de la norma ISO 17100.",
          "Hábitos de documentación cuidadosos y un método registrado para los términos.",
          "Capacidad para cumplir los plazos acordados sin recordatorios.",
          "Alto nivel de integridad profesional y de confidencialidad.",
        ],
      },
      { type: "heading", text: "Otras ventajas" },
      {
        type: "list",
        items: [
          "Retribución competitiva con revisión periódica.",
          "Trabajo estable en su combinación de idiomas y su materia.",
          "Documentos que importan a quienes los envían.",
          "Desarrollo profesional y formación en terminología especializada.",
          "Trabajo totalmente remoto.",
          "Seguro médico privado y prestaciones de bienestar.",
          "Vacaciones pagadas y días de asuntos propios adicionales.",
          "Acceso a recursos de consulta y bases terminológicas compartidas.",
          "Apoyo para certificaciones profesionales y eventos del sector.",
          "Vía clara hacia puestos de revisor y de lingüista principal.",
        ],
      },
    ],
    meta: [
      { label: "Banda salarial:", value: "$5,000–$7,500 al mes" },
      { label: "Departamento:", value: "Traducción" },
      { label: "Horario:", value: "De lunes a viernes, de 09:00 a 18:00" },
      { label: "Tipo:", value: "Tiempo completo" },
    ],
    seo: {
      title: "Traductor sénior · Global Language Solutions",
      description: "Un puesto de traductor sénior en Global Language Solutions, traduciendo a su lengua materna expedientes de los que dependen los clientes.",
      ogImage: "/kafka/img/vDyRaUb0I8ybD7E9tD2v84BoLNU.png",
    },
  },
  {
    slug: "quality-reviewer",
    eyebrow: "ÚNASE AL EQUIPO",
    title: "Revisor de calidad",
    summary: "Coteje las traducciones con el original en exactitud, integridad, terminología y formato antes de que lleguen al cliente.",
    type: "Tiempo completo",
    location: "Remoto",
    image: {
      src: "/kafka/img/5B0yTzRf3jvC8kbEfBqbcccLFBw.png",
      width: 1440,
      height: 745,
      aspectRatio: 1.9328859060402686,
    },
    blocks: [
      { type: "heading", text: "Descripción del puesto" },
      { type: "paragraph", text: "Como revisor de calidad, realizará la revisión independiente por la que pasa toda traducción certificada. Su trabajo abarca el cotejo con el original, las comprobaciones de terminología y formato, y los comentarios claros al traductor." },
      { type: "paragraph", text: "Trabajará en estrecha relación con traductores y gestores de proyectos para que cada expediente salga completo, coherente con el glosario del cliente y aceptable para el organismo que lo recibe." },
      { type: "paragraph", text: "El puesto encaja con un lingüista meticuloso que prefiere detectar un problema antes de la entrega a explicarlo después, y que disfruta del trabajo preciso." },
      { type: "heading", text: "Responsabilidades" },
      {
        type: "list",
        items: [
          "Cotejar íntegramente cada traducción con el documento original.",
          "Comprobar la terminología con el glosario y la base terminológica del cliente.",
          "Verificar nombres, fechas, cifras y números de referencia.",
          "Confirmar que sellos, timbres y firmas quedan reflejados.",
          "Comprobar que el formato y la maquetación siguen al original.",
          "Devolver comentarios claros y concretos al traductor.",
          "Registrar los problemas recurrentes y llevarlos a la formación.",
          "Aplicar los pasos de revisión que fija la norma ISO 17100.",
          "Aprobar los archivos para su certificación y entrega.",
          "Actualizar glosarios y guías de estilo tras cada proyecto.",
          "Tratar el material del cliente con estricta confidencialidad.",
          "Participar en revisiones de calidad y sesiones de calibración con el equipo.",
        ],
      },
      { type: "heading", text: "Requisitos" },
      {
        type: "list",
        items: [
          "Título en traducción, lingüística o un campo afín.",
          "Experiencia acreditada traduciendo o revisando profesionalmente.",
          "Fluidez nativa o casi nativa en la lengua de destino.",
          "Excelente dominio escrito de ambas lenguas de trabajo.",
          "Ojo afinado para la omisión, el contrasentido y la incoherencia.",
          "Conocimiento práctico del proceso de revisión de la norma ISO 17100.",
          "Soltura con herramientas TAO y verificadores de calidad.",
          "Capacidad para dar comentarios útiles y no personales.",
          "Conocimiento de materia jurídica, médica o académica.",
          "Buen manejo de la confidencialidad y de la ética profesional.",
        ],
      },
      { type: "heading", text: "Otras ventajas" },
      {
        type: "list",
        items: [
          "Formación estructurada y tutoría de lingüistas sénior.",
          "Oportunidades claras de desarrollo profesional y promoción.",
          "Entorno de trabajo colaborativo y de apoyo.",
          "Fórmulas de trabajo flexibles cuando proceda.",
          "Seguro médico privado y apoyo al bienestar.",
          "Vacaciones pagadas y días personales adicionales.",
          "Acceso a bases terminológicas y recursos de consulta.",
          "Eventos de equipo periódicos y oportunidades de contacto profesional.",
        ],
      },
    ],
    meta: [
      { label: "Banda salarial:", value: "$3,800–$5,000 al mes" },
      { label: "Departamento:", value: "Calidad" },
      { label: "Horario:", value: "De lunes a viernes, de 09:00 a 18:00" },
      { label: "Tipo:", value: "Tiempo completo" },
    ],
    seo: {
      title: "Revisor de calidad · Global Language Solutions",
      description: "Realice la revisión independiente de cada traducción certificada que entrega Global Language Solutions, cotejando cada expediente con su original.",
      ogImage: "/kafka/img/5B0yTzRf3jvC8kbEfBqbcccLFBw.png",
    },
  },
];

export const careers: CareersDict = {
  /** Page metadata for a /careers/<slug> that matches no opening. */
  meta: {
    fallbackTitle: "Empleo · Global Language Solutions",
  },
  /** Static labels of the job page template — the same on all three pages. */
  jobPage: {
    /** Pill at the foot of the sticky summary card; it links to /contact. */
    apply: "Escríbanos",
  },
  /** The "Únase al equipo" block repeated at the foot of every job page. */
  joinUs: {
    eyebrow: "EMPLEO",
    title: "Únase al equipo",
    description: "Únase a Global Language Solutions, un equipo de lingüistas y coordinadores que trata documentos que personas e instituciones están esperando.",
    /** Row link through to one of the other openings. */
    viewJob: "Ver puesto",
  },
  /** The three openings, in source order. */
  jobs,
};
