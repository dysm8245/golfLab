const apiCalls = {
    getGolfers: async() =>{
        const response = await fetch("https://api.sportsdata.io/golf/v2/json/PlayerSeasonStats/2024?key=93e6148559184045bc1cec09f766ff29")
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    getTourneys: async(tourney: Number) =>{
        const response = await fetch(`https://api.sportsdata.io/golf/v2/json/Leaderboard/${tourney}?key=93e6148559184045bc1cec09f766ff29`)
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    getSchedules: async() =>{
        const response = await fetch("https://api.sportsdata.io/golf/v2/json/Tournaments?key=93e6148559184045bc1cec09f766ff29")
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
}

export default apiCalls