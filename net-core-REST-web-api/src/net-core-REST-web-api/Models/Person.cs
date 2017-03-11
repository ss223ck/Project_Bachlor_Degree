using System;
using System.Collections.Generic;

namespace net_core_REST_web_api.Models
{
    public partial class Person
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PersonalNumber { get; set; }
        public string PhoneNumber { get; set; }
    }
}
