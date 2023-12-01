import packageLoadingSequence from "./package-loading-sequence";
import setup from "./setup";

const { run } = setup();

const update = (elapsedTime) => {
  packageLoadingSequence.run(elapsedTime);
};

run(update);
