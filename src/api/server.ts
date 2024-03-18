
const serverCalls = {
    getServer: async() =>{
        const response = await fetch("https://golflabserver.onrender.com/api/")
        return await response.json()
    },
    signUp: async(data: any) =>{
        const response = await fetch("https://golflabserver.onrender.com/api/signin",{
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
        const response = await fetch("https://golflabserver.onrender.com/api/getNotes",{
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
        const response = await fetch("https://golflabserver.onrender.com/api/addNote",{
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
        const response = await fetch(`https://golflabserver.onrender.com/api/deleteNote/${data.id}`,{
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
        const response = await fetch(`https://golflabserver.onrender.com/api/getUser/search`,{
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
        const response = await fetch(`https://golflabserver.onrender.com/api/addFriend/${data.id}`,{
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
        const response = await fetch(`https://golflabserver.onrender.com/api/getFriends`,{
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
    getOtherFriends: async (token: string|null|undefined) =>{
        const response = await fetch(`http://127.0.0.1:5000/api/getOtherFriends`,{
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
        const response = await fetch(`https://golflabserver.onrender.com/api/removeFriend/${data.id}`,{
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
    getUser: async (id: string|null|undefined) =>{
        const response = await fetch(`https://golflabserver.onrender.com/api/getUser/${id}`,{
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
    getProfile: async (token: string) =>{
        const response = await fetch(`https://golflabserver.onrender.com/api/getUser`,{
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
    updateProfile: async (data: any) =>{
        const response = await fetch(`https://golflabserver.onrender.com/api/update`,{
            method: "PUT",
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
    addProfilePic: async (data: any) =>{
        const response = await fetch(`https://golflabserver.onrender.com/api/addPic`,{
            method: "PUT",
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

}

export default serverCalls