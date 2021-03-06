const projects = [
    {
      title: "whatlist",
      description: "Uma aplicação onde você pode criar sua próprio \"playlist\" de filmes e séries para assistir futuramente. Além disso, ela também mostra informações desses filmes/séries através da API do TMDb.",
      preview: "whatlist.png",
      demo: "https://whatlist.netlify.com",
      repository: "https://github.com/lucasfrosty/whatlist",
      course: "cstsi",
      session: "2018.1",
      subject: "ls",
      campus: "ifpb-jp",
      topics: ["js"],
      owners: [20172370023]
    },
    {
      title: "AniZoneX",
      description: "Este site procura oferecer animes na melhor qualidade disponível",
      preview: "AniZoneX.jpg",
      demo: "https://diogenesm.github.io/AniZoneX/",
      repository: "https://github.com/diogenesm/AniZoneX",
      course: "cstsi",
      session: "2018.2",
      subject: "lm",
      campus: "ifpb-jp",
      topics: ["html", "css"],
      owners: [20182370033]
    },
    {
      title: "Projects IFPB",
      description: "Criação de Decks de fã para fã.",
      preview: "Deck-Editor.jpg",
      demo: "https://wellingtonplf.github.io/Yu-Gi-Oh.jscript/",
      repository: "https://github.com/wellingtonPLF/Yu-Gi-Oh.jscript",
      course: "cstsi",
      session: "2018.2",
      subject: "ls",
      campus: "ifpb-jp",
      topics: ["js"],
      owners: [20181370022]
    },
    {
      title: "InsideMovies",
      description: "InsideMovies - API da OMDB",
      preview: "inside-movies.png",
      demo: "https://helenajuliana.github.io/InsideMovies/",
      repository: "https://github.com/HelenaJuliana/InsideMovies",
      course: "cstsi",
      session: "2018.1",
      subject: "ls",
      campus: "ifpb-jp",
      topics: ["js"],
      owners: [20142370368, 20142370279, 20181370032]
    },
    {
      title: "LeagueChampions",
      description: "Site informativo sobre personagens do jogo League of Legends",
      preview: "LeagueChampions.png",
      demo: "https://romerocaetano.github.io/LeagueChampions/",
      repository: "https://github.com/RomeroCaetano/LeagueChampions",
      course: "cstsi",
      session: "2018.2",
      subject: "ls",
      campus: "ifpb-jp",
      topics: ["js"],
      owners: [20181370009]
    },
    {
      title: "Oliveira Imovés",
      description: "Site para dilvugação de um imobiliária.",
      preview: "Oliveira-Imoveis.png",
      demo: "https://henriquepra.github.io/Oliveira-Imoveis/",
      repository: "https://github.com/HenriquePRA/Oliveira-Imoveis/",
      course: "cstsi",
      session: "2018.2",
      subject: "lm",
      campus: "ifpb-jp",
      topics: ["html", "css"],
      owners: [20182370028]
    },
    {
      title: "Site_Filme",
      description: "Visualização de filmes e lançamentos",
      preview: "Site_Filme.jpg",
      demo: "https://jailcomfranssa.github.io/Site_Filme/",
      repository: "https://github.com/jailcomfranssa/Site_Filme",
      course: "cstsi",
      session: "2019.1",
      subject: "ls",
      campus: "ifpb-jp",
      topics: ["js"],
      owners: [20182370048]
    },
    {
      title: "APOD",
      description: "apod",
      preview: "apod.png",
      demo: "https://elileal.github.io/APOD/",
      repository: "https://github.com/elileal/APOD",
      course: "cstsi",
      session: "2017.1",
      subject: "ls",
      campus: "ifpb-jp",
      topics: ["js"],
      owners: [20162370035]
    },
    {
      title: "Art'Kids",
      description: "Elaborar um site para uma loja de decoração de festas.",
      preview: "art-kids.jpg",
      demo: "https://karolinelima.github.io/Art-kids/",
      repository: "https://github.com/KarolineLima/Art-kids",
      course: "cstsi",
      session: "2017.2",
      subject: "lm",
      campus: "ifpb-jp",
      topics: ["html", "css"],
      owners: [20172370012]
    },
    {
      title: "Banda Apolo",
      description: "Site objetivo e informativo para a banda apolo.",
      preview: "banda-apolo.png",
      demo: "https://pahferreira.github.io/bandaapolo/",
      repository: "https://github.com/pahferreira/bandaapolo",
      course: "cstsi",
      session: "2017.1",
      subject: "lm",
      campus: "ifpb-jp",
      topics: ["html", "css"],
      owners: [20171370002, 20171370032]
    },
    {
      title: "Beto da Coxinha",
      description: "Completar o desenvolvimento da pagina web criada na cadeira LM, adicionando recursos JavaScript para que possa simular de forma mais completa um e-commerce para à lanchonete fictícia.",
      preview: "beto-da-coxinha.jpg",
      demo: "https://henrifrade.github.io/Beto-da-coxinha/site/",
      repository: "https://github.com/Henrifrade/Beto-da-coxinha",
      course: "cstsi",
      session: "2017.2",
      subject: "ls",
      campus: "ifpb-jp",
      topics: ["js"],
      owners: [20171370031]
    },
    {
      title: "Biblioteca IFPB",
      description: "Site para a biblioteca do Instituto Federal da Paraíba",
      preview: "biblioteca-ifpb.png",
      demo: "https://mauriciopcj.github.io/biblioteca/",
      repository: "https://github.com/mauriciopcj/biblioteca",
      course: "cstsi",
      session: "2018.1",
      subject: "lm",
      campus: "ifpb-jp",
      topics: ["html", "css"],
      owners: [20181370027]
    },
    {
      title: "Bike Land",
      description: "Site para dilvugação de um loja de bicicletas",
      preview: "bikeland.png",
      demo: "https://ffdemelo.github.io/bikeland/",
      repository: "https://github.com/ffdemelo/bikeland",
      course: "cstsi",
      session: "2018.2",
      subject: "lm",
      campus: "ifpb-jp",
      topics: ["js"],
      owners: [20181370024]
    },
    {
      title: "Busca motos",
      description: "Este portal tem como objetivo buscar e mostra motos de forma mais simples",
      preview: "busca_motos.png",
      demo: "https://gabrielsantos01.github.io/projeto-ls/",
      repository: "https://github.com/gabrielsantos01/projeto-ls",
      course: "cstsi",
      session: "2018.2",
      subject: "ls",
      campus: "ifpb-jp",
      topics: ["js"],
      owners: [20172370032, 20172370011]
    },
    {
      title: "Buy All the Tickets",
      description: "Buy All the Tickets.",
      preview: "buy-all-the-tickets.png",
      demo: "https://samueldcabral.github.io/buy-all-the-tickets/",
      repository: "https://github.com/samueldcabral/buy-all-the-tickets",
      course: "cstsi",
      session: "2018.1",
      subject: "ls",
      campus: "ifpb-jp",
      topics: ["html", "css"],
      owners: [20172370019]
    },
    {
      title: "Capela",
      description: "Site para o estúdio de criação capela, especializado em produção de conteúdo para a igreja católica e pequenos negócios.",
      preview: "capela.png",
      demo: "https://angela-oliveira.github.io/capela",
      repository: "https://github.com/angela-oliveira/capela",
      course: "cstsi",
      session: "2018.1",
      subject: "lm",
      campus: "ifpb-jp",
      topics: ["html", "css"],
      owners: [20181370028]
    },
    {
      title: "Central Code",
      description: "O Website Central-Code é um projeto da disciplina linguagem de script do curso T.S.I, inspirado pelo exploitdb.com baseia-se em disponibilizar de forma simples e fácil shellcoders para exploração de várias das vulnerabilidades conhecidas para diversas plataformas.",
      preview: "imgCentralCode.png",
      demo: "https://r7k8iz9.github.io/centralcode/",
      repository: "https://github.com/r7k8iz9/centralcode",
      course: "cstsi",
      session: "2018.2",
      subject: "ls",
      campus: "ifpb-jp",
      topics: ["js"],
      owners: [20181370014]
    },
    {
      title: "Céu Aberto",
      description: "Uma página web para monitoramento de um sistema automatizado encarregado de detectar quando houver concentração de água nas lajes e calhas dos telhados.",
      preview: "ceu-aberto.png",
      demo: "https://whatlist.netlify.com",
      repository: "https://github.com/alyssonmendes/ceu-aberto",
      course: "cstrc",
      session: "2018.1",
      subject: "dw",
      campus: "ifpb-jp",
      topics: ["esp8266", "php", "js"],
      owners: [20171610022, 20171610004, 20171610001]
    },
    {
      title: "Chamada Virtual",
      description: "O projeto tem como intuito simplificar a atividade da chamada realizada pelos professores diariamente por meio de imagem.",
      preview: "chamada-virtual.png",
      repository: "https://github.com/W-santos/chamada-vitual",
      course: "cstrc",
      session: "2017.1",
      subject: "dw",
      campus: "ifpb-jp",
      topics: ["opncv", "php", "js"],
      owners: [20152380080, 20161610014, 20141610039]
    },
    {
      title: "Chef em Casa",
      description: "Chef em Casa é uma aplicação para encontrar Chef's de cozinha que trabalham de forma livre em festas/eventos particulares de acordo com a necessidade do cliente.",
      preview: "chef-em-casa.png",
      demo: "http://chef-em-casa.herokuapp.com",
      repository: "https://github.com/caiocosta08/chef-em-casa",
      course: "cstsi",
      session: "2017.2",
      subject: "ls",
      campus: "ifpb-jp",
      topics: ["js"],
      owners: [20162610014]
    },
    {
      title: "Chiara Luce",
      description: "Chiara Luce",
      preview: "chiara-luce.jpg",
      demo: "https://caiocosta08.github.io/chiara-luce/",
      repository: "https://github.com/caiocosta08/chiara-luce",
      course: "cstsi",
      session: "2017.1",
      subject: "lm",
      campus: "ifpb-jp",
      topics: ["html", "css"],
      owners: [20162610014]
    },
    {
      title: "Cron Dashboard",
      description: "Dashboard para agendamento de tarefas.",
      preview: "cron-dashboard.png",
      repository: "https://github.com/clebiane/CronDashboard",
      course: "cstrc",
      session: "2017.2",
      subject: "dw",
      campus: "ifpb-jp",
      topics: ["cron", "php", "js"],
      owners: [20141380408]
    },
    {
      title: "cron",
      description: "Criar um interface grafica para o uso do Cron(Agendador de tarefas)",
      preview: "cron.png",
      repository: "https://github.com/eatereyes/CronProject",
      course: "cstrc",
      session: "2018.2",
      subject: "dw",
      campus: "ifpb-jp",
      topics: ["cron", "php", "mysql", "js"],
      owners: [20171380012, 20152380145]
    },
    {
      title: "D20 Podcast",
      description: "D20 Podcast",
      preview: "d20-podcast.jpg",
      demo: "https://lucas-salles.github.io/D20-Podcast/",
      repository: "https://github.com/lucas-salles/D20-Podcast",
      course: "cstsi",
      session: "2018.1",
      subject: "lm",
      campus: "ifpb-jp",
      topics: ["html", "css"],
      owners: [20181370048, 20181370042]
    },
    {
      title: "Data Mining",
      description: "Site sobre Data Mining  (Mineração de Dados) com o objetivo de mostrar sua importância na tomada de decisões e vantagens estratégicas para as empresas.",
      preview: "data-mining.jpg",
      demo: "https://dssdamiao.github.io/projeto-data-mining/",
      repository: "https://github.com/dssdamiao/projeto-data-mining",
      course: "cstsi",
      session: "2017.2",
      subject: "lm",
      campus: "ifpb-jp",
      topics: ["html", "css"],
      owners: [20172370036, 20172370022, 20172370028]
    },
    {
      title: "Dev Stats",
      description: "O DevStats é um projeto para apresentação final da disciplina JavaScript do curso de Sistemas para Internet no Instituto Federal da Paraíba - IFPB. O projeto tem o propósito de fornecer os dados do seu perfil no github. O sistema tem funcionamente com base em API's, mostrando o uso das linguagens usadas nos repositórios e projetando uma estatística.",
      preview: "dev-stats.jpg",
      demo: "https://petersvc.github.io/projeto-ls/",
      repository: "https://github.com/petersvc/projeto-ls",
      course: "cstsi",
      session: "2018.2",
      subject: "ls",
      campus: "ifpb-jp",
      topics: ["js"],
      owners: [20171370013, 20171370016, 20161370002]
    },
    {
      title: "DHCP Conf",
      description: "Aplicação web para cadastro de hosts e dentro de uma  rede interna e controle dos hosts.",
      preview: "dhcp-conf.png",
      repository: "https://github.com/genildoalvesn/dhcp-conf",
      course: "cstrc",
      session: "2017.2",
      subject: "dw",
      campus: "ifpb-jp",
      topics: ["dhcp", "php", "js"],
      owners: [20131380235, 20152380340]
    },
    {
      title: "Do you trip?",
      description: "Uma página web com intuito de indicar diretrizes para o usuário, fornecendo formas de encontrar suas necessidades específicas (hotéis, aluguel de carro, voo e etc) utilizando API do Amadeu.",
      preview: "do-you-trip.png",
      demo: "https://pahferreira.github.io/doyoutrip/index.html",
      repository: "https://github.com/pahferreira/doyoutrip",
      course: "cstsi",
      session: "2017.2",
      subject: "ls",
      campus: "ifpb-jp",
      topics: ["js"],
      owners: [20171370002, 20171370032, 20171370029]
    },
    {
      title: "Donos do Amanhã",
      description: "Proposta de Site para o Donos do Amanhã",
      preview: "donos-do-amanha.png",
      demo: "https://marciorfp.github.io/website-donos-do-amanha/",
      repository: "https://github.com/marciorfp/website-donos-do-amanha",
      course: "cstsi",
      session: "2016.2",
      subject: "lm",
      campus: "ifpb-jp",
      topics: ["html", "css"],
      owners: [20162370014]
    },
    {
      title: "Sagas Dragon Ball Z",
      description: "Site destinado a introdução ao Anime Dragon Ball Z, onde é abordado as principais sagas do anime e alguns videos sobre as sagas.",
      preview: "dragonball.png",
      demo: "https://igorsrangel.github.io/sagasdragonballz/",
      repository: "https://github.com/IgorSRangel/sagasdragonballz",
      course: "cstsi",
      session: "2018.2",
      subject: "lm",
      campus: "ifpb-jp",
      topics: ["html", "css"],
      owners: [20181370050]
    }
]

export default projects