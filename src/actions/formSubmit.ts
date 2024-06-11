"use server";
export const formSubmit = async (
  prevStation: {
    status: number;
  },
  formData: FormData
) => {
  try {
    const response = await fetch("http://localhost:3000/api/user", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
  return {
    status: 200,
  };
};
