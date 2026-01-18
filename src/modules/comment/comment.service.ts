import { prisma } from "../../lib/prisma";

const createComment = async (payload:{
    content:string;
    authorId:string;
    postId:string;
    parentId?:string;
}) => {
    console.log("create a comment",payload);
    return await prisma.comment.create({
        data:payload
    })
}

export const commentService = {
    createComment
}