import {connect} from 'react-redux';
import DepartmentSearch from "../components/department/DepartmentSearch";
import {setActionData} from "../store/index/actions";

const mapDispatchToProps = {
    setActionData,
};
export default connect(state=>state, mapDispatchToProps)(DepartmentSearch);
