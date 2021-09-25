import React from 'react';
import { JsxElement } from 'typescript';
import {getAPIResource, getAllHeroes, getHeroeByID, getAllComicsOfHero, getSearchedfHeroes} from '../api/api'
import ComicsOfHero from './ComicsOfHero';
import { NavLink } from 'react-router-dom';

const queryString = require('query-string');


class Heroes extends React.Component<any, any> {
    constructor(props:any) {
        super(props) 
        this.state = {
            heroes: [],
            searchInput: "",
        } 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e: any){
        this.setState({searchInput: e.target.value});
    }
    
    handleSubmit(e: any){
        e.preventDefault();
    console.log(this.props);
    let {searchInput} = this.state;
    this.props.history.push(`?query=${searchInput}`);
    }

    componentDidMount() {
        getAllHeroes().then((res) => {
            this.setState({heroes: res.data.data.results})
        })
        
    }

    componentDidUpdate(prevProps: any){
        if (this.props.location !== prevProps.location) {
            console.log(this.props.location.search);
            const wantedHeroName= queryString.parse(this.props.location.search).query;
            console.log(wantedHeroName);
            if (wantedHeroName) {
                getSearchedfHeroes('characters', wantedHeroName).then( res => {
                    const heroesList = res.data.data.results;
                   if(heroesList[0]) {this.setState({heroes: heroesList})}
                   else {alert ("Sorry, nothing was found. Please double-check spelling or try again.")}
                        
                })  
            } else {alert ("Sorry. It seems that no searching parameter was inserted.")}
        }
    
    }

    render() {
        const {heroes} = this.state;
        return (
                <div>
                    <form onSubmit={this.handleSubmit}>    
                        <input type="text" name="query" placeholder="Search a hero" onChange={this.handleChange} />
                        <button type='submit'> Search </button>
                    </form>
                    <h1> 
                        Hello superheroes!
                    </h1>
                    <div>
                    {
                    heroes.length ? heroes.map((hero:any) => (
                        <div> 
                    <div key={hero.id}> {hero.name} has ID: {hero.id} </div>
                    <div>
                <NavLink to={`/comics/${hero.id}`}>
                     See more 
                </NavLink>
            </div>)
                   
                    </div>
                    )
                    ) :
                    null
                    }
                    </div>
                </div>)
    }
}

export default Heroes;