function btnsubmit(){
    var marks=0
    var rightAnswer1=document.Javascript_Test_1.qn1.value
    var rightAnswer2=document.Javascript_Test_1.qn2.value
    var rightAnswer3=d3cument.Javascript_Test_1.qn3.value
    var rightAnswer4=document.Javascript_Test_1.qn4.value
    var rightAnswer5=document.Javascript_Test_1.qn5.value
    var rightAnswer6=document.Javascript_Test_1.qn6.value
    var rightAnswer7=document.Javascript_Test_1.qn7.value
    var rightAnswer8=document.Javascript_Test_1.qn8.value
    var rightAnswer9=document.Javascript_Test_1.qn9.value
    var rightAnswer10=document.Javascript_Test_1.qn10.value;

    if (rightAnswer1=="C. Division by zero"){marks++};
    if (rightAnswer2=="A. Object Oriented"){marks++};
    if (rightAnswer3=="D. Immediate if"){marks++};
    if (rightAnswer4=="B. Block that combines a number of statements into a single compound statement"){marks++};
    if (rightAnswer5=="D. Ignores the statemt"){marks++};
    if (rightAnswer6=="C. Declaration statements"){marks++};
    if (rightAnswer7=="B. The local element"){marks++};
    if (rightAnswer8=="D. Function/method"){marks++};
    if (rightAnswer9=="A. Mutable variable"){marks++};
    if (rightAnswer10=="C. Displays Infinity"){marks++}

    document.write(marks)

}