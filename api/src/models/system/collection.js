import { glob } from 'glob';

let db = {};

export const register_models = async () => {
    // dynamically load all models
    let files = await glob('/opt/src/api/src/models/*.js');

    for (const file of files) {
        let model = (await import(`${file}`)).default;
        let name = /([a-z_]+)\.js/.exec(file)[1];

        db[name] = model;
    }

    for (const model_name in db) {
        db[model_name].bulk_create = db[model_name].bulkCreate;
        db[model_name].find_one = db[model_name].findOne;
        db[model_name].find_all = db[model_name].findAll;
        db[model_name].find_or_create = db[model_name].findOrCreate;
        db[model_name].find_and_count_all = db[model_name].findAndCountAll;
        db[model_name].belongs_to = db[model_name].belongsTo;
        db[model_name].has_one = db[model_name].hasOne;
        db[model_name].has_many = db[model_name].hasMany;
        db[model_name].belongs_to_many = db[model_name].belongsToMany;

        db[model_name].associate && db[model_name].associate(db);
    }
};

export default db;
