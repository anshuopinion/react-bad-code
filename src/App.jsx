import React from "react";
import AsyncNatureMisuse from "./components/bad/AsyncNatureMisuse";
import AsyncNatureMisuseFix from "./components/fixed/AsyncNatureMisuseFix";

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
      <AsyncNatureMisuse />
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
