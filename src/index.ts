import express from "express";
import bodyParser from "body-parser";
import sequelize from "./connection";
import { User } from "./models/User";


const port = process.env.PORT || 7000
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));


const init = async() => {
    try {
        sequelize.sync({ alter: true });
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
 init();

app.post("/send",async (req, res)=>{
  const firstName = req.body.firstName;
  const middleName = req.body.middleName;
  const lastName = req.body.lastName;
  const email = req.body.email;
   try {
   const  isData = await User.create({
          firstName,
          middleName,
          lastName,
          email
       })

       return res.status(200).json(isData);
   } catch (error) {
     return  res.status(404).json({ error: error})
   }
})


app.listen(port, ()=> {
  console.log(`info: server running ${port}`);
});
