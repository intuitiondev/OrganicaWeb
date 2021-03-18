import styled from 'styled-components';

const HoverMenu = styled.p`
    color: darkgrey;
    font-size: 1.1rem;
    padding: 5px 0.5rem 7px 0.5rem;

    &:hover {
        color: rgb(99, 169, 142);
        border-bottom: solid 2px rgb(99, 169, 142);
        padding-top: 5px;
        padding-bottom: 5px;
    }
`;

export default HoverMenu;