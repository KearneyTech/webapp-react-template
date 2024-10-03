import React, { Component, FC } from 'react';

interface DynamicComponentProps {
    component: FC<any>;
    handleSubmit: Function;
}

const DynamicComponent: FC<DynamicComponentProps> = ({component: Component, handleSubmit }) => {
    return <Component handleSubmit={handleSubmit} />;
};

export default DynamicComponent;
