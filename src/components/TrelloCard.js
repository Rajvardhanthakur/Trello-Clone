import React from "react";
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent";
import Typhography from "@material-ui/core/Typography";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const CardContainer = styled.div`
   margin-bottom:8px;
`

const TrelloCard = ({text, id, index}) =>{
    return (
      <Draggable draggableId={String(id)} index={index}>
        {(provided) => (
          <CardContainer 
          ref={provided.innerRef} 
          {...provided.draggableProps} 
          {...provided.dragHandleProps}> 
            <Card style={styles.cardContainer}>
              <CardContent>
                <Typhography gutterBottom>{text}</Typhography>
              </CardContent>
            </Card>
          </CardContainer>
        )}
      </Draggable>
    );
}

const styles = {
    cardContainer : {
        marginBottom: 8
    }
}

export default TrelloCard;