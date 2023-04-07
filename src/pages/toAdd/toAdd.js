import React from "react";
import LeftBar from "../../components/LeftBar";
import MainContent from "../../components/MainContent";
import Navbar from "../../components/Navbar";
import ToAddContent from "./components/ToAddContent";
import { useCollection } from "../../hooks/useCollection";

export default function ToAdd() {
  const { documents: projectInfo } = useCollection("fromAddData");

  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-start w-100 h-100">
        <LeftBar />
        <MainContent>
          <ToAddContent projectInfo={projectInfo} />
        </MainContent>
      </div>
    </div>
  );
}
