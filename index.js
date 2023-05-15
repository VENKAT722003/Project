function result(){
    
    let search = document.getElementById("search-input").value
    const searchEl=['payment','ravi','buvi','mani','murali'];

    if(searchEl.includes(search)){
        
        alert (`You found ${search} :)`)

    }else{
        
        alert('not found :(')
    }alert
}

  

var condition = 0
   function output(){
        let handbookEl = document.getElementById("hand-book")
      
            if(condition === 0){
            message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. ';

            document.getElementById("my-button").innerHTML = "Next";
          
            }else if(condition === 1){
                message = 'just keeps going and going -- an error message to make the Energizer bunny blush (right through those Schwarzenegger shades)! Where was I? Oh yes, you\'ve got an error and all the extraneous whitespace is just gravy.  Have a nice day.';

                document.getElementById("my-button").innerHTML = "Next";

            }else if (condition === 2 ){
                message = 'those Schwarzenegger shades)! Where was I? Oh yes, you\'ve got an error and all the extraneous whitespace is ' +
                'just gravy.  Have a nice day.';

                document.getElementById("my-button").innerHTML = "Next";
            }
            else{
                message ='No more paragraph'
                document.getElementById("my-button").innerHTML  = "Again Over here";
                condition = -1;
            }
        
        handbookEl.textContent =message
        condition++
}


function buttonclick(){
    
        const windowName = 'example-popup';
        const windowFeatures = 'width=600,height=400';
        const windowContent = `
          <html>
            <head>
              <title>About the Handbook</title>
            </head>
            <body>
              <h1>About the Handbook</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. 
              At risus viverra adipiscing at. Non blandit massa enim nec. 
              Molestie a iaculis at erat pellentesque adipiscing commodo elit. 
              Faucibus purus in massa tempor. Pharetra pharetra massa massa ultricies 
              mi quis hendrerit dolor. Dolor sed viverra ipsum nunc aliquet. 
              Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. 
              Sit amet justo donec enim. Fringilla est ullamcorper eget nulla. 
              Dignissim suspendisse in est ante in nibh mauris cursus. In fermentum et sollicitudin ac orci phasellus egestas.
              <br>
             <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. 
              At risus viverra adipiscing at. Non blandit massa enim nec. 
              Molestie a iaculis at erat pellentesque adipiscing commodo elit. 
              Faucibus purus in massa tempor. Pharetra pharetra massa massa ultricies 
              mi quis hendrerit dolor. Dolor sed viverra ipsum nunc aliquet. 
              Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. 
              Sit amet justo donec enim. Fringilla est ullamcorper eget nulla. 
              Dignissim suspendisse in est ante in nibh mauris cursus. In fermentum et sollicitudin ac orci phasellus egestas.
              <br>
              <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. 
              At risus viverra adipiscing at. Non blandit massa enim nec. 
              Molestie a iaculis at erat pellentesque adipiscing commodo elit. 
              Faucibus purus in massa tempor. Pharetra pharetra massa massa ultricies 
              mi quis hendrerit dolor. Dolor sed viverra ipsum nunc aliquet. 
              Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. 
              Sit amet justo donec enim. Fringilla est ullamcorper eget nulla. 
              Dignissim suspendisse in est ante in nibh mauris cursus. In fermentum et sollicitudin ac orci phasellus egestas.
              
              
              </p>
            </body>
          </html>
        `;
        const newWindow = window.open('', windowName, windowFeatures);
        newWindow.document.write(windowContent);
  }



function image(){
    let img = document.getElementById("img1");
        console.log("img")
    
      const mySrc = img.getAttribute("src");
    
    //  var condition = true
      if (mySrc == "images/header.png") {
       img.setAttribute("src", "images/ca1.png");
        // alert("hi")

      } else {
        
        img.setAttribute("src","images/header.png" );
       
    };
}

     
 
   
// function Dynamicload(){

//     console.log("message")
//         let firstcontentEl = document.getElementById("First-content");
        
//         console.log(firstcontentEl)
//         // let titlecontentEl = document.getElementById("title1-content");
   
//         const Content_str =[
//             {
//                 // "title":"Diversity",
//                 "cont1":`Employee Handbook Acknowledgment and Receipt
//                          Americans with Disabilities Act
//                          Anti-harassment Policy and Complaint Procedure
//                          Equal Employment Opportunity Statement`
//             },{

//                 "cont2":`Employee Handbook Acknowledgment and Receipt
//                          Americans with Disabilities Act
//                          Anti-harassment Policy and Complaint Procedure
//                          Equal Employment Opportunity Statement`
//             }
//         ];

//         console.log(Content_str)

//         let ran = Math.floor(Math.random() * Content_str.length-1) +1
//         const randomObj = Content_str[ran]; 

//         const keyName = Object.keys(randomObj);
//         console.log(keyName)


//         for (let i= 0 ; i > randomObj.length ; i++ ){
//             console.log(i)
//             let listItem = document.createElement("li");
//             listItem.textContent= randomObj[keyName];
//             console.log(listItem);
//             firstcontentEl.appendChild(listItem);
        

//         // firstcontentEl.textContent = count1
//         // console.log(Content_str)
//         }
        
//     }

window.onload = function() {
    Dynamicload1();
    Dynamicload2();
};

function Dynamicload1(){

    let data1 = [

            "Employee Handbook Acknowledgment and Receipt", 
            "Americans with Disabilities Act", 
            "Anti-harassment Policy and Complaint Procedure", 
            "Equal Employment Opportunity Statement"

    ],

    data2 = [

            "Employee Travel and Reimbursement", 
            "On-Call Pay", 
            "Overtime Pay", 
            "Meal/Rest Periods",
            "Time Reporting",
            "Payment of Wages",
            "Performance and Salary Review",
                
            
            ],

   data3 = [
    
             "Separation of Employment", 
            "Progressive Discipline", 
            "Nepotism, Employment of Relatives and Personal Relationships", 
            "Internal Transfers/Promotions",
            "Time Reporting",
            "Background and Reference Checks",
            "Employee Classification Categories"
            
                
            ],

   data4 = [
    
            "Smoke-Free Workplace", 
            "Safety", 
            "Violence in the Workplace", 
            "Wokplace Bullying",
            "Drug-Free Workplace"
                    
            ];

                
	let list1 = document.getElementById("myList1");
    let list2 = document.getElementById("myList2");
    let list3 = document.getElementById("myList3");
    let list4 = document.getElementById("myList4");
	
	data1.forEach((item) => {
	let li = document.createElement("li");
	li.innerText = item;
	list1.appendChild(li);
    

	});

    data2.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list2.appendChild(li);
        
    });

    data3.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list3.appendChild(li);
            
    });

    data4.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list4.appendChild(li);
                
    });
                 

}



 function Dynamicload2(){
        const data5 =[
          {
            icon: 'images/kp-1.png',
            title: 'Alexis Fox',
            description:`CEO`
          }, 
          {
            icon: 'images/kp-1.png',
            title: 'Alexis Fox',
            description:`CEO`
          }, 
          {
            icon: 'images/kp-1.png',
            title: 'Alexis Fox',
            description:`CEO`
          }, 
        ];

        let container = document.getElementById("container");

        data5.forEach(item => {
            
          let card = document.createElement("div");
          let image = document.createElement("img");
          let title = document.createElement("h3");
          let role = document.createElement("p");
            console.log(card)
        

          image.setAttribute("src", item.icon);
          title.innerText = item.title;
          role.innerText = item.description;
          
          card.appendChild(image);
          card.appendChild(title);
          card.appendChild(role);
          container.appendChild(card);

          console.log("test",item.title,item.icon,item.description);
        });
        
}
    


    
      