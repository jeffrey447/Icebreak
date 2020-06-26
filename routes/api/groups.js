const Router = require('express');
const router = Router();

const googleAuth = require('../../middleware/gpassport');
// Located the models
const Group = require('../../models/groups');

//@route GET api/groups
//@desc GET all groups
//@access Public
router.get('/', googleAuth.isUserAuthenticated,  (req, res) => {
    Group.find().sort({ created: -1 })
        .then(groups => res.json({
            success: true,
            groups: groups
        }))
        .catch(err => res.status(404).json({ success: false, error: err.message }));
});

//@route GET api/groups
//@desc GET group
//@access Public
router.get('/:handler', (req, res) => {
    Group.find({ handler: `${req.params.handler}` })
        .then(group => res.json({
            success: true,
            groups: group
        }))
});

//@route POST api/groups
//@desc Create a Post
//@access Public
router.post('/', (req, res) => {
    const newGroup = new Group({
        name: req.body.name,
        handler: req.body.handler,
        description: req.body.description
    })

    newGroup.save()
        .then(group => res.json({
            success: true,
            groups: group
        }))
        .catch(err => res.status(404).json({ success: false, error: err.message }));
});

//@route DELETE api/groups
//@desc Delete a POST
//@access Private
router.delete('/:id', (req, res) => {
    Group.find({ handler: `${req.params.handler}`})
        .then(group =>
            group.remove()
            .then(res.json({
                success: true,
                groups: group
            }))
        .catch(err => res.status(404).json({ success: false, error: err.message }))
    );
});

module.exports = router;