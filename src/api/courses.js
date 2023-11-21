/* get course data */
export const getCourse = async (id) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/course/details/${id}`
  );
  const user = await response.json();
  return user;
};
