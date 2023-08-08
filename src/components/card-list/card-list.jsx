import { Component } from 'react';
import "./card-list.css";
// we need this as ham hooks se ni class se banare hai

class CardList extends Component {

    render(){

        return(
            <div className="card-list">
                {this.props.monsters.map((monster) => (
                    <div className="card-container" key={monster.id}>

                        <img src={"https://robohash.org/"+monster.id+"?set=set2&size=180x180"}></img>
                        <h2>{monster.name}</h2>
                        <p>{monster.email}</p>

                    </div>
                ))}
            </div>
        )
    }
}

export default CardList;  // since we want to export this