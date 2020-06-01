import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MenuList from '../components/menuList';
// import Lists from '.';
import 'antd/dist/antd.css';
class IndexPage extends React.Component {
  render() {
    const { lists, dispatch } = this.props;
    return (
      <div className={styles.normal} >
        <h1 className={styles.title}>Welcome to info-water!</h1>
        <div className={styles.welcome} />
        <div className={styles.list}>
          <MenuList dispatch={dispatch} list={lists.lists} />
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    lists: state.list
  };
};

export default connect(mapState)(IndexPage);
