import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import axios from "axios";
import { useUserStore } from "@/stores/user";

type Inputs = {
  email: string;
  password: string;
};

export const LoginForm = ({ setOpen }: any) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,

    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    criteriaMode: "all",
  });

  const { initUser } = useUserStore();

  const onSubmit: SubmitHandler<Inputs> = async (values) => {
    await axios
      .post(`${process.env.NEXT_PUBLIC_API}/auth/login`, values)
      .then(({ data }) => {
        initUser(data);
        reset();
        setOpen(false);
      })
      .catch((error) => {
        setError("root.serverError", {
          message: error.response.data.message,
        });
      });
  };

  console.log(watch("email")); // watch input value by passing the name of it

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 mt-6"
    >
      <Input
        placeholder="Email"
        {...register("email", {
          required: true,

          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: "Please enter a valid email",
          },
        })}
      />
      {errors.email && (
        <span className="text-red-500">
          {errors.email.message
            ? errors.email.message
            : "This field is required"}
        </span>
      )}
      <Input
        placeholder="Password"
        {...register("password", { required: true })}
      />
      {errors.password && (
        <span className="text-red-500">This field is required</span>
      )}
      {errors.root?.serverError && (
        <span className="text-red-500">{errors.root.serverError.message}</span>
      )}
      <Button disabled={isSubmitting} type="submit" className="mt-6">
        Login
      </Button>
    </form>
  );
};
