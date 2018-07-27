module.exports = {
    getProduct: (req, res) => {
        const dbInstance = req.app.get('db');
        console.log("dbInstance", dbInstance)
        dbInstance.get_all_products()
        .then((response)=> res.status(200).send(response))
        .catch((err)=>{
            res.status(500).send("Could not connect to DB getAll:", err)
        })
    }
    //Add next DB connection HERE

}