import styled from 'styled-components';

const Styles = styled.div`
    .container {
        margin-bottom: 1.5rem;
    }

    .container > :last-child {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
`;

export default Styles;
