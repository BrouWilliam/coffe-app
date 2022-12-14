import styled from "styled-components";

export const Container = styled.div`
    max-width: 1140px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media screen and (max-width: 1200px) {
        max-width: 1140px;
    }

    @media screen and (max-width: 992px) {
        max-width: 960px;
    }

    @media screen and (max-width: 768px) {
        max-width: 720px;
    }

    @media screen and (max-width: 576px) {
        max-width: 540px;
    }
`