const {Markdown} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const Markdowns = await Markdown.findAll({
        limit: 10
      })
      res.send(Markdowns)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error : 'something went wrong when you try to fetch all the Markdown'
      })
    }
  },
  async post (req, res) {
    try {
      const markdown = await Markdown.create(req.body)
      res.send(markdown)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error : 'something went wrong when you try to post a markdown'
      })
    }
  },
  async show (req, res) {
    try {
      const markdown = await Markdown.findById(req.params.markdownId)
      res.send(markdown)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error : 'something went wrong when you want to get a markdown by your markdownId'
      })
    }
  }
}