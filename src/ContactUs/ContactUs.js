import React, { Component } from 'react';
const v =  <h1> Hi Mukesh </h1> ;

export default class ContactUs extends Component {
	
	getHtml = () =>{
		return  (`<h1 > Contact us </h1>
	
  <h2>We love hearing from our customers, partners, and friends.</h2>
 	
	  
	<b>Headquarters</b>  
	201 S. Capitol Ave
Suite 1100
Indianapolis, IN 46225
Tel: (888) 680-SaaS (7227)
Tel: (317) 378-7300
Fax: (317) 378-7340

<b>San Francisco Office</b>
760 Market Street
11th Floor
San Francisco, CA 94102
Tel: (415) 663-4433

<b>UK Office</b>
23 Hanover Square
London W1S 1JB
England
Tel: +44 (0) 2037058544

<b>India Office</b>
Fourth Floor – B1 Tower
Mahindra World City
Jaipur 302 037, Rajasthan
India
Tel: +91-141-7103000

<b>Japan Office</b>
METLIFE Aoyama Building 8F,
2-11-16 Minamiaoyama
Minato-ku, Tokyo 107 0062
Japan
Tel: +81-3-6447-0340 

<b>Ireland Office</b> 
92-93 St Stephen’s Green,
Dublin 2, Ireland
Tel: +353 1 902 22141`);
	}






	render() {
		return(


 <pre>{this.getHtml()} </pre>
  
  

		);
	}
}