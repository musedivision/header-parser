function parse(req){

  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  if (ip.substr(0, 7) == "::ffff:") {
    ip = ip.substr(7)
  }
  var language = req.headers["accept-language"].split(',')[0]

  var useragent = req.headers["user-agent"].split(' ')
  var OS = useragent.slice(1,4).join(' ').replace(/[()]/g,"")

  var reply = {
    ipaddress: ip,
    language: language,
    OS: OS
  }

  return reply
}

module.exports = parse
