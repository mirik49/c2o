import {connect} from 'react-redux';
import {setActionData} from "../store/index/actions";
import Menu from "../components/index/Menu";

const mapDispatchToProps = {
    setActionData
};
export default connect(state=>state, mapDispatchToProps)(Menu);
