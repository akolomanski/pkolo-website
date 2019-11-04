const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const workTemplate = path.resolve(`src/templates/workTemplate.js`)
  
  const worksQuery = await graphql(`
    {
    pkolocms{
        works: worksConnection(first: 100) {
              edges {
                node {
                  status
                  updatedAt
                  createdAt
                  id
                  name
                  description
                  photos {
                    status
                    updatedAt
                    createdAt
                    id
                    url
                    handle
                    fileName
                    height
                    width
                    size
                    mimeType
                  }
                  thumbnail{
                    url
                  }
                  slug
                }
              }
            }
            
          
          
    }}
  `);

    
   
   worksQuery.data.pkolocms.works.edges.forEach(work => {
       createPage({
           path: work.node.slug,
           component: workTemplate,
           context: {
               data: work.node,
           }
       })
   });
   
  }
