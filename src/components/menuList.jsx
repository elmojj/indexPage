import React from 'react';
import { List, Col, Row, Tabs, Checkbox } from 'antd';

import * as api from '../services/example';

export default class MenuList extends React.Component {
    componentDidMount() {
        api.getList().then((res) => {
            const currentList = res.data;
            this.props.dispatch({
                type: 'list/updateList',
                payload: currentList
            });
        });
    }
    callback(key) {
        console.log(key);
    }
    render() {

        const { list } = this.props;
        console.log(this.props);

        const { TabPane } = Tabs;
        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="目录列表" key="1">
                        <Row>
                            <Col span={12} offset={6}>
                                <List
                                    dataSource={list.index}
                                    renderItem={item => (
                                        <List.Item>
                                            <a href={item.href} rel="noreferrer" target="_blank">{item.title}</a>
                                            <List.Item.Meta description={item.description} />
                                        </List.Item>
                                    )}
                                />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="待测试项" key="2">
                        {/* todo List */}
                        <Row>
                            <Col span={12} offset={6}>
                                <List
                                    bordered
                                    dataSource={list.testList}
                                    renderItem={item => (
                                        <List.Item>
                                            <Checkbox>{item.item}</Checkbox>
                                        </List.Item>
                                    )}
                                />
                            </Col>
                        </Row>
                    </TabPane>
                </Tabs>

            </div>
        );
    }
}
