// import React, { useState, useEffect } from "react";
import "../../assets/css/pagination.css";
function Pagination() {
  return (
    <div className="pagination-container">
      <a href="#">Prev</a>
      <a href="#" className="active">
        1
      </a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
      <a href="#">...</a>
      <a href="#">Next</a>
    </div>
  );
}
export default Pagination;
