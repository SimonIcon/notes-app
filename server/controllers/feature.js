const featureController = async (req, res) => {
    const locals = {
        title: "features",
        description: "symodev notes app"
    }
    res.render("feature", locals)
}
module.exports = featureController