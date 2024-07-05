import { Component } from "react";
import NavBarLog from "./NavBarLog";


 class About extends Component{
    render(){
    return(
        <div>
            <NavBarLog/>
          <section class="about">
              <h3 class='one'>We should put into consideration that online shopping has become one of the most important things in the technology era. Online shopping is a process in the form of electronic commerce which allows consumers to buy goods and services over the internet using a browser.</h3>
              <h3 class='two'>There are many advantages of online shopping,it saves time With just a couple of clicks of the mouse, you can purchase your shopping orders and instantly move to other important things.
              It is save energy, It is very stressful to shop from one location and transfer to another location. In online shopping, you do not need to waste your energy when buying.</h3>
              <h3 class='three'>Comparison of price, search engine in online shopping websites allows you to easily check prices and compare with just a few clicks. This gives you the freedom to determine which online store offers the most affordable item you are going to buy.It is available in any time. Online shopping stores are open round the clock.</h3>
              <h3 class="four"> The idea of shopping online is cutting down those bad habits of standing in a long line and just waiting.Online shopping does not require physical cash and you can make payments through your credit cards although you have an option of cash on delivery.</h3>
          </section>
        </div>
    )
    }
}
export default About;