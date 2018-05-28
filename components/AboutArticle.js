import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import React, {Component} from 'react';

//Styled
import {connect} from 'react-redux';

class AboutArticle extends Component {
    addDogToState = () => {
        this.props.dispatch({type:'ADD_PUG'});
    }
    render() {
        console.log(this.props);
        const dogs = this.props.dogs.breeds.map((elem,index)=>{
        return (<p key={index}>{elem}</p>);
        }); 
        const cats = this.props.cats.breeds.map((elem,index)=>{
        return (<p key={index}>{elem}</p>);
        }); 
        
        return (
            <article >
                {console.log(this.props)}

                <h1>About dogs:</h1>
                <button  onClick={this.addDogToState}></button>
                {dogs}
                <h1>About cats:</h1>
                {cats}
                <style jsx>{`
                    article {
                        background:teal;
                        padding:1rem;
                    }
                    button {
                        // background: ${props.isActive ? coral : black};
                    }
                `}</style>
           </article>
        )
    }
}

const mapStateToProps = state => ({
    dogs:state.dogs,
    cats:state.cats
});
export default connect(mapStateToProps) (AboutArticle);