import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import { AlignLeft, Box, Share2, User, Command } from "@styled-icons/feather";
import styled from "styled-components";

export interface SidebarProps {
    size?: number;
}

export const StyledAppBar = styled.div`
    display: flex;
    flex-direction: column;
    border-right: 1px solid ${(props) => props.theme.colors.border};
`;

const StyledAppBarItem = styled(NavLink)`
    width: 50px;
    height: 50px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-decoration: none;

    :hover {
        color: ${(props) => props.theme.colors.primary};
    }
`;

const TopItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const CenterItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex: 1;
`;

const BottomItemsContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    flex: 1;
`;

const Sidebar: FC<SidebarProps> = () => {
    return (
        <StyledAppBar>
            <TopItemsContainer>
                <StyledAppBarItem to="/attributes">
                    <Command size={30} />
                </StyledAppBarItem>
            </TopItemsContainer>
            <CenterItemsContainer>
                <StyledAppBarItem to="/attributes">
                    <AlignLeft size={21} />
                </StyledAppBarItem>
                <StyledAppBarItem to="/3d">
                    <Box size={21} />
                </StyledAppBarItem>
                <StyledAppBarItem to="/rulesEngine">
                    <Share2 size={21} />
                </StyledAppBarItem>
            </CenterItemsContainer>
            <BottomItemsContainer>
                <StyledAppBarItem to="/rulesEngine">
                    <User size={30} />
                </StyledAppBarItem>
            </BottomItemsContainer>
        </StyledAppBar>
    );
};

export default Sidebar;
