import React, { Component } from 'react';
import './Search.css';

export class Card extends Component {
    render() {
        return (
            <section id="pet_card">
                <section id="petImage">
                    <img 
                        src="https://pbs.twimg.com/profile_images/962170088941019136/lgpCD8X4_400x400.jpg" 
                        alt="Pet Image"/>
                </section>

                <section id="petDescription">
                    <div>
                        <div>
                            <label>Name: </label>
                            <span id="pet_name"></span>
                        </div>
                        <div>
                            <label>Age: </label>
                            <span id="page_age"></span>
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

        this.showHideFacets = this.showHideFacets.bind(this);
    }

    showHideFacets() {
        function isVisible(e) {
            return !!( e.offsetWidth || e.offsetHeight || e.getClientRects().length );
        }

        let form = document.querySelector("#searchForm");
        form.style.display = isVisible(form) ? "none" : "block";
    }

    render() {
        return (
            <section>
                <button className="dropDownButton" onClick={this.showHideFacets}>
                    <hr width="1" size="10" />
                    <hr width="1" size="10" />
                    <hr width="1" size="10" />
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
                                <label>Minimum age: </label>
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
                                <label>hypoallergenic: </label>
                            </div>
                            <div>
                                <input type="checkbox" name="hypoallergenic" value="Hypo-Allergenic" />
                            </div>
                        </div>
                    </form>
                </section>   
                          
                <div class="flex">
                    <img src={'/image/arrowprev.png'} height="50"/>
                    <Card />
                    <img src={'./image/arrownext.png'} height="50"/>
                </div>
                
            </section>
        );
    }
}

export default Search;