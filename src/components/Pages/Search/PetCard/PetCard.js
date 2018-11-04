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
                            ? <img src={pet.img} alt="Pet" width="300" />
                            : <img src='/image/default_pet.jpg' width="300px" height="205px"/>
                    }
                </section>

                <section id="petDescription" onLoad={this.hideEmptyFields}>
                    <div>
                        {
                            pet.name
                                ? <div className="petData">
                                    <label><h3>Name:</h3></label>
                                    <span id="name">{pet.name}</span>
                                </div>
                                : ''
                        }
                        {
                            pet.desc1
                            ?   <div className="petData angle-text">
                                <span id="desc1">{pet.desc1}</span>
                                </div>
                            : ''
                        }
                        {
                            pet.personality.join
                            ?<div className="petData bold-text">
                            <label>Personality: </label>
                            <span id="personality">{pet.personality.join(",")}</span>
                            </div>
                            :''
                        }
                        {
                            pet.height
                            ?  <div className="petData bold-text">
                            <label>Height: </label>
                            <span id="height">{pet.height}</span>
                            </div>
                            :''
                        }
                        {
                            pet.weight
                            ? <div className="petData bold-text">
                            <label>Weight: </label>
                            <span id="weight">{pet.weight}</span>
                            </div>
                            :''
                        }
                       {
                           pet.age
                           ?<div className="petData bold-text">
                           <label>Age: </label>
                           <span id="age">{pet.age}</span>
                            </div>
                            :''
                       }
                        {
                            pet.neutered
                            ? <div className="petData bold-text">
                            <label>Neutered: </label>
                            <span id="neutered">{pet.neutered}</span>
                            </div>
                            :''
                        }
                       {
                           pet.hypoallergenic
                           ?<div className="petData bold-text">
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