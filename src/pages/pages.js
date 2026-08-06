import React from "react"
import { graphql } from "gatsby"
import PageLink from "../components/page-link"
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';

const IndexPage = ({
  data: {
    allMdx: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date && edge.node.frontmatter.type === "page") // You can filter your posts based on some criteria
    .map(edge => <PageLink key={edge.node.id} page={edge.node} />)
  return (

  <Layout title="All Pages">
      {Posts}
      </Layout>
      ) 
}
export default IndexPage
export const pageQuery = graphql`
  query {
    allMdx(sort: { frontmatter: { title: ASC } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            permalink
            title
            type
          }
        }
      }
    }
  }
`