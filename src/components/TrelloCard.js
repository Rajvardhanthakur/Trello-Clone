import React from "react";
import Card from "@material-ui/core/Card"
import Typhography from "@material-ui/core/Typography"

const TrelloCard = ({text}) =>{
    return(
        <Card>
            <Typhography gutterBottom>{text}</Typhography>
        </Card>
    )
}

export default TrelloCard;