const express = require("express");
function cal(n) {
    let ans = 0;
    for (let i = 0; i <= n; i++) {
        ans += i;
    }
    return ans;
}
const app = express();
app.get("/", function(req, res) {
    const n = req.query.n;
    const ans = cal(n);
    res.send(ans.toString());
});
app.listen(4001, () => {
    console.log("Server is running on port 4001");
});
