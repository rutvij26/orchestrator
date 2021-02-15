import React, { FC } from "react";
import styled from "styled-components";

export const StyledTitle = styled.div`
    color: ${(props) => props.theme.colors.primary};
    font-size: 30px;
    margin: 20px;
`;

const Attributes: FC = () => {
    return (
        <div>
            <StyledTitle> Attribute Rendered!</StyledTitle>
        </div>
    );
};

export default Attributes;
