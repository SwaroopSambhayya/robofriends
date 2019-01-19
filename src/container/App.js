import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
//import {robots} from './robots';
import Scroll from '../components/Scroll'
import './App.css';
import {setSearchField,requestrobots} from './action.js'
import {connect} from 'react-redux';
const mapStateToProps=state=>{
    return{
        searchField:state.searchRobots.searchField,
        robots:state.requestrobots.robots,
        error:state.requestrobots.error,
        isPending:state.requestrobots.isPending
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
    onSearchChange:(event)=>dispatch(setSearchField(event.target.value)),
    onRequestRobots:()=>dispatch(requestrobots())
    }
}
 class App extends Component{
    componentDidMount(){
       this.props.onRequestRobots();
        
    }

    render(){
        console.log(this.props.store);
         const  filterrobot=this.props.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        })
        if(this.props.isPending){
            return <h1>Loading...</h1>
        }
        else{
        return(
            <div className="tc">
            <h1 className="f1 tc">ROBO FRIENDS</h1>
            <SearchBox searchChange={this.props.onSearchChange} />
            <Scroll>
                <CardList robots={filterrobot}/>
            </Scroll>
            </div>
        );
    }
    }
    
}
export default connect(mapStateToProps,mapDispatchToProps)(App);