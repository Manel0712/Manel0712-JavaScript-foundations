/*
    What would each of these lines of code do:

    1. true && console.log("moo");
    2. false && console.log("moo moo?")
    3. true || console.log("hello friend");
    4. false || console.log("bye friend");

    Once you see the results, write in a comment why it works that way
*/
true && console.log("moo");
/*In this case, the console.log is executed
because the statement on the left is true
and the condition is &&(i).*/

false && console.log("moo moo?");
/*In this case, the console.log is not executed
because the statement on the left is false
and the condition is &&(i).*/

true || console.log("hello friend");
/*In this case, the console.log is not executed
because the statement on the left is true
and the condition is ||(o), so there is no need
to check the statement on the right.*/

false || console.log("bye friend");
/*In this case, the console.log is executed
because the statement on the left is false
and the condition is ||(o), so it is necessary
to check the statement on the right.*/
