const markAdmins = (users, adminIds) => {
        let userArr = [];
        adminIds.forEach(item => {
            userArr = users.map(user => {
                if (item === user.id) {
                    user.isAdmin = true;
                }
                return user;
            })
        });
        userArr.forEach(user => {
            if (!user.isAdmin) {
                user.isAdmin = false
            }
        })
        return userArr;
}

// \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/

function markAdmins(users, ids) {
    return users.map((user) => {
        const isAdmin = ids.includes(id);
        return { ...user, isAdmin }
  });
}