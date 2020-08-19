import {connect} from 'react-redux';
import {setActionData} from "../js/store/index/actions";
import Department from "../js/components/department/Department";

const mapDispatchToProps = {
    setActionData,
};
export default connect(state=>state, mapDispatchToProps)(Department);
