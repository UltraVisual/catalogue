const contentData = [
  {
    title: 'Your mum',
    image: 'http://via.placeholder.com/350x150',
    link: '/detail/your-mum'
  },
  {
    title: 'Your gran',
    image: 'http://via.placeholder.com/350x150',
    link: '/detail/your-gran'
  },
  {
    title: 'Your sister',
    image: 'http://via.placeholder.com/350x150',
    link: '/detail/your-sister'
  }
]

const singleData = (link) => {
  return contentData.filter((data) => data.link.includes(link))[0]
}

export default {
  getData: () => contentData,
  getSingleData: link => singleData(link)
}
