#language: pt
Funcionalidade: CRIAÇÃO DE TESTE AUTOMATIZADO PARA EXEMPLO

@search
Cenário: Adicionando nova foto na tabela
Dado que acesso a tela "https://wesoares90.github.io/skyone-angular/"
E digito no campo busca "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores"
Então a tabela será filtrada

@newPhoto
Cenário: Adicionando nova foto na tabela
Dado que acesso a tela "https://wesoares90.github.io/skyone-angular/"
Quando clico no botão "newPhoto"
E digito o titulo "novo titulo" e url "coerapaziada.com"
E clico no botão "confirm"
