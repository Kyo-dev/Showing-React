import dotenv from 'dotenv';
dotenv.config();
import app from './config/app'
import "./config/database";

async function main(){
    app.listen(app.get('port'), () =>{
        console.log(`Server on port ${app.get('port')}`)
    })   
}
main();
