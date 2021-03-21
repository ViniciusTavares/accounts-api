import Dependencies from './dependency.enum';


class DependencyContainer {
  constructor() {
  }

  get(dependency: Dependencies) {
    // const requestedDependency = this[dependency];

    // if (!requestedDependency) {
    //   throw new Error('invalid dependency request');
    // }

    // return requestedDependency;
  }
}

export default new DependencyContainer();
