const router = require("express").Router();
const Message = require("../models/Message");
//add
router.post("/",async (req, res) => {
    const newMsg = new Message(
        req.body
    )

    try {
        const saveMsg = await newMsg.save()
        res.status(200).json(saveMsg)

    } catch (error) {
        res.status(500).json(error)
    }
})
// get
router.get("/:conversationId",async (req, res) => {
    try {
        const msgs = await Message.find(
            {
                conversationId:req.params.conversationId
            }
        )
        res.status(200).json(msgs)

    } catch (error) {
        res.status(500).json(error)
    }
  


})


module.exports = router;