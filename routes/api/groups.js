import { Router } from 'express';
const router = Router();

// Located the models
import Group, { find } from '../../models/groups';

//@route GET api/groups
//@desc GET all groups
//@access Public
router.get('/', (req, res) => {
    find().sort({ created: -1 })
        .then(group => res.json({
            success: true,
            groups: groups
        }))
        .catch(err => res.status(404).json({ success: false, error: err.message }));
});

//@route POST api/groups
//@desc Create a Post
//@access Public
router.post('/', (req, res) => {
    const newGroup = new Group({
        name: req.body.name,
        description: req.body.description
    })

    newGroup.save()
        .then(group => res.json({
            success: true,
            group: group
        }))
        .catch(err => res.status(404).json({ success: false, error: err.message }));
});

//@route DELETE api/groups
//@desc Delete a POST
//@access Public
router.delete('/:id', (req, res) => {
    groups.findById(req.params.id)
        .then(group => res.json({
            success: true,
            group: group
        }))
        .catch(err => res.status(404).json({ success: false, error: err.message }));
});

export default router; 