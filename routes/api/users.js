import { Router } from 'express';
const router = Router();

import { find, findById } from '../../models/user';

//@route GET api/groups
//@desc GET all groups
//@access Public
router.get('/', (req, res) => {
    find()
        .sort({ created: -1 })
        .then(users => res.json({
           success: true,
           users: users 
        }))
        .catch(err => res.json({ success: true, error: err.message }));
});

//@route DELETE api/users
//@desc Delete a User
//@access Public
router.delete('/:id', (req, res) => {
    findById(req.params.id)
        .then(user => user.remove().then(() => res.json({ success: true }))
        .catch(err => res.status(404).json({ success: false, error: err.message })));
});

export default router;