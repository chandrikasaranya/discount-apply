// if statement...
/*
num=prompt("enter any number")
if(num%2==0){
    document.write("even");
}
else{
    document.write("odd");
}
*/

// if ele if..
/*
time=prompt("enter time in 24 hr formate")
if(time<12){
    document.write("its morning");
}
else if(time<=16){
    document.write("its afternoon");
}
else if(time<+18){
    document.write("its evening");
}
else{
    document.write("its night");
}
*/

/*
amt=prompt("enter amt");
if(amt>=5000){
    dis=amt*0.2;
    document.write("amount is :"+(amt-dis));
}
else if(amt>=1000){
    dis=amt*0.15;
    document.write("amount is :"+(amt-dis));
}
else{
    document.write("amount is :"+amt);
}
*/

//amazon gift card,coupon card ,wallet..

let wallet=1000;
let coupon=300;
let giftcard=200;
total=wallet+coupon+giftcard;
purchaseamount=prompt("enter some amount");
if(purchaseamount>total){
    document.write("needed amount from bank balance ="+(purchaseamount-total)+"<br/>");

   }
else if(purchaseamount<total){
    if(purchaseamount<=wallet){
        dis=purchaseamount*0.5;
        document.write("....>50% dicount occurs if purchased through wallet ; need to pay only"+(purchaseamount-dis)+"<br/>");
        if((purchaseamount-dis)>wallet){
        if((purchaseamount-dis)<=coupon)
        {
            
            document.write("* no dicount occurs if remaining amount is from coupon; need to pay only"+(coupon-(purchaseamount-dis))+"<br/>");
            }
           if((purchaseamount-dis)<=giftcard){
            document.write("* no dicount occurs  if remaining amount from gift card; need to pay only"+(giftcard-(purchaseamount-dis))+"<br/>");
                   }        
        }
    }
}
    if(purchaseamount<=coupon){
        dis=purchaseamount*0.8;
        document.write("....>80% dicount occurs if pay through coupon; need to pay only"+(purchaseamount-dis)+"<br/>");
        if((purchaseamount-dis)>coupon){
        if((purchaseamount-dis)<=giftcard){
        document.write(" *no dicount occurs ; need to pay only"+(giftcard-(purchaseamount-dis))+"<br/>");
        }
      }
    }
      if(purchaseamount<=giftcard){
        dis=purchaseamount*0.1;
        document.write(".....>10% dicount occurs if pay through giftcard; need to pay only"+(purchaseamount-dis)+"<br/>");
       }
    
