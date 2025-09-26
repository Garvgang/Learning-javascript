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
