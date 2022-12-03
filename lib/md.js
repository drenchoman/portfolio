// import fs from 'fs'
// import path from 'path'
// import matter from 'gray-matter'


// export const getPath = (folder) => {
//   return path.join(process.cwd(), `/${folder}`)
// }

// export const getFileContant = (filename, folder) => {
//   const POSTS_PATH = getPath(folder)
//   console.log(POSTS_PATH);
//   return fs.readFileSync(path.join(POSTS_PATH, filename), "utf8");

// };

// export const getAllPosts = (folder) => {
//   const POSTS_PATH = getPath(folder)
//   console.log(POSTS_PATH);
//   return fs
//     .readdirSync(POSTS_PATH) // get files in directory
//     .filter((path) => /\\.md?$/.test(path)) // only .md files
//     .map((fileName) => { // map over each file
//   const source = getFileContent(fileName, folder); // retrieve the file contents
  
//   const slug = fileName.replace(/\\.md?$/, ""); 
//   console.log(slug);// get the slug from the filename
//   const { data } = matter(source); // extract frontmatter
//   console.log(data);
//   console.log('hello');
//   return {
//     frontmatter: data,
//     slug: slug,
//     };
//   });
// };

// export const getAllPublished = (folder) => {
//   const posts = getAllPosts(folder)
  
//   const published = posts.filter((post) => {
//     return post.frontmatter.isPublished === true
//   })
//   return published
// }

// export const getSinglePost = (slug, folder) => {
//   const source = getFileContent(`${slug}.md`, folder);
//   const {data: frontmatter, content} = matter(source)
//   return {
//     frontmatter,
//     content
//   };
// };