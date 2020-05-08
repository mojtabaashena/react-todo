import React, { Component } from 'react'
import { observer } from 'mobx-react';

@observer
class Todoitem extends Component {

    state = {
        isHovering: false,
      };
      
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
          isHovering: false,
        };
      }
    
      handleMouseHover() {
        this.setState(this.toggleHoverState);
      }
    
      toggleHoverState(state) {
        return {
          isHovering: !state.isHovering,
        };
    }
    
    onToggle(){
        this.props.todo.toggle()
    }

    OnRemove(){
        this.props.todo.remove()
    }

    render() {
       
        return (
            
            <li id={this.props.id} className="ui-state-default" onMouseEnter={this.handleMouseHover}  onMouseLeave={this.handleMouseHover}>
                <div className="checkbo" >
                    <label>
                        <input type="checkbox" value="" style={{ textDecoration : 'line-through', color: "red"}} checked={this.props.completed} onChange={()=> this.onToggle()}/> {this.props.titel}</label>

                        {
          this.state.isHovering &&
          <button className="pull-right"  onClick={()=> this.OnRemove()} >x</button>
        }
                        
                </div>
                
            </li> 
        )
            
    }
}

export default Todoitem