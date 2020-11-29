import React from "react"
import { Route } from "react-router-dom"
import { GameForm } from "./game/GameForm.js"
import { GameList } from "./game/GameList.js"
import { GameProvider } from "./game/GameProvider.js"
import { GameDetails } from "./game/GameDetails.js"
import { ReviewForm } from "./game/ReviewForm.js"



export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
        }}>
            <GameProvider>
                <Route exact path="/games" render={ props => <GameList {...props}/>} />
                    
                <Route exact path="/games/new" render={props => <GameForm {...props} />} />

                <Route path="/games/:gameId" render={props => <GameDetails {...props} />} />

                <Route path="/review" render={props => <ReviewForm {...props} />} />


                {/* <EventProvider>
                <Route exact path="/events" render={(props) => {
                        return <EventList history={props.history} />
                    }} />

                    <Route exact path="/events/new" render={props => <EventForm {...props} />} />
                </EventProvider> */}
            </GameProvider>
        </main>
    </>
}
