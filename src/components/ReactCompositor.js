import React,{Component,PropTypes} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as testActions from './../actions/testActions';
import logo from './../img/welcome.png';
import './../styles/main.scss';

class ReactCompositor extends Component {

/**
 *
 * @param props
 */
    constructor(props) {
    super(props);
    this._initReactCompositor();
    this.state = {};
}

/**
 *
 * @private
 */
    _initReactCompositor() {
    //bind custom function here
}

/**
 * Life Cycle function - componentWillMount
 */
    componentWillMount() {
}

/**
 * Life Cycle function - componentDidMount
 */
    componentDidMount() {
}

/**
 * Life Cycle function - componentWillReceiveProps
 * @param newProps
 */
    componentWillReceiveProps(newProps) {
}

/**
 * Life Cycle function - shouldComponentUpdate
 * @param newProps
 * @param newState
 * @returns {boolean}
 */
    shouldComponentUpdate(newProps, newState) {
    return true;
}

/**
 * Life Cycle function - componentWillUpdate
 * @param nextProps
 * @param nextState
 */
    componentWillUpdate(nextProps, nextState) {
}

/**
 * Life Cycle function - componentDidUpdate
 * @param prevProps
 * @param prevState
 */
    componentDidUpdate(prevProps, prevState) {
}

/**
 * Life Cycle function - componentWillUnmount
 */
    componentWillUnmount() {
}

/**
 * Life Cycle function - render
 * @returns {XML}
 */
    render() {
    return (
    
            <div className="pe-container">
                <div className="pe-row">
                    <img src={logo} alt=""/>
                    <h1>
                        Welcome to React + Redux Starter Kit
                    </h1>
                    <p>Powered with UX-Framework (Pearson)</p>
                </div>
            </div>
            
    );
    }
    }

/**
 *
 * @type {{}}
 */
ReactCompositor.propTypes = {};

/**
 *
 * @type {{}}
 */
ReactCompositor.defaultProps = {};

/**
 *
 * @param state
 * @returns {{state: *}}
 */
function mapStateToProps(state) {
    return {
    state: state,
    message:state.testObj
};
}

/**
 *
 * @param dispatch
 * @returns {{actions: *}}
 */
function mapDispatchToProps(dispatch) {
    return {
    actions: bindActionCreators(testActions, dispatch)
};
}

export default connect(mapStateToProps, mapDispatchToProps)(
ReactCompositor);