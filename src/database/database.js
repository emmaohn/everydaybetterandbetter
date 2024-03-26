const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {

  // ... you will write your Prisma Client queries here
  // const allBlogs = await prisma.user.findMany()
  // console.log(allBlogs)

  // const allAccounts = await prisma.user.findMany()
  // console.log(allAccounts)
  
}

export async function getAllBlogs() {
  const blogs = await prisma.blog.findMany();
  return blogs;
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

main()
  .then(async () => {
    await prisma.$disconnect()
  })

  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })