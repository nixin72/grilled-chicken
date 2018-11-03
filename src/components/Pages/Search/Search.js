import React, { Component } from 'react';
import './Search.css';

class Card extends Component {
    render() {
        return (
            <div>
                <section id="petImage">
                    <img 
                        src="https://pbs.twimg.com/profile_images/962170088941019136/lgpCD8X4_400x400.jpg" 
                        alt="Pet Image"/>
                </section>

                <section id="petDescription">
                    <div>
                        <label>Name: </label>
                        <span id="pet_name"></span>
                    </div>
                    <div>
                        
                    </div>
                </section>
            </div>
        );
    }
}

class Search extends Component {
    render() {
        return (
            <div className="Search">
                <form>
                    <input type="text" name="breed" />

                    <input type="checkbox" name="size_s" />
                    <input type="checkbox" name="size_m" />
                    <input type="checkbox" name="size_l" />

                    <input type="number" name="min_age" />
                    <input type="checkbox" name="sex_m" value="Male" />
                    <input type="checkbox" name="sex_f" value="Female"  />
                    <input type="checkbox" name="neutered" value="Spayed/Neutered" />
                    <input type="checkbox" name="hypoallergenic" value="Hypo-Allergenic" />
                </form>

                <Card />
            </div>
        );
    }
}

export default Search;
