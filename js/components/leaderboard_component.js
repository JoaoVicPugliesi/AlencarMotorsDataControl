function leaderboard_component(leaders) {
    return `
        <div class="leaderboard-ranking-second">              
            <h3>${leaders.s_name}</h3>
            <h4>${leaders.s_number}</h4>                 
        </div>
        <div class="leaderboard-ranking-first">              
            <h3>${leaders.f_name}</h3>                                       
            <h4>${leaders.f_number}</h4>           
        </div>
        <div class="leaderboard-ranking-third">               
            <h3>${leaders.t_name}</h3>            
            <h4>${leaders.t_number}</h4>
        </div>
    `;
}

export default leaderboard_component;