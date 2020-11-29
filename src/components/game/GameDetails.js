import React, { useContext, useEffect, useState } from "react"
import { GameContext } from "./GameProvider.js"

export const GameDetails = (props) => {
    const { games, designers, getGameById, getDesignerById } = useContext(GameContext)

    const [setGames, setDesigners] = useState()

    useEffect(() => {
      const gameId = parseInt(props.match.params.gameId)
      getGameById(gameId)
          .then(setGames)

      const designerId = parseInt(props.match.params.designerId)
      getDesignerById(designerId)
          .then(setDesigners) //I don't think props.match.params.designerId is in the data
  }, [])

    return (
  
          <section className="game">
              <div className="game__title">Title: {games.title}</div>
              <div className="game__designer">Designer: {games.designer_id}</div>
              <div className="game__year">Year Released: {games.year_released}</div>
              <div className="game__players">{games.number_of_players} players needed</div>
              <div className="game__time">Estimated time to play: {games.est_time_to_play} hours</div>
              <div className="game__age">Age recommendation: minimum {games.age_recommendation} years old</div>
              <div className="game__categories">Categories: </div>
          </section>
        )
    }
