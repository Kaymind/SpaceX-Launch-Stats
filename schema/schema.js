const axios = require('axios');

const { 
    GraphQLObjectType, 
    GraphQLString,
    GraphQLInt, 
    GraphQLBoolean,
    GraphQLList,
    GraphQLSchema } 
    = require('graphql');

const LunchType = new GraphQLObjectType({
    name: "Launch",
    fields: () => ({
        flight_number: { type: GraphQLInt },
        mission_name: { type: GraphQLString },
        luanch_year: { type: GraphQLString },
        luanch_date_local: { type: GraphQLString },
        luanch_succes: { type: GraphQLBoolean },
        rocket: { type: RocketType },
    })
})

const RocketType = new GraphQLObjectType({
    name: "Rocket",
    fields: () => ({
        id: { type: GraphQLString },
        rocket_name: { type: GraphQLString },
        rocket_type: { type: GraphQLString },
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        launches: {
            type: new GraphQLList(LunchType),
            resolve(parent,args) {
                return axios.get('https://api.spacexdata.com/v3/launches')
                    .then(res => res.data);
            
            }
        },
        launche: {
            type: LunchType,
            args: {
                flight_number: {
                    type: GraphQLInt
                }
            },
            resolve(parent,args){
                return axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
                    .then(res => res.data);
            }
        },
        rockets: {
            type: new GraphQLList(RocketType),
            resolve(parent,args) {
                return axios.get('https://api.spacexdata.com/v3/rockets')
                    .then(res => res.data);
            
            }
        },
        rocket: {
            type: RocketType,
            args: {
                id: { type: GraphQLString }
            },
            resolve(parent,args) {
                return axios.get(`https://api.spacexdata.com/v3/rockets/${args.id}`)
                    .then(res => res.data);
            
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})
