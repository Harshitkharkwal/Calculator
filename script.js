let a=document.getElementById("ac")
let b=document.getElementById("main")
let c=document.getElementById("7")
let d=document.getElementById("8")
let e=document.getElementById("e")
let f=document.getElementById("9")
let g=document.getElementById("1")
let h=document.getElementById("2")
let i=document.getElementById("3")
let j=document.getElementById("4")
let k=document.getElementById("5")
let l=document.getElementById("6")
let m=document.getElementById("0")
let n=document.getElementById("00")
let o=document.getElementById(".")
let p=document.getElementById("/")
let q=document.getElementById("-")
let r=document.getElementById("+")
let s=document.getElementById("X")
let t=document.getElementById("square")
let u=document.getElementById("backspace")
let v=document.getElementById("des")
let w=document.getElementById("h1")



// let a=document.getElementById("ac")
a.addEventListener("click",function(){
    b.value=""

})
c.addEventListener("click",function(){
    b.value+="7"
    

})
d.addEventListener("click",function(){
    b.value+="8"
    

})
b.addEventListener("click",function(){
    const m=b.value
   
})
e.addEventListener("click",function(){
    b.value=eval((b.value))
})

f.addEventListener("click",function(){
    b.value+="9"
})
g.addEventListener("click",function(){
    b.value+="1"
})
h.addEventListener("click",function(){
    b.value+="2"
})
i.addEventListener("click",function(){
    b.value+="3"
})
j.addEventListener("click",function(){
    b.value+="4"
})
k.addEventListener("click",function(){
    b.value+="5"
})
l.addEventListener("click",function(){
    b.value+="6"
})
m.addEventListener("click",function(){
    
        if(b.value!=0)
        {
            b.value+="0"
        }
        
  
    
})
n.addEventListener("click",function(){
    b.value+="**(-1)"

    
})
o.addEventListener("click",function(){
    b.value+="."
})
p.addEventListener("click",function(){
    b.value+="/"
})
q.addEventListener("click",function(){
    b.value+="-"
})
r.addEventListener("click",function(){
    b.value+="+"
})
s.addEventListener("click",function(){
    b.value+="*"
})
t.addEventListener("click",function(){
    b.value+="**(1/2)"
})
u.addEventListener("click",function(){
   

    b.value=b.value.substring(0,b.value.length-1) //backspace button created using this logic!!
    
})
v.addEventListener("click",function(){
    w.textContent="Hi, I am a calculator designed by @Harshit_Kharkwal"
    

})
