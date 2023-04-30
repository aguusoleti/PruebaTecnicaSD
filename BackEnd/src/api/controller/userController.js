import User from "../models/user.js";
import generarJWT from "../helpers/generarJWT.js";
// import generarId from "../helpers/generarId.js";

const registrarUsuario = async (req, res) => {
    const {email} = req.body;
    const existeUsuario = await User.findOne({ email });
  
   
      if (existeUsuario) {
        const error = new Error("Usuario ya resgistrado");
        return res.status(400).json({ msg: error.message });
      }
  
      try {
        const usuario = new User(req.body);
        const usuarioGuardado = await usuario.save();
        res.json(usuarioGuardado);
      } catch (error) {
        console.log(error);
      }
    }
const login = async (req, res) => {
    const { email, password } = req.body;
    const usuario = await User.findOne({ email });

    if (usuario) {
        if (password == usuario.password) {
            return res.json({
                token: generarJWT(usuario.id),
                data: usuario,
            });
        } else {
            const error = new Error("El password es incorrecto");
            return res.status(401).json({ msg: error.message });
        }
    }
    if (!usuario) {
        const error = new Error("El Usuario no existe");
        return res.status(401).json({ msg: error.message });

    }

}

export { login,  registrarUsuario } 