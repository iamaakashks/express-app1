export const getAllUsers = (req, res)=>{
    res.send('get all users');
}

export const getUserById = (req, res)=>{
    res.send(`users with ${req.params.id} is available`)
}

export const createUser = (req, res)=>{
    res.send("user created successfully");
}

export const updateUser = (req, res)=>{
    res.send(`update user with id: ${req.params.id}`)
};

export const deleteUserById = (req, res)=>{
    res.send(`delete user with id: ${req.params.id}`)
}