import React, { useContext, useEffect, useState } from "react"
import { GameContext } from "./GameProvider.js"


export const GameDetails = (props) => {
    const { games, getGameById, createRating} = useContext(GameContext)
    const [currentRating, setCurrentRating] = useState({
        value: 5
    })


    useEffect(() => {
        const gameId = parseInt(props.match.params.gameId)
        getGameById(gameId)
  }, [])

    const handleControlledInputChange = (event) => {
        const newRatingState = Object.assign({}, currentRating)
        newRatingState[event.target.name] = parseInt(event.target.value)
        console.warn(event.target.value)
        setCurrentRating(newRatingState)
    }

    return (
        <div>
          <section className="game">
              <div className="game__title">Title: {games.title}</div>
              <div className="game__designer">Designer: {games.designer}</div>
              <div className="game__year">Year Released: {games.year_released}</div>
              <div className="game__players">{games.number_of_players} players needed</div>
              <div className="game__time">Estimated time to play: {games.est_time_to_play} hours</div>
              <div className="game__age">Age recommendation: minimum {games.age_recommendation} years old</div>
              <div className="game__categories">Categories: </div>
          </section>
          <label htmlFor="value">Rate game (1-10): </label>	
                <input type="range" min="1" max="10" name="value"
                defaultValue={currentRating.value}
                        onChange={handleControlledInputChange}
                     />   
                      <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const rating = {
                        value: currentRating.value,
                        gameId: games.id
                    }

                    // Send POST request to your API
                    createRating(rating)
                    // props.history.push({ pathname: `/games/${games.id}` })
                }}
                className="btn btn-primary">Save Rating</button>
                    <div>
                      <h2>Average Game Rating: </h2>
                      <p>{games.average_rating}</p>
                    </div>
          <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                props.history.push({ pathname: "/review" })
                }}
                >Review Game</button>

               

        <h2>Reviews</h2>
        {
        games.reviews&&
            games.reviews.map(review => {
                return <section key={`review--${review.id}`} className="review">
                        <div className="review__description">{review.description}</div>
                    </section>
                    
                })
        }
        <div className="image_container">
                    <h2 className="list-h1">Action Shots</h2>
                    <div className="review-detail">
                    {
                        games.pictures && games.pictures.map(picture => {
                            return <img src={picture.action_pic}></img>
                        })
                    }
                    </div>
        </div>

        
        <button onClick={() => {props.history.push({ pathname: `/upload-image/${games.id}` })}}>Upload Image</button>

        </div>
        
        
        )
    }
