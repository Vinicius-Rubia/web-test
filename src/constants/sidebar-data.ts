import {
  Activity,
  Blocks,
  Bot,
  Boxes,
  Braces,
  BugPlay,
  ChartNoAxesColumn,
  FolderOpenDot,
  MoveUpRight,
  TrendingUp,
} from "lucide-react";
import { images } from "./images";

export const SIDEBAR_DATA = {
  user: {
    name: "vinicius-rubia",
    email: "vinicus.deoliveirarubia@gmail.com",
    avatar: images.Profile,
  },
  teams: [
    {
      name: "SKY",
      logo: images.SkyLogoIcon,
      group: "Negocie Online",
    },
    {
      name: "Neoenergia",
      logo: images.NeoenergiaLogo,
      group: "Negocie Online",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      items: [
        {
          title: "Painel",
          url: "/panel",
          icon: ChartNoAxesColumn,
        },
      ],
    },
    {
      title: "Projetos",
      url: "#",
      items: [
        {
          title: "Novo projeto",
          url: "#",
          icon: FolderOpenDot,
        },
        {
          title: "Projetos",
          url: "#",
          icon: Blocks,
        },
      ],
    },
    {
      title: "Casos de testes",
      url: "#",
      items: [
        {
          title: "Novo caso de teste",
          url: "/testcases/new",
          icon: Bot,
          isActive: true,
        },
        {
          title: "Casos de testes",
          url: "#",
          icon: Boxes,
        },
        {
          title: "Variáveis de ambiente",
          url: "#",
          icon: Braces,
        },
      ],
    },
    {
      title: "Relatórios",
      url: "#",
      items: [
        {
          title: "Execuções",
          url: "#",
          icon: BugPlay,
        },
        {
          title: "Performance",
          url: "#",
          icon: Activity,
        },
        {
          title: "Evolução",
          url: "#",
          icon: TrendingUp,
        },
      ],
    },
    {
      title: "Recursos",
      url: "#",
      items: [
        {
          title: "API",
          url: "#",
          icon: MoveUpRight,
        },
        {
          title: "Guia do usuário",
          url: "#",
          icon: MoveUpRight,
        },
      ],
    },
  ],
};
