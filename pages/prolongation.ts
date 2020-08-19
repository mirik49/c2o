import {connect} from 'react-redux';
import {initFullPay, setActionData} from "../js/store/index/actions";
import Prolongation from "../js/components/index/Prolongation";

const mapDispatchToProps = {
    setActionData,
    initFullPay
};
export default connect(state=>state, mapDispatchToProps)(Prolongation);
