import { NowRequest, NowResponse } from '@vercel/node';
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from 'unique-names-generator';

export default (_: NowRequest, res: NowResponse) => {
  const name = uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals],
  });

  res.status(200).send(name);
};
