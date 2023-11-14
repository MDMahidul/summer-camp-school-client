/* added user data to db */
export const addUser = user =>{
    const currentUser = {
        email: user.email
    }
    fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify(currentUser)
    }).then(res=>res.json)
    .then(data=>console.log(data))
}

/* get all the user */
/* export const getAllUsers =  */