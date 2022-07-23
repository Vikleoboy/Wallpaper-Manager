import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import Col from "../Pages/Col";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Col">
                <Col/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;