const connection = require('../database/connection'); 

module.exports = {
    async create(resquest, response) {
        const {id} = request.body;
        const ong_name = await connection('ongs').where('id', id).select('name').first();
        if (!ong_name) {
            return response.status(400).json({error: 'Nao achei esta ONG!'});
        }
        return response.json(ong_id);
    }

} 