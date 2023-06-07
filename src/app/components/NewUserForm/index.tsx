"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  Input,
  FormMessage,
  Button,
  ImageUpload,
  MultiSelect,
  Checkbox,
  Select,
} from "@controle-devs-ui/react";

import "@controle-devs-ui/react/dist/index.css";

const skills = [
  { value: "1", label: "React Js" },
  { value: "2", label: "React Native" },
  { value: "3", label: "Angular" },
  { value: "4", label: "C#" },
];

const squad = [
  { value: "1", label: "Data Science" },
  { value: "2", label: "Frontend" },
  { value: "3", label: "Backend" },
];

export const NewUserForm = () => {
  const [output, setOutput] = useState("");
  const formSchema = z.object({
    username: z.string().min(2, {
      message: "O nome de usuário deve ter pelo menos 2 caracteres..",
    }),
    photo: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    hardSkills: z.array(z.string()),
    squad: z.array(z.string()),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      photo: {},
      hardSkills: [],
      squad: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setOutput(JSON.stringify(values, null, 2));
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="photo"
          render={({ field }) => (
            <FormItem className="flex flex-col space-y-2 ">
              <FormLabel className=" bold text-lg dark:text-white">
                Adicione uma foto:
              </FormLabel>
              <FormControl>
                <ImageUpload {...field} />
              </FormControl>
              <FormMessage className="text-red-900" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex flex-col space-y-2 ">
              <FormLabel className=" bold text-lg dark:text-white">
                Nome completo:
              </FormLabel>
              <FormControl>
                <Input placeholder="nome" {...field} className="mt-4" />
              </FormControl>
              <FormMessage className="text-red-900" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hardSkills"
          render={() => (
            <FormItem className="flex flex-col space-y-2 ">
              <FormLabel className=" bold text-lg dark:text-white">
                Hard Skills:
              </FormLabel>
              <FormControl>
                <MultiSelect
                  checkbox={true}
                  select={{
                    options: skills,
                    placeholder: "Selecione as opções",
                  }}
                  onChange={() => {}}
                />
              </FormControl>
              <FormMessage className="text-red-900" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="squad"
          render={() => (
            <FormItem className="flex flex-col space-y-2 ">
              <FormLabel className=" bold text-lg dark:text-white">
                Squad:
              </FormLabel>
              <FormControl>
                <Select
                  placeholder="Selecione a squad"
                  descriptiveTextForAccessibility="select com opções de squad"
                  options={squad}
                />
              </FormControl>
              <FormMessage className="text-red-900" />
            </FormItem>
          )}
        />

        <Button type="submit" text="Enviar"></Button>
      </form>
      <pre className=" dark:text-white">{output}</pre>
    </Form>
  );
};
