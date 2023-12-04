import React from 'react';

const Filters = ({ onFilter }) => {
  return (
    <form>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          onChange={(e) => onFilter({ filterText: e.target.value })}
        />
      </div>
    </form>
  );
};

export default Filters;
