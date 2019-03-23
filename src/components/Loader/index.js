import React from 'react';
import {
    Wrapper,
    Skeleton,
    Content
} from './style';

const Loader = () => {
    return (
        <Wrapper>
            <Skeleton marginRight={10} marginTop={8} width={10} height={60} />
            <Skeleton borderRadius={48} marginLeft={10} marginRight={10} marginTop={8} width={5} height={60} />
            <Content>
                <Skeleton marginTop={8} width={40} height={15} />
                <Skeleton marginTop={8} width={30} height={15} />
                <Skeleton marginTop={8} width={20} height={15} />
            </Content>
        </Wrapper>
    );
};

export default Loader;
