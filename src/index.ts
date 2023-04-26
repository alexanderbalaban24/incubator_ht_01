import {config} from "dotenv";
import {app} from "./setting";

config();

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}...`);
});

