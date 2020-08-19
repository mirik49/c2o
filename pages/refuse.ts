import {connect} from 'react-redux';
import Refuse from "../js/components/index/Refuse";
import {setActionData} from "../js/store/index/actions";

const mapDispatchToProps = {
    setActionData,
};
export default connect(state=>state, mapDispatchToProps)(Refuse);
