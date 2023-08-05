const homeController = (req, res) => {
    const locals = {
        title: "Notes app",
        description: "symodev notes app"
    }
    res.render("index", locals)
}





module.exports = homeController