import "../../sass/login.scss";
import Footer from "../../components/Footer";
const Register = () => {
  return (
    <>
      <div className="register-form">
        <h2 className="text-[32px] font-bold uppercase ">Register</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="form-group">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Register;
