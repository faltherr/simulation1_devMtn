module.exports = {
    getProduct: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_all_products()
            .then((response) => res.status(200).send(response))
            .catch((err) => {
                res.status(500).send("Could not connect to DB getAll:", err)
            })
    },
    addProduct: (req, res) => {
        console.log(req.body)
        const dbInstance = req.app.get('db')
        let { name, price, imgURL } = req.body
        dbInstance.create_product([name, price, imgURL])
            .then((response) => res.status(200).send(response))
            .catch((err) => {
                res.status(500).send("Could not connect to DB put:", err)
            })
    },
    deleteItem: (req, res) => {
        const dbInstance = req.app.get('db')
        const { id } = req.params
        dbInstance.delete_item(id)
            .then((response) => res.status(200).send(response))
            .catch((err) => {
                res.status(500).send("Could not connect to DB delete:", err)
            })
    }
    //Add next DB connection HERE

}