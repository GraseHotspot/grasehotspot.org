import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';

const IndexPage = ({
  data: {
    allMdx: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date && edge.node.frontmatter.type === "post") // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (

  <Layout title="Blog Posts">
      {Posts}
      </Layout>
      ) 
}
export default IndexPage
export const pageQuery = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
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