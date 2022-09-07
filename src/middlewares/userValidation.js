const loginValidation = (req, res, next) => {
    const { displayName, name, password, image } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
    if (email === '' || password === '') {
        return { status: 400, message: 'Some required fields are missing' };
      }
    next();
  };