'use-strict';

const Dev = require('../models/Dev');

module.exports = {
    async index(request, response) {
        const { latitude, longitude, techs } = request.query;

        const techsArray = techs.split(',').map(tech => tech.trim())
        
        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 100000,
                },
            },
        });

        return response.json({ devs });
    }
}