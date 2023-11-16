/* added user data to db */
export const addUser = async (user) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/users/${user?.email}`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );
  const data = await response.json();
  return data;
};

/* get user data */
export const getUser = async (email) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/user/${email}`);
  const user = await response.json();
  console.log(user);
  return user;
};

/* update user role */
export const updateRole = (id,role)=>{
  const currentUser = {role: role};
  return fetch(`${import.meta.env.VITE_API_URL}/users/admin/${id}`,{
    method:'PUT',
    headers:{
      'content-type':'application/json',
    },
    body:JSON.stringify(currentUser)
  }).then(res=>res.json())
}