import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { images } from "@/constants/images";
import { SignInSchema } from "@/validators/signin-validate";
import { AuthSigninType } from "@/validators/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

export function LoginForm() {
  const navigate = useNavigate();

  const form = useForm<AuthSigninType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: AuthSigninType) {
    console.log(data);
    navigate("/testcases/new");
  }

  return (
    <div className="flex-1 relative flex items-center justify-center min-h-full">
      <img
        className="absolute -top-20 h-screen opacity-5 select-none"
        src={images.Background}
        width={1000}
        alt="back bg"
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6 z-20 min-w-[280px] w-full max-w-96 mx-4"
        >
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold">Bem vindo de volta :)</h1>
            <p className="text-balance text-sm text-muted-foreground">
              Faça o seu login para acessar a plataforma.
            </p>
          </div>

          <div className="grid gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="email@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center">
                    <FormLabel>Senha</FormLabel>
                    <Link
                      to="/forgot-password"
                      className="ml-auto text-sm underline-offset-4 hover:underline text-cyan-500 hover:text-cyan-400"
                    >
                      Esqueceu a senha?
                    </Link>
                  </div>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="**********"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting && (
                <Loader2 className="animate-spin" />
              )}
              {form.formState.isSubmitting ? "Aguarde..." : "Acessar"}
            </Button>
            <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
              <span className="relative z-10 bg-background px-2 text-muted-foreground">
                Ou se preferir
              </span>
            </div>
            <Button type="button" variant="outline" className="w-full">
              <img src={images.GoogleIcon} alt="Google" className="size-5" />
              Acessar com Google
            </Button>
          </div>
          <div className="text-center text-sm">
            Não tem uma conta?{" "}
            <Link
              to="/signup"
              className="underline-offset-4 hover:underline text-cyan-500 hover:text-cyan-400"
            >
              Cadastre-se
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
