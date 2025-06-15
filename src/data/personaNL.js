const data = {
  title: "PERSONA PROFIEL",
  instruction: "Antwoord op een eerlijke manier, niet volgens wat sociaal wenselijk is.  Denk ook niet te lang na over de antwoorden, zodat het vanuit de ‘buik’ komt.",
  description: [
    "Welk woord in elk van de volgende groepen van drie karaktertrekken, beschrijft u het best?"
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
        { id: 31, name: "Efficiënt", value: 2 },
        { id: 32, name: "Dominant", value: 3 },
        { id: 33, name: "Hulpvaardig", value: 1 }
      ]
    },
    {
      id: 22,
      value: 0,
      categoryId: 11,
      completed: false,
      choices: [
        { id: 34, name: "In staat om zich te doen gelden", value: 3 },
        { id: 35, name: "Rustig", value: 2 },
        { id: 36, name: "tevreden", value: 1 }
      ]
    },
    {
      id: 23,
      value: 0,
      categoryId: 12,
      completed: false,
      choices: [
        { id: 37, name: "Zwijgzaam", value: 1 },
        { id: 38, name: "Denkt graag eerst goed na", value: 2 },
        { id: 39, name: "Sociaal", value: 3 }
      ]
    },
    {
      id: 24,
      value: 0,
      categoryId: 12,
      completed: false,
      choices: [
        { id: 310, name: "Joviaal", value: 3 },
        { id: 311, name: "Vriendelijk", value: 2 },
        { id: 312, name: "Neemt zijn/haar verantwoordelijkheid", value: 1 }
      ]
    },
    {
      id: 25,
      value: 0,
      categoryId: 11,
      completed: false,
      choices: [
        { id: 313, name: "Attent", value: 3 },
        { id: 314, name: "Onderhandelt graag", value: 2 },
        { id: 315, name: "Neemt initiatief", value: 1 }
      ]
    },
    {
      id: 26,
      value: 0,
      categoryId: 11,
      completed: false,
      choices: [
        { id: 316, name: "Gevoelig", value: 1 },
        { id: 317, name: "Onbuigzaam", value: 3 },
        { id: 318, name: "Bereid tot medewerking", value: 2 }
      ]
    },
    {
      id: 27,
      value: 0,
      categoryId: 12,
      completed: false,
      choices: [
        { id: 319, name: "Koppig", value: 1 },
        { id: 320, name: "Behoedzaam", value: 2 },
        { id: 321, name: "Extravert", value: 3 }
      ]
    },
    {
      id: 28,
      value: 0,
      categoryId: 12,
      completed: false,
      choices: [
        { id: 322, name: "Enthousiast", value: 3 },
        { id: 323, name: "Terughoudend", value: 1 },
        { id: 324, name: "Bedachtzaam", value: 2 }
      ]
    },
    {
      id: 29,
      value: 0,
      categoryId: 11,
      completed: false,
      choices: [
        { id: 325, name: "Eigenzinnig", value: 3 },
        { id: 326, name: "Actief", value: 2 },
        { id: 327, name: "Zeer nauwkeurig", value: 1 }
      ]
    },
    {
      id: 210,
      value: 0,
      categoryId: 11,
      completed: false,
      choices: [
        { id: 328, name: "Strijdlustig", value: 3 },
        { id: 329, name: "Evenwichtig", value: 2 },
        { id: 330, name: "Inschikkelijk", value: 1 }
      ]
    },
    {
      id: 211,
      value: 0,
      categoryId: 12,
      completed: false,
      choices: [
        { id: 331, name: "Vrolijk", value: 3 },
        { id: 332, name: "Wil anderen behagen", value: 2 },
        { id: 333, name: "Wilskrachtig", value: 1 }
      ]
    },
    {
      id: 212,
      value: 0,
      categoryId: 12,
      completed: false,
      choices: [
        { id: 334, name: "Houdt zich aan wat overeengekomen werd", value: 1 },
        { id: 335, name: "Energiek", value: 3 },
        { id: 336, name: "Diplomatisch", value: 2 }
      ]
    },
    {
      id: 213,
      value: 0,
      categoryId: 11,
      completed: false,
      choices: [
        { id: 337, name: "Gaat gemakkelijk in discussie", value: 3 },
        { id: 338, name: "Nonchalant", value: 2 },
        { id: 339, name: "Past zich gemakkelijk aan", value: 1 }
      ]
    },
    {
      id: 214,
      value: 0,
      categoryId: 11,
      completed: false,
      choices: [
        { id: 340, name: "Redelijk meegaand", value: 2 },
        { id: 341, name: "Volgzaam - Doet wat men hem/haar vraagt", value: 1 },
        { id: 342, name: "Sturend", value: 3 }
      ]
    },
    {
      id: 215,
      value: 0,
      categoryId: 12,
      completed: false,
      choices: [
        { id: 343, name: "Georganiseerd", value: 2 },
        { id: 344, name: "Precies", value: 1 },
        { id: 345, name: "Origineel", value: 3 }
      ]
    },
    {
      id: 216,
      value: 0,
      categoryId: 12,
      completed: false,
      choices: [
        { id: 346, name: "Populair", value: 3 },
        { id: 347, name: "Gedisciplineerd", value: 1 },
        { id: 348, name: "Belezen", value: 2 }
      ]
    }
  ],
  trueLabel: "Juist",
  falseLabel: "Onjuist",
  answerMessage: "Vul alle vragen in om uw score te kennen"
};

export default data;
