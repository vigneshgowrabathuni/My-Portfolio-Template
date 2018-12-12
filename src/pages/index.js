import React from 'react'
import { Container, Card, CardText, CardBody, CardTitle, CardSubtitle, Jumbotron, Button } from 'reactstrap'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.filter(post => !post.node.frontmatter.hidden && post.node.frontmatter.contentType === 'blog')
  return (
    <Layout>
      {/* <Container> */}
        {/* {posts.map(({ node: post }) => (
          <Card style={{marginBottom: 10}} key={post.id}>
            <CardBody>
              <CardTitle><Link to={post.frontmatter.path}>{post.frontmatter.title}</Link></CardTitle>
              <CardSubtitle style={{marginBottom: 10}}>{post.frontmatter.date}</CardSubtitle>
              <CardText>{post.excerpt}</CardText>
            </CardBody>
          </Card>
        ))} */}
        <Jumbotron>
        <h1 className="display-3 text-center">Hi! I'M VIGNESH</h1>
        
      </Jumbotron>
      {/* </Container> */}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            contentType
            date(formatString: "MMMM DD, YYYY")
            path
            hidden
          }
        }
      }
    }
  }
`
