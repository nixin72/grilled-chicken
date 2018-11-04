import React, {Component} from 'react';
import './Search.css';
import pets from "./pets.js";
import DbContext from './../../../store/db-context';
import Modal from 'react-modal';
import {Redirect} from 'react-router-dom';

import PetCard from './PetCard/PetCard';


class Search extends Component {

    static contextType = DbContext;

    constructor(props) {
        super(props);

        this.state = {
            currentPet: undefined,
            currentIndex: 0,
            modalIsOpen: false
        };

            this.showHideFacets = this.showHideFacets.bind(this);
            this.getNextPet = this.getNextPet.bind(this);
            this.getPrevPet = this.getPrevPet.bind(this);
            this.openModal = this.openModal.bind(this);
            this.closeModal = this.closeModal.bind(this);
            this.filterResults = this.filterResults.bind(this);
        }

        openModal() {
            this.setState({modalIsOpen: true});
        }

        closeModal() {
            this.setState({modalIsOpen: false});
        }

    componentDidMount(){
        this.setState({
            currentPet: this.context.animalPropositionsDb[this.state.currentIndex],
        });
    }

    showHideFacets() {
        function isVisible(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }

        let form = document.querySelector("#searchForm");
        form.style.display = isVisible(form) ? "none" : "block";
    }

    getNextPet() {
        const {currentIndex} = this.state;
        const pets = this.context.animalPropositionsDb;
        let nextIndex = pets.length-1 > currentIndex ? currentIndex + 1 : 0;
        this.setState({
            currentPet: pets[nextIndex],
            currentIndex: nextIndex,
        });
    }

    getPrevPet() {
        const {currentIndex} = this.state;
        const pets = this.context.animalPropositionsDb;
        let prevIndex = currentIndex !== 0 ? currentIndex - 1 : pets.length-1;
        this.setState({
            currentPet: pets[prevIndex],
            currentIndex: prevIndex,
        });
    }

    filterResults() {
        let facets = new FormData(document.querySelector('form'));
        console.log(facets);
    }

    render() {
        return (
            <section id="searchPage" className="flex">
                <div>
                    <button className="dropDownButton" onClick={this.showHideFacets}>
                        Filter
                    </button>

                    <section id="searchForm">
                        <form>
                            <div className="facet">
                                <div>
                                    <label>Breed: </label>
                                </div>
                                <div>
                                    <input type="text" name="breed"/>
                                </div>
                            </div>

                            <br/>

                            <div className="form_section">
                                <span>Size</span><br/>
                                <div className="facet">
                                    <div>
                                        <label>Small: </label><br/>
                                        <label>Medium: </label><br/>
                                        <label>Large: </label><br/>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="size_s"/><br/>
                                        <input type="checkbox" name="size_m"/><br/>
                                        <input type="checkbox" name="size_l"/><br/>
                                    </div>
                                </div>
                            </div>

                            <br/>

                            <div className="facet">
                                <div>
                                    <label>Minimum age: </label><br/>
                                    <label>Maximum age: </label>
                                </div>
                                <div>
                                    <input type="number" name="min_age" min="0" max="30"/><br/>
                                    <input type="number" name="max_age" min="0" max="30"/>
                                </div>
                            </div>

                            <br/>

                            <div className="form_section">
                                <span>Sex</span><br/>
                                <div className="facet">
                                    <div>
                                        <label>Male: </label><br/>
                                        <label>Female: </label>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="sex_m" value="Male"/><br/>
                                        <input type="checkbox" name="sex_f" value="Female"/>
                                    </div>
                                </div>
                            </div>

                            <br/>

                            <div className="facet">
                                <div>
                                    <label>Spayed/Neutered: </label>
                                </div>
                                <div>
                                    <input type="checkbox" name="neutered"/>
                                </div>
                            </div>

                            <br/>

                            <div className="facet">
                                <div>
                                    <label>hypoallergenic:</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="hypoallergenic" value="Hypo-Allergenic"/>
                                </div>
                            </div>
                        </form>
                        <input type="button" value="Apply Filter" onClick={this.filterResults} />
                    </section>
                </div>

                <div id="pet_display" className="flex">
                    <img src={'/image/arrowprev.png'} height="50" onClick={this.getPrevPet} alt="Previous Pet"/>
                    <div>
                        { this.state.currentPet
                                ?
                                <PetCard pet={this.state.currentPet}/>
                                :
                                ''
                        }
                        <br/>
                        <div className="flex" id="vote">
                            <img src={'/image/upvote.png'} alt="Like button" height="50"/>
                            <img src={'/image/downvote.png'} alt="Dislike button" height="50"/>
                        </div>
                    </div>
                    <img src={'/image/arrownext.png'} height="50" onClick={this.getNextPet} alt="Next Pet"/>
                </div>
                <Modal
                    className="modalBox"
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                >
                    <form action="https://formspree.io/phdumaresq@gmail.com"
                          method="POST"
                          className="formspreeForm"
                    >
                        <input type="hidden" name="_next" value={<Redirect to="/"/>}></input>
                        <input
                            name="name"
                            type="text"
                            placeholder="Name"
                            className="nameInput"
                            required={true}
                            value={this.state.name}
                            onChange={this.handleInputChange}/>
                        <input
                            name="_replyto"
                            type="email"
                            placeholder="Email"
                            className="emailInput"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            required={true}
                        />
                        <textarea placeholder="I'm interested in your pet..."
                                  name="textbox"
                                  className="foundMatch"
                                  value={this.state.textbox}
                                  onChange={this.handleInputChange}
                                  required={true}
                        />
                        <input type="submit" value= "Send"/>
                        <input type="submit" value="Close" onClick={this.closeModal}/>
                    </form>
                </Modal>
            </section>
        );
    }
}


export default Search;