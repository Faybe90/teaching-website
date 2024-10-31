import { useMutation } from "@tanstack/react-query";

type UserData = {
  name: string;
  email: string;
  password: string;
  // Ajoute ici les autres propriétés nécessaires
};

const signup = async (userData: UserData): Promise<any> => {
  const response = await fetch("/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error("Failed to sign up");
  }
  return response.json();
};

export const useSignupMutation = () =>
  useMutation<any, Error, UserData>(signup);
