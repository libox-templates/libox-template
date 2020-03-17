interface Filters {
  [key: string]: (str: string) => any;
};

const update = (projectRoot: string, { filters }: { filters: Filters }) => {
  console.log(projectRoot, filters);
};

export default update;
