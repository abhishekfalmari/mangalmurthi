const codeLength = 6
function genUserId() {
    var orgCode = (Math.random() * Date.now()).toString(36).replace(".", "").substring(0, codeLength);
    return orgCode;
}
module.exports = {
    genCode: genCode
}