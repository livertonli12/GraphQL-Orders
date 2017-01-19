import {
    GraphQLList,
    GraphQLID,
    GraphQLNonNull
} from 'graphql';

import { Types } from 'mongoose';

import orderType from '../../types/order';
import getProjection from '../../get-projection';
import OrderModel from '../../../models/order';

export default { 
    type: new GraphQLList(orderType),
    args: {},
    resolve (root, params, options) {
        const projection = getProjection(options.fieldASTs[0]);
        return OrderModel.find().select(projection).exec();
    }
};