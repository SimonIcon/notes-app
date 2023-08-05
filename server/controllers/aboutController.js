const aboutController = async (req, res) => {
    const locals = {
        title: "about notes app",
        description: "symodev notes app"
    }
    res.render("about", locals)
}

module.exports = { aboutController }