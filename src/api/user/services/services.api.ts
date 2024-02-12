export const getAllService = async () => {
  const response = await fetch(
    "http://localhost:5000/event-360/api/v1/all-service"
  ).then((response) => response.json());

  if (!response.success) {
    throw new Error(`${response.error.description}`);
  } else {
    return response;
  }
};
