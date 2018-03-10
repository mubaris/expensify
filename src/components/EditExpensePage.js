import React from 'react';

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      Expense ID - {props.match.params.id}
    </div>
  );
};

export default EditExpensePage;
