import mariadb, {createPool} from 'mariadb';
import mysql from 'mysql2';
import { DataSource } from 'typeorm';
import { EnterpriseSchema } from '../../types/enterprise/enterprise-schema';
import { UserSchema } from '../../types/user/user-schema';
import { VideoSchema } from '../../types/video/video-schema';

export interface InitMariadbOptions {
    mariadbUrl?: string;
}

const { MARIADB_NAME, MARIADB_PORT, MARIADB_USER, MARIADB_PASSWORD } = process.env;

export const initMariaDb = async () : Promise<void> => {
    try{
        const config = {
            host: 'apprilive-database-db00008688.mdb0002418.db1.skysql.net',
            user: MARIADB_USER || '',
            port: Number(MARIADB_PORT) || 5001,
            password: MARIADB_PASSWORD || "",
            database: MARIADB_NAME || '',
            name: MARIADB_NAME || '',
            connectionLimit: 100
        }

        const AppDataSource = new DataSource({
            type: 'mysql',
            host: 'us-east.connect.psdb.cloud',
            port: 3306,
            username:'dkn9xrprdkamw6wepkwt',
            password: 'pscale_pw_vciHwJXQpP5cgNaBwWYtMrrxNLkSMrCqKMLsyg4nexR',
            database: 'aprilive-database',
            entities: [UserSchema],
            synchronize: true,
            ssl: {
                rejectUnauthorized: true, 
            }
        })

        await AppDataSource.initialize().then(() => {
            console.log('Database initialized')
        }).catch((err) => console.log(err));
        // const connection = mysql.createConnection(`mysql://dkn9xrprdkamw6wepkwt:pscale_pw_vciHwJXQpP5cgNaBwWYtMrrxNLkSMrCqKMLsyg4nexR@us-east.connect.psdb.cloud/aprilive-database?ssl={"rejectUnauthorized":true}`)
        // await mariadb.createConnection(`mariadb://${MARIADB_USER}:${MARIADB_PASSWORD}@apprilive-database-db00008688.mdb0002418.db1.skysql.net:5001/aprilive-database`)
        // await mariadb.createPool(config);
        // connection.end();
    }catch(error){
        console.info('Mariadb connection error', error)
    }
}