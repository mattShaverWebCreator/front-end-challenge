import styled from 'styled-components';

export const ComparisonSelectionGroup = styled.div`
    display: grid;
`;

export const ComparisonSelectionTitle = styled.h3`
    color: #034ac1;
    font-weight: 700;
    font-size: 1.3rem;
    border-top: 1px solid #8080727d;
    border-right: 1px solid #8080727d;
    margin-bottom: 0;
    padding: 2rem 0 1rem 0;
`;

export const ComparisonSelectionDescriberTitle = styled.li`
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 0;
    border-bottom: 1px solid #8080727d;
    list-style: none; 
    padding-top: 1rem;
    padding-bottom: 0.3rem;
`; 

export const ComparisonSelectionItem = styled.span`
`;

export const ComparisonSelectionDescribers = styled.div`
`;

export const ComparisonSelectionDescriber = styled.ul`
    font-size: 0.9rem;
    font-weight: 500;
    color: #808072; 
    border-bottom: 1px solid #8080727d;
    border-right: 1px solid #8080727d;
    padding-left: 0;
    margin-top: 0;
`;

export const ComparisonProducts = styled.section`
    display: inline-grid;
    grid-auto-flow: column; 
    margin-top: 7.3rem;
    border-top: 1px solid #c1c1ba;
    @media(min-width: 768px) and (max-width: 991px) {
        margin-top: 0;
    }
    @media(max-width:767px) {
        grid-auto-flow: row;
    }
`;

export const ComparisonQuantity = styled.section`
`

export const ComparisonTitle = styled.h3`
    color: #034ac1;
    font-weight: 700;
    font-size: 1.9rem;
`;

export const ComparisonSelection = styled.section`
    display: inline-grid; 
    @media(min-width: 768px) and (max-width: 991px) {
        display: none;
    }
`;

export const ComparisonContainer = styled.main`
    display: grid;
    grid-auto-flow: column; 
    border-bottom: 0.5rem solid #034ac1;
    padding-bottom: 0 0 0 0.9rem;
`;

