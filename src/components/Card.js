import React, {Component} from 'react';

export default class Card extends Component{

    
    render(){
        if(this.props.name==="Clementine Bauch"){
            return(
                <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
                
                                <img src={`https://robohash.org/${this.props.id}?200x200`} alt="robo"  />
                                <div>
                
                                    <h2>{this.props.name} <i>(The robo King)</i></h2>
                                    <p>{this.props.email}</p>
                                </div>
                            </div>
            );
        }
        else{
        return(
        

            <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">

                <img src={`https://robohash.org/${this.props.id}?200x200`} alt="robo"  />
                <div>

                    <h2>{this.props.name}</h2>
                    <p>{this.props.email}</p>
                </div>
            </div>
            
        );
    }
            }    
}