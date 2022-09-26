
import './App.css';
import Card from"./Card";
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const data= [
    {
      name:"free",
      price:0,
      period:"month",
      features:[
        {
          title:"single user",
          isEnable:true
        },
        {
          title:"5GB Storage",
          isEnable:true
        },
        {
          title:"Unlimited Public Projects",
          isEnable:true
        },
       
        {
          title:"Community Access",
          isEnable:true
        },
        {
          title:"Unlimited Private Projects",
          isEnable:false
        },
        {
          title:"Dedicated Phone Support",
          isEnable:false
        },
        {
          title:"Free Subdomain",
          isEnable:false
        },
        {
          title:"Monthly Status Reports",
          isEnable:false
        },
      ],
    },
    {
      name:"plus",
      price:9,
      period:"month",
      features:[
        {
          title:"5 users",
          isEnable:true
        },
        {
          title:"50GB Storage",
          isEnable:true
        },
        {
          title:"Unlimited Public Projects",
          isEnable:true
        },
       
        {
          title:"Community Access",
          isEnable:true
        },
        {
          title:"Unlimited Private Projects",
          isEnable:true
        },
        {
          title:"Dedicated Phone Support",
          isEnable:true
        },
        {
          title:"Free Subdomain",
          isEnable:true
        },
        {
          title:"Monthly Status Reports",
          isEnable:false
        },
      ],
    },
    {
      name:"pro",
      price:49,
      period:"month",
      features:[
        {
          title:"unlimited users",
          isEnable:true
        },
        {
          title:"150GB Storage",
          isEnable:true
        },
        {
          title:"Unlimited Public Projects",
          isEnable:true
        },
       
        {
          title:"Community Access",
          isEnable:true
        },
        {
          title:"Unlimited Private Projects",
          isEnable:true
        },
        {
          title:"Dedicated Phone Support",
          isEnable:true
        },
        {
          title:" unlimited Free Subdomain",
          isEnable:true
        },
        {
          title:"Monthly Status Reports",
          isEnable:true
        },
      ],
    },
    
  ];
  console.log(data);
  return (
<section class="pricing py-5">
  <div class="container">
    <div class="row">
      {data.map((item) =>{
        return <Card item={item}></Card>
      })}
      
          </div>
    </div>
    </section>
  );
}

export default App;
