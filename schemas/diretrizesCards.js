// schemas/home.js
//schemaTypes.js

// Exportar o objeto que representa a página inicial
export default({
    // DiretrizCards
    name: 'diretrizcard',
    type: 'document',
    title: 'diretrizCard',
    fields:[
        {
          name: "Titulo",
          type: "string",
          title: "Título"
        },
        {
          name: "Diretriz",
          type: "text",
          title: "Diretriz"
        },
    ]
})