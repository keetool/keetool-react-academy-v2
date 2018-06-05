import 'rc-drawer-menu/assets/index.css';
import React from 'react';
import DrawerMenu from 'rc-drawer-menu';
import SiderMenu from './SiderMenu';

const SiderMenuWrapper = props =>
    props.isMobile ? (
        <DrawerMenu
            getContainer={null}
            level={null}
            handleChild={false}
            open={!props.collapsed}
            onMaskClick={() => {
                props.onCollapse(true);
            }}
        >
            <SiderMenu {...props} collapsed={props.isMobile ? false : props.collapsed}/>
        </DrawerMenu>
    ) : (
        <SiderMenu {...props} />
    );

export default SiderMenuWrapper;
