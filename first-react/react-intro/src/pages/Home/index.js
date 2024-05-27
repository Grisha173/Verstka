import React from 'react';
import Picture from '../../components/Picture';
import Concerts from '../../components/Concerts';
import News_and_reviews from '../../components/News_and_reviews';
import Short_announce from '../../components/Short_announce';

const Home = () => (
    <React.Fragment>
        <Picture />
        <Concerts />
        <News_and_reviews />
        <Short_announce />
    </React.Fragment>
);

export default Home;
