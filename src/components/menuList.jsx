import React from 'react';
import { List, Divider, Col, Row } from 'antd';
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
    render() {
        const { list } = this.props;

        return (
            <div>
                <Row>
                    <Col span={12} offset={6}>
                        <Divider orientation="left">目录列表：</Divider>
                        <List
                            bordered
                            dataSource={list}
                            renderItem={item => (
                                <List.Item>
                                    <a href={item.href} rel="noreferrer" target="_blank">{item.title}</a>
                                    <List.Item.Meta description={item.description} />
                                </List.Item>
                            )}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}
