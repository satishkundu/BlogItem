// Write your JS code here
const BlogItem = props => {
  const {BlogDetails} = props
  const {title, description, publishDate} = BlogDetails

  return (
    <li>
      <div>
        <h1>{title}</h1>
        <p>{publishDate}</p>
      </div>
      <p>{description}</p>
    </li>
  )
}
export default BlogItem
