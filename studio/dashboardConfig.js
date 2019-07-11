export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d2774c945b96c018ce27048',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-z791jehv',
                  apiId: '166e4800-4a5f-4449-90e1-0f9f5e497161'
                },
                {
                  buildHookId: '5d2774ca45b96c0183e27036',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-gwbots2f',
                  apiId: '343811a7-160f-4e88-8ab1-8efe44cc3f40'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brasilikum/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-gwbots2f.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
