"use client";
import { ibmPlexSerif } from "@/app/fonts";
import Image from "next/image";
import CohortDisplay from "@/components/shared/CohortDisplay";
import CohortCreationModal from "@/components/shared/CohortCreationModal";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import { addCohort } from "@/app/store/cohortsSlice";
import { DataItem } from "@/app/store/cohortsSlice"; // Import DataItem from your Redux slice

const CohortsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cohorts = useSelector((state: RootState) => state.cohorts.cohorts);
  const [showCohortForm, setShowCohortForm] = useState(false);
  const handleSubmit = (cohortData: DataItem) => {
    dispatch(addCohort(cohortData));
    setShowCohortForm(false);
  };

  return (
    <main className={"w-full pt-3 px-10 "}>
      <h1 className={`${ibmPlexSerif.className} text-enumGray2  text-2xl `}>
        Cohorts
      </h1>

      {!cohorts.length ? (
        <div
          className={
            " grid place-items-center justify-center items-center mt-24 "
          }
        >
          <Image
            src={"/empty_space.svg"}
            alt={"Empty space illustration"}
            width={170.848}
            height={143.549}
          />
          <h1 className="text-center font-dmSans font-bold align-baseline text-enumDarkblue1 text-18px">
            Empty Space
          </h1>
          <p
            className={
              "w-[442px] text-center text-enumGrey  text-base leading-7 font-medium"
            }
          >
            No cohort has been created yet, let's get you started by clicking
            the button below
          </p>
          <button
            className={"bg-enumBlue px-6 py-3 rounded-[8px] m-4"}
            onClick={() => setShowCohortForm(true)}
          >
            <span className="text-white">Create Cohort</span>
          </button>
        </div>
      ) : (
        <CohortDisplay cohorts={cohorts} />
      )}

      {showCohortForm && (
        <CohortCreationModal
          setShowCohortForm={setShowCohortForm}
          handleSubmit={handleSubmit}
          // name="" // Pass empty initial values
        />
      )}
    </main>
  );
};

export default CohortsPage;


