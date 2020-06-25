import { Chef } from "#root/db/models";

const singleChefResolver = (context: any, { id }: { id: number }) => {
  return Chef.findOne({
    where: { id },
  });
};
export default singleChefResolver;
