import PostDetails from "./PostDetails";
import withLoadingScreen from './../../HOC/withLoadingScreen';
import { MyInstagramLoader } from './../../helpers/loader';

export default withLoadingScreen(PostDetails, MyInstagramLoader)