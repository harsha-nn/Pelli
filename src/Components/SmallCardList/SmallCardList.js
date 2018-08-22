import React from 'react';
import SmallCard from "../SmallCard/SmallCard";
import  "../../members";

const SmallCardList = ({members}) => {
    return (
        <div>
            {
                members.map((member,i)=>{
                    return <SmallCard 
                            key={i}
                            img={member.img[0]}
                            fname={member.fname}
                            Age={member.Age}
                            />
                })
            }
        </div>
    );
}

export default SmallCardList;