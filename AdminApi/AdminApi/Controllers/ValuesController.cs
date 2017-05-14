using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Newtonsoft.Json;

namespace AdminApi.Controllers
{

//    POST /api/values/login HTTP/1.1
//Host: localhost:28940
//Content-Type: application/json
//Cache-Control: no-cache
//Postman-Token: 69eff262-8743-8d99-c500-125080a88340

//{"username":"Andrew","password":"Lock"}

    public class ServerInfo
    {
        public string serverId { get; set; }
        public string serverName { get; set; }
        public bool isActive { get; set; }
        public string region { get; set; }
    }

    public class AuthentificationToken {
        public string userName { get; set; }
        public string user { get; set; }
        public List<string> roles { get; set; }
        public string sessionId { get; set; }
        public string error { get; set; }
    }

    public class Credentials
    {
        public string UserName { get; set; }

        public string Password { get; set; }
    }

    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ValuesController : ApiController
    {
        // GET api/values
        public IEnumerable<ServerInfo> Get()
        {
           // return new string[] { "value1", "value2" };
            return new ServerInfo[]
            {
                new ServerInfo
                {
                    serverId = "server11",
                    serverName = "http://server11:8019",
                    isActive = true,
                    region = "Emea"
                },
                new ServerInfo
                {
                    serverId = "server22",
                    serverName = "http://server22:8080",
                    isActive = false,
                    region = "Us"
                }
            };
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        [Route("api/values/login/")]
        [HttpPost]
        public AuthentificationToken Login(Credentials credentials)
        {
            var token = new AuthentificationToken
            {
                userName = credentials.UserName,
                user = "Milan Milas",
                roles = new List<string> {"Admin", "PowerUser"},
                sessionId = "1122334455",
                error = null
            };

            return token;
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
