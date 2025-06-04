import React from "react";
import SpecialChallenges from "../../../components/dashbaord/categories/SpecialChallenges";
import Filters from "../../../components/dashbaord/categories/Filters";


const Categories = () => {
  return (
    <div>
      <div className="w-full overflow-hidden">
        <SpecialChallenges />
      </div>
      <div>
        <Filters />
      </div>
    </div>
  );
};

export default Categories;
