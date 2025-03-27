export interface Action {
  actionType: "type" | "click" | "navigate";
  title: string;
  description: string;
  inSoon?: boolean;
}

export interface InventoryAction {
  identifier: string;
  section: string;
  description: string;
  actions: Action[];
}

export const INVENTORY_ACTIONS: InventoryAction[] = [
  {
    identifier: "interaction-with-elements",
    section: "Interação com Elementos",
    description: "Contém funções que simulam as ações do usuário na interface, como cliques, escrita em campos, arrastar, soltar e rolagem. Essas funções permitem testar a interação e a responsividade dos componentes.",
    actions: [
      {
        actionType: "click",
        title: "Clicar",
        description: "Simula um clique em um elemento específico na interface."
      },
      {
        actionType: "type",
        title: "Escrever",
        description: "Simula a digitação de um texto em um campo de entrada."
      },
      {
        actionType: "navigate",
        title: "Passar o mouse",
        description: "Simula a passagem do mouse sobre um elemento para ativar efeitos de hover.",
        inSoon: true
      },
      {
        actionType: "navigate",
        title: "Scrollar página",
        description: "Simula a rolagem de um contêiner ou da página até um elemento alvo.",
        inSoon: true
      }
    ]
  },
  {
    identifier: "auxiliary-functions",
    section: "Funções Auxiliares",
    description: "Agrupa funções de apoio que executam operações independentes, como capturar prints da tela, aplicar delays e registrar logs. Essas funções facilitam o controle do fluxo dos testes e a documentação dos resultados.",
    actions: [
      {
        actionType: "navigate",
        title: "Print de tela",
        description: "Captura uma imagem da tela atual para documentação visual.",
        inSoon: true,
      },
      {
        actionType: "navigate",
        title: "Tempo de espera",
        description: "Aguarda por um período definido, permitindo a sincronização do teste.",
        inSoon: true,
      },
      {
        actionType: "navigate",
        title: "Teclado",
        description: "Pressiona teclas do teclado para interação com a página, para navegação e outros.",
        inSoon: true,
      },
    ]
  },
  {
    identifier: "navigation-and-flow-control",
    section: "Navegação e Controle de Fluxo",
    description: "Inclui funções que gerenciam a transição entre páginas e estados da aplicação, como redirecionamentos, navegação no histórico e rolagem automática, garantindo que o fluxo de trabalho ocorra conforme esperado.",
    actions: [
      {
        actionType: "navigate",
        title: "Navegar para URL",
        description: "Navega para uma URL especificada, permitindo testar o fluxo de páginas da aplicação."
      },
      {
        actionType: "navigate",
        title: "Página anterior",
        description: "Retorna à página anterior utilizando o histórico do navegador.",
        inSoon: true
      },
      {
        actionType: "navigate",
        title: "Página posterior",
        description: "Avança para a página seguinte, se disponível no histórico do navegador.",
        inSoon: true
      },
    ]
  },
  {
    identifier: "validations-and-assertions",
    section: "Validações e Asserções",
    description: "Reúne funções destinadas a confirmar se o estado, os elementos e os dados exibidos na aplicação estão corretos, por meio da verificação de textos, atributos, contagens e outros aspectos críticos.",
    actions: [
      {
        actionType: "navigate",
        title: "Validar texto",
        description: "Verifica se o texto exibido em um elemento corresponde ao valor esperado.",
        inSoon: true,
      },
      {
        actionType: "navigate",
        title: "Validar visibilidade",
        description: "Confirma que um elemento está visível na interface.",
        inSoon: true,
      },
      {
        actionType: "navigate",
        title: "Validar campo",
        description: "Valida que o valor de um campo de entrada corresponde ao esperado.",
        inSoon: true,
      },
      {
        actionType: "navigate",
        title: "Validar atributo",
        description: "Verifica se um atributo de um elemento possui o valor correto.",
        inSoon: true,
      },
      {
        actionType: "navigate",
        title: "Validar contagem",
        description: "Confirma se a quantidade de elementos renderizados corresponde ao esperado.",
        inSoon: true,
      }
    ]
  },
  {
    identifier: "interaction-with-apis",
    section: "Interação com APIs",
    description: "Reúne funções que executam chamadas a APIs e verificam as respostas do servidor, permitindo testar a integração entre o front-end e os serviços de back-end, garantindo a comunicação correta e o fluxo de dados.",
    actions: [
      {
        actionType: "navigate",
        title: "Chamada de API",
        description: "Realiza uma chamada a um endpoint da API para testar a integração com o back-end.",
        inSoon: true,
      },
      {
        actionType: "navigate",
        title: "Validar resposta de API",
        description: "Valida o status e o conteúdo da resposta da API, garantindo a comunicação correta.",
        inSoon: true,
      },
      {
        actionType: "navigate",
        title: "Simular erro de API",
        description: "Simula um erro na chamada da API para testar a resiliência e o tratamento de exceções da aplicação.",
        inSoon: true,
      },
      {
        actionType: "navigate",
        title: "Resposta mockada",
        description: "Configura uma resposta simulada para testes de integração, permitindo isolar o front-end do back-end real.",
        inSoon: true,
      }
    ]
  }
];