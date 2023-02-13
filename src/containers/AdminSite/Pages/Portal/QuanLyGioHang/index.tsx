import React, { useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { connect } from "react-redux";
import { InitState } from './InitState';
import { Actions } from './Action';
import { Reducer } from './Reducer';
import ACard from 'components/ACard';
import gioHangListViewJson from './ListView.json';
import CDynamicButton from 'components/CDynamicButton';
import CDynamicTable from 'components/CDynamicTable';
interface Props {

}

const GioHangList = (props: Props) => {  
    const [state, dispatch] = useReducer(Reducer, InitState);
    const gioHangListView:any = gioHangListViewJson;    
    const refDynamicTable = useRef<any>();
    useEffect(() => {        
        Actions.GetItems(dispatch); 
    }, [])
    const ActionEvents = {

    }
    let ButtonGroupsRender = () => {
        return <CDynamicButton actionDefs={gioHangListView.DataGrid.ActionDefs} actions={ActionEvents} />;
    }    
    return(
        <ACard title={gioHangListView.DataGrid.Title} buttonGroups={ButtonGroupsRender()}>
            <CDynamicTable 
                ref={refDynamicTable}
                id={gioHangListView.DataGrid.Key} 
                key={gioHangListView.DataGrid.Key} 
                columnDefs={gioHangListView.DataGrid.ColumnDefs} 
                dataItems={state.DataItems}            
            />
        </ACard>
    )
}
const mapState = ({ ...state }) => ({

});
const mapDispatchToProps = {
  
};

export default connect(mapState, mapDispatchToProps)(GioHangList);