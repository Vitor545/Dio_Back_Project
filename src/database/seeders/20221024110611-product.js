('use strict');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'products',
      [
        {
          title: 'PlayStation 5 Edição Digital 2022 825GB',
          title_anuncio:
            'PlayStation 5 Edição Digital 2022 825GB 1 Controle - Sony com FIFA 23 Lançamento',
          preco: 5000,
          descricao: `O PS5 Edição Digital oferece novas possibilidades de jogabilidade que você nunca imaginou. Uma versão totalmente digital do console PS5 sem unidade de disco. Você pode baixar jogos digitais para PS5 e PS4 pela PlayStation Store. Inicie sua sessão na conta da PlayStation Network e vá à PlayStationStore para comprar e baixar jogos.*
          Na velocidade da luz: Domine o poder das CPU e GPU personalizadas e do SSD com E/S integradas que redefinem as regras do que o console PlayStation pode fazer;
          Jogos deslumbrantes: Maravilhe-se com os gráficos incríveis e experimente os recursos do novo PS5;
          Imersão de tirar o fôlego: Descubra uma experiência de jogos ainda mais profunda com a ajuda da resposta tátil, dos gatilhos adaptáveis e da tecnologia de áudio 3D;
          O EA SPORTS FIFA 23 coloca o maior jogo do mundo em campo, com torneios da Copa do Mundo FIFA de futebol masculino e feminino, adição de clubes femininos e novas formas de jogar os seus modos favoritos. Os avanços na tecnologia HyperMotion2 trazem ainda mais ação e realismo do futebol para o campo no PS5. Com o dobro de captura de movimentos do mundo real, agora, mais do que nunca, há mais animações de futebol real em cada partida.`,
          img: 'https://m.media-amazon.com/images/I/71Yxt0fcy+L._AC_SX679_.jpg',
        },
        {
          title: 'Console Xbox Series X',
          title_anuncio: 'Console Xbox Series X 1tb + Controle Sem Fio Preto',
          preco: 5000,
          descricao: `Jogue milhares de títulos de quatro gerações de consoles- 
          todos os jogos têm melhor aparência e são melhor executados no Xbox Series x.no 
          coração do Series X está a Xbox Velocity Architecture, que combina um ssd 
          personalizado e software integrado para diminuir significativamente os tempos 
          de carregamento dentro e fora do jogo. Troque simultaneamente entre vários 
          jogos em um instante com o Quick Resume. Explore novos mundos e desfrute da 
          ação como nunca antes com 12 teraflops incomparáveis de poder de processamento 
          gráfico.`,
          img: 'https://images-submarino.b2w.io/produtos/6096996059/imagens/console-xbox-series-x-1tb-controle-sem-fio-preto/6096996059_1_large.jpg',
        },
        {
          title: 'God of War Ragnarök',
          title_anuncio: 'Jogo God of War Ragnarök, Edição de Lançamento PS4',
          preco: 300,
          descricao: `Aqueles que desafiam o destino
          Atreus anseia por conhecimento para ajudá-lo a entender a profecia de “Loki” e o papel que ele desempenhará no Ragnarök. Kratos deve decidir se será acorrentado pelo medo de repetir seus erros ou se libertar de seu passado para ser o pai que Atreus precisa.
          Armas de Guerra
          O Machado Leviatã, Lâminas do Caos e Escudo Guardião retornam juntamente com uma série de novas habilidades para Kratos e Atreus. Enquanto eles enfrentam inimigos nos Nove Reinos, as habilidades mortais de Kratos serão testadas como nunca antes enquanto ele luta para proteger sua família.
          Explore os Reinos
          Viaje para paisagens perigosas e deslumbrantes enquanto enfrenta uma grande variedade de criaturas inimigas, monstros e deuses nórdicos enquanto Kratos e Atreus procuram respostas e aliados.
          - Aventure-se por todos os Nove Reinos em direção à batalha profetizada que acabará com o mundo.
          - Derrote deuses e monstros nórdicos em combates fluidos e expressivos.`,
          img: 'https://images.kabum.com.br/produtos/fotos/368236/jogo-god-of-war-ragnar-k-ps4_1657902975_gg.jpg',
        },
        {
          title: 'Sony PlayStation 4 1TB',
          title_anuncio: 'Sony PlayStation 4 1TB Standard cor preto onyx',
          preco: 1500,
          descricao: `Com seu console PlayStation 4 você terá entretenimento garantido todos os dias. Sua tecnologia foi criada para colocar novos desafios para jogadores novatos e especialistas. Com o console PlayStation 4, líder mundial de vendas por anos, você poderá desfrutar de horas de jogo e excelente navegabilidade para desfrutar de filmes, séries e conteúdo online.`,
          img: 'https://http2.mlstatic.com/D_NQ_NP_2X_873170-MLA49192988408_022022-F.webp',
        },
        {
          title: 'Console Xbox Series S',
          title_anuncio:
            'Console Microsoft Xbox Series S, 512GB, Branco - RRS-00006',
          preco: 2000,
          descricao: `Xbox Series S, o menor e mais elegante de todos os tempos. Com taxas de quadros mais altas, tempos de carregamento mais rápidos e mundos mais ricos e dinâmicos, o Xbox Series S oferece desempenho e velocidade de última geração em um formato compacto e totalmente digital. Retrocompatibilidade com milhares de jogos. Prepare-se para tempos de carregamento mais rápidos, resolução mais alta, taxas de quadros mais estáveis e melhor latência de entrada em milhares de jogos Xbox One, Xbox 360 e Xbox Original.`,
          img: 'https://images.kabum.com.br/produtos/fotos/128561/console-microsoft-xbox-series-s-500gb-branco-rrs-00006_1601067301_gg.jpg',
        },

        {
          title: 'Máquina de Lavar 17kg',
          title_anuncio:
            'Máquina de Lavar 17kg Electrolux Essential Care com Cesto Inox, Jet&Clean e Ultra Filter (LED17)',
          preco: 2400,
          descricao: `A Máquina de Lavar 17kg Electrolux Essential Care com Cesto Inox , exclusivo dispenser Jet&Clean e Ultra Filter (LED17) foi projetada especialmente para facilitar sua rotina em casa e oferecer maiores cuidados para as roupas, que nos protegem e acompanham em diversas situações e também mostram nossa personalidade, por isso merecem todo o cuidado especial que a linha Essential Care oferece. Esta lavadora conta com exclusiva tecnologia Jet&Clean, que aplica fortes jatos de água no dispenser, diluindo até 100%¹ do sabão e do amaciante no momento correto da lavagem, para que os insumos penetrem os tecidos de forma homogênea, evitando manchas e relavagens. E além disso, entrega também a auto limpeza do dispenser, mantendo-o sempre limpo e pronto para o próximo ciclo de lavagem. O novo Ultra Filter Pega Fiapos da LED17 possui capacidade de retenção 8 vezes² maior, evitando que você se preocupe com os fiapos e sujeiras que possam ficar presos nas roupas após o ciclo de lavagem, proporcionando ainda mais cuidados com suas roupas. Maior lavadora Top Load com agitador do mercado³, com apenas 66,2 cm de largura, você poderá lavar até 17Kg de roupas por ciclo de lavagem. Lave as roupas de toda a família em um único ciclo! Maior praticidade no seu dia a dia.`,
          img: 'https://m.media-amazon.com/images/I/41jXZmfuQoL._AC_SX679_.jpg',
        },
        {
          title: 'Geladeira Panasonic Frost Free 480L',
          title_anuncio:
            'Geladeira Panasonic Frost Free 480L A+++ Black Glass - NR-BB71GVFBB',
          preco: 6549,
          descricao: `Mantenha diferentes tipos de alimentos na temperatura ideal. Com a BB71, você pode escolher quatro temperaturas diferentes independentes do restante da geladeira, proporcionando o armazenamento ideal de uma grande variedade de produtos. E, para que você tenha total controle das mudanças na sua geladeira, a luz do Freshfreezer muda de cor de acordo com alteração de temperatura.`,
          img: 'https://m.media-amazon.com/images/I/31+02ekv7IL._AC_SX679_.jpg',
        },
        {
          title: 'Friatdeira Elétrica 2 Cubas',
          title_anuncio: 'Friatdeira Elétrica 2 Cubas 10 Litros Stevan Metal',
          preco: 800,
          descricao: `Com esta fritadeira da Fast Máquinas, você terá o complemento perfeito para o seu negócio gastronômico. Poderá preparar pratos em grande volume para servir rapidamente a todos os seus convidados. Assim, você garantirá a saída ágil de cada pedido e fornecerá o melhor serviço aos seus clientes.`,
          img: 'https://images.tcdn.com.br/img/img_prod/788872/friatdeira_2_cubas_10_litros_stevan_metal_2417_2_0c43f62e6d73fe56400e18ff82f2db5e.jpg',
        },
        {
          title: 'Freezer Horizontal Consul',
          title_anuncio:
            'Freezer Horizontal Consul 2 portas 534L - CHB53EB 110V',
          preco: 1400,
          descricao: `Queremos que você tenha segurança sempre que fizer uma compra no site da Amazon.com.br. Por isso, oferecemos garantia para quando você compra de outros vendedores em nosso site, cobrindo a condição do item comprado e sua entrega dentro do prazo estimado.`,
          img: 'https://m.media-amazon.com/images/I/41nyv7XfQdL._AC_SX679_.jpg',
        },
        {
          title: 'Fritadeira Sem Óleo Air Fryer',
          title_anuncio:
            'Fritadeira Sem Óleo Air Fryer 3,5L, Mondial, Preto/Inox, 1500W, 127V - AF-30 I',
          preco: 379,
          descricao: `Essa tecnologia vai surpreender você! Com sistema integrado de turbina e resistência, a Air Fryer Mondial movimenta o ar quente cozinhando e assando os alimentos de forma rápida e saudável, sem usar um pingo de óleo e sem perder a crocância e o sabor que a fritura oferece.`,
          img: 'https://m.media-amazon.com/images/I/81naSwftdZL._AC_SY879_.jpg',
        },

        {
          title: 'Apple iPhone 13 Pro',
          title_anuncio: 'Apple iPhone 13 Pro Max (256 GB) - Azul Sierra',
          preco: 8000,
          descricao: `Tela Super Retina XDR de 6,7 polegadas com ProMotion para uma sensação mais rápida e responsiva
          O modo cinematic adiciona profundidade de campo rasa e muda o foco automaticamente em seus vídeos
          Sistema de câmera Pro com novas câmeras 12MP Telefoto, Wide e Ultra Wide; LiDAR Scanner; Alcance do zoom ótico 6x; macro fotografia; Estilos fotográficos, vídeo ProRes, Smart HDR 4, modo noturno, Apple ProRAW, gravação 4K Dolby Vision HDR
          Câmera frontal TrueDepth de 12 MP com modo noturno, gravação 4K Dolby Vision HDR
          Chip biônico A15 para desempenho ultrarrápido`,
          img: 'https://m.media-amazon.com/images/I/41G6Hlu3TBL._AC_SX679_.jpg',
        },
        {
          title: 'Smartphone Motorola Moto',
          title_anuncio: 'Smartphone Motorola Moto G22 128GB 4GB RAM Verde',
          preco: 1139,
          descricao: `Quad Câmera com sensor de 50 MP + Selfie de 16 MP
          12 horas de bateria em 30 minutos* com carregador TurboPower 20
          Design elegante e moderno
          Navegação suave com tela imersiva de 6,5″ HD+ com 90 Hz
          128 GB de armazenamento interno*`,
          img: 'https://m.media-amazon.com/images/I/51RkkgRxCrL._AC_SX679_.jpg',
        },
        {
          title: 'SAMSUNG Tab S6 Lite',
          title_anuncio: 'SAMSUNG Tab S6 Lite, SM-P619NZAZZTO, Cinza',
          preco: 2279,
          descricao: `S-Pen, pino ejetor para SIM Card e memória, Cabo USB-C, Carregador de parede Fast Charger 15W
          nan2022 Produtos com garantia de qualidade.= descubre produtos úteis para você.S-Pen, pino ejetor para SIM Card e memória, Cabo USB-C, Carregador de parede Fast Charger 15W
          nan2022 Produtos com garantia de qualidade.
          Descubre produtos úteis para você.`,
          img: 'https://m.media-amazon.com/images/I/51YtqWJhEaL._AC_SX679_.jpg',
        },
        {
          title: 'Apple iPhone 13 (128 GB) ',
          title_anuncio: 'Apple iPhone 13 (128 GB) - Luz das estrelas',
          preco: 5000,
          descricao: `
          Tela Super Retina XDR de 6,1 polegadas
          O modo cinematic adiciona profundidade de campo rasa e muda o foco automaticamente em seus vídeos
          Sistema avançado de câmera dupla com câmeras Wide e Ultra Wide de 12MP; Estilos fotográficos, Smart HDR 4, modo noturno, gravação 4K Dolby Vision HDR
          Câmera frontal TrueDepth de 12 MP com modo noturno, gravação 4K Dolby Vision HDR
          Chip biônico A15 para desempenho ultrarrápido`,
          img: 'https://m.media-amazon.com/images/I/41Zbbl4P+LL._AC_SX679_.jpg',
        },
        {
          title: 'Smartphone Motorola Edge',
          title_anuncio: 'Smartphone Motorola Edge 30 5G 256GB 8GB RAM Grafite',
          preco: 2379,
          descricao: `Foco instantâneo em todos os pixels, OIS e gravação em HDR10
          Alta resolução nas câmeras principal e híbrida (ultra-wide e macro) com sensores de 50 MP OIS e 50 MP
          Tela nítida e fluida de 144 Hz, áudio estéreo e Dolby Atmos*
          Smartphone 5G mais fino do mundo e moderno com sensor de impressão digital na tela
          Experiência multitelas com a plataforma Ready For`,
          img: 'https://m.media-amazon.com/images/I/51yd5TAAgUL._AC_SX679_.jpg',
        },
        {
          title: 'Smart TV 50" 4K UHD',
          title_anuncio: 'Smart TV 50" 4K UHD Samsung 50BU8000',
          preco: 2000,
          descricao: `Tamanho da tela 50 Polegadas Tecnologia de conectividade USB Marca SAMSUNG Resolução 4K Tipo de alto-falante Soundbar Método de controle Remoto
          Garantia: 12 MESES COM O FABRICANTE
          Verifique condições de frete
          País de origem do produto: BR`,
          img: 'https://m.media-amazon.com/images/I/51zVzAgT1NL._AC_.jpg',
        },
        {
          title: 'Smart TV QLED 55" 4K UHD',
          title_anuncio:
            'Smart TV QLED 55" 4K UHD 55Q60B Samsung com Modo Game, HDR, Wifi, Bluetooth, HDMI, USB, Som em Movimento',
          preco: 3000,
          descricao: `Tamanho da tela 55 Polegadas Tecnologia de conectividade USB Marca SAMSUNG Resolução 4K Tipo de alto-falante Soundbar Método de controle Remoto
          Garantia: 12 MESES COM O FABRICANTE
          Verifique condições de frete
          País de origem do produto: BR`,
          img: 'https://m.media-amazon.com/images/I/511C2JzjCUL._AC_.jpg',
        },
        {
          title: 'Smart TV LED PRO 43" Full HD',
          title_anuncio:
            'Smart TV LED PRO 43" Full HD LG 43LM631C0SB, ThinQ AI, 3 HDMI, 2 USB, Wi-Fi, Conversor Digital',
          preco: 1800,
          descricao: `Tela: Resolução Full HD de 1920x1080 pixels, formato da tela 16:9
          Funcionalidade: Sistem Artificial ThinQ AI, Processador Quad Core (Quatro processadores rápidos e precisos eliminam o ruído e criam cores e contrastes mais dinâmicos), Sistema Operacional webOS 4.5 (permite que você assista facilmente a seus filmes favoritos da Netflix, vídeos do YouTube e muito mais;Equipada com Galeria, Conteúdos VR 360, LG Content Store, Miracast Overlay), Wireless Integrado, Dynamic Color Enhancer`,
          img: 'https://m.media-amazon.com/images/I/61UqBsb-pMS._AC_SX679_.jpg',
        },
        {
          title: 'TCL Qled tv 55” C715',
          title_anuncio: 'TCL Qled tv 55” C715 4k UHD Android TV Dolby Vision',
          preco: 2599,
          descricao: `Quantum Dot: Desfrute da qualidade de imagem com 100% de volume de cor. O Quantum Dot produz um bilhão de cores e tons diferentes para entregar um desempenho de imagem excepcionalmente realista. Combinado com cores HDR 10+, contraste e brilho são otimizados e enquadrados perfeitamente para cada cena.
          Dolby Vision: a tecnologia Dolby Vision revoluciona sua experiência de TV. Alcance um nível cinematográfico de imagem em sua casa.`,
          img: 'https://m.media-amazon.com/images/I/81cMWRvo25L._AC_SX679_.jpg',
        },
        {
          title: 'PHILIPS Android TV 50" 4K 50PUG7406/78',
          title_anuncio:
            'PHILIPS Android TV 50" 4K 50PUG7406/78, Google Assistant Built-in, Comando de Voz, Dolby Vision/Atmos, VRR/ALLM, Bluetooth 5.0',
          preco: 2100,
          descricao: `Android TV 4K HDR: Máximo de conteúdo com a Android TV aliado à uma experiência em 4K HDR com qualidade de imagem Philips Comando de Voz no Controle Remoto: Com o Google Assistente, transmita qualquer comando de voz à TV. Bluetooth 5.0 e Chromecast integrado: transmita seu conteúdo favorito do celular para a TV com um simples toque através do Chromecast Integrado. Conecte seus dispositivos favoritos com uma conexão bluetooth rápida. Dolby Vision e Dolby Atmos: Cores vibrantes`,
          img: 'https://m.media-amazon.com/images/I/61Em-iW5x1L._AC_SX679_.jpg',
        },
        {
          title: 'Trator Giant Escavator Até 50Kg',
          title_anuncio: 'Trator Giant Escavator Até 50Kg, Roma, Multicor',
          preco: 50,
          descricao: `O caminhão Iveco Tector Expresso traz para a brincadeira todos os detalhes do modelo que roda pelas cidades do Brasil. Acompanha o caminhão vários acessórios.`,
          img: 'https://m.media-amazon.com/images/I/71hyi8-D97L._AC_SX679_.jpg',
        },
        {
          title: 'Jogo Pula Pirata',
          title_anuncio: 'Jogo Pula Pirata, Estrela',
          preco: 80,
          descricao: `Recomendações: para 2 jogadores ou mais a partir de 5 anos Objetivo do jogo: conseguir colocar o máximo de espadinhas no baú sem fazer o pirata pular Tempo médio de jogo: 15 minutos Jogue com realidade aumentada: baixe o app gratuito para android ou ios; escaneie o cartão que vem junto com o jogo para jogar no app Contém na embalagem: 1 pirata, 1 barril, 24 espadinhas, Selo de segurança do inmetro: ce-bri/iqb-aj001 nm300/2002`,
          img: 'https://m.media-amazon.com/images/I/61GyIYyB8OL._AC_SX679_.jpg',
        },
        {
          title: 'Barbie Estate, Mega Casa Dos Sonhos, Mattel',
          title_anuncio: 'Barbie Estate, Mega Casa',
          preco: 2000,
          descricao: `A Casa dos Sonhos da Barbie de 3 andares (montagem necessária) foi planejada com 3 andares, 8 ambientes, brincadeira em todos os ângulos, um elevador que funciona e piscina com escorregador, a Casa dos Sonhos da Barbie incentiva a imaginação para se divertir nesta casa de bonecas que vira uma verdadeira casa dos sonhos!`,
          img: 'https://m.media-amazon.com/images/I/71VtBSBtiOL._AC_SX679_.jpg',
        },
        {
          title: 'Boneco Buzz Lightyear com Som',
          title_anuncio:
            'Boneco Buzz Lightyear com Som, Disney-Pixar, Multicor',
          preco: 200,
          descricao: `Boneco em Plástico Buzz Lightyear Com Som Toy Story 4! Diretamente das Salas de Cinema para dentro da sua casa. Diversão Garantida!`,
          img: 'https://m.media-amazon.com/images/I/6164snr0Z0L._AC_SX679_.jpg',
        },
        {
          title: 'Hot Wheels Pacote 10 Carros',
          title_anuncio:
            'Hot Wheels Pacote 10 Carros Sortidos Modelo Pode Variar Mattel Multicor',
          preco: 200,
          descricao: `Desde sua estreia em 1968, os veículos Hot Wheels são os favoritos dos colecionadores, entusiastas de carros e fãs de corrida de todas as idades. Em escala 1: 64, estes carros em die-cast trazem detalhes realistas e decoração autêntica. Escolha entre uma grande variedade de veículos do sortimento, desde sofisticados carros esportivos, passando por carros exóticos de corrida, até os mais populares. Atenção! Este item é sortido. O modelo comprado pode variar!`,
          img: 'https://m.media-amazon.com/images/I/71sx1+s5UHL._AC_SX679_.jpg',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  },
};
