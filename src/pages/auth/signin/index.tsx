import { Separator } from "@/components/ui/separator";
import { images } from "@/constants/images";
import { LoginForm } from "./login-form";

export const Signin = () => {
  return (
    <main className="w-full min-h-screen flex overflow-y-hidden">
      <div className="relative flex-1 hidden items-center justify-center min-h-screen bg-transparent lg:flex">
        <div className="my-auto h-full">
          <div className="absolute inset-0 opacity-10 w-full bg-transparent bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          <img
            className="absolute inset-x-0 opacity-15 size-full select-none"
            src={images.Background}
            alt="back bg"
          />
        </div>
        <div className="relative z-10 w-full max-w-lg">
          <img
            src={images.Profile}
            className="rounded-full size-25 object-cover"
          />
          <div className="mt-10 space-y-3">
            <h3 className="text-3xl md:text-4xl lg:text-[40px] font-normal tracking-tighter">
              Gerencie seus projetos de testes com eficiência
            </h3>

            <Separator className="bg-white/15 w-[100px]" />
            <p className="text-gray-300 text-md md:text-lg tracking-tight">
              Comece agora e otimize suas execuções de testes, acompanhando
              resultados e performance em tempo real. Centralize seus projetos e
              eleve a qualidade do seu processo de testes.
            </p>
            <div className="flex items-center -space-x-2">
              <img
                src={images.PersonOne}
                className="size-10 rounded-full border-2 border-white"
              />
              <img
                src={images.PersonTwo}
                className="size-10 rounded-full border-2 border-white"
              />
              <img
                src={images.PersonThree}
                className="size-10 rounded-full border-2 border-white"
              />
              <img
                src={images.PersonFour}
                className="size-10 rounded-full border-2 border-white"
              />
              <img
                src={images.PersonFive}
                className="size-10 rounded-full border-2 border-white"
              />
              <p className="text-sm text-gray-400 font-medium translate-x-5">
                Junte-se a mais de 5.000 usuários
              </p>
            </div>
          </div>
        </div>
      </div>
      <LoginForm />
    </main>
  );
};
