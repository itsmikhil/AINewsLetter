import api from "./api";

export type SubscribeResponse = {
  success: boolean;

  message: string;
};

export const subscribeUser =
  async (
    email: string
  ): Promise<SubscribeResponse> => {

    const response =
      await api.post(
        "/subscriber/subscribe",
        {
          email,
        }
      );

    return response.data;
  };