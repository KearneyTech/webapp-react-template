import React, { Component, FC } from 'react';

interface DynamicComponentProps {
    component: FC<any>;
    props?: any;
}

const DynamicComponent: FC<DynamicComponentProps> = ({component: Component, props}) => {
    return <Component {...props} />;
};

export default DynamicComponent;
