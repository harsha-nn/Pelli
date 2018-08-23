import React from 'react';
// import {Card, CardMedia, CardContent, CardActions, Button, Typography} from '@material-ui/core';

// #region  materialCard
// const styles = {
//     card: {
//       maxWidth: 345,
//     },
//     media: {
//       height: 0,
//       paddingTop: '56.25%', // 16:9
//     },
//   };

// const SmallCard = (porps) => {
//     // const {classes} = props;
//     return (
//         <div>
//         <Card className="grow shadow-5 w-50">
//         <CardMedia 
//           image="http://www.nafpaktia.com/data/wallpapers/73/978303.jpg"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="headline" component="h2">
//             Lizard
//           </Typography>
//           <Typography component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
//         </CardContent>
//             <CardActions>
//                 <Button size="small" color="primary">
//                     Share
//                 </Button>
//                 <Button size="small" color="primary">
//                     Learn More
//                 </Button>
//             </CardActions>
//          </Card>
//         </div>
//     );
// }
//#endregion

const SmallCard = (props) =>{
    return (
        <div className="tc grow bg-light-maroon br3 pa3 ma2 dib bw2 shadow-5'" >
            <img src={props.img} alt="img" />
            <p>Name: {props.fname} </p>
            <p> Age: {props.Age} </p>
        </div>
    );
}
export default SmallCard;