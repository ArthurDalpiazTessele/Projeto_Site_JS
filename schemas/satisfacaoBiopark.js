// schemas/home.js
//schemaTypes.js

// Exportar o objeto que representa a página Satisfação
export default {
    // Satisfação do Biopark
    name: 'satisfacaoBiopark',
    type: 'document',
    title: 'Satisfação com o Biopark',
    fields: [
        {
            name: 'ano',
            type: 'number',
            title: 'Ano (2020-2023)',
            validation: (Rule) => Rule.required().min(2020).max(2023)
        },
        {
            name: 'porcentagem',
            type: 'number',
            title: 'Porcentagem',
            validation: (Rule) => Rule.required().min(0).max(100)
        }
    ]
}