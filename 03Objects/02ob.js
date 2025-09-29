const aise=new Object()
aise.id=1233;
aise.name="g";
aise.isLoggedIn=false;

// console.log(aise);

const regular_user={
    email:"garvg3412$@gmail.com",
    fullname:{
        userfullname:{
            first:"garv",
            second:"gang"
        }
    }
}
console.log(regular_user.fullname.userfullname.first)
// when fetching from api willues the above statement like given below
console.log(regular_user.fullname?.userfullname.first)

const obj1={'1':'a','2':'b'};
const obj2={'3':'a','4':'b'};
const obj3={'4':'a','5':'b'};
// industry standard way for assigning different objects in one object
const obj4 =Object.assign({},obj1,obj2,obj3); // {}-> is target 
console.log(obj4)

const user=[
    {
        id:1,
        email:"garvgang2031@gmail.com",
    },
    {
        id:2,
        email:"sidyuwv2031@gmail.com",
    },
    {
        id:3,
        email:"cegyfkgk@gmail.com",
    },
    {
        id:4,
        email:"2cveyclq1@gmail.com",
    }
]
console.log(user[1].email)
console.log(Object.keys(user))
