import React, { Component } from 'react';
import './Search.css';
import pets from "./pets.js";
console.log(pets);

export class Card extends Component {
    render() {
        return (
            <section id="pet_card">
                <section id="petImage">
                    <img 
                        src={this.props.pet.img} 
                        alt="Pet"/>
                </section>

                <section id="petDescription">
                    <div>
                        <div>
                            <label>Name: </label>
                            <span id="pet_name">{this.props.pet.name}</span>
                        </div>
                        <div>
                            <label>Age: </label>
                            <span id="page_age">{this.props.pet.age}</span>
                        </div>
                    </div>
                    <div>

                    </div>
                </section>
            </section>
        );
    }
}

class Search extends Component {
    constructor(props) {
        super(props);

        this.currentIndex = 0;
        this.currentPet = pets[this.currentIndex];

        this.petComponent = <Card pet={this.currentPet} />;

        this.showHideFacets = this.showHideFacets.bind(this);
        this.getNextPet = this.getNextPet.bind(this);
        this.getPrevPet = this.getPrevPet.bind(this);
    }

    showHideFacets() {
        function isVisible(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }

        let form = document.querySelector("#searchForm");
        form.style.display = isVisible(form) ? "none" : "block";
    }

    getNextPet() {
        console.log(this.currentPet);
        if (this.currentIndex == pets.length-1) {
            this.currentIndex = 0;
        }
        else {
            this.currentIndex++;
        }

        this.currentPet = pets[this.currentIndex];
        this.petComponent = <Card pet={this.currentPet} />;
        this.render();
    }

    getPrevPet() {
        console.log(this.currentPet);
        if (this.currentIndex == 0) {
            this.currentIndex = pets.length-1;
        }
        else {
            this.currentIndex--;
        }

        this.currentPet = pets[this.currentIndex];
        this.petComponent = <Card pet={this.currentPet} />;
        this.render();
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
                                    <input type="text" name="breed" />
                                </div>
                            </div>
                            
                            <br />

                            <div className="form_section">
                                <span>Size</span><br />
                                <div className="facet" >
                                    <div>
                                        <label>Small: </label><br />
                                        <label>Medium: </label><br />
                                        <label>Large: </label><br />
                                    </div>
                                    <div>
                                        <input type="checkbox" name="size_s" /><br />
                                        <input type="checkbox" name="size_m" /><br />
                                        <input type="checkbox" name="size_l" /><br />
                                    </div>    
                                </div>
                            </div>
                            
                            <br />

                            <div className="facet">
                                <div>
                                    <label>Minimum age: </label><br />
                                    <label>Maximum age: </label>
                                </div>
                                <div>
                                    <input type="number" name="min_age" min="0" max="30"/><br />
                                    <input type="number" name="max_age" min="0" max="30"/>
                                </div>
                            </div>
                            
                            <br />

                            <div className="form_section">
                                <span>Sex</span><br />
                                <div className="facet">
                                    <div>
                                        <label>Male: </label><br />
                                        <label>Female: </label>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="sex_m" value="Male" /><br />
                                        <input type="checkbox" name="sex_f" value="Female"  />
                                    </div>
                                </div>
                            </div>
                            
                            <br />

                            <div className="facet">
                                <div>
                                    <label>Spayed/Neutered: </label>
                                </div>
                                <div>
                                    <input type="checkbox" name="neutered" />
                                </div>
                            </div>

                            <br />

                            <div className="facet">
                                <div>
                                    <label>hypoallergenic:</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="hypoallergenic" value="Hypo-Allergenic" />
                                </div>
                            </div>
                        </form>
                    </section>   
                    <section>
                        
                    </section>  
                </div>

                <div id="pet_display" className="flex">
                    <img src={'/image/arrowprev.png'} height="50" onClick={this.getPrevPet} alt="Previous Pet" />
                    <div>
                        {this.petComponent}
                        <br />
                        <div className="flex" id="vote">
                            <img src={'/image/upvote.png'} alt="Like button" height="50"/>
                            <img src={'/image/downvote.png'} alt="Dislike button" height="50" />
                        </div>
                    </div>
                    <img src={'/image/arrownext.png'} height="50" onClick={this.getNextPet} alt="Next Pet" />
                </div>
            </section>
        );
    }
}

export default Search;