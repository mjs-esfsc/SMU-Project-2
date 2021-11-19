const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

//test of users route
// router.get('/user/:id', async (req, res) => {
//   try {
//     const projectData = await User.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['full_name'],
//         },
//       ],
//     });
    router.get('/user', async (req, res) => {
      try {
        const projectData = await User.findAll( {
          include: [
            {
              model: User,
              attributes: ['full_name'],
            },
          ],
        });
    const project = projectData.get({ plain: true });

    res.render('users', {
      ...project,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//end test users route

// router.get('/', async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ['password'] },
//       order: [['name', 'ASC']],
//     });

//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render('homepage', {
//       users,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;