import User from "./User";
import withLoadingScreen from '../../HOC/withLoadingScreen';
import { MyLoader } from "../../helpers/loader";

export default withLoadingScreen(User, MyLoader);