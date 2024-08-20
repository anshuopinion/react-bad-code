import React from "react";
import DerivedState from "./components/bad/DerivedState";
import DerivedStateFix from "./components/fixed/DerivedStateFix";

const App = () => {
  return (
    <div>
      {/* <IncorrectStateUpdates /> */}
      {/* <IncorrectStateUpdatesFix /> */}
      {/* <LoopStateUpdates /> */}
      {/* <LoopStateUpdatesFix /> */}
      {/* <DirectMutation /> */}
      {/* <DirectMutationFix /> */}
      {/* <UnnecessaryState /> */}
      {/* <UnnecessaryStateFix /> */}
      {/* <AsyncNatureMisuse /> */}
      {/* <AsyncNatureMisuseFix /> */}
      {/* <OverusingState /> */}
      {/* <OverusingStateFix /> */}
      {/* <PropsInitialization initialCount={5} /> */}
      {/* <PropsInitializationFix initialCount={10} /> */}
      {/* <ComplexComputation /> */}
      {/* <ComplexComputationFix /> */}

      <DerivedState />
      {/* <DerivedStateFix /> */}
    </div>
  );
};

export default App;
