import React from 'react';
import PlansListItem from "./PlansListItem";

// styled


const PlanList = ({plans}) => {

  const elements = plans.map((item) => {
    const {...itemProps} = item;
    return (
        <PlansListItem
          title={itemProps.title}
          desc={itemProps.desc}
          number={itemProps.number}
        />
    )
  });

  return (
    <div>
      {elements}
    </div>
  )
}

export {PlanList};
