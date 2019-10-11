const hist = (histval) => (
    {
        type: "hist",
        histval
    }
)

const add = (val1, val2) => (
    //console.log(val1),
   // console.log(val2),
    {
        type: "add",
        val1,
        val2
    }
)

const sub = (val1, val2) => (
  //  console.log(val1),
   // console.log(val2),
    {
        type: "sub",
        val1,
        val2
    }
)

const mul = (val1, val2) => (
   // console.log(val1),
    //console.log(val2),
    {
        type: "mul",
        val1,
        val2
    }
)

const div = (val1, val2) => (
   /// console.log(val1),
    //console.log(val2),
    {
        type: "div",
        val1,
        val2
    }
)
export { add, sub, mul, div, hist }