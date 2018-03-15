import { connect } from 'dva';
import NS from '../constants/namespace';
import ACTIONS from '../constants/actions/testPage';
import { mapDispatchToProps, mapStateToProps } from '../utils/mapProps';
import styles from './TestPage.scss';

const TestPage = ({ text, dispatch }) => {
    const handleButtonClick = () => {
        dispatch({ type: ACTIONS.UPDATE_STATE, payload: { text: 2 } })
    };
    const handleOtherBtnClick = () => {
        dispatch({ type: ACTIONS.GO_HOME, payload: { text: 3 } });
    };
    return (
        <div className={styles.text}>
            Test Page {text}
            <button onClick={handleButtonClick}>Click Me</button>
            <button onClick={handleOtherBtnClick}>Click Me</button>
        </div>
    );
};

export default connect(
    mapStateToProps(NS.TEST_PAGE),
    mapDispatchToProps(NS.TEST_PAGE)
)(TestPage);