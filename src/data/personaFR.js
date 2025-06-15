const data = {
  title: "Profil PERSONA",
  instruction: "Répondez de manière honnête et non de ce qui est socialement souhaitable. N'y pensez pas trop longtemps. Il doit être aussi intuitif que possible.",
  description: [
    "Parmi ces trios de traits de caractère ci-dessous, choisissez celui qui vous ressemble le plus."
  ],
  categories: [
    { id: 11, text: ["H-scores"], value: 0 },
    { id: 12, text: ["V-scores"], value: 0 }
  ],
  questions: [
    {
      id: 21,
      value: 0,
      categoryId: 11,
      completed: false,
      choices: [
        { id: 31, name: "Efficace", value: 2 },
        { id: 32, name: "Dominateur", value: 3 },
        { id: 33, name: "Serviable", value: 1 }
      ]
    },
    {
      id: 22,
      value: 0,
      categoryId: 11,
      completed: false,
      choices: [
        { id: 34, name: "Capable de s’affirmer", value: 3 },
        { id: 35, name: "Calme", value: 2 },
        { id: 36, name: "Content", value: 1 }
      ]
    },
    {
      id: 23,
      value: 0,
      categoryId: 12,
      completed: false,
      choices: [
        { id: 37, name: "Silencieux", value: 1 },
        { id: 38, name: "Réfléchi", value: 2 },
        { id: 39, name: "Sociable", value: 3 }
      ]
    },
    {
      id: 24,
      value: 0,
      categoryId: 12,
      completed: false,
      choices: [
        { id: 310, name: "Jovial", value: 3 },
        { id: 311, name: "Amical", value: 2 },
        { id: 312, name: "Prend ses responsabilités", value: 1 }
      ]
    },
    {
      id: 25,
      value: 0,
      categoryId: 11,
      completed: false,
      choices: [
        { id: 313, name: "Attentive", value: 3 },
        { id: 314, name: "Négocie volontiers", value: 2 },
        { id: 315, name: "Prend des initiatives", value: 1 }
      ]
    },
    {
      id: 26,
      value: 0,
      categoryId: 11,
      completed: false,
      choices: [
        { id: 316, name: "Réceptif", value: 1 },
        { id: 317, name: "Inflexible", value: 3 },
        { id: 318, name: "Coopératif", value: 2 }
      ]
    },
    {
      id: 27,
      value: 0,
      categoryId: 12,
      completed: false,
      choices: [
        { id: 319, name: "Têtu", value: 1 },
        { id: 320, name: "Circonspect", value: 2 },
        { id: 321, name: "Extraverti", value: 3 }
      ]
    },
    {
      id: 28,
      value: 0,
      categoryId: 12,
      completed: false,
      choices: [
        { id: 322, name: "Enthousiaste", value: 3 },
        { id: 323, name: "Réservé", value: 1 },
        { id: 324, name: "Mesuré", value: 2 }
      ]
    },
    {
      id: 29,
      value: 0,
      categoryId: 11,
      completed: false,
      choices: [
        { id: 325, name: "Obstiné", value: 3 },
        { id: 326, name: "Actif", value: 2 },
        { id: 327, name: "Rigoureux", value: 1 }
      ]
    },
    {
      id: 210,
      value: 0,
      categoryId: 11,
      completed: false,
      choices: [
        { id: 328, name: "Battant", value: 3 },
        { id: 329, name: "Equilibré", value: 2 },
        { id: 330, name: "Conciliant", value: 1 }
      ]
    },
    {
      id: 211,
      value: 0,
      categoryId: 12,
      completed: false,
      choices: [
        { id: 331, name: "Joyeux", value: 3 },
        { id: 332, name: "Soucieux des autres", value: 2 },
        { id: 333, name: "Volontaire", value: 1 }
      ]
    },
    {
      id: 212,
      value: 0,
      categoryId: 12,
      completed: false,
      choices: [
        { id: 334, name: "S’en tient à ce qui est convenu", value: 1 },
        { id: 335, name: "Vif", value: 3 },
        { id: 336, name: "Diplomate", value: 2 }
      ]
    },
    {
      id: 213,
      value: 0,
      categoryId: 11,
      completed: false,
      choices: [
        { id: 337, name: "Argumente facilement", value: 3 },
        { id: 338, name: "Nonchalant", value: 2 },
        { id: 339, name: "S’adapte facilement", value: 1 }
      ]
    },
    {
      id: 214,
      value: 0,
      categoryId: 11,
      completed: false,
      choices: [
        { id: 340, name: "Accommodant", value: 2 },
        { id: 341, name: "Obéissant – docile", value: 1 },
        { id: 342, name: "Directif", value: 3 }
      ]
    },
    {
      id: 215,
      value: 0,
      categoryId: 12,
      completed: false,
      choices: [
        { id: 343, name: "Organisé", value: 2 },
        { id: 344, name: "Précis", value: 1 },
        { id: 345, name: "Original", value: 3 }
      ]
    },
    {
      id: 216,
      value: 0,
      categoryId: 12,
      completed: false,
      choices: [
        { id: 346, name: "Populaire", value: 3 },
        { id: 347, name: "Discipliné", value: 1 },
        { id: 348, name: "Cultivé", value: 2 }
      ]
    }
  ],
  trueLabel: "Vrai",
  falseLabel: "Faux",
  answerMessage: "Veuillez répondre à toutes les questions"
};

export default data;
