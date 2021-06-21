import React from 'react';
import Layout from 'components/layout/layout';
import PersonContainer from 'components/person/person-container';

const AllPage = () => (
  <Layout>
    <PersonContainer uploadStatus="uploaded-without-face" searchStatus="not-found" />
    <PersonContainer uploadStatus="empty" searchStatus="wait" />
    <PersonContainer uploadStatus="uploaded" searchStatus="found" />
    <PersonContainer uploadStatus="uploaded" searchStatus="not-found" />
  </Layout>
);

export default AllPage;
