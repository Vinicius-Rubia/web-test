export interface Action {
  id: string;
  title: string;
  description: string;
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
        id: "8e1b6e7a-8325-4b33-9b3a-0aee9a7f1e03",
        title: "Clicar",
        description: "Simula um clique em um elemento específico na interface."
      },
      {
        id: "df13205c-8f92-4d9d-9b11-5ad83edb8f23",
        title: "Escrever",
        description: "Simula a digitação de um texto em um campo de entrada."
      },
      {
        id: "a4d7b3c2-95f4-4e01-8c0b-5f8b2ea55a2e",
        title: "Passar o mouse",
        description: "Simula a passagem do mouse sobre um elemento para ativar efeitos de hover."
      },
      {
        id: "b7a8c9d0-1e2f-3a4b-5c6d-7e8f9a0b1c2d",
        title: "Scrollar página",
        description: "Simula a rolagem de um contêiner ou da página até um elemento alvo."
      }
    ]
  },
  {
    identifier: "auxiliary-functions",
    section: "Funções Auxiliares",
    description: "Agrupa funções de apoio que executam operações independentes, como capturar prints da tela, aplicar delays e registrar logs. Essas funções facilitam o controle do fluxo dos testes e a documentação dos resultados.",
    actions: [
      {
        id: "f1e2d3c4-b5a6-7890-1234-56789abcdef0",
        title: "Print de tela",
        description: "Captura uma imagem da tela atual para documentação visual."
      },
      {
        id: "0a1b2c3d-4e5f-6789-0abc-def123456789",
        title: "Tempo de espera",
        description: "Aguarda por um período definido, permitindo a sincronização do teste."
      },
      {
        id: "12345678-90ab-cdef-1234-567890abcdef",
        title: "Teclado",
        description: "Pressiona teclas do teclado para interação com a página, para navegação e outros."
      },
    ]
  },
  {
    identifier: "navigation-and-flow-control",
    section: "Navegação e Controle de Fluxo",
    description: "Inclui funções que gerenciam a transição entre páginas e estados da aplicação, como redirecionamentos, navegação no histórico e rolagem automática, garantindo que o fluxo de trabalho ocorra conforme esperado.",
    actions: [
      {
        id: "fedcba98-7654-3210-fedc-ba9876543210",
        title: "Navegar para URL",
        description: "Navega para uma URL especificada, permitindo testar o fluxo de páginas da aplicação."
      },
      {
        id: "0fedcba9-8765-4321-0fed-cba987654321",
        title: "Página anterior",
        description: "Retorna à página anterior utilizando o histórico do navegador."
      },
      {
        id: "11223344-5566-7788-99aa-bbccddeeff00",
        title: "Página posterior",
        description: "Avança para a página seguinte, se disponível no histórico do navegador."
      },
    ]
  },
  {
    identifier: "validations-and-assertions",
    section: "Validações e Asserções",
    description: "Reúne funções destinadas a confirmar se o estado, os elementos e os dados exibidos na aplicação estão corretos, por meio da verificação de textos, atributos, contagens e outros aspectos críticos.",
    actions: [
      {
        id: "a1b2c3d4-e5f6-7890-ab12-cd34ef56ab78",
        title: "Validar texto",
        description: "Verifica se o texto exibido em um elemento corresponde ao valor esperado."
      },
      {
        id: "b1c2d3e4-f5a6-7890-bc12-de34fa56bc78",
        title: "Validar visibilidade",
        description: "Confirma que um elemento está visível na interface."
      },
      {
        id: "c1d2e3f4-a5b6-7890-cd12-ef34ab56cd78",
        title: "Validar campo",
        description: "Valida que o valor de um campo de entrada corresponde ao esperado."
      },
      {
        id: "d1e2f3a4-b5c6-7890-de12-f034ab56de78",
        title: "Validar atributo",
        description: "Verifica se um atributo de um elemento possui o valor correto."
      },
      {
        id: "e1f2a3b4-c5d6-7890-ef12-a034bc56ef78",
        title: "Validar contagem",
        description: "Confirma se a quantidade de elementos renderizados corresponde ao esperado."
      }
    ]
  },
  {
    identifier: "interaction-with-apis",
    section: "Interação com APIs",
    description: "Reúne funções que executam chamadas a APIs e verificam as respostas do servidor, permitindo testar a integração entre o front-end e os serviços de back-end, garantindo a comunicação correta e o fluxo de dados.",
    actions: [
      {
        id: "b2c3d4e5-f6a7-8901-bc23-d045ef67bc89",
        title: "Chamada de API",
        description: "Realiza uma chamada a um endpoint da API para testar a integração com o back-end."
      },
      {
        id: "c2d3e4f5-a6b7-8901-cd23-e045fa67cd89",
        title: "Validar resposta de API",
        description: "Valida o status e o conteúdo da resposta da API, garantindo a comunicação correta."
      },
      {
        id: "d2e3f4a5-b6c7-8901-de23-f045ab67de89",
        title: "Simular erro de API",
        description: "Simula um erro na chamada da API para testar a resiliência e o tratamento de exceções da aplicação."
      },
      {
        id: "e2f3a4b5-c6d7-8901-ef23-a045bc67ef89",
        title: "Resposta mockada",
        description: "Configura uma resposta simulada para testes de integração, permitindo isolar o front-end do back-end real."
      }
    ]
  }
];