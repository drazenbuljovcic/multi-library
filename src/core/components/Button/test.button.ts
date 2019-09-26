const merge = <T = {}>(obj1: T, ...obj2: T[]): T => {
  return {
    ...obj1,
    ...obj2.reduce((acc, member) => ({ ...acc, ...member }), {})
  };
};

const DEFAULT_CONFIG_SHAPE = {
  helpers: false,
  runtime: false
};

const useUtils = ({ config = DEFAULT_CONFIG_SHAPE } = {}) => {
  let internalConfig = merge(DEFAULT_CONFIG_SHAPE, config);

  const { helpers } = internalConfig;
  const { runtime } = internalConfig;

  let internalHelpers;

  console.group("useUtils starts..!");
  const makeSideEffect = () => {
    console.info("Sideeffecting!");
  };

  const getHelpers = input => {
    console.info("Getting helpers!");
    if (!helpers) {
      internalHelpers = input;
      return internalHelpers;
    }
    return internalHelpers;
  };

  const getRuntime = () => {
    console.info("Getting runtime!");
    makeSideEffect();
    if (!runtime) return {};

    return runtime;
  };

  console.groupEnd();
  return {
    getHelpers,
    getRuntime
  };
};

const memoInputs = {};
const memo = (input: any) => {
  if (memoInputs[input]) return memoInputs[input];

  return cb => {
    memoInputs[input] = cb(input);
    return memoInputs[input];
  };
};

const init = ({ input }) => {
  const { getHelpers } = useUtils({
    config: {
      helpers: true,
      runtime: true
    }
  });

  const helpers = memo(getHelpers(input));

  return {
    helpers
  };
};

export { init };
