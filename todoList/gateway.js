const serverUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

export const createTask = taskData =>
    fetch(serverUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskData)
    });

export const updateTask = (taskId, updatedTaskData) => {
     fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(updatedTaskData)
    })
}

export const deleteTask = taskId => {
    fetch(`${baseUrl}/${taskId}`, {
        method: "DELETE",
    })
};

export const getTasks = () =>
    fetch(serverUrl)
        .then(response => {
            return response.json()
        })
        // .then(data => console.log(data));