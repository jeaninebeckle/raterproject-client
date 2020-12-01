import React, { useContext, useEffect, useState } from "react"
import { GameContext } from "./GameProvider.js"


export const GameDetails = (props) => {
    const { games, getGameById, getReviewsById, reviews } = useContext(GameContext)


    useEffect(() => {
        const reviewId = parseInt()
        getReviewsById(reviewId)

    
        const gameId = parseInt(props.match.params.gameId)
        getGameById(gameId)
 

        // const designerId = (games.designer_id.name)
        // getDesignerById(designerId)
  }, [])

    return (
        <article>
          <section className="game">
              <div className="game__title">Title: {games.title}</div>
              <div className="game__designer">Designer: {games.designer}</div>
              <div className="game__year">Year Released: {games.year_released}</div>
              <div className="game__players">{games.number_of_players} players needed</div>
              <div className="game__time">Estimated time to play: {games.est_time_to_play} hours</div>
              <div className="game__age">Age recommendation: minimum {games.age_recommendation} years old</div>
              <div className="game__categories">Categories: </div>
          </section>
          {console.error(games.designer_id)}
        {
  
            reviews.map(review => {
                return <section key={`review--${review.id}`} className="review">
                        <div className="review__description">{review.description} </div>
                    </section>
                })
        }
           <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                props.history.push({ pathname: "/review" })
                }}
                >Review Game</button>

        </article>
        
        )
    }
