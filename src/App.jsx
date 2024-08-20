import React from "react";
import IncorrectStateUpdates from "./components/bad/IncorrectStateUpdates";

const App = () => {
  return (
    <div>
      <IncorrectStateUpdates />
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
      {/* <PropsInitializationFix initialCount={5} /> */}
      {/* <ComplexComputation /> */}
      {/* <ComplexComputationFix /> */}
      {/* <NonFunctionalUpdates /> */}
      {/* <NonFunctionalUpdatesFix /> */}
      {/* <DerivedState /> */}
      {/* <DerivedStateFix /> */}
    </div>
  );
};

export default App;
