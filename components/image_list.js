import React, { Component } from 'react';
import {
    ListView,
    View
} from 'react-native';
import ImageListItem from './image_list_item';

export default class ImageList extends Component{
    constructor(props){
        super(props);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !== r2
        });


        this.state = {
            dataSource: ds.cloneWithRows(props.items)
        };
    }

    render(){
        //const { items } = this.props;
        const items = this.props.items;
        //array
        const listItems = items.map((item) => {
            return 
        });
        return (
            <ListView 
                dataSource={this.state.dataSource }
                renderRow={item => <ImageListItem item={item} key={item.id}/>}
            />
        );
    }
}