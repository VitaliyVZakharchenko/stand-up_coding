const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1';

async function getUserData(userId) {
    const response = await fetch(`${baseUrl}/users/${userId}`)
        console.log(response);
        
        if (!response.ok) {
            throw new Error('Can not find a user');
        }
        return response.json();

        // .then(response => {
        //     if (!response.ok) {
        //         throw new Error('Can not find a user');
        //     }
        //     return response.json();
        // });
}

async function printUserData(userId) {
    try {
        const user = await getUserData(userId);
        console.log(user);
    } catch (er) {
        console.log(er);
    }
    
        // .then(userData => {
        //     console.log(userData);
        // })
        // .catch(error => {
        //     console.log(error.message);
        // });
}