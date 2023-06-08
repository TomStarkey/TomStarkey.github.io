function reveal(question_num, file_name)
{
    if (revealed === 0){
    pic = file_name
    revealed = 1
    console.log(pic)
    }
    else {
    pic = "question_mark.png"
    revealed = 0 
    console.log("Not the pic")
    }
    document.getElementById(question_num).src = pic
}
let revealed = 0