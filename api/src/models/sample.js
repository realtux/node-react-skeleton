import connection from '#api/models/system/connection.js';
import { DateTime } from 'luxon';
import { DataTypes, Model } from 'sequelize';

class Sample extends Model { }

Sample.init(
    {
        sample_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        created_at: DataTypes.DATE,
    },
    {
        sequelize: connection,
        modelName: 'sample',
        freezeTableName: true,
        hooks: {
            beforeCreate(instance) {
                instance.created_at = DateTime.now().toISO();
            }
        }
    }
);

export default Sample;
