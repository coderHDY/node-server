const express = require("express");
const router = express.Router();
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

// 支持 String, Int, Float, Boolean, ID, [String], 以及自定义类型
const schema = buildSchema(`
    type TypeBooks {
        name: String,
        desc: String,
        comments: [String]
    }
    type Query {
        hello: String,
        getName: String,
        getAge: Int,
        getAllNames: [String],
        Book: TypeBooks
    }
`);
const root = {
    hello: async () => new Promise(res => setTimeout(() => res("hehehehehe"), 1000)),
    getName: () => "你好呀 HDY",
    getAge: () => 18,
    getAllNames: () => ["hdy", "张三", "李四"],
    Book: () => ({
        name: "炸裂志",
        desc: "好看的书",
        comments: ["1233", "3423ERQW4"]
    })
}


router.get("/", async (req, res) => {
    try {
        console.log("api get /ghql")
        res.send({ msg: "ghql suggess" });
    } catch (err) {
        res.send({ err });
    }
});

router.use("/ql", graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}))

module.exports = router