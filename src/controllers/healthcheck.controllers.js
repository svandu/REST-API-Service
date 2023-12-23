function healthCheck(req, res) {
    res.status(200).json({
        message: "yes it is working"
    })
}

module.exports = healthCheck