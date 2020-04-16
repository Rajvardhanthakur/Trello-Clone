import React from "react";
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typhography from "@material-ui/core/Typography"

const TrelloCard = ({text}) =>{
    return (
      <Card style={styles.cardContainer}>
        <CardContent>
          <Typhography gutterBottom>{text}</Typhography>
        </CardContent>
      </Card>
    );
}

const styles = {
    cardContainer : {
        marginBottom: 8
    }
}

export default TrelloCard;