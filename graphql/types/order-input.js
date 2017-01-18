import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'OrderInput',
    fields: {
        _id: { type: new GraphQLNonNull(GraphQLID) },
        OrderNumber: { type: new GraphQLNonNull(GraphQLString) },
        PurchaseDate: { type: new GraphQLNonNull(GraphQLString) },
        Channel: { type: GraphQLString },
        Code: { type: GraphQLString },
        Company: { type: new GraphQLNonNull(GraphQLString) },
        Ip: { type: GraphQLString },
        Status: { type: GraphQLString }, 
        ConsumerBirth: { type: GraphQLString },
        ConsumerEmail: { type: new GraphQLNonNull(GraphQLString) },
        ConsumerName: { type: new GraphQLNonNull(GraphQLString) },
        ConsumerSex: { type: GraphQLString },
        ConsumerCellphone: { type: GraphQLString },
        ConsumerPhone: { type: GraphQLString },
        ConsumerMotherName: { type: GraphQLString },
        Street: { type: new GraphQLNonNull(GraphQLString) },
        City: { type: new GraphQLNonNull(GraphQLString) },
        StateRegion: { type: new GraphQLNonNull(GraphQLString) },
        PostalCode: { type: new GraphQLNonNull(GraphQLString) },
        Country: { type: new GraphQLNonNull(GraphQLString) }    
    }
});