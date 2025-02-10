import { User } from '../mongoose/schemas/user.mjs';
import passport from 'passport';
import jwt from "jsonwebtoken";
import { Strategy, ExtractJwt  } from 'passport-jwt'


const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "d45ce50d12db9a0be0d5a42993740de1f09858812409eabf542ea7d90e5ca27ca98d13a776db878fc76563e8bcd6a4d812c1d146b9dca7ed45dab9f347858c76",
};

export default passport.use(
  new Strategy(opts, async (payload, done) => {
    try {
      const user = User.findById(payload.id);
      if (user) return done(null, user);
    } catch (error) {
      return done(error ,false);
    }
  })
);

// export default passport.use(new Strategy({
//     secretOrKey: 'd45ce50d12db9a0be0d5a42993740de1f09858812409eabf542ea7d90e5ca27ca98d13a776db878fc76563e8bcd6a4d812c1d146b9dca7ed45dab9f347858c76',  // Secret key for signing JWT
//     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extract JWT from Authorization header
//   }, (jwtPayload, done) => {
//     // Use the JWT payload (which contains user ID) to find the user in your database
//     User.findById(jwtPayload.id, (err, user) => {
//       if (err) return done(err, false);
//       if (!user) return done(null, false);
//       return done(null, user); // Attach user to the request
//     });
//   }));

// const generateJwt = (user) => {
//     const payload = { id: user.id };
//     return jwt.sign(payload, 'd45ce50d12db9a0be0d5a42993740de1f09858812409eabf542ea7d90e5ca27ca98d13a776db878fc76563e8bcd6a4d812c1d146b9dca7ed45dab9f347858c76',
//          { expiresIn: '1h' });
//   };