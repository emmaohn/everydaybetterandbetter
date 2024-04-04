const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// async function main() {
  
// }

// returns all blogs and all keywords associated
export async function getAllBlogs() {
  const blogs = await prisma.blog.findMany({
    include: {
      blog_keyword: true,
    },
    // where: { blog_is_published: true },
    orderBy: { blog_created: 'desc' }
  });
  return blogs;
}

// returns all keyword in alphebetical order
export async function getAllKeywords() {
  const blogs = await prisma.keyword.findMany({
    orderBy: { keyword: 'desc' }
  });
  return blogs;
}

// returns a single blog
export async function getBlogById(blogId) {
  const blog = await prisma.blog.findUnique({
    where: { blog_id: blogId }
  });
  return blog;
}

// NOTES

  // CREATE
  // table.create

  // READ
  // table.findMany()
  // table.findFrist()
  // table.findUnique({ where: {id : 1}, ... })

  // UPDATE
  // table.update({ where: { email : {Contains: 'hello'} }, ... })
  // table.updateMany()

  // UPSERT 
  // update if exists, create if not
  // table.upsert()

  // DELETE
  // table.delete()
  // table.deleteMany()

  // run MULTIPLE 'queries'
  // const deletePosts = table.deleteMany()
  // const deleteUser = table.delete()
  // const transaction = await $transaction([deletePosts, deleteUser])

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })

//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })