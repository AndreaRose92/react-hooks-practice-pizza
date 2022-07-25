import React from "react";

function Pizza({topping, size, veggie, handleEditButtonClick}) {
  console.log(topping)
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{veggie}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={handleEditButtonClick}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
