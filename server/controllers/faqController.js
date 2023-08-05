const faqController = async (req, res) => {
    const locals = {
        title: "faq notes app",
        description: "symodev notes app"
    }
    res.render("faq", locals)
}

module.exports = faqController;