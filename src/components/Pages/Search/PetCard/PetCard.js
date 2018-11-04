import React, {Component} from 'react';
import './PetCard.css';

class PetCard extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     currentPet: undefined,
        // }
    }

    componentDidMount() {
        // this.setState({
        //     currentPer: this.props.pet,
        // })
    }

    hideEmptyFields(e) {
        console.log("target: ", e.target);
    }

    render() {
        const {pet} = this.props;
        // console.log(pet);
        return (
            <section id="pet_card">
                <section id="petImage">
                    {
                        pet.img
                            ? <img src={pet.img} alt="Pet"/>
                            : <img src='/image/default_pet.jpg'/>
                    }
                </section>

                <section id="petDescription" onLoad={this.hideEmptyFields}>
                    <div>
                        {
                            pet.name
                                ? <div className="petData">
                                    <label>Name: </label>
                                    <span id="name">{pet.name}</span>
                                </div>
                                : ''
                        }
                        {
                            pet.desc1
                            ?   <div className="petData">
                                <span id="desc1">{pet.desc1}</span>
                                </div>
                            : ''
                        }
                        {
                            pet.personality.join
                            ?<div className="petData">
                            <label>Personality: </label>
                            <span id="personality">{pet.personality.join(",")}</span>
                            </div>
                            :''
                        }
                        {
                            pet.height
                            ?  <div className="petData">
                            <label>Height: </label>
                            <span id="height">{pet.height}</span>
                            </div>
                            :''
                        }
                        {
                            pet.weight
                            ? <div className="petData">
                            <label>Weight: </label>
                            <span id="weight">{pet.weight}</span>
                            </div>
                            :''
                        }
                       {
                           pet.age
                           ?<div className="petData">
                           <label>Age: </label>
                           <span id="age">{pet.age}</span>
                            </div>
                            :''
                       }
                        {
                            pet.neutered
                            ? <div className="petData">
                            <label>Neutered: </label>
                            <span id="neutered">{pet.neutered}</span>
                            </div>
                            :''
                        }
                       {
                           pet.hypoallergenic
                           ?<div className="petData">
                           <label>Hypoallergenic: </label>
                           <span id="hypoallergenic">{pet.hypoallergenic}</span>
                            </div>
                            :''
                       }
                        {
                            pet.desc2
                            ?<div className="petData">
                            <span id="desc2">{pet.desc2}</span>
                            </div>
                            :''
                        }                        
                    </div>
                </section>
            </section>
        );
    }
}

export default PetCard;