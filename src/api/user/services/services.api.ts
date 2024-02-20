export const getAllService = async () => {
  const response = await fetch(
    "https://event-360-api.vercel.app/api/v1/all-service"
  ).then((response) => response.json());

  if (!response.success) {
    throw new Error(`${response.error.description}`);
  } else {
    return response;
  }
};
