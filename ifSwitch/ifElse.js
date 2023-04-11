var score = "80"
if (score >= 90)  // score가 90 이상
                {grade = "A";}
             else if (score >= 80)  // 80이상 90 미만
                {grade = "B";}
             else if (score >= 70)  // 70이상 80 미만
                {grade = "C";}
             else if (score >= 60)  // 60이상 70 미만
                {grade = "D";}
             else  // 60미만
                {grade = "F";}
console.log(`${score} 는 ${grade} 입니다`)