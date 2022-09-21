const articles = [
    {
        id: 1,
        title: 'Healthtech de “telemedicina aumentada” chega ao Brasil',
        description: 'A telemedicina por si só deixou de ser uma grande novidade no mundo de saúde – e já foi até regulamentada no Brasil. Agora, depois de 2 anos de pandemia, startups e empresas do setor precisam buscar novas ferramentas para melhorar o acesso e a experiência do paciente e facilitar o trabalho das instituições de saúde.',
    },
    {
        id: 2,
        title: 'Tesla anuncia reservas para caminhão elétrico; veja o preço',
        description: 'O Semi, caminhão elétrico da Tesla, está disponível para reservas e programado para entrar em produção em 2023. O veículo foi anunciado em 2017, com arte conceitual futurista e especificações que são grandes diferenciais no mercado.'

    }
]
function getArticles() {
    return articles
}

function getArticleById(articleId) {
    return articles.find(article => {
        return article.id === Number(articleId)
    })
}

export { getArticles, getArticleById }