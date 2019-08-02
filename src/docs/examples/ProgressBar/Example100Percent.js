import React from "react";
import ProgressBar from "comp/ProgressBar";

/** 100% progress and width height 10px */
export default function Example100Percent() {
  return <ProgressBar percent={100} width={250} height={10} />;
}
