import {
  Activity,
  Bot,
  Boxes,
  Braces,
  BugPlay,
  ChartNoAxesColumn,
  FolderOpenDot,
  MoveUpRight,
  TrendingUp
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
          inSoon: true,
        },
      ],
    },
    {
      title: "Projetos",
      url: "#",
      items: [
        {
          title: "Projetos",
          url: "/projects",
          icon: FolderOpenDot,
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
          inSoon: true,
        },
        {
          title: "Variáveis de ambiente",
          url: "#",
          icon: Braces,
          inSoon: true,
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
          inSoon: true,
        },
        {
          title: "Performance",
          url: "#",
          icon: Activity,
          inSoon: true,
        },
        {
          title: "Evolução",
          url: "#",
          icon: TrendingUp,
          inSoon: true,
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
          inSoon: true,
        },
        {
          title: "Guia do usuário",
          url: "#",
          icon: MoveUpRight,
          inSoon: true,
        },
      ],
    },
  ],
};
