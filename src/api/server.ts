
const serverCalls = {
    signUp: async(data: any) =>{
        const response = await fetch("http://127.0.0.1:5000/api/signin",{
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        })
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    getNotes: async (token: string) =>{
        const response = await fetch("http://127.0.0.1:5000/api/getNotes",{
            method: "GET",
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*', 
                'x-access-token': `Bearer ${token}`
            }
        })
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    addNotes: async (data: any) =>{
        const response = await fetch("http://127.0.0.1:5000/api/addNote",{
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*', 
                'x-access-token': `Bearer ${data.token}`
            },
            body: JSON.stringify(data)
        })
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    deleteNote: async (data: any) =>{
        const response = await fetch(`http://127.0.0.1:5000/api/deleteNote/${data.id}`,{
            method: "DELETE",
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*', 
                'x-access-token': `Bearer ${data.token}`
            },
            body: JSON.stringify(data)
        })
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    searchUser: async (data: any) =>{
        const response = await fetch(`http://127.0.0.1:5000/api/getUser/search`,{
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        })
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    }, 
    addFriend: async (data: any) =>{
        const response = await fetch(`http://127.0.0.1:5000/api/addFriend/${data.id}`,{
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${data.token}`
            }
        })
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    getFriends: async (token: string) =>{
        const response = await fetch(`http://127.0.0.1:5000/api/getFriends`,{
            method: "GET",
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        })
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    removeFriend: async (data: any) =>{
        const response = await fetch(`http://127.0.0.1:5000/api/removeFriend/${data.id}`,{
            method: "DELETE",
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${data.token}`
            }
        })
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    getUser: async (id: string) =>{
        const response = await fetch(`http://127.0.0.1:5000/api/getUser/${id}`,{
            method: "GET",
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },

}

export default serverCalls