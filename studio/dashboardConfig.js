export default {
  widgets: [
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
                  buildHookId: '5ebeece711c8e0cce026d6d0',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-2aq5n2og',
                  apiId: '388e1a24-ca1e-401f-a4a1-1562e8e97e69'
                },
                {
                  buildHookId: '5ebeece75ae70a83ed859cb3',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-w6rvdgx8',
                  apiId: '1a35d304-35c0-415b-9011-18cbfaa393a3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bomobeon/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-w6rvdgx8.netlify.app', category: 'apps'}
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
