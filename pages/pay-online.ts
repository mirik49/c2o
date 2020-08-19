import {connect} from 'react-redux';
import {setActionData} from "../js/store/index/actions";
import PayOnline from "../js/components/index/PayOnline";

const mapDispatchToProps = {
    setActionData
};
export default connect(state=>state, mapDispatchToProps)(PayOnline);
