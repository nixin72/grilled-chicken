import React, { Component } from 'react';
import './PetCard.css';

class PetCard extends Component {

    constructor(props){
        super(props);
        // this.state = {
        //     currentPet: undefined,
        // }
    }

    componentDidMount(){
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
                            ? <img src={pet.img} alt="Pet" width="400"/>
                            : <img src='/image/default_pet.jpg'/>
                    }
                </section>

                <section id="petDescription" onLoad={this.hideEmptyFields}>
                    <div>
                        <div className="petData">
                            <label>Name: </label>
                            <span id="name">{this.props.pet.name}</span>
                        </div>
                        <div className="petData">
                            <span id="desc1">{this.props.pet.desc1}</span>
                        </div>
                        <div className="petData">
                            <label>Personality: </label>
                            <span id="personality">{this.props.pet.personality.join(",")}</span>
                        </div>
                        <div className="petData">
                            <label>Height: </label>
                            <span id="height">{this.props.pet.height}</span>
                        </div>
                        <div className="petData">
                            <label>Weight: </label>
                            <span id="weight">{this.props.pet.weight}</span>
                        </div>
                        <div className="petData">
                            <label>Age: </label>
                            <span id="age">{this.props.pet.age}</span>
                        </div>
                        <div className="petData">
                            <label>Neutered: </label>
                            <span id="neutered">{this.props.pet.neutered}</span>
                        </div>
                        <div className="petData">
                            <label>Hypoallergenic: </label>
                            <span id="hypoallergenic">{this.props.pet.hypoallergenic}</span>
                        </div>
                        <div className="petData">
                            <span id="desc2">{this.props.pet.desc2}</span>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}

export default PetCard;