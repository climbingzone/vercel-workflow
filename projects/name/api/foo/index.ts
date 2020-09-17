import { NowRequest, NowResponse } from '@vercel/node';
import { boo, fooString } from '../../../../shared/boo';

export default (_: NowRequest, res: NowResponse) => {
  res.status(200).send({ boo, fooString });
};
