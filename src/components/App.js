import React, {Component} from 'react';
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from "./TrelloActionButton";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../actions";


class App extends Component{

  onDragEnd = result =>{
    
    const {destination, source, draggableId} = result;

    if(!destination){
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    )

  }

  render(){
        const { lists } = this.props;

        return (
          <DragDropContext onDragEnd={this.onDragEnd}>
            <div className="App">
              <h1>Chronicles of Hogwarts</h1>
              <div style={styles.listContainer}>
                {lists.map((list) => (
                  <TrelloList
                    listID={list.id}
                    key={list.id}
                    title={list.title}
                    cards={list.cards}
                  />
                ))}
                <TrelloActionButton list />
              </div>
            </div>
          </DragDropContext>
        );
  }
}

const styles = {
  listContainer: {
    display: "flex",
    flexDirection: "row"
  }
}

const mapStateToProps = state => ({
  lists : state.lists
})

export default connect(mapStateToProps)(App);
